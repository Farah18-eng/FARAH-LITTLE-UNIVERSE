
/* ==================================================
   FARAHVERSE
   MY FOREVER HOME
   INTERACTIVE FAMILY SYSTEM
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. MOVING STAR SYSTEM
    ============================================== */

    const starField =
        document.getElementById("familyStarField");


    if (starField) {

        for (let i = 0; i < 65; i++) {

            const star = document.createElement("span");

            star.className = "family-star-particle";

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

    const familyClock =
        document.getElementById("familyClock");

    const familyDate =
        document.getElementById("familyDate");

    const familyGreeting =
        document.getElementById("familyGreeting");

    const familyClockGreeting =
        document.getElementById("familyClockGreeting");


    function updateFamilyClock() {

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


        if (familyClock) {

            familyClock.textContent = time;

        }


        if (familyDate) {

            familyDate.textContent =
                date.toUpperCase();

        }


        if (familyGreeting) {

            familyGreeting.textContent =
                greeting + " · HOME IS WHERE LOVE LIVES";

        }


        if (familyClockGreeting) {

            familyClockGreeting.textContent =
                greeting + " ♡";

        }

    }


    updateFamilyClock();

    setInterval(updateFamilyClock, 1000);



    /* ==============================================
       03. HERO TYPING ANIMATION
    ============================================== */

    const typingElement =
        document.getElementById("familyTyping");


    const typingWords = [

        "MY FOREVER HOME",

        "MY GREATEST BLESSING",

        "MY LITTLE CIRCLE OF LOVE",

        "MY FAVOURITE PEOPLE",

        "MY ROOTS AND MY STRENGTH",

        "FOREVER FAMILY"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeFamily() {

        if (!typingElement) return;


        const currentWord =
            typingWords[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeFamily, 1600);

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
            typeFamily,
            deleting ? 35 : 65
        );

    }


    if (typingElement) {

        typeFamily();

    }



    /* ==============================================
       04. FAMILY IMAGE LOADING
    ============================================== */

    const familyImages =
        document.querySelectorAll(".family-image");


    familyImages.forEach(function(img) {

        const photoBox =
            img.closest(".family-photo-box");


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
        document.getElementById("familyMenuToggle");

    const navLinks =
        document.getElementById("familyNavLinks");


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
       06. FAMILY LETTER CONTENT
    ============================================== */

    const familyLetters = {

        father: {

            title: "To My Dearest Dad ♡",

            text:
                "Dear Dad,\n\n" +

                "Thank you for being such an important part of my life. " +
                "As I grow older, I realise that family is one of the " +
                "greatest blessings a person can have.\n\n" +

                "There are so many things I may not always say out loud, " +
                "but I hope you know how much you mean to me. " +
                "Thank you for the memories, the guidance and the " +
                "love that have helped shape who I am today.\n\n" +

                "I hope I can continue making you proud through " +
                "every little achievement and every new chapter " +
                "of my life.\n\n" +

                "No matter how far I go or how much I grow, " +
                "I will always be your daughter.\n\n" +

                "I love you, Dad. ♡"

        },


        mother: {

            title: "To My Forever Loved Mum 🤍",

            text:
                "Dear Mum,\n\n" +

                "There are so many things I wish I could tell you. " +
                "Sometimes, I wish I could have just one more moment " +
                "with you, one more conversation, one more hug " +
                "or simply hear your voice again.\n\n" +

                "Life continues to move forward, and I am growing " +
                "through different chapters of my life. " +
                "But no matter how much time passes, " +
                "there will always be a place in my heart " +
                "that belongs only to you.\n\n" +

                "I wish you could see the person I am becoming, " +
                "the little things I have achieved and the dreams " +
                "I am still working towards.\n\n" +

                "I will carry your love and memories with me " +
                "wherever life takes me.\n\n" +

                "May Allah forgive your shortcomings, shower you " +
                "with His endless mercy and grant you " +
                "the highest place in Jannah.\n\n" +

                "I miss you, Mum. Forever your daughter. 🤍"

        },


        sister: {

            title: "To My Dearest Sister ♡",

            text:
                "Dear Kakak,\n\n" +

                "Growing up together has given me so many memories " +
                "that I will always treasure. We may have different " +
                "personalities, opinions and ways of seeing things, " +
                "but at the end of the day, we share something " +
                "that will never change: we are family.\n\n" +

                "Thank you for being part of my journey, " +
                "from the little moments of childhood " +
                "to the different stages of our lives today.\n\n" +

                "I hope we will always find our way back to each other, " +
                "no matter how busy life becomes or how much " +
                "our responsibilities change.\n\n" +

                "May we continue to grow, support one another " +
                "and create more beautiful memories together.\n\n" +

                "You will always be my sister, " +
                "my family and a special part of my life.\n\n" +

                "Love you, Kakak. ♡"

        },


        brother: {

            title: "To My Dear Brother ♡",

            text:
                "Dear Abang,\n\n" +

                "We have shared many moments as siblings, " +
                "and those memories will always be part " +
                "of our family story.\n\n" +

                "As we grow older, life brings new responsibilities, " +
                "different paths and changes that we cannot always predict. " +
                "But I hope we never lose the connection " +
                "that comes from being family.\n\n" +

                "I may not say it often, but I am grateful " +
                "to have you as my brother.\n\n" +

                "I wish you happiness, success and strength " +
                "in everything you do. May we always support " +
                "one another through every chapter of life.\n\n" +

                "No matter where life takes us, " +
                "you will always be my brother.\n\n" +

                "With love, your sister. ♡"

        },


        farah: {

            title: "A Letter to Myself, Farah 🌷",

            text:
                "Dear Farah,\n\n" +

                "Look how far you have come. " +
                "You have grown through different experiences, " +
                "faced challenges and collected memories " +
                "that have shaped the person you are today.\n\n" +

                "There may be days when you feel tired, " +
                "uncertain or wish things could have been different. " +
                "On those days, remember to be gentle with yourself.\n\n" +

                "You do not have to have everything figured out. " +
                "You are allowed to grow at your own pace, " +
                "make mistakes and discover new things along the way.\n\n" +

                "Keep working towards your dreams, " +
                "make your family proud and never forget " +
                "the people and memories that matter most.\n\n" +

                "Most importantly, remember that you deserve " +
                "the same love, kindness and understanding " +
                "that you give to others.\n\n" +

                "Keep growing, keep going. " +
                "You are doing better than you think.\n\n" +

                "With love, Farah. ♡"

        },


        younger: {

            title: "To My Little Brother 🦋",

            text:
                "Dear Adik,\n\n" +

                "It feels special to watch you grow " +
                "and become your own person. " +
                "No matter how much time passes, " +
                "there will always be a part of me " +
                "that sees you as my little brother.\n\n" +

                "I hope life brings you beautiful opportunities, " +
                "good people and many reasons to smile.\n\n" +

                "Never be afraid to learn, make mistakes " +
                "or follow your dreams. " +
                "There is still so much waiting for you " +
                "in this big world.\n\n" +

                "And whenever life feels difficult, " +
                "remember that you are never alone. " +
                "You will always have a sister " +
                "who wishes the best for you.\n\n" +

                "Keep growing, keep smiling " +
                "and keep being yourself.\n\n" +

                "I love you, little brother. ♡"

        }

    };



    /* ==============================================
       07. LETTER MODAL
    ============================================== */

    const familyModal =
        document.getElementById("familyModal");

    const modalClose =
        document.getElementById("closeFamilyModal");

    const letterTitle =
        document.getElementById("letterTitle");

    const letterText =
        document.getElementById("letterText");


    function openFamilyLetter(key) {

        const letter =
            familyLetters[key];


        if (!letter || !familyModal) return;


        letterTitle.textContent =
            letter.title;

        letterText.textContent =
            letter.text;


        familyModal.classList.add("open");

        familyModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeFamilyLetter() {

        if (!familyModal) return;


        familyModal.classList.remove("open");

        familyModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }



    document.querySelectorAll("[data-letter]").forEach(
        function(button) {

            button.addEventListener("click", function() {

                openFamilyLetter(this.dataset.letter);

            });

        }
    );



    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeFamilyLetter
        );

    }



    if (familyModal) {

        familyModal.addEventListener("click", function(event) {

            if (event.target === familyModal) {

                closeFamilyLetter();

            }

        });

    }



    /* ==============================================
       08. FAMILY MEMORY FILTER
    ============================================== */

    const memoryFilters =
        document.querySelectorAll(".memory-filter");

    const memoryCards =
        document.querySelectorAll(".polaroid-card");


    function filterFamilyMemories(category) {

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

        });

    }



    memoryFilters.forEach(function(button) {

        button.addEventListener("click", function() {

            const category =
                this.dataset.memoryFilter;


            memoryFilters.forEach(function(filter) {

                filter.classList.remove("active");

            });


            this.classList.add("active");

            filterFamilyMemories(category);

        });

    });



    /* ==============================================
       09. INTERACTIVE MEMORY JAR
    ============================================== */

    const memoryMessages = [

        "Family is not about having a perfect story. It is about having people who will always be part of yours. ♡",

        "No matter how far life takes you, never forget the people who make you feel at home.",

        "The most beautiful memories are often made from the simplest moments spent together.",

        "A family is a little world built with love, patience, memories and understanding.",

        "Some people are not just part of your story. They are part of the reason your story is beautiful.",

        "Growing older means realising that time with family is one of life's most precious gifts.",

        "Home is not always a place. Sometimes, it is the feeling of belonging to the people you love.",

        "Even when life changes, the memories we share will always have a special place in our hearts.",

        "Never wait for a special occasion to appreciate the people who matter most.",

        "Love makes a family, memories keep it close and gratitude makes every moment meaningful."

    ];


    const openJarButton =
        document.getElementById("openMemoryJar");

    const anotherMemory =
        document.getElementById("anotherMemory");

    const memoryMessage =
        document.getElementById("memoryMessage");

    const memoryMessageText =
        document.getElementById("memoryMessageText");

    const jarIllustration =
        document.getElementById("jarIllustration");


    let unusedMessages =
        Array.from(memoryMessages);



    function showMemoryMessage() {

        if (unusedMessages.length === 0) {

            unusedMessages =
                Array.from(memoryMessages);

        }


        const randomIndex =
            Math.floor(Math.random() * unusedMessages.length);


        const message =
            unusedMessages.splice(randomIndex, 1)[0];


        if (jarIllustration) {

            jarIllustration.classList.remove("opening");

            void jarIllustration.offsetWidth;

            jarIllustration.classList.add("opening");

        }


        memoryMessageText.textContent = message;

        memoryMessage.hidden = false;


        if (anotherMemory) {

            anotherMemory.textContent =
                unusedMessages.length === 0
                    ? "RESTART MEMORY JAR ↻"
                    : "ANOTHER MESSAGE ↻";

        }

    }



    if (openJarButton) {

        openJarButton.addEventListener("click", function() {

            showMemoryMessage();

            openJarButton.textContent =
                "OPENED WITH LOVE ♡";

        });

    }



    if (anotherMemory) {

        anotherMemory.addEventListener("click", function() {

            showMemoryMessage();

        });

    }



    /* ==============================================
       10. IMAGE LIGHTBOX
    ============================================== */

    const lightbox =
        document.getElementById("familyLightbox");

    const lightboxImage =
        document.getElementById("familyLightboxImage");

    const lightboxCaption =
        document.getElementById("familyLightboxCaption");

    const lightboxClose =
        document.getElementById("closeFamilyLightbox");


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

        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeLightbox() {

        if (!lightbox) return;


        lightbox.classList.remove("open");

        lightbox.setAttribute("aria-hidden", "true");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }


familyImages.forEach(function(img) {

    if (img.closest(".tree-person")) return;

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
       11. SCROLL REVEAL
    ============================================== */

    const revealElements = document.querySelectorAll(

        ".family-section-heading, " +
        ".family-stat-card, " +
        ".family-tree-container, " +
        ".member-card, " +
        ".tribute-layout, " +
        ".polaroid-card, " +
        ".family-traditions, " +
        ".memory-jar, " +
        ".family-ending"

    );


    revealElements.forEach(function(element) {

        element.classList.add("family-reveal");

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
       12. SCROLL PROGRESS
    ============================================== */

    const progressBar =
        document.getElementById("familyProgress");

    const backTop =
        document.getElementById("familyBackTop");


    function updateFamilyScroll() {

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


    window.addEventListener("scroll", updateFamilyScroll);

    updateFamilyScroll();



    /* ==============================================
       13. BACK TO TOP
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
       14. ESCAPE KEY
    ============================================== */

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            closeFamilyLetter();

            closeLightbox();

            closeMobileMenu();

        }

    });



    /* ==============================================
       15. INITIAL PAGE STATE
    ============================================== */

    filterFamilyMemories("all");

    updateFamilyClock();


});
