// Friendly email checks for the contact form:
//  1. Suggests a fix for common typos (gmial.com -> gmail.com). Never blocks sending.
//  2. Blocks throwaway/disposable inboxes, so Max can actually reply.
// These run in the visitor's browser: they help honest visitors, but they are not a security barrier.

(function () {
    const emailInput = document.querySelector("#email");
    const hint = document.querySelector("#email-hint");
    if (!emailInput || !hint) return;

    // Domains people commonly use (and a few real ones that look like typos, so they aren't "corrected")
    const COMMON_DOMAINS = [
        "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com",
        "live.com", "msn.com", "me.com", "mac.com", "protonmail.com", "proton.me",
        "comcast.net", "verizon.net", "att.net", "mail.com", "ymail.com", "gmx.com",
        "harvard.edu", "college.harvard.edu", "g.harvard.edu", "fas.harvard.edu", "mit.edu",
    ];

    // Mistyped endings -> what was probably meant
    const TLD_FIXES = {
        con: "com", cmo: "com", ocm: "com", vom: "com", xom: "com", cpm: "com", comm: "com",
        nte: "net", ent: "net", ogr: "org", rog: "org", eud: "edu", deu: "edu",
    };

    // Well-known temporary-inbox services (subdomains are matched too)
    const DISPOSABLE_DOMAINS = [
        "mailinator.com", "guerrillamail.com", "guerrillamail.net", "sharklasers.com", "grr.la",
        "10minutemail.com", "10minutemail.net", "temp-mail.org", "temp-mail.io", "tempmail.com",
        "tempmail.net", "throwawaymail.com", "yopmail.com", "yopmail.net", "trashmail.com",
        "getnada.com", "nada.email", "dispostable.com", "maildrop.cc", "mintemail.com",
        "fakeinbox.com", "mailnesia.com", "mohmal.com", "emailondeck.com", "tempinbox.com",
        "burnermail.io", "spamgourmet.com", "mytemp.email", "tempr.email", "discard.email",
        "mailcatch.com", "moakt.com",
    ];

    const DISPOSABLE_MESSAGE =
        "Please use a permanent email address so Max can reply. Temporary inboxes aren't accepted.";

    function getDomain(value) {
        const at = value.lastIndexOf("@");
        return at === -1 ? "" : value.slice(at + 1).toLowerCase();
    }

    function isDisposable(domain) {
        return DISPOSABLE_DOMAINS.some((d) => domain === d || domain.endsWith("." + d));
    }

    // Number of single-letter edits to turn one word into another (Levenshtein distance)
    function editDistance(a, b) {
        const row = Array.from({ length: b.length + 1 }, (_, i) => i);
        for (let i = 1; i <= a.length; i++) {
            let prev = row[0];
            row[0] = i;
            for (let j = 1; j <= b.length; j++) {
                const temp = row[j];
                row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
                prev = temp;
            }
        }
        return row[b.length];
    }

    function suggestDomain(domain) {
        if (COMMON_DOMAINS.includes(domain)) return null;

        // Fix the ending first (gmial.con -> gmial.com), then look for a close common domain
        const parts = domain.split(".");
        const tld = parts.pop();
        const candidate = TLD_FIXES[tld] ? [...parts, TLD_FIXES[tld]].join(".") : domain;

        let best = null;
        let bestDistance = 3; // only suggest when 1-2 letters are off
        for (const common of COMMON_DOMAINS) {
            const d = editDistance(candidate, common);
            if (d < bestDistance) {
                best = common;
                bestDistance = d;
            }
        }
        return best || (candidate !== domain ? candidate : null);
    }

    function clearHint() {
        hint.textContent = "";
        hint.className = "field-hint";
        emailInput.removeAttribute("aria-invalid");
        emailInput.setCustomValidity("");
    }

    function showDisposableError() {
        // setCustomValidity makes the browser refuse to submit, the same way "required" does
        emailInput.setCustomValidity(DISPOSABLE_MESSAGE);
        emailInput.setAttribute("aria-invalid", "true");
        hint.className = "field-hint error";
        hint.textContent = DISPOSABLE_MESSAGE;
    }

    function showSuggestion(suggestedEmail) {
        const strong = document.createElement("strong");
        strong.textContent = suggestedEmail; // textContent only: never insert typed text as HTML

        const button = document.createElement("button");
        button.type = "button";
        button.className = "hint-button";
        button.textContent = `Yes, use ${suggestedEmail}`;
        button.addEventListener("click", () => {
            emailInput.value = suggestedEmail;
            clearHint();
            emailInput.focus();
        });

        hint.className = "field-hint";
        hint.append("Did you mean ", strong, "? ", button);
    }

    function check(withSuggestion) {
        const value = emailInput.value.trim();
        const domain = getDomain(value);
        clearHint();
        if (!domain) return;

        if (isDisposable(domain)) {
            showDisposableError();
            return;
        }
        if (withSuggestion) {
            const suggested = suggestDomain(domain);
            if (suggested) showSuggestion(value.slice(0, value.lastIndexOf("@") + 1) + suggested);
        }
    }

    // While typing: keep the disposable-inbox check current and remove any outdated suggestion
    emailInput.addEventListener("input", () => check(false));
    // When the visitor leaves the field: also look for typos
    emailInput.addEventListener("change", () => check(true));
    // After a message is sent, the form is reset, so clear the hint too
    emailInput.form.addEventListener("reset", clearHint);
})();
