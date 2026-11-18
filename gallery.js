
/* ==================================================
   FARAHVERSE
   VISUAL DIARY
   INTERACTIVE GALLERY SYSTEM
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. MOVING STAR SYSTEM
    ============================================== */

    const starField =
        document.getElementById("galleryStarField");


    if (starField) {

        for (let i = 0; i < 65; i++) {

            const star = document.createElement("span");

            star.className = "gallery-star-particle";

            star.textContent =
                Math.random() > 0.7 ? "✦" : "·";


            star.style.left =
                Math.random() * 100 + "%";


            star.style.top =
                Math.random() * 100 + "%";


            star.style.fontSize =
                (Math.random() * 9 + 3) + "px";


            star.style.animationDelay =
                Math.random() * 4 + "s";


            star.style.animationDuration =
                (Math.random() * 3 + 2) + "s";


            starField.appendChild(star);

        }

    }



    /* ==============================================
       02. MALAYSIA LIVE CLOCK
    ============================================== */

    const galleryClock =
        document.getElementById("galleryClock");

    const galleryDate =
        document.getElementById("galleryDate");

    const galleryGreeting =
        document.getElementById("galleryGreeting");

    const clockGreeting =
        document.getElementById("galleryClockGreeting");


    function updateGalleryClock() {

        const now = new Date();


        const date = new Intl.DateTimeFormat("en-MY", {

            timeZone: "Asia/Kuala_Lumpur",

            weekday: "long",

            day: "2-digit",

            month: "long",

            year: "numeric"

        }).format(now);


        const time = new Intl.DateTimeFormat("en-MY", {

            timeZone: "Asia/Kuala_Lumpur",

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit",

            hour12: true

        }).format(now);


        const hour = Number(

            new Intl.DateTimeFormat("en-MY", {

                timeZone: "Asia/Kuala_Lumpur",

                hour: "2-digit",

                hourCycle: "h23"

            }).format(now)

        );


        let greeting = "GOOD EVENING";


        if (hour >= 5 && hour < 12) {

            greeting = "GOOD MORNING";

        } else if (hour >= 12 && hour < 17) {

            greeting = "GOOD AFTERNOON";

        } else if (hour >= 17 && hour < 21) {

            greeting = "GOOD EVENING";

        } else {

            greeting = "GOOD NIGHT";

        }


        if (galleryClock) {

            galleryClock.textContent = time;

        }


        if (galleryDate) {

            galleryDate.textContent =
                date.toUpperCase();

        }


        if (galleryGreeting) {

            galleryGreeting.textContent =
                greeting + " · EVERY PICTURE HAS A STORY";

        }


        if (clockGreeting) {

            clockGreeting.textContent =
                greeting + " ♡";

        }

    }


    updateGalleryClock();

    setInterval(updateGalleryClock, 1000);



    /* ==============================================
       03. HERO TYPING ANIMATION
    ============================================== */

    const typingElement =
        document.getElementById("galleryTyping");


    const typingWords = [

        "LITTLE MOMENTS",

        "BEAUTIFUL MEMORIES",

        "MY SCHOOL DAYS",

        "UNIVERSITY STORIES",

        "PEOPLE I TREASURE",

        "A LITTLE PIECE OF ME",

        "MY VISUAL DIARY"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeGallery() {

        if (!typingElement) return;


        const currentWord =
            typingWords[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeGallery, 1600);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, letterIndex - 1);

            letterIndex--;


            if (letterIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % typingWords.length;

            }

        }


        setTimeout(
            typeGallery,
            deleting ? 35 : 65
        );

    }


    if (typingElement) {

        typeGallery();

    }



    /* ==============================================
       04. IMAGE LOADING SYSTEM
    ============================================== */

    const galleryImages =
        document.querySelectorAll(".gallery-image");


    galleryImages.forEach(function(img) {

        const mediaBox =
            img.closest(".gallery-media");


        function markLoaded() {

            if (img.naturalWidth > 0) {

                img.classList.add("loaded");


                if (mediaBox) {

                    mediaBox.classList.add("has-image");

                }

            }

        }


        img.addEventListener("load", markLoaded);


        img.addEventListener("error", function() {

            img.classList.add("broken");

        });


        if (img.complete) {

            if (img.naturalWidth > 0) {

                markLoaded();

            } else {

                img.classList.add("broken");

            }

        }

    });



    /* ==============================================
       05. MOBILE NAVIGATION
    ============================================== */

    const menuToggle =
        document.getElementById("galleryMenuToggle");

    const navLinks =
        document.getElementById("galleryNavLinks");


    function closeMobileMenu() {

        if (!menuToggle || !navLinks) return;


        menuToggle.classList.remove("open");

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function() {

            const isOpen =
                navLinks.classList.toggle("open");


            menuToggle.classList.toggle("open", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        navLinks.querySelectorAll("a").forEach(function(link) {

            link.addEventListener("click", closeMobileMenu);

        });


        document.addEventListener("click", function(event) {

            if (
                !menuToggle.contains(event.target) &&
                !navLinks.contains(event.target)
            ) {

                closeMobileMenu();

            }

        });

    }



    /* ==============================================
       06. GALLERY ELEMENTS
    ============================================== */

    const galleryGrid =
        document.getElementById("galleryGrid");

    const galleryCards =
        Array.from(
            document.querySelectorAll(".gallery-card")
        );


    const searchInput =
        document.getElementById("gallerySearch");

    const clearSearch =
        document.getElementById("clearSearch");

    const resultCount =
        document.getElementById("galleryResultCount");

    const filterButtons =
        document.querySelectorAll(".gallery-filter");

    const emptyState =
        document.getElementById("galleryEmpty");

    const resetButton =
        document.getElementById("resetGallery");

    const favouriteCount =
        document.getElementById("favouriteCount");

    const totalPhotoCount =
        document.getElementById("totalPhotoCount");


    let activeFilter = "all";



    /* ==============================================
       07. FAVOURITES STORAGE
    ============================================== */

    const STORAGE_KEY =
        "farahverse_gallery_favourites";


    let favourites = new Set();


    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);


        if (saved) {

            const parsed = JSON.parse(saved);


            if (Array.isArray(parsed)) {

                favourites = new Set(

                    parsed.filter(function(id) {

                        return galleryCards.some(function(card) {

                            return card.dataset.id === id;

                        });

                    })

                );

            }

        }

    } catch (error) {

        console.warn(
            "Favourite storage is unavailable.",
            error
        );

    }



    function saveFavourites() {

        try {

            localStorage.setItem(

                STORAGE_KEY,

                JSON.stringify(Array.from(favourites))

            );

        } catch (error) {

            console.warn(
                "Unable to save favourites.",
                error
            );

        }

    }



    function updateFavouriteButtons() {

        document.querySelectorAll("[data-favourite]").forEach(
            function(button) {

                const id =
                    button.dataset.favourite;

                const isFavourite =
                    favourites.has(id);


                button.classList.toggle(
                    "is-favourite",
                    isFavourite
                );


                button.textContent =
                    isFavourite ? "♥" : "♡";


                button.setAttribute(
                    "aria-pressed",
                    isFavourite ? "true" : "false"
                );


                button.setAttribute(
                    "aria-label",
                    isFavourite
                        ? "Remove from favourites"
                        : "Add to favourites"
                );

            }
        );


        if (favouriteCount) {

            favouriteCount.textContent =
                String(favourites.size).padStart(2, "0");

        }

    }



    /* ==============================================
       08. SEARCH AND CATEGORY FILTER
    ============================================== */

    function applyGalleryFilters() {

        const query =
            searchInput
                ? searchInput.value.trim().toLowerCase()
                : "";


        let visibleCount = 0;


        galleryCards.forEach(function(card) {

            const category =
                card.dataset.category;

            const title =
                card.dataset.title || "";

            const keywords =
                card.dataset.keywords || "";

            const caption =
                card.querySelector(".gallery-caption");


            const captionText =
                caption ? caption.textContent : "";


            const searchableText = (

                title + " " +
                keywords + " " +
                category + " " +
                captionText

            ).toLowerCase();



            const matchesSearch =
                searchableText.includes(query);


            const matchesCategory =

                activeFilter === "all" ||

                category === activeFilter ||

                (
                    activeFilter === "favourites" &&
                    favourites.has(card.dataset.id)
                );



            const isVisible =
                matchesSearch && matchesCategory;


            card.classList.toggle(
                "is-hidden",
                !isVisible
            );


            if (isVisible) {

                visibleCount++;

            }

        });



        /* RESULT COUNT */

        if (resultCount) {

            if (activeFilter === "all" && !query) {

                resultCount.textContent =
                    "SHOWING ALL " +
                    visibleCount +
                    " MEMORIES";

            } else {

                resultCount.textContent =
                    "SHOWING " +
                    visibleCount +
                    " OF " +
                    galleryCards.length +
                    " PHOTOS";

            }

        }



        /* EMPTY STATE */

        if (emptyState) {

            emptyState.hidden =
                visibleCount !== 0;

        }



        if (galleryGrid) {

            galleryGrid.style.display =
                visibleCount === 0 ? "none" : "grid";

        }



        updateFavouriteButtons();

    }



    /* CATEGORY BUTTONS */

    filterButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            activeFilter =
                this.dataset.filter;


            filterButtons.forEach(function(item) {

                item.classList.remove("active");

            });


            this.classList.add("active");


            applyGalleryFilters();

        });

    });



    /* SEARCH INPUT */

    if (searchInput) {

        searchInput.addEventListener("input", function() {

            applyGalleryFilters();

        });

    }



    /* CLEAR SEARCH */

    if (clearSearch) {

        clearSearch.addEventListener("click", function() {

            if (searchInput) {

                searchInput.value = "";

            }


            applyGalleryFilters();


            if (searchInput) {

                searchInput.focus();

            }

        });

    }



    /* RESET GALLERY */

    function resetGallery() {

        activeFilter = "all";


        if (searchInput) {

            searchInput.value = "";

        }


        filterButtons.forEach(function(button) {

            button.classList.toggle(

                "active",

                button.dataset.filter === "all"

            );

        });


        applyGalleryFilters();

    }



    if (resetButton) {

        resetButton.addEventListener(
            "click",
            resetGallery
        );

    }



    /* SHOW FAVOURITES FROM HERO */

    const showFavourites =
        document.getElementById("showFavourites");


    if (showFavourites) {

        showFavourites.addEventListener("click", function() {

            activeFilter = "favourites";


            filterButtons.forEach(function(button) {

                button.classList.toggle(

                    "active",

                    button.dataset.filter === "favourites"

                );

            });


            applyGalleryFilters();


            document.getElementById("my-gallery")
                .scrollIntoView({

                    behavior: "smooth"

                });

        });

    }



    /* ==============================================
       09. FAVOURITE BUTTON INTERACTION
    ============================================== */

    document.querySelectorAll("[data-favourite]").forEach(
        function(button) {

            button.addEventListener("click", function(event) {

                event.preventDefault();

                event.stopPropagation();


                const id =
                    this.dataset.favourite;


                if (favourites.has(id)) {

                    favourites.delete(id);

                } else {

                    favourites.add(id);

                }


                saveFavourites();

                applyGalleryFilters();

            });

        }
    );



    /* ==============================================
       10. IMAGE LIGHTBOX
    ============================================== */

    const lightbox =
        document.getElementById("galleryLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxCaption =
        document.getElementById("lightboxCaption");

    const lightboxCounter =
        document.getElementById("lightboxCounter");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const lightboxPrev =
        document.getElementById("lightboxPrev");

    const lightboxNext =
        document.getElementById("lightboxNext");


    let lightboxItems = [];

    let currentLightboxIndex = 0;



    function getVisibleCards() {

        return galleryCards.filter(function(card) {

            return !card.classList.contains("is-hidden");

        });

    }



    function updateLightbox() {

        const card =
            lightboxItems[currentLightboxIndex];


        if (!card) return;


        const img =
            card.querySelector(".gallery-image");


        const title =
            card.dataset.title || "A Special Memory";


        const caption =
            card.querySelector(".gallery-caption p");


        if (!img || !img.classList.contains("loaded")) {

            return;

        }


        lightboxImage.src = img.src;

        lightboxImage.alt = img.alt;


        lightboxTitle.textContent = title;


        lightboxCaption.textContent =
            caption ? caption.textContent : "";


        lightboxCounter.textContent =

            "PHOTO " +
            (currentLightboxIndex + 1) +
            " / " +
            lightboxItems.length;



        lightboxPrev.disabled =
            lightboxItems.length <= 1;


        lightboxNext.disabled =
            lightboxItems.length <= 1;

    }



    function openGalleryLightbox(card) {

        if (!lightbox) return;


        const img =
            card.querySelector(".gallery-image");


        if (!img || !img.classList.contains("loaded")) {

            return;

        }


        lightboxItems =
            getVisibleCards().filter(function(item) {

                const image =
                    item.querySelector(".gallery-image");

                return image &&
                    image.classList.contains("loaded");

            });


        currentLightboxIndex =
            lightboxItems.indexOf(card);


        if (currentLightboxIndex < 0) return;


        updateLightbox();


        lightbox.classList.add("open");

        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeGalleryLightbox() {

        if (!lightbox) return;


        lightbox.classList.remove("open");

        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }



    function showNextPhoto() {

        if (lightboxItems.length <= 1) return;


        currentLightboxIndex =

            (currentLightboxIndex + 1) %
            lightboxItems.length;


        updateLightbox();

    }



    function showPreviousPhoto() {

        if (lightboxItems.length <= 1) return;


        currentLightboxIndex =

            (
                currentLightboxIndex -
                1 +
                lightboxItems.length
            ) % lightboxItems.length;


        updateLightbox();

    }



    /* CLICK PHOTO */

    galleryCards.forEach(function(card) {

        const img =
            card.querySelector(".gallery-image");

        const openButton =
            card.querySelector(".photo-open-button");


        if (img) {

            img.addEventListener("click", function() {

                openGalleryLightbox(card);

            });

        }


        if (openButton) {

            openButton.addEventListener("click", function(event) {

                event.preventDefault();

                event.stopPropagation();

                openGalleryLightbox(card);

            });

        }

    });



    /* LIGHTBOX BUTTONS */

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeGalleryLightbox
        );

    }


    if (lightboxPrev) {

        lightboxPrev.addEventListener(
            "click",
            showPreviousPhoto
        );

    }


    if (lightboxNext) {

        lightboxNext.addEventListener(
            "click",
            showNextPhoto
        );

    }



    /* CLICK OUTSIDE */

    if (lightbox) {

        lightbox.addEventListener("click", function(event) {

            if (event.target === lightbox) {

                closeGalleryLightbox();

            }

        });

    }



    /* ==============================================
       11. KEYBOARD NAVIGATION
    ============================================== */

    document.addEventListener("keydown", function(event) {

        if (
            lightbox &&
            lightbox.classList.contains("open")
        ) {

            if (event.key === "Escape") {

                closeGalleryLightbox();

            } else if (event.key === "ArrowRight") {

                showNextPhoto();

            } else if (event.key === "ArrowLeft") {

                showPreviousPhoto();

            }

        } else if (event.key === "Escape") {

            closeMobileMenu();

        }

    });



    /* ==============================================
       12. SCROLL REVEAL
    ============================================== */

    const revealElements = document.querySelectorAll(

        ".gallery-dashboard-heading, " +
        ".gallery-stat, " +
        ".gallery-section-heading, " +
        ".gallery-search-area, " +
        ".gallery-filter-area, " +
        ".gallery-card, " +
        ".gallery-end-note, " +
        ".gallery-ending"

    );


    revealElements.forEach(function(element) {

        element.classList.add("gallery-reveal");

    });



    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(

            function(entries, observer) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.1
            }

        );


        revealElements.forEach(function(element) {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function(element) {

            element.classList.add("visible");

        });

    }



    /* ==============================================
       13. SCROLL PROGRESS
    ============================================== */

    const progressBar =
        document.getElementById("galleryProgress");

    const backTop =
        document.getElementById("galleryBackTop");


    function updateGalleryScroll() {

        const scrollTop =
            window.scrollY || document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const percentage = scrollHeight > 0

            ? (scrollTop / scrollHeight) * 100

            : 0;


        if (progressBar) {

            progressBar.style.width =
                percentage + "%";

        }


        if (backTop) {

            backTop.classList.toggle(
                "show",
                scrollTop > 400
            );

        }

    }


    window.addEventListener("scroll", updateGalleryScroll);

    updateGalleryScroll();



    /* ==============================================
       14. BACK TO TOP
    ============================================== */

    if (backTop) {

        backTop.addEventListener("click", function() {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /* ==============================================
       15. INITIAL PAGE STATE
    ============================================== */

    if (totalPhotoCount) {

        totalPhotoCount.textContent =
            String(galleryCards.length).padStart(2, "0");

    }


    updateFavouriteButtons();

    applyGalleryFilters();

    updateGalleryClock();


});
