// Portfolio projects.
// To add a project, copy one { ... } block below, paste it at the end of the list, and fill it in.
// Each card on portfolio.html is built from this list; clicking a card opens a popup with its links.
//
//   title:   name shown under the photo and at the top of the popup
//   image:   photo file in the homepage folder, or a web address of an image
//            (leave it out and the card shows the project name on a blue tile instead)
//   alt:     short description of what the photo shows (read aloud by screen readers)
//   summary: a sentence or two about the project, shown in the popup
//   links:   buttons in the popup; add as many as you like, e.g. GitHub, demo video, write-up

// The thumbnail YouTube shows for a video, given the id after "watch?v=" in its address
const youtubeThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const PROJECTS = [
    {
        title: "SNSAid: Special-Needs Student Assistance Integrated Desk Solution",
        image: youtubeThumb("eNt-pka8Yj4"),
        alt: "Video thumbnail for the SNSAid desk project",
        summary: "An integrated desk solution designed to assist special-needs students in the classroom.",
        links: [
            { label: "Watch the video", url: "https://www.youtube.com/watch?v=eNt-pka8Yj4" },
            { label: "Project write-up", url: "https://docs.google.com/document/d/1v8_ww-zK8qo814aF7FZv85sBj_ppYeQQVkUGvX29HAw/edit?usp=sharing" },
        ],
    },
    {
        title: "AI-Powered Crop Monitoring Drone for Small-Farm Sustainability",
        image: "image_3.JPG",
        alt: "Drone built by Maxim",
        summary: "A drone that uses AI to monitor crops, helping small farms work more sustainably.",
        links: [
            { label: "Watch the video", url: "https://www.youtube.com/watch?v=EFv29nz96WM" },
            { label: "Code on GitHub", url: "https://github.com/jaromero3rd/audio_signaling" },
        ],
    },
    {
        title: "Stimming Headphones",
        image: youtubeThumb("_wweQ2zdDoo"),
        alt: "Video thumbnail for the stimming headphones project",
        summary: "Assistive headphones that combine noise canceling with song playing.",
        links: [
            { label: "Watch the video", url: "https://www.youtube.com/watch?v=_wweQ2zdDoo" },
            { label: "Project page", url: "https://sites.google.com/view/beaver-works-assistive-tech/showcase/2025-projects-section/160-the-dolphins" },
        ],
    },
    {
        title: "Kitchen Cabinet Safety & Deterrence Device",
        image: "Kitchen-Cabinet-Project.jpg",
        alt: "Kitchen Cabinet Safety & Deterrence Device",
        summary: "An assistive device that keeps kitchen cabinets safe and deters access to them.",
        links: [
            { label: "Project page", url: "https://sites.google.com/view/beaver-works-assistive-tech/showcase/2024-projects-section/2024-project-page-the-dolphins" },
        ],
    },
    {
        title: "SeaPerch GoldBot",
        image: "SeaPerch.jpg",
        alt: "Seaperch Competition Medals Photo",
        summary: "We 3D designed a submersible outfitted with electronics that let us control its motors through a wired controller. " +
            "This fully functional submersible took on underwater obstacle and retrieval tasks, earning 1st place in the pool challenge " +
            "and 2nd place overall at the New Jersey SeaPerch Competition.",
        links: [
            { label: "Project write-up", url: "https://docs.google.com/document/d/1hVE-YLqsZPjV8Ecgi_1TS3FZDwq-B315PYw8gRAgHjs/edit?usp=sharing" },
        ],
    },
];

(function () {
    const grid = document.getElementById("portfolio-grid");
    const modalEl = document.getElementById("project-modal");
    if (!grid || !modalEl) return;

    const modal = new bootstrap.Modal(modalEl);
    const modalTitle = document.getElementById("project-modal-title");
    const modalImage = document.getElementById("project-modal-image");
    const modalSummary = document.getElementById("project-modal-summary");
    const modalLinks = document.getElementById("project-modal-links");

    function openProject(project) {
        modalTitle.textContent = project.title;
        modalImage.hidden = !project.image;
        modalImage.src = project.image || "";
        modalImage.alt = project.alt || "";
        modalSummary.textContent = project.summary;

        modalLinks.replaceChildren();
        for (const link of project.links) {
            const a = document.createElement("a");
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className = "project-link";
            a.textContent = link.label;
            // tell screen reader users the link opens a new tab
            const note = document.createElement("span");
            note.className = "visually-hidden";
            note.textContent = " (opens in a new tab)";
            a.append(note);
            modalLinks.append(a);
        }
        modal.show();
    }

    // Build one card per project. Each card is a real <button>, so it works with a mouse,
    // keyboard (Tab + Enter/Space) and screen readers.
    for (const project of PROJECTS) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.className = "project-card";
        button.setAttribute("aria-haspopup", "dialog");

        let img;
        if (project.image) {
            img = document.createElement("img");
            img.src = project.image;
            img.alt = project.alt || "";
            img.loading = "lazy";
        } else {
            // No photo yet: a blue tile with the project name (decorative; the title below is what's read aloud)
            img = document.createElement("span");
            img.className = "project-card-placeholder";
            img.setAttribute("aria-hidden", "true");
            img.textContent = project.title;
        }

        const caption = document.createElement("span");
        caption.className = "project-card-title";
        caption.textContent = project.title;

        const hint = document.createElement("span");
        hint.className = "project-card-hint";
        hint.textContent = "View project links →";

        button.append(img, caption, hint);
        button.addEventListener("click", () => openProject(project));
        li.append(button);
        grid.append(li);
    }
})();
