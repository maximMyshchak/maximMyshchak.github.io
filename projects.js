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
            { label: "Code on GitHub", url: "https://github.com/maximMyshchak/Assistive-Communication-Device---Team160-The-Goldstein-Dolphins-MIT-Cre-at-e-Challenge" },
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
            { label: "CAD / 3D print on Thingiverse", url: "https://www.thingiverse.com/thing:7008327" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1700040-headphones-hollow-bridge-between-ear-cups#profileId-2187495" },
        ],
    },
    {
        title: "Kitchen Cabinet Safety & Deterrence Device",
        image: "Kitchen-Cabinet-Project.jpg",
        alt: "Kitchen Cabinet Safety & Deterrence Device",
        summary: "An assistive device that keeps kitchen cabinets safe and deters access to them.",
        links: [
            { label: "Project page", url: "https://sites.google.com/view/beaver-works-assistive-tech/showcase/2024-projects-section/2024-project-page-the-dolphins" },
            { label: "CAD / 3D print on Thingiverse", url: "https://www.thingiverse.com/thing:6729676" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699950-mit-cre-at-e-challenge-prototype-housing" },
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

// Open-source CAD / 3D-print designs, shown in their own section below the projects.
// Same format as PROJECTS above. Add  group: "bpl",  to put a design in the
// Brooklyn Public Library subsection instead of the main list.
const PRINTS = [
    {
        title: "Ukrainian Tryzub Keychain (Custom Names)",
        image: "https://cdn.thingiverse.com/assets/d1/89/c2/6f/a9/new_image.webp",
        alt: "Ukrainian tryzub keychain with a name engraved in Ukrainian",
        summary: "A Ukrainian tryzub keychain with custom names engraved in Ukrainian.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6725258" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/832023-ukraine-tryzub-keychain-scale-80-in-slicer#profileId-2187664" },
        ],
    },
    {
        title: "Stimming Headphones (CAD / 3D Print)",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/10/b9/ed/92/73/Screenshot_2025-04-12_162108.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "CAD model of the stimming headphones parts",
        summary: "The open-source CAD model and 3D-printable parts for my Stimming Headphones project.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:7008327" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1700040-headphones-hollow-bridge-between-ear-cups#profileId-2187495" },
        ],
    },
    {
        title: "Laser-Engraved Christmas Tree Display Stand",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/03/21/f4/27/38/1725415713813_1.jpg&w=1024&h=1024&fit=inside&n=-1",
        alt: "Laser-engraved Christmas tree display stand",
        summary: "A laser-engraved Christmas tree decoration on a display stand, shared as a blank so anyone can add their own name.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:7121591" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1711960-tree-display-stand-w-o-name-christmas-decor" },
        ],
    },
    {
        title: "Bookmark with Embossed Name",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/d9/dd/07/5a/c0/Screenshot_2025-08-07_164741.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of a bookmark with an embossed name",
        summary: "A 3D-printable bookmark with a name embossed on it. Message me on Thingiverse for free custom text.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:7112272" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699991-book-mark-dm-for-custom-text-for-free" },
            { label: "Visit Open-Source page (MakerWorld) – Galesville Public Library version", url: "https://makerworld.com/en/models/2135713-galesville-public-library-book-mark#profileId-2313140" },
        ],
    },
    {
        title: "Ukrainian Keychain (Laser Cut)",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/56/60/c8/e0/82/large_display_Untitled.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "Design for a Ukrainian keychain",
        summary: "A Ukrainian-themed keychain design made for laser cutting.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:7112264" },
        ],
    },
    {
        title: "Laser Holder",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/33/1b/67/90/7a/Screenshot_2025-04-18_190323.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the laser holder housing",
        summary: "A 3D-printed housing that automatically keeps a laser turned on while it sits inside.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:7014220" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1700023-laser-holder-automatically-keeps-laser-turned-on" },
        ],
    },
    {
        title: "Weight Holder for Science Olympiad Air Trajectory",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/12/58/56/39/5f/Screenshot_2025-04-18_182448.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the weight holder",
        summary: "A weight holder with a 2-inch diameter hole, built for my Science Olympiad Air Trajectory event prototype.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:7014210" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699996-weight-holder-2in-diameter-for-scioly" },
        ],
    },
    {
        title: "Brooklyn Public Library Keychain",
        group: "bpl",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/e6/7f/4a/89/6e/IMG_0545.JPG&w=1024&h=1024&fit=inside&n=-1",
        alt: "Brooklyn Public Library keychain",
        summary: "A keychain featuring the Brooklyn Public Library (BPL).",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6973128" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699932-bklyn-public-library-keychain-bpl-tpu" },
        ],
    },
    {
        title: "LEGO Axle Adapter",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/13/38/8c/f6/74/Screenshot_2025-03-06_184331.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the LEGO axle adapter",
        summary: "An adapter for LEGO axles that works for all kinds of uses.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6971071" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1700013-axle-adapter-for-ego-wheels-accessories" },
        ],
    },
    {
        title: "Integral Decoration & Stand",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/e4/f2/c0/ca/b6/IMG_9979.jpeg&w=1024&h=1024&fit=inside&n=-1",
        alt: "Integral sign decoration on a stand",
        summary: "An integral-sign decoration that works as a Christmas ornament, a standing decoration, a sign holder stand or a phone stand.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6892320" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/935794-integral-decoration-christmas-ornament-stand" },
        ],
    },
    {
        title: "Egg Drop Project (AP Physics C)",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/68/79/c1/2f/b5/IMG_9575.jpeg&w=1024&h=1024&fit=inside&n=-1",
        alt: "Egg drop device",
        summary: "An egg drop device for AP Physics C, rated for drops of about 20 feet (suitable for second-story or in-class drops).",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6843672" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699987-egg-drop-project-rated-for-20-ft" },
            { label: "Watch the video", url: "egg-drop.mp4" },
        ],
    },
    {
        title: "Customizable Spinner Toy",
        group: "bpl",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/80/c0/32/f0/d4/Screenshot_2024-11-23_194857.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the spinner toy",
        summary: "A customizable 3D-printable spinner toy.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6843661" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699903-spinner-toy" },
        ],
    },
    {
        title: "Wooden Standing Desk for a Router Machine",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/e8/a3/4a/91/8f/Screenshot_2024-11-17_000743.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "CAD model of the wooden standing desk",
        summary: "A wooden standing desk designed to hold a router machine.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6834822" },
            { label: "Read the news article", url: "https://www.makersmakingchange.com/news/makerspace-nyc-camp-participants-design-standing-desk-assistive-technology-solut-MCQTWUGB7UQNCXBKQMTNZYQQ6DDQ" },
        ],
    },
    {
        title: "2-Inch PVC Endcap",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/8f/1c/67/ac/f7/2-_PVC_Endcap.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of a 2-inch PVC endcap",
        summary: "A 3D-printable endcap for 2-inch PVC pipe.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6834803" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699975-2-inch-pvc-endcap" },
        ],
    },
    {
        title: "Bike Handle with Max Design",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/61/17/ae/ca/1d/Screenshot_2024-11-16_222535.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the bike handle with a Max design",
        summary: "A bike handle with my \"Max\" design imprinted on it.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6834742" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699973-bike-handle-with-max-imprinted-design-tpu" },
        ],
    },
    {
        title: "Dolphin Keychain (Science Olympiad)",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/31/9e/82/cd/90/LMGHS_SCIOLY_6_in_Regionals_Dolphin_Keychain.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "Dolphin keychain design for Leon M. Goldstein High School Science Olympiad",
        summary: "A custom dolphin keychain made for the Leon M. Goldstein High School Science Olympiad team.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6834729" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/834842-dolphin-keychain" },
        ],
    },
    {
        title: "Brooklyn Public Library Anniversary Cupcake",
        group: "bpl",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/5d/e3/24/c3/46/IMG_9683.JPG&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D-printed cupcake for the Brooklyn Public Library anniversary",
        summary: "A 3D-printed cupcake made for the Brooklyn Public Library's anniversary.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6825829" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699938-brooklyn-public-library-cupcake-anniversary" },
        ],
    },
    {
        title: "Tryzub-Max Dog Tag / Keychain",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/4a/ab/30/c7/7a/d3a71c98-5f49-4a9c-a51f-7e4f2c95e8f8.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the Tryzub-Max dog tag",
        summary: "A dog tag or keychain featuring the Ukrainian tryzub and my name.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6741488" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699907-tryzub-max-dogtag-keychain" },
        ],
    },
    {
        title: "MIT Cre[at]e Challenge Prototype Housing",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/81/2c/48/3f/17/70b8ab3c-450c-494c-924a-04a7b214d816.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the prototype housing",
        summary: "The 3D-printed housing for my MIT Cre[at]e Challenge prototype, the Kitchen Cabinet Safety & Deterrence Device.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6729676" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699950-mit-cre-at-e-challenge-prototype-housing" },
        ],
    },
    {
        title: "Book Display Stand (Brooklyn Public Library)",
        group: "bpl",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/bd/6f/37/3e/8a/58b67e2a-6770-4075-9ee3-0a0907f11ec3.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the book display stand",
        summary: "A book stand for displays with a customizable distance, featuring the Brooklyn Public Library.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6731843" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699898-book-display-stand-distance-customizable-bpl" },
        ],
    },
    {
        title: "Book Display Stand (Blank)",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/bd/6f/37/3e/8a/58b67e2a-6770-4075-9ee3-0a0907f11ec3.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the book display stand",
        summary: "A book stand for displays with a customizable distance.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6731843" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699898-book-display-stand-distance-customizable-bpl" },
        ],
    },
    {
        title: "Max Chocolate Mold",
        image: "https://resize.thingiverse.com/?url=https://cdn.thingiverse.com/assets/51/c2/2a/a6/5b/8606a458-5445-41c2-b00c-84487a71303b.png&w=1024&h=1024&fit=inside&n=-1",
        alt: "3D model of the chocolate mold",
        summary: "A chocolate mold featuring the Ukrainian tryzub and the NYC Makerspace logo.",
        links: [
            { label: "Visit Open-Source page (Thingiverse)", url: "https://www.thingiverse.com/thing:6729609" },
            { label: "Visit Open-Source page (MakerWorld)", url: "https://makerworld.com/en/models/1699947-chocolate-mold-max-w-ukrainian-tryzub" },
        ],
    },
];

(function () {
    const modalEl = document.getElementById("project-modal");
    if (!modalEl) return;

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
    function buildGrid(gridId, items) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    for (const project of items) {
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
    }

    buildGrid("portfolio-grid", PROJECTS);
    buildGrid("prints-grid", PRINTS.filter((p) => !p.group));
    buildGrid("bpl-grid", PRINTS.filter((p) => p.group === "bpl"));
})();
