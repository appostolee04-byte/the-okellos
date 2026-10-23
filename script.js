
/* ==========================================
   THE FAMILY WEBSITE
   Individual descriptions for every photo
========================================== */

/* 1. FAMILY MEMBERS */

const familyMembers = [
    {
        name: "Pst. George okello odhiambo",
        role: "father",
        category: "Parents",
        description:
            "Ruath ratego, wuod odhiambo gi nyadenge. A caring and hardworking father who inspires us to keep growing together. In his presence we never lack. He has always inspired our education with real-life talks and advice, mano JOWI.",
        favourite: "Strength, focus, love and guidance",
        photo: [
            "photos/daddy1.jpg",
            "photos/daddy2.jpg"
        ]
    },
    {
        name: "Millicent anyango aduol",
        role: "sole provider",
        category: "Parents",
        description:
            "Mano nyagem thuon ka ji dhi, ka ji duogo, nyar Olwande. A loving presence whose kindness and encouragement help make our family feel like home.",
        favourite: "Care, discipline, kindness and unity",
        photo: [
            "photos/mum1.jpg",
            "photos/mum2.jpg",
            "photos/mum3.jpg"
        ]
    },
    {
        name: "Tony otieno okello",
        role: "brother",
        category: "Siblings",
        description:
            "A Tonn mamba, a teacher by role model and profession, and a friend to people like Mr Ogot and Madam Lilian. A cheerful family member who brings smiles, laughter and fresh energy to our days.",
        favourite: "Laughter and adventure",
        photo: [
            "photos/tony1.jpg",
            "photos/tony2.jpg",
            "photos/tony3.jpg",
            "photos/tony4.jpg"
        ]
    },
    {
        name: "shaddrack Mwanguzi okello - the developer himself",
        role: "second born",
        category: "Siblings",
        description:
            "Always object-oriented and willing to be involved in family growth.",
        favourite:
            "Chicky and obsessed with technology, programming, web development and system design.",
        photo: [
            "photos/shaddy1.jpg",
            "photos/shaddy2.jpg"
        ]
    },
    {
        name: "Gift Jemima Okello",
        role: "big siz",
        category: "Siblings",
        description:
            "A teacher by profession but a radio presenter by nature. Always willing to learn new things and take life's challenges as lessons.",
        favourite:
            "Storytelling and social media, especially Facebook and TikTok.",
        photo: [
            "photos/gift1.jpg",
            "photos/gift2.jpg",
            "photos/gift3.jpg"
        ]
    },
    {
        name: "Prince joseph okello",
        role: "brother",
        category: "Siblings",
        description:
            "As the name suggests, he looks like a prince whose dad is a king. He dreams of becoming a doctor or engineer.",
        favourite:
            "An engineer by profession but a fashion designer by nature.",
        photo: [
            "photos/prince1.jpg",
            "photos/prince2.jpg"
        ]
    },
    {
        name: "Hannah Nyaruoth",
        role: "lastborn",
        category: "Siblings",
        description:
            "Always cheeky, loved by everyone and bringing brightness to the family.",
        favourite: "Her mum",
        photo: [
            "photos/hannah1.jpg",
            "photos/hannah2.jpg",
            "photos/hannah3.jpg"
        ]
    }
];


/* 2. INDIVIDUAL PHOTO TITLES AND DESCRIPTIONS

   Every filename has its own title and description.
   Edit these descriptions to match the actual moment
   shown in each photograph.
*/

const photoDetails = {
    "photos/daddy1.jpg": {
        title: "Dad - Our Family Leader",
        description:
            "A treasured photograph of Dad, whose guidance, strength and dedication mean so much to our family."
    },
    "photos/daddy2.jpg": {
        title: "Dad - A Precious Memory at Tom Mboya University",
        description:
            "Another special memory of our father, celebrating the love and wisdom he brings into our lives."
    },

    "photos/mum1.jpg": {
        title: "Mum - The Heart of Our Family, min ja IT",
        description:
            "A special photograph of Mum, whose care, kindness and sacrifices help keep our family strong."
    },
    "photos/mum2.jpg": {
        title: "Mum - Love and Kindness",
        description:
            "A treasured memory of our wonderful mother and the encouragement she gives to everyone around her."
    },
    "photos/mum3.jpg": {
        title: "Mum - A Beautiful Family Memory",
        description:
            "A personal memory of Mum that we can preserve and look back on with love."
    },

    "photos/tony1.jpg": {
        title: "Tony - A Special Moment",
        description:
            "A treasured photograph of Tony, a brother who brings energy and laughter to our family."
    },
    "photos/tony2.jpg": {
        title: "Tony - Another Family Memory",
        description:
            "A special moment featuring Tony, preserving another chapter of his family story."
    },
    "photos/tony3.jpg": {
        title: "Tony - Memories to Keep",
        description:
            "A photograph to remember and celebrate Tony's place in our family."
    },
    "photos/tony4.jpg": {
        title: "Tony - A Moment Worth Remembering",
        description:
            "Another personal memory of Tony, saved in our family photo collection."
    },

    "photos/shaddy1.jpg": {
        title: "Shaddrack - The Developer",
        description:
            "A personal photograph of Shaddrack, the family member passionate about programming, technology and web development."
    },
    "photos/shaddy2.jpg": {
        title: "Shaddrack - My Journey",
        description:
            "Another treasured memory of Shaddrack, capturing a chapter in his life and journey."
    },

    "photos/gift1.jpg": {
        title: "Gift Jemima - A Special Memory",
        description:
            "A treasured photograph of Gift Jemima, celebrating her place in our family."
    },
    "photos/gift2.jpg": {
        title: "Gift Jemima - Another Chapter",
        description:
            "A personal memory of Gift Jemima, preserved in our family gallery."
    },
    "photos/gift3.jpg": {
        title: "Gift Jemima - Memories Together",
        description:
            "Another special photograph of Gift Jemima, reminding us of the memories we share."
    },

    "photos/prince1.jpg": {
        title: "Prince Joseph - Our Prince",
        description:
            "A treasured photograph of Prince Joseph, whose dreams and ambitions make his story special."
    },
    "photos/prince2.jpg": {
        title: "Prince Joseph - A Precious Memory",
        description:
            "Another personal memory of Prince Joseph, preserved as part of our family's story."
    },

    "photos/hannah1.jpg": {
        title: "Hannah - Our Lastborn",
        description:
            "A lovely family memory of Hannah, our lastborn, who brings joy to the people around her."
    },
    "photos/hannah2.jpg": {
        title: "Hannah - A Special Moment",
        description:
            "Another treasured photograph of Hannah, celebrating her place in our family."
    },
    "photos/hannah3.jpg": {
        title: "Hannah - A Memory to Treasure",
        description:
            "A personal memory of Hannah, kept in our family gallery for years to come."
    }
};


/* 3. FAMILY HISTORY */

const familyHistory = [
    {
        year: "Our Beginnings",
        title: "The Beginning of Our Story",
        description:
            "Every family has a beginning. This is where our shared story, traditions and connections start."
    },
    {
        year: "Growing Together",
        title: "A Family Growing Stronger",
        description:
            "Through everyday life, challenges and achievements, we continue to learn from one another and grow together."
    },
    {
        year: "Our Special Memories",
        title: "Celebrations and Milestones",
        description:
            "Birthdays, reunions, graduations and other important occasions give us memories worth preserving."
    },
    {
        year: "Today and Beyond",
        title: "Building Our Future",
        description:
            "We preserve our history, support the next generation and continue creating new chapters in our family journey."
    }
];


/* 4. CREATE ELEMENTS SAFELY */

function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined && text !== null) {
        element.textContent = text;
    }

    return element;
}


/* 5. BUILD THE COMPLETE PHOTO COLLECTION */

const familyPhotos = familyMembers.flatMap((member) => {
    return member.photo.map((filename) => {
        const details = photoDetails[filename] || {};

        return {
            photo: filename,
            title: details.title || member.name + " - Family Memory",
            description:
                details.description || member.description,
            category: member.category,
            memberName: member.name,
            date: "Family memory"
        };
    });
});


/* 6. DISPLAY FAMILY MEMBERS
   Each member's photos have their own captions.
*/

function renderFamilyMembers() {
    const grid = document.getElementById("memberGrid");

    if (!grid) return;

    grid.replaceChildren();

    familyMembers.forEach((member) => {
        const card = createElement("article", "member-card");
        const imageGallery =
            createElement("div", "member-photo-gallery");

        member.photo.forEach((filename) => {
            const details = photoDetails[filename] || {};

            const figure = createElement("figure", "member-photo-item");

            const image = createElement("img", "member-photo");
            image.src = filename;
            image.alt = details.title || member.name;
            image.loading = "lazy";
            image.decoding = "async";

            image.addEventListener("error", () => {
                console.error("Could not load member photo:", filename);
            });

            const caption = createElement(
                "figcaption",
                "member-photo-caption"
            );

            const title = createElement(
                "h4",
                "photo-caption-title",
                details.title || member.name
            );

            const description = createElement(
                "p",
                "photo-caption-description",
                details.description || member.description
            );

            caption.append(title, description);
            figure.append(image, caption);
            imageGallery.append(figure);
        });

        const info = createElement("div", "member-info");

        const role = createElement(
            "span",
            "member-role",
            member.role
        );

        const name = createElement("h3", "", member.name);

        const description = createElement(
            "p",
            "member-description",
            member.description
        );

        const favourite = createElement(
            "p",
            "member-favourite",
            "💖 " + member.favourite
        );

        info.append(role, name, description, favourite);
        card.append(imageGallery, info);
        grid.append(card);
    });

    const count = document.getElementById("memberCount");

    if (count) {
        count.textContent = familyMembers.length;
    }
}


/* 7. DISPLAY THE PHOTO GALLERY */

let activeCategory = "All";

function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    const searchInput = document.getElementById("gallerySearch");
    const emptyMessage = document.getElementById("emptyMessage");

    if (!grid || !searchInput) return;

    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredPhotos = familyPhotos.filter((photo) => {
        const matchesCategory =
            activeCategory === "All" ||
            photo.category === activeCategory;

        const searchableText = [
            photo.title,
            photo.description,
            photo.category,
            photo.memberName
        ].join(" ").toLowerCase();

        return matchesCategory &&
            searchableText.includes(searchTerm);
    });

    grid.replaceChildren();

    filteredPhotos.forEach((photo) => {
        const card = createElement("article", "gallery-card");

        const imageButton = createElement(
            "button",
            "gallery-image-button"
        );

        imageButton.type = "button";
        imageButton.setAttribute(
            "aria-label",
            "View photo: " + photo.title
        );

        const image = createElement("img", "gallery-image");

        image.src = photo.photo;
        image.alt = photo.title;
        image.loading = "lazy";
        image.decoding = "async";

        image.addEventListener("error", () => {
            console.error("Could not load gallery photo:", photo.photo);
        });

        imageButton.append(image);
        imageButton.addEventListener("click", () => openPhoto(photo));

        const info = createElement("div", "gallery-info");

        const category = createElement(
            "span",
            "gallery-category",
            photo.category
        );

        const title = createElement("h3", "", photo.title);

        const description = createElement(
            "p",
            "gallery-description",
            photo.description
        );

        const owner = createElement(
            "small",
            "gallery-owner",
            "Photo of: " + photo.memberName
        );

        info.append(category, title, description, owner);
        card.append(imageButton, info);
        grid.append(card);
    });

    if (emptyMessage) {
        emptyMessage.hidden = filteredPhotos.length !== 0;

        if (filteredPhotos.length === 0) {
            emptyMessage.textContent =
                "No photos found. Try another search or category.";
        }
    }

    const count = document.getElementById("photoCount");

    if (count) {
        count.textContent = filteredPhotos.length;
    }
}


/* 8. PHOTO VIEWER POPUP */

const photoModal = document.getElementById("photoModal");

function openPhoto(photo) {
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription =
        document.getElementById("modalDescription");
    const modalDate = document.getElementById("modalDate");

    if (!photoModal || !modalImage) return;

    modalImage.src = photo.photo;
    modalImage.alt = photo.title;

    if (modalTitle) {
        modalTitle.textContent = photo.title;
    }

    if (modalDescription) {
        modalDescription.textContent = photo.description;
    }

    if (modalDate) {
        modalDate.textContent =
            photo.memberName + " • " + photo.category;
    }

    if (typeof photoModal.showModal === "function") {
        if (!photoModal.open) {
            photoModal.showModal();
        }
    } else {
        photoModal.style.display = "flex";
    }
}


/* Close the photo popup */

const modalClose = document.getElementById("modalClose");

if (modalClose && photoModal) {
    modalClose.addEventListener("click", () => {
        if (typeof photoModal.close === "function") {
            photoModal.close();
        } else {
            photoModal.style.display = "none";
        }
    });

    photoModal.addEventListener("click", (event) => {
        if (event.target === photoModal) {
            if (typeof photoModal.close === "function") {
                photoModal.close();
            } else {
                photoModal.style.display = "none";
            }
        }
    });
}


/* 9. GALLERY SEARCH */

const gallerySearch = document.getElementById("gallerySearch");

if (gallerySearch) {
    gallerySearch.addEventListener("input", renderGallery);
}


/* 10. GALLERY CATEGORY FILTERS */

document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category || "All";

        document.querySelectorAll(".filter-btn").forEach((item) => {
            const isActive = item === button;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        renderGallery();
    });

    button.setAttribute(
        "aria-pressed",
        String(button.dataset.category === activeCategory)
    );
});


/* 11. FAMILY HISTORY TIMELINE */

function renderFamilyHistory() {
    const timeline = document.getElementById("historyTimeline");

    if (!timeline) return;

    timeline.replaceChildren();

    familyHistory.forEach((event) => {
        const item = createElement("article", "timeline-item");

        const year = createElement(
            "span",
            "timeline-year",
            event.year
        );

        const title = createElement("h3", "", event.title);

        const description = createElement(
            "p",
            "",
            event.description
        );

        item.append(year, title, description);
        timeline.append(item);
    });
}


/* 12. MOBILE NAVIGATION MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";
        });
    });
}


/* 13. FOOTER YEAR */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* 14. START THE WEBSITE */

renderFamilyMembers();
renderGallery();
renderFamilyHistory();

console.log(
    "The Family website loaded successfully.",
    familyMembers.length + " family members,",
    familyPhotos.length + " individual photos."
);
