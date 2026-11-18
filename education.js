
/* ==================================================
   FARAHVERSE
   MY LEARNING UNIVERSE
   INTERACTIVE EDUCATION SYSTEM
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. MOVING STAR SYSTEM
    ============================================== */

    const starField =
        document.getElementById("eduStarField");


    if (starField) {

        for (let i = 0; i < 65; i++) {

            const star = document.createElement("span");

            star.className = "edu-star";

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

    const eduClock =
        document.getElementById("eduClock");

    const eduDate =
        document.getElementById("eduDate");

    const eduGreeting =
        document.getElementById("eduGreeting");

    const eduClockGreeting =
        document.getElementById("eduClockGreeting");


    function updateEducationClock() {

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


        if (eduClock) {

            eduClock.textContent = time;

        }


        if (eduDate) {

            eduDate.textContent =
                date.toUpperCase();

        }


        if (eduGreeting) {

            eduGreeting.textContent =
                greeting + " · EVERY CLASSROOM HAS A STORY";

        }


        if (eduClockGreeting) {

            eduClockGreeting.textContent =
                greeting + " ♡";

        }

    }


    updateEducationClock();

    setInterval(updateEducationClock, 1000);



    /* ==============================================
       03. HERO TYPING ANIMATION
    ============================================== */

    const typingElement =
        document.getElementById("eduTyping");


    const typingWords = [

        "A LITTLE LEARNER",

        "A SCHOOL GIRL",

        "A CURIOUS STUDENT",

        "AN INFORMATION MANAGEMENT STUDENT",

        "A UNIVERSITY STUDENT",

        "ALWAYS LEARNING AND GROWING"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeEducation() {

        if (!typingElement) return;


        const currentWord =
            typingWords[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEducation, 1600);

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
            typeEducation,
            deleting ? 35 : 65
        );

    }


    if (typingElement) {

        typeEducation();

    }



    /* ==============================================
       04. IMAGE LOADING SYSTEM
    ============================================== */

    const eduImages =
        document.querySelectorAll(".edu-image-source");


    eduImages.forEach(function(img) {

        const photoBox =
            img.closest(".edu-photo");


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
        document.getElementById("eduMenuToggle");

    const navLinks =
        document.getElementById("eduNavLinks");


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
       06. EDUCATION STAGE FILTER
    ============================================== */

    const filterButtons =
        document.querySelectorAll(".edu-filter");

    const chapters =
        document.querySelectorAll(".edu-chapter");

    const filterCount =
        document.getElementById("eduFilterCount");


    function filterEducation(selectedStage) {

        let visibleCount = 0;


        chapters.forEach(function(chapter) {

            const stage =
                chapter.dataset.stage;


            const shouldShow =
                selectedStage === "all" ||
                stage === selectedStage;


            chapter.classList.toggle(
                "is-hidden",
                !shouldShow
            );


            if (shouldShow) {

                visibleCount++;

                chapter.querySelectorAll(
                    ".edu-reveal"
                ).forEach(function(element) {

                    element.classList.add("visible");

                });

            }

        });



        if (filterCount) {

            if (selectedStage === "all") {

                filterCount.textContent =
                    "SHOWING ALL FIVE CHAPTERS";

            } else {

                filterCount.textContent =
                    "SHOWING " +
                    selectedStage.toUpperCase() +
                    " · " +
                    visibleCount +
                    " CHAPTER(S)";

            }

        }

    }



    filterButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const selectedStage =
                this.dataset.filter;


            filterButtons.forEach(function(item) {

                item.classList.remove("active");

            });


            this.classList.add("active");

            filterEducation(selectedStage);

        });

    });



    /* ==============================================
       07. SEMESTER TAB SYSTEM
    ============================================== */

    const semesterTabs =
        document.querySelectorAll(".edu-semester-tab");

    const semesterPanels =
        document.querySelectorAll(".edu-semester-panel");


    function openSemester(selectedSemester) {

        semesterTabs.forEach(function(tab) {

            const isActive =
                tab.dataset.semester === selectedSemester;


            tab.classList.toggle("active", isActive);

            tab.setAttribute(
                "aria-selected",
                isActive ? "true" : "false"
            );

        });


        semesterPanels.forEach(function(panel) {

            const isActive =
                panel.id === selectedSemester;


            panel.hidden = !isActive;

            panel.classList.toggle("active", isActive);

        });

    }



    semesterTabs.forEach(function(tab) {

        tab.addEventListener("click", function() {

            openSemester(this.dataset.semester);

        });

    });



    /* ==============================================
       08. COURSE DETAIL MODAL
    ============================================== */

    const courseModal =
        document.getElementById("eduCourseModal");

    const courseModalClose =
        document.getElementById("eduCourseModalClose");

    const modalCourseTitle =
        document.getElementById("eduModalCourseTitle");

    const modalCode =
        document.getElementById("eduModalCode");

    const modalCredit =
        document.getElementById("eduModalCredit");

    const modalElectiveRow =
        document.getElementById("eduModalElectiveRow");

    const modalElective =
        document.getElementById("eduModalElective");


    function openCourseModal(course) {

        if (!courseModal) return;


        const code = course.dataset.code;

        const title = course.dataset.title;

        const credit = course.dataset.credit;

        const elective = course.dataset.elective;


        modalCourseTitle.textContent = title;

        modalCode.textContent = code;

        modalCredit.textContent =
            credit + (credit === "1.0" ? " Credit Hour" : " Credit Hours");


        if (elective) {

            modalElectiveRow.hidden = false;

            modalElective.textContent = elective;

        } else {

            modalElectiveRow.hidden = true;

        }


        courseModal.classList.add("open");

        courseModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeCourseModal() {

        if (!courseModal) return;


        courseModal.classList.remove("open");

        courseModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }



    document.querySelectorAll(".edu-course-card").forEach(
        function(card) {

            card.addEventListener("click", function() {

                openCourseModal(this);

            });

        }
    );



    if (courseModalClose) {

        courseModalClose.addEventListener(
            "click",
            closeCourseModal
        );

    }



    if (courseModal) {

        courseModal.addEventListener("click", function(event) {

            if (event.target === courseModal) {

                closeCourseModal();

            }

        });

    }



    /* ==============================================
       09. LEARNING AREA DETAILS
    ============================================== */

    const learningDetails = {

        information: {

            icon: "📚",

            title: "Information Management",

            description:
                "This learning area introduces me to the organisation, management and accessibility of information. Relevant subjects include Introduction to Information Management, Introduction to Information Skills and Organization and Access to Information. These subjects help me understand how information can be organised and managed."

        },


        records: {

            icon: "🗄️",

            title: "Records & Archives",

            description:
                "This area introduces the management of records throughout their life cycle, including records centre management, electronic recordkeeping and archival administration. Relevant subjects include Foundation of Records Management, Fundamentals of Records Center Management, Introduction to Electronic Recordkeeping and Foundation of Archives Administration."

        },


        technology: {

            icon: "💻",

            title: "Information Technology",

            description:
                "This area covers the use of technology in information agencies and professional information environments. Relevant subjects include Information and Communication Technology Application, Information Technology Application in Information Agencies, Computer System Operation, Programming for Information Professional and Introduction to Web Content Management and Design."

        },


        database: {

            icon: "🗃️",

            title: "Database & Information Organisation",

            description:
                "This learning area introduces database concepts, metadata development, cataloging and information organisation. Relevant subjects include Metadata Development in Information Environment, Introduction to Cataloging and Database for Business Information Professionals."

        },


        communication: {

            icon: "🎨",

            title: "Communication & Multimedia",

            description:
                "This area combines communication, digital media and information presentation. Relevant subjects include Human Communication for Information Professionals, Social Media Literacy, Multimedia for Information Presentation, Electronic Publishing and Outreach Programs of Information Agencies."

        },


        professional: {

            icon: "🌱",

            title: "Professional Development",

            description:
                "This area supports my personal and professional development through management, entrepreneurship, communication and practical workplace learning. Relevant subjects include Fundamentals of Management, Fundamentals of Entrepreneurship, English for Communicative Competence and Industrial Training."

        }

    };



    /* ==============================================
       10. LEARNING AREA MODAL
    ============================================== */

    const learningModal =
        document.getElementById("eduLearningModal");

    const learningModalClose =
        document.getElementById("eduLearningModalClose");

    const learningIcon =
        document.getElementById("eduLearningIcon");

    const learningTitle =
        document.getElementById("eduLearningTitle");

    const learningDescription =
        document.getElementById("eduLearningDescription");


    function openLearningModal(key) {

        const detail =
            learningDetails[key];


        if (!detail || !learningModal) return;


        learningIcon.textContent = detail.icon;

        learningTitle.textContent = detail.title;

        learningDescription.textContent = detail.description;


        learningModal.classList.add("open");

        learningModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeLearningModal() {

        if (!learningModal) return;


        learningModal.classList.remove("open");

        learningModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }



    document.querySelectorAll("[data-learning]").forEach(
        function(button) {

            button.addEventListener("click", function() {

                openLearningModal(this.dataset.learning);

            });

        }
    );



    if (learningModalClose) {

        learningModalClose.addEventListener(
            "click",
            closeLearningModal
        );

    }



    if (learningModal) {

        learningModal.addEventListener("click", function(event) {

            if (event.target === learningModal) {

                closeLearningModal();

            }

        });

    }



    /* ==============================================
       11. IMAGE LIGHTBOX
    ============================================== */

    const lightbox =
        document.getElementById("eduLightbox");

    const lightboxImage =
        document.getElementById("eduLightboxImage");

    const lightboxCaption =
        document.getElementById("eduLightboxCaption");

    const lightboxClose =
        document.getElementById("eduLightboxClose");


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



    eduImages.forEach(function(img) {

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
       12. SCROLL REVEAL
    ============================================== */

    const revealElements = document.querySelectorAll(

        ".edu-section-heading, " +
        ".edu-stat-card, " +
        ".edu-timeline-item, " +
        ".edu-chapter-header, " +
        ".edu-card, " +
        ".edu-academic-profile, " +
        ".edu-subject-section, " +
        ".edu-learning-card, " +
        ".edu-memory-card, " +
        ".edu-philosophy-content, " +
        ".edu-next-section"

    );


    revealElements.forEach(function(element) {

        element.classList.add("edu-reveal");

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
        document.getElementById("eduProgress");

    const backTop =
        document.getElementById("eduBackTop");


    function updateEducationScroll() {

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


    window.addEventListener("scroll", updateEducationScroll);

    updateEducationScroll();



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
       15. ESCAPE KEY
    ============================================== */

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            closeCourseModal();

            closeLearningModal();

            closeLightbox();

            closeMobileMenu();

        }

    });



    /* ==============================================
       16. INITIAL PAGE STATE
    ============================================== */

    filterEducation("all");

    openSemester("semester1");

    updateEducationClock();


});
