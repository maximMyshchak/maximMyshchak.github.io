// "Ask about Max" AI assistant widget.
// The browser never sees the OpenAI key: it sends the conversation to the Flask server (app.py),
// which adds the key and calls OpenAI.

(function () {
    // When the site is served by Flask, the API is on the same origin, so this stays "".
    // If the pages are hosted on GitHub Pages and Flask runs elsewhere (e.g. Render),
    // set this to that server's URL, e.g. "https://maxim-chat.onrender.com".
    const API_BASE = "";
    const MAX_LENGTH = 1000;

    const history = []; // [{role: "user" | "assistant", content: "..."}]
    let lastFocused = null;

    function el(tag, attrs, text) {
        const node = document.createElement(tag);
        for (const [key, value] of Object.entries(attrs || {})) node.setAttribute(key, value);
        if (text) node.textContent = text;
        return node;
    }

    // ---- Build the widget ----
    const toggle = el("button", {
        type: "button",
        class: "chat-toggle",
        "aria-expanded": "false",
        "aria-controls": "chat-panel",
    }, "Ask about Max");

    const panel = el("section", {
        id: "chat-panel",
        class: "chat-panel",
        role: "dialog",
        "aria-labelledby": "chat-title",
        hidden: "",
    });

    const head = el("div", { class: "chat-head" });
    head.append(
        el("h2", { id: "chat-title" }, "Ask about Max"),
        el("button", { type: "button", class: "chat-close", "aria-label": "Close chat" }, "×")
    );

    const intro = el("p", { class: "chat-note" },
        "An AI assistant that answers questions about Max's background and projects. It can make mistakes; for anything important, use the Contact page.");

    // role="log" + aria-live tells screen readers to read new messages as they arrive
    const log = el("div", { class: "chat-log", role: "log", "aria-live": "polite", tabindex: "0", "aria-label": "Conversation" });

    const form = el("form", { class: "chat-form" });
    const label = el("label", { for: "chat-input", class: "visually-hidden" }, "Your question");
    const input = el("textarea", {
        id: "chat-input",
        rows: "2",
        maxlength: String(MAX_LENGTH),
        placeholder: "e.g. What projects has Max worked on?",
        required: "",
    });
    const send = el("button", { type: "submit" }, "Send");
    form.append(label, input, send);

    panel.append(head, intro, log, form);
    document.body.append(toggle, panel);

    // ---- Open / close ----
    function openChat() {
        lastFocused = document.activeElement;
        panel.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
        input.focus();
    }

    function closeChat() {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        // Return focus to where the user was, so keyboard users don't lose their place
        (lastFocused && lastFocused !== document.body ? lastFocused : toggle).focus();
    }

    toggle.addEventListener("click", () => (panel.hidden ? openChat() : closeChat()));
    head.querySelector(".chat-close").addEventListener("click", closeChat);
    panel.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeChat();
    });

    // Enter sends, Shift+Enter adds a new line
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            form.requestSubmit();
        }
    });

    // ---- Messages ----
    function addMessage(role, text) {
        const msg = el("div", { class: `chat-msg chat-${role}` });
        msg.append(el("span", { class: "visually-hidden" }, role === "user" ? "You said: " : "Assistant: "));
        msg.append(document.createTextNode(text)); // textContent only: never inject model output as HTML
        log.append(msg);
        log.scrollTop = log.scrollHeight;
        return msg;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        addMessage("user", text);
        history.push({ role: "user", content: text });
        input.value = "";
        send.disabled = true;
        const pending = addMessage("assistant", "Thinking…");
        pending.setAttribute("aria-busy", "true");

        try {
            const res = await fetch(API_BASE + "/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: history.slice(-10) }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || "The assistant is unavailable right now.");

            pending.remove();
            addMessage("assistant", data.reply);
            history.push({ role: "assistant", content: data.reply });
        } catch (err) {
            pending.remove();
            history.pop(); // drop the unanswered question so it isn't resent
            addMessage("error", err.message === "Failed to fetch"
                ? "Couldn't reach the assistant. Please try again later."
                : err.message);
        } finally {
            send.disabled = false;
            input.focus();
        }
    });
})();
