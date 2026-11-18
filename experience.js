
/* ==================================================
   FARAHVERSE
   EXPERIENCE ARCHIVE INTERACTIVE SYSTEM
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. MOVING STAR SYSTEM
    ============================================== */

    const starField =
        document.getElementById("expStarField");


    if (starField) {

        for (let i = 0; i < 65; i++) {

            const star = document.createElement("span");

            star.className = "exp-star";

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

    const expClock =
        document.getElementById("expClock");

    const expDate =
        document.getElementById("expDate");

    const expGreeting =
        document.getElementById("expGreeting");

    const expClockGreeting =
        document.getElementById("expClockGreeting");


    function updateExperienceClock() {

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


        if (expClock) {

            expClock.textContent = time;

        }


        if (expDate) {

            expDate.textContent =
                date.toUpperCase();

        }


        if (expGreeting) {

            expGreeting.textContent =
                greeting + " · EVERY EXPERIENCE COUNTS";

        }


        if (expClockGreeting) {

            expClockGreeting.textContent =
                greeting + " ♡";

        }

    }


    updateExperienceClock();

    setInterval(updateExperienceClock, 1000);



    /* ==============================================
       03. HERO TYPING ANIMATION
    ============================================== */

    const typingElement =
        document.getElementById("expTyping");


    const typingWords = [

        "CUSTOMER SERVICE",

        "RETAIL & SALES",

        "FOOD BUSINESS",

        "COMMUNITY SERVICE",

        "IT SYSTEM DEVELOPMENT",

        "ALWAYS LEARNING"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeExperience() {

        if (!typingElement) return;


        const currentWord =
            typingWords[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeExperience, 1600);

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
            typeExperience,
            deleting ? 35 : 65
        );

    }


    if (typingElement) {

        typeExperience();

    }



    /* ==============================================
       04. IMAGE LOADING SYSTEM
    ============================================== */

    const experienceImages =
        document.querySelectorAll(".exp-image");


    experienceImages.forEach(function(img) {

        const photoBox =
            img.closest(".exp-photo-box");


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
       05. MOBILE NAVIGATION
    ============================================== */

    const menuToggle =
        document.getElementById("expMenuToggle");

    const navLinks =
        document.getElementById("expNavLinks");


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
       06. EXPERIENCE FILTER SYSTEM
    ============================================== */

    const filterButtons =
        document.querySelectorAll(".exp-filter");

    const experienceCards =
        document.querySelectorAll(".exp-card");

    const experienceGroups =
        document.querySelectorAll(".exp-category-group");

    const resultCount =
        document.getElementById("expResultCount");


    function filterExperiences(category) {

        let visibleCount = 0;


        /* FILTER EACH EXPERIENCE CARD */

        experienceCards.forEach(function(card) {

            const cardCategory =
                card.dataset.category;


            const shouldShow =
                category === "all" ||
                cardCategory === category;


            card.classList.toggle(
                "is-hidden",
                !shouldShow
            );


            if (shouldShow) {

                visibleCount++;

                card.classList.add("visible");

            }

        });



        /* HIDE EMPTY CATEGORY GROUPS */

        experienceGroups.forEach(function(group) {

            const groupCards =
                group.querySelectorAll(".exp-card");


            const hasVisibleCard =
                Array.from(groupCards).some(function(card) {

                    return !card.classList.contains("is-hidden");

                });


            group.classList.toggle(
                "is-hidden",
                !hasVisibleCard
            );

        });



        /* UPDATE RESULT COUNTER */

        if (resultCount) {

            resultCount.textContent = visibleCount;

        }

    }



    filterButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const selectedCategory =
                this.dataset.filter;


            filterButtons.forEach(function(item) {

                item.classList.remove("active");

            });


            this.classList.add("active");


            filterExperiences(selectedCategory);

        });

    });



    /* ==============================================
       07. EXPERIENCE DETAIL CONTENT
    ============================================== */

    const experienceDetails = {

        canteen: {

            category: "FOOD & BEVERAGE",

            title: "Factory Canteen Assistant",

            period: "Early working experience · Exact dates to be added",

            description:
                "One of my early working experiences was helping at a factory canteen. I was involved in preparing drinks and assisting with daily canteen activities. This experience introduced me to workplace responsibilities and taught me the importance of being cooperative and attentive while carrying out assigned tasks.",

            skills: [
                "Responsibility",
                "Teamwork",
                "Workplace Awareness",
                "Daily Operations"
            ]

        },


        cashier: {

            category: "CUSTOMER SERVICE",

            title: "Cashier",

            period: "Working experience · Exact dates to be added",

            description:
                "I worked as a cashier, handling customer payments and assisting customers during daily transactions. This role gave me practical exposure to customer interaction and helped me understand the importance of accuracy, patience and good communication when handling transactions.",

            skills: [
                "Accuracy",
                "Communication",
                "Customer Service",
                "Responsibility"
            ]

        },


        otak: {

            category: "FOOD BUSINESS",

            title: "Grilled Otak-Otak Seller",

            period: "Before entering university",

            description:
                "Before entering university, I worked selling grilled otak-otak. This was one of my early opportunities to experience food selling and interact directly with customers. Through this experience, I gained exposure to basic selling activities and became more confident in dealing with people.",

            skills: [
                "Confidence",
                "Selling Skills",
                "Customer Interaction",
                "Communication"
            ]

        },


        roti: {

            category: "FOOD SELLING & BUSINESS",

            title: "Roti John Seller",

            period: "Semester break · Exact year to be added",

            description:
                "During my semester break, I worked selling Roti John. This became one of my memorable working experiences because the business was also featured in the news. It gave me the opportunity to experience food selling, interact with customers and understand the effort involved in running a small food business.",

            skills: [
                "Adaptability",
                "Teamwork",
                "Customer Service",
                "Food Selling"
            ]

        },


        ramadan: {

            category: "RETAIL & SALES",

            title: "Ramadan Retail Sales Assistant",

            period: "During Ramadan · Exact year to be added",

            description:
                "I worked selling clothes during a Ramadan sale. I was trusted to manage a sales booth independently, and the sales performance was encouraging. This experience helped me develop confidence in handling responsibilities and communicating with customers in a retail environment.",

            skills: [
                "Sales",
                "Independence",
                "Customer Communication",
                "Responsibility"
            ]

        },


        mitsumi: {

            category: "MANUFACTURING",

            title: "Mitsumi Production Operator",

            period: "Mitsumi · Batu Pahat · Exact dates to be added",

            description:
                "I also worked as a production operator at Mitsumi in Batu Pahat. This experience introduced me to manufacturing operations and workplace procedures. It helped me understand the importance of discipline, following instructions and managing responsibilities within a production environment.",

            skills: [
                "Discipline",
                "Time Management",
                "Work Procedures",
                "Adaptability"
            ]

        },


        thailand: {

            category: "INTERNATIONAL COMMUNITY SERVICE",

            title: "Misi Bakti Serumpun Sawadikap",

            period: "13–16 August 2025 · Satun, Thailand",

            description:
                "I had the opportunity to participate in the Misi Bakti Serumpun Sawadikap community service programme at AB OM Islamic School, Satun, Thailand. The programme was organised by UiTM Johor Branch under the HGD133 Community Service co-curricular course. It gave me an opportunity to experience a different community environment, appreciate cultural differences and learn beyond the classroom.",

            skills: [
                "Cultural Appreciation",
                "Communication",
                "Community Service",
                "Teamwork"
            ]

        },


        halfmoon: {

            category: "ENTREPRENEURSHIP & CHARITY",

            title: "Halfmoon UiTM – Food-Selling Activity",

            period: "UiTM · Exact date to be added",

            description:
                "My friends and I participated in a food-selling activity during Halfmoon at UiTM. Instead of keeping the money collected from our sales, we decided to donate the proceeds to people in need. This experience taught me that entrepreneurship can also be connected to social responsibility and that small contributions can create meaningful impact.",

            skills: [
                "Entrepreneurship",
                "Teamwork",
                "Social Responsibility",
                "Communication"
            ]

        },


        truezeal: {

            category: "PROFESSIONAL EXPERIENCE",

            title: "TRUE ZEAL SDN. BHD. – Industrial Training",

            period: "Semester 4 · Exact training dates to be added",

            description:
                "During my Semester 4 break, I completed my industrial training at TRUE ZEAL SDN. BHD. and was attached to the IT Department. I experienced daily workplace responsibilities and worked on a major Asset Management System project for the company. The project included asset management, an integrated complaint management function, database management and reporting features. I also had opportunities to review the system with my supervisor and demonstrate its functions to staff.",

            skills: [
                "System Development",
                "MySQL",
                "phpMyAdmin",
                "Database Management",
                "PDF & Excel Reporting",
                "Documentation",
                "Problem Solving"
            ]

        }

    };



    /* ==============================================
       08. EXPERIENCE DETAIL MODAL
    ============================================== */

    const detailModal =
        document.getElementById("expDetailModal");

    const detailClose =
        document.getElementById("expDetailClose");

    const modalCategory =
        document.getElementById("expModalCategory");

    const modalTitle =
        document.getElementById("expModalTitle");

    const modalPeriod =
        document.getElementById("expModalPeriod");

    const modalDescription =
        document.getElementById("expModalDescription");

    const modalSkills =
        document.getElementById("expModalSkills");


    function openExperienceDetail(key) {

        const detail =
            experienceDetails[key];


        if (!detail || !detailModal) return;


        modalCategory.textContent =
            detail.category;

        modalTitle.textContent =
            detail.title;

        modalPeriod.textContent =
            detail.period;

        modalDescription.textContent =
            detail.description;


        modalSkills.replaceChildren();


        detail.skills.forEach(function(skill) {

            const tag = document.createElement("span");

            tag.textContent = skill;

            modalSkills.appendChild(tag);

        });


        detailModal.classList.add("open");

        detailModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeExperienceDetail() {

        if (!detailModal) return;


        detailModal.classList.remove("open");

        detailModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }



    document.querySelectorAll("[data-open-detail]").forEach(
        function(button) {

            button.addEventListener("click", function() {

                const key =
                    this.dataset.openDetail;

                openExperienceDetail(key);

            });

        }
    );



    if (detailClose) {

        detailClose.addEventListener(
            "click",
            closeExperienceDetail
        );

    }



    if (detailModal) {

        detailModal.addEventListener("click", function(event) {

            if (event.target === detailModal) {

                closeExperienceDetail();

            }

        });

    }



    /* ==============================================
       09. IMAGE LIGHTBOX
    ============================================== */

    const lightbox =
        document.getElementById("expLightbox");

    const lightboxImage =
        document.getElementById("expLightboxImage");

    const lightboxCaption =
        document.getElementById("expLightboxCaption");

    const lightboxClose =
        document.getElementById("expLightboxClose");


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



    experienceImages.forEach(function(img) {

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
       10. SCROLL REVEAL
    ============================================== */

    const revealElements = document.querySelectorAll(

        ".exp-section-heading, " +
        ".exp-stat-card, " +
        ".exp-category-heading, " +
        ".exp-card, " +
        ".exp-project-section, " +
        ".exp-skill-group, " +
        ".exp-reflection-content, " +
        ".exp-achievement-section, " +
        ".exp-ending"

    );


    revealElements.forEach(function(element) {

        element.classList.add("exp-reveal");

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

            if (!element.closest(".is-hidden")) {

                revealObserver.observe(element);

            }

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
        document.getElementById("expProgress");

    const backTop =
        document.getElementById("expBackTop");


    function updateScroll() {

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


    window.addEventListener("scroll", updateScroll);

    updateScroll();



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

            closeExperienceDetail();

            closeLightbox();

            closeMobileMenu();

        }

    });



    /* ==============================================
       14. INITIAL PAGE STATE
    ============================================== */

    filterExperiences("all");

    updateExperienceClock();

});
