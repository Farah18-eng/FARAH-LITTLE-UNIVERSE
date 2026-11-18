
/* ==================================================
   FARAHVERSE
   FRIENDSHIP UNIVERSE
   INTERACTIVE FRIENDSHIP SYSTEM
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. MOVING STAR SYSTEM
    ============================================== */

    const starField =
        document.getElementById("friendsStarField");


    if (starField) {

        for (let i = 0; i < 65; i++) {

            const star = document.createElement("span");

            star.className = "friends-star-particle";

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

    const friendsClock =
        document.getElementById("friendsClock");

    const friendsDate =
        document.getElementById("friendsDate");

    const friendsGreeting =
        document.getElementById("friendsGreeting");

    const clockGreeting =
        document.getElementById("friendsClockGreeting");


    function updateFriendsClock() {

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


        if (friendsClock) {

            friendsClock.textContent = time;

        }


        if (friendsDate) {

            friendsDate.textContent =
                date.toUpperCase();

        }


        if (friendsGreeting) {

            friendsGreeting.textContent =
                greeting + " · SOME PEOPLE BECOME HOME";

        }


        if (clockGreeting) {

            clockGreeting.textContent =
                greeting + " ♡";

        }

    }


    updateFriendsClock();

    setInterval(updateFriendsClock, 1000);



    /* ==============================================
       03. HERO TYPING ANIMATION
    ============================================== */

    const typingElement =
        document.getElementById("friendsTyping");


    const typingWords = [

        "MY PERSON, PUYIE",

        "MY SAFE PLACE",

        "SECONDARY SCHOOL MEMORIES",

        "SAME UNIVERSITY JOURNEY",

        "THROUGH EVERY HIGH AND LOW",

        "A FRIENDSHIP LIKE FAMILY"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeFriends() {

        if (!typingElement) return;


        const currentWord =
            typingWords[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeFriends, 1600);

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
            typeFriends,
            deleting ? 35 : 65
        );

    }


    if (typingElement) {

        typeFriends();

    }



    /* ==============================================
       04. FRIENDSHIP IMAGE LOADING
    ============================================== */

    const friendsImages =
        document.querySelectorAll(".friends-image");


    friendsImages.forEach(function(img) {

        const photoBox =
            img.closest(".friends-photo-box");


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
        document.getElementById("friendsMenuToggle");

    const navLinks =
        document.getElementById("friendsNavLinks");


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
       06. PERSONAL LETTER TO PUYIE
    ============================================== */

    const friendshipLetters = {

        puyie: {

            title: "To My Dearest Puyie ♡",

            text:

                "Dear Puyie,\n\n" +

                "I honestly do not know where to begin, " +
                "because there are so many things I want to thank you for.\n\n" +

                "Who would have thought that a friendship " +
                "that started during our secondary school days " +
                "would continue all the way to our diploma journey? " +
                "We have grown through so many different chapters, " +
                "and I am genuinely grateful that we are still " +
                "walking through life together.\n\n" +

                "Thank you for understanding me, " +
                "even during the moments when I do not know " +
                "how to explain what I am feeling. " +
                "You have seen me happy, sad, weak and lost. " +
                "You were there through my difficult days, " +
                "when I felt like I was falling, " +
                "and somehow you always reminded me " +
                "that I could stand up again.\n\n" +

                "I may not always say it, " +
                "but having someone who understands me " +
                "without needing too many explanations " +
                "means more than you know.\n\n" +

                "And one thing that makes our friendship " +
                "even more special is how close our families are. " +
                "It feels like we are not just two friends " +
                "who share memories, but two people " +
                "whose lives and families have become connected. " +
                "That is something I will always appreciate.\n\n" +

                "As we continue growing and moving into " +
                "different stages of life, I hope we never forget " +
                "where our friendship began. " +
                "I hope we will always make time for each other, " +
                "celebrate each other's little victories " +
                "and remain a source of comfort " +
                "through life's ups and downs.\n\n" +

                "Thank you for being part of my story, " +
                "for staying, for understanding " +
                "and for being you.\n\n" +

                "I am so grateful that life gave me a friend like you. " +
                "Here is to more memories, more laughter " +
                "and many more chapters together.\n\n" +

                "No matter how much life changes, " +
                "you will always have a special place in my heart.\n\n" +

                "Love you, Puyie. " +
                "Always grateful for you. ♡"

        }

    };



    /* ==============================================
       07. LETTER MODAL
    ============================================== */

    const letterModal =
        document.getElementById("letterModal");

    const modalClose =
        document.getElementById("modalClose");

    const letterTitle =
        document.getElementById("letterTitle");

    const letterText =
        document.getElementById("letterText");


    function openFriendshipLetter(key) {

        const letter =
            friendshipLetters[key];


        if (!letter || !letterModal) return;


        letterTitle.textContent =
            letter.title;

        letterText.textContent =
            letter.text;


        letterModal.classList.add("open");

        letterModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeFriendshipLetter() {

        if (!letterModal) return;


        letterModal.classList.remove("open");

        letterModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }



    document.querySelectorAll("[data-letter]").forEach(
        function(button) {

            button.addEventListener("click", function() {

                openFriendshipLetter(this.dataset.letter);

            });

        }
    );



    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeFriendshipLetter
        );

    }



    if (letterModal) {

        letterModal.addEventListener("click", function(event) {

            if (event.target === letterModal) {

                closeFriendshipLetter();

            }

        });

    }



    /* ==============================================
       08. FRIENDSHIP MEMORY FILTER
    ============================================== */

    const memoryFilters =
        document.querySelectorAll(".memory-filter");

    const memoryCards =
        document.querySelectorAll(".memory-card");

    const memoryFilterCount =
        document.getElementById("memoryFilterCount");


    function filterFriendshipMemories(category) {

        let visibleCount = 0;


        memoryCards.forEach(function(card) {

            const cardCategory =
                card.dataset.memory;


            const shouldShow =
                category === "all" ||
                category === cardCategory;


            card.classList.toggle(
                "is-hidden",
                !shouldShow
            );


            if (shouldShow) {

                visibleCount++;

            }

        });



        if (memoryFilterCount) {

            if (category === "all") {

                memoryFilterCount.textContent =
                    "SHOWING ALL " + visibleCount + " MEMORIES";

            } else {

                memoryFilterCount.textContent =
                    "SHOWING " +
                    category.toUpperCase() +
                    " · " +
                    visibleCount +
                    " PHOTOS";

            }

        }

    }



    memoryFilters.forEach(function(button) {

        button.addEventListener("click", function() {

            const category =
                this.dataset.memoryFilter;


            memoryFilters.forEach(function(filter) {

                filter.classList.remove("active");

            });


            this.classList.add("active");

            filterFriendshipMemories(category);

        });

    });



    /* ==============================================
       09. IMAGE LIGHTBOX
    ============================================== */

    const lightbox =
        document.getElementById("friendsLightbox");

    const lightboxImage =
        document.getElementById("friendsLightboxImage");

    const lightboxCaption =
        document.getElementById("friendsLightboxCaption");

    const lightboxClose =
        document.getElementById("friendsLightboxClose");


    function openFriendsLightbox(img) {

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

        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeFriendsLightbox() {

        if (!lightbox) return;


        lightbox.classList.remove("open");

        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }



    friendsImages.forEach(function(img) {

        img.addEventListener("click", function() {

            openFriendsLightbox(this);

        });

    });



    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeFriendsLightbox
        );

    }



    if (lightbox) {

        lightbox.addEventListener("click", function(event) {

            if (event.target === lightbox) {

                closeFriendsLightbox();

            }

        });

    }



    /* ==============================================
       10. SCROLL REVEAL
    ============================================== */

    const revealElements = document.querySelectorAll(

        ".friends-section-heading, " +
        ".friends-stat-card, " +
        ".bestfriend-card, " +
        ".timeline-card, " +
        ".support-card, " +
        ".family-bond-card, " +
        ".memory-card, " +
        ".letter-box, " +
        ".friends-ending"

    );


    revealElements.forEach(function(element) {

        element.classList.add("friends-reveal");

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
       11. SCROLL PROGRESS
    ============================================== */

    const progressBar =
        document.getElementById("friendsProgress");

    const backTop =
        document.getElementById("friendsBackTop");


    function updateFriendsScroll() {

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


    window.addEventListener("scroll", updateFriendsScroll);

    updateFriendsScroll();



    /* ==============================================
       12. BACK TO TOP
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
       13. ESCAPE KEY
    ============================================== */

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            closeFriendshipLetter();

            closeFriendsLightbox();

            closeMobileMenu();

        }

    });



    /* ==============================================
       14. INITIAL PAGE STATE
    ============================================== */

    filterFriendshipMemories("all");

    updateFriendsClock();


});
