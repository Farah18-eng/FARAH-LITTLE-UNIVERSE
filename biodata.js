
/* ==================================================
   FARAHVERSE
   DIGITAL BIODATA INTERACTIVE SYSTEM
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. FLOATING STAR SYSTEM
    ============================================== */

    const starField =
        document.getElementById("bioStarField");


    if (starField) {

        for (let i = 0; i < 55; i++) {

            const star = document.createElement("span");

            star.className = "bio-star";

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

    const heroDate =
        document.getElementById("bioHeroDate");

    const greeting =
        document.getElementById("bioGreeting");


    function updateBioClock() {

        const now = new Date();


        const date = new Intl.DateTimeFormat("en-MY", {

            timeZone: "Asia/Kuala_Lumpur",

            weekday: "long",

            day: "2-digit",

            month: "long",

            year: "numeric"

        }).format(now);


        const hour = Number(

            new Intl.DateTimeFormat("en-MY", {

                timeZone: "Asia/Kuala_Lumpur",

                hour: "2-digit",

                hourCycle: "h23"

            }).format(now)

        );


        let message = "GOOD EVENING";


        if (hour >= 5 && hour < 12) {

            message = "GOOD MORNING";

        } else if (hour >= 12 && hour < 17) {

            message = "GOOD AFTERNOON";

        } else if (hour >= 17 && hour < 21) {

            message = "GOOD EVENING";

        } else {

            message = "GOOD NIGHT";

        }


        if (heroDate) {

            heroDate.textContent =
                date.toUpperCase();

        }


        if (greeting) {

            greeting.textContent =
                message + ", NICE TO MEET YOU.";

        }

    }


    updateBioClock();

    setInterval(updateBioClock, 1000);



    /* ==============================================
       03. TYPING ANIMATION
    ============================================== */

    const typingElement =
        document.getElementById("bioTyping");


    const typingWords = [

        "A CURIOUS SOUL",

        "AN INDEPENDENT THINKER",

        "A CREATIVE EXPLORER",

        "A GIRL WITH BIG DREAMS",

        "ALWAYS LEARNING AND GROWING"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeBio() {

        if (!typingElement) return;


        const currentWord =
            typingWords[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeBio, 1600);

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
            typeBio,
            deleting ? 35 : 65
        );

    }


    if (typingElement) {

        typeBio();

    }



    /* ==============================================
       04. MOBILE NAVIGATION
    ============================================== */

    const menuToggle =
        document.getElementById("bioMenuToggle");

    const navLinks =
        document.getElementById("bioNavLinks");


    function closeBioMenu() {

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

            link.addEventListener("click", closeBioMenu);

        });


        document.addEventListener("click", function(event) {

            if (
                !menuToggle.contains(event.target) &&
                !navLinks.contains(event.target)
            ) {

                closeBioMenu();

            }

        });

    }



    /* ==============================================
       05. IMAGE LOADING
    ============================================== */

    const bioImages =
        document.querySelectorAll(".bio-image");


    bioImages.forEach(function(img) {

        const photoBox = img.closest(
            ".bio-portrait-frame, .lifestyle-photo"
        );


        function markLoaded() {

            if (img.naturalWidth > 0) {

                img.classList.add("loaded");


                if (photoBox) {

                    photoBox.classList.add("has-image");

                }

            }

        }


        img.addEventListener("load", markLoaded);


        img.addEventListener("error", function() {

            img.classList.add("broken");

        });


        if (img.complete) {

            markLoaded();

        }

    });



    /* ==============================================
       06. PERSONALITY EXPANDABLE CARDS
    ============================================== */

    const personalityButtons =
        document.querySelectorAll(".personality-expand");


    personalityButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const targetId =
                this.dataset.personality;

            const target =
                document.getElementById(targetId);


            if (!target) return;


            const isOpen =
                !target.hidden;


            target.hidden = isOpen;

            this.setAttribute(
                "aria-expanded",
                isOpen ? "false" : "true"
            );


            this.textContent = isOpen
                ? "DISCOVER MORE +"
                : "SHOW LESS −";

        });

    });



    /* ==============================================
       07. INTEREST TAB SYSTEM
    ============================================== */

    const interestTabs =
        document.querySelectorAll(".bio-interest-tab");

    const interestPanels =
        document.querySelectorAll(".bio-interest-panel");


    interestTabs.forEach(function(tab) {

        tab.addEventListener("click", function() {

            const targetId =
                this.dataset.target;


            /* RESET ALL TABS */

            interestTabs.forEach(function(item) {

                item.classList.remove("active");

                item.setAttribute(
                    "aria-selected",
                    "false"
                );

            });


            /* HIDE ALL PANELS */

            interestPanels.forEach(function(panel) {

                panel.classList.remove("active");

                panel.hidden = true;

            });


            /* ACTIVATE SELECTED TAB */

            this.classList.add("active");

            this.setAttribute(
                "aria-selected",
                "true"
            );


            const selectedPanel =
                document.getElementById(targetId);


            if (selectedPanel) {

                selectedPanel.hidden = false;

                selectedPanel.classList.add("active");

                selectedPanel.querySelectorAll(
                    ".game-interest-card"
                ).forEach(function(card) {

                    card.style.animation = "bioPanelAppear 0.45s ease";

                });

            }

        });

    });



    /* ==============================================
       08. IMAGE LIGHTBOX
    ============================================== */

    const lightbox =
        document.getElementById("bioLightbox");

    const lightboxImage =
        document.getElementById("bioLightboxImage");

    const lightboxCaption =
        document.getElementById("bioLightboxCaption");

    const lightboxClose =
        document.getElementById("bioLightboxClose");


    function openLightbox(img) {

        if (
            !lightbox ||
            !img.classList.contains("loaded")
        ) {

            return;

        }


        lightboxImage.src = img.src;

        lightboxImage.alt = img.alt;

        lightboxCaption.textContent = img.alt;


        lightbox.classList.add("open");

        document.body.style.overflow = "hidden";

    }



    function closeLightbox() {

        if (!lightbox) return;


        lightbox.classList.remove("open");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }



    bioImages.forEach(function(img) {

        img.style.cursor = "zoom-in";

        img.addEventListener("click", function() {

            openLightbox(this);

        });

    });



    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }



    if (lightbox) {

        lightbox.addEventListener("click", function(event) {

            if (event.target === lightbox) {

                closeLightbox();

            }

        });

    }



    /* ==============================================
       09. SCROLL REVEAL
    ============================================== */

    const revealElements = document.querySelectorAll(

        ".bio-section-heading, " +
        ".bio-info-card, " +
        ".personality-widget, " +
        ".game-interest-card, " +
        ".bio-song-card, " +
        ".lifestyle-card, " +
        ".value-card, " +
        ".bio-letter-card, " +
        ".bio-achievement-section, " +
        ".bio-connect-section"

    );


    revealElements.forEach(function(element) {

        element.classList.add("bio-reveal");

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

            if (!element.closest("[hidden]")) {

                revealObserver.observe(element);

            }

        });

    } else {

        revealElements.forEach(function(element) {

            element.classList.add("visible");

        });

    }



    /* ==============================================
       10. SCROLL PROGRESS
    ============================================== */

    const progressBar =
        document.getElementById("bioProgress");

    const backTop =
        document.getElementById("bioBackTop");


    function updateBioScroll() {

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


    window.addEventListener("scroll", updateBioScroll);

    updateBioScroll();



    /* ==============================================
       11. BACK TO TOP
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
       12. ESCAPE KEY
    ============================================== */

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            closeLightbox();

            closeBioMenu();

        }

    });



    /* ==============================================
       13. PAGE READY
    ============================================== */

    document.body.classList.add("bio-page-ready");


});

/* =========================================
   FARAHVERSE - GAMES & SPORTS TABS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(
        ".bio-interest-tab"
    );

    const panels = document.querySelectorAll(
        ".bio-interest-panel"
    );

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const targetId = this.dataset.target;

            /* RESET TABS */

            tabs.forEach(function (item) {

                item.classList.remove("active");

                item.setAttribute(
                    "aria-selected",
                    "false"
                );

            });

            /* ACTIVATE CLICKED TAB */

            this.classList.add("active");

            this.setAttribute(
                "aria-selected",
                "true"
            );

            /* HIDE ALL PANELS */

            panels.forEach(function (panel) {

                panel.classList.remove("active");

                panel.hidden = true;

            });

            /* SHOW SELECTED PANEL */

            const selectedPanel =
                document.getElementById(targetId);

            if (selectedPanel) {

                selectedPanel.hidden = false;

                selectedPanel.classList.add("active");

            }

        });

    });

});
