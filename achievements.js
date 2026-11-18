
/* ==================================================
   FARAHVERSE
   HALL OF ACHIEVEMENTS
   INTERACTIVE SYSTEM
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. MOVING STAR SYSTEM
    ============================================== */

    const starField =
        document.getElementById("achStars");


    if (starField) {

        for (let i = 0; i < 65; i++) {

            const star = document.createElement("span");

            star.className = "ach-star-particle";

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

    const achClock =
        document.getElementById("achClock");

    const achDate =
        document.getElementById("achDate");

    const achGreeting =
        document.getElementById("achGreeting");

    const achClockGreeting =
        document.getElementById("achClockGreeting");


    function updateAchievementClock() {

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


        if (achClock) {

            achClock.textContent = time;

        }


        if (achDate) {

            achDate.textContent =
                date.toUpperCase();

        }


        if (achGreeting) {

            achGreeting.textContent =
                greeting + " · EVERY MILESTONE MATTERS";

        }


        if (achClockGreeting) {

            achClockGreeting.textContent =
                greeting + " ♡";

        }

    }


    updateAchievementClock();

    setInterval(updateAchievementClock, 1000);



    /* ==============================================
       03. HERO TYPING ANIMATION
    ============================================== */

    const typingElement =
        document.getElementById("achTyping");


    const typingWords = [

        "LITTLE BEGINNINGS",

        "SPORTS & LEADERSHIP",

        "ACADEMIC MILESTONES",

        "UNIVERSITY EXPERIENCES",

        "A JOURNEY OF GROWTH"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeAchievement() {

        if (!typingElement) return;


        const currentWord =
            typingWords[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeAchievement, 1600);

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
            typeAchievement,
            deleting ? 35 : 65
        );

    }


    if (typingElement) {

        typeAchievement();

    }



    /* ==============================================
       04. IMAGE LOADING
    ============================================== */

    const achievementImages =
        document.querySelectorAll(".achievement-img");


    achievementImages.forEach(function(img) {

        const photoBox =
            img.closest(".ach-photo");


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
        document.getElementById("achMenuToggle");

    const navLinks =
        document.getElementById("achNavLinks");


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
       06. ACHIEVEMENT CHAPTER FILTER
    ============================================== */

    const filterButtons =
        document.querySelectorAll(".ach-filter");

    const chapters =
        document.querySelectorAll(".ach-chapter");

    const filterCount =
        document.getElementById("achFilterCount");


    function filterAchievements(selectedStage) {

        let visibleCount = 0;


        chapters.forEach(function(chapter) {

            const stage =
                chapter.dataset.chapter;


            const shouldShow =
                selectedStage === "all" ||
                stage === selectedStage;


            chapter.classList.toggle(
                "is-filtered-out",
                !shouldShow
            );


            if (shouldShow) {

                visibleCount++;

                chapter.querySelectorAll(
                    ".ach-reveal"
                ).forEach(function(element) {

                    element.classList.add("visible");

                });

            }

        });



        if (filterCount) {

            if (selectedStage === "all") {

                filterCount.textContent =
                    "SHOWING ALL FOUR CHAPTERS";

            } else {

                filterCount.textContent =
                    "SHOWING " +
                    selectedStage.toUpperCase() +
                    " CHAPTER · " +
                    visibleCount +
                    " SECTION";

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


            filterAchievements(selectedStage);

        });

    });



    /* ==============================================
       07. ACHIEVEMENT DETAIL CONTENT
    ============================================== */

    const achievementDetails = {

        tokoh: {

            category: "PRIMARY SCHOOL · SPORTS RECOGNITION",

            title: "Tokoh Sukan Kokurikulum",

            description:
                "During my primary school years at Sekolah Kebangsaan Parit Bilal, I was honoured to receive the Tokoh Sukan Kokurikulum award. This recognition reflected my active participation in school sports and co-curricular activities. It remains one of my proudest memories from primary school."

        },


        netball: {

            category: "PRIMARY SCHOOL · MSSJ",

            title: "Netball Champion & Johor Representative",

            description:
                "I was active in the school netball team and became a champion at school level. My playing position was Goal Attack (GA). I was also selected to represent Johor in netball at the MSSJ level. This experience helped me develop teamwork, discipline and confidence."

        },


        handball: {

            category: "PRIMARY SCHOOL · MSSJ",

            title: "Johor Handball Representative",

            description:
                "I was selected to represent Johor in handball at the MSSJ level. Being given this opportunity was an important part of my sporting journey and allowed me to experience competition beyond the school environment."

        },


        hockey: {

            category: "PRIMARY SCHOOL · MSSM",

            title: "School Hockey Representative",

            description:
                "I represented my school in hockey at the MSSM level. This was a meaningful opportunity in my sporting journey and gave me valuable experience in representing my school in a competitive environment."

        },


        "primary-prefect": {

            category: "PRIMARY SCHOOL · LEADERSHIP",

            title: "Primary School Prefect",

            description:
                "I was appointed as a school prefect during my primary school years at Sekolah Kebangsaan Parit Bilal. This role introduced me to leadership, discipline and responsibility from a young age."

        },


        "secondary-prefect": {

            category: "SECONDARY SCHOOL · LEADERSHIP",

            title: "School Prefect for Three Consecutive Years",

            description:
                "At SMK Datin Onn Jaafar, I served as a school prefect for three consecutive years. This experience helped me develop leadership, responsibility, discipline and confidence while carrying out my duties as a student leader."

        },


        emcee: {

            category: "SECONDARY SCHOOL · PUBLIC SPEAKING",

            title: "School Assembly Emcee",

            description:
                "During my time at SMK Datin Onn Jaafar, I was frequently selected as the emcee for school assembly programmes. This gave me opportunities to speak in front of students and helped me become more confident in public speaking."

        },


        javelin: {

            category: "SECONDARY SCHOOL · SPORTS",

            title: "Javelin Throw Champion",

            description:
                "I became the champion in javelin throw during the school sports day at SMK Datin Onn Jaafar. This was one of my memorable sporting achievements during my secondary school years."

        },


        discus: {

            category: "SECONDARY SCHOOL · SPORTS",

            title: "Discus Throw Champion",

            description:
                "I achieved first place in discus throw during the school sports day at SMK Datin Onn Jaafar. This achievement was another memorable moment from my involvement in school sports."

        },


        otr: {

            category: "SECONDARY SCHOOL · ACADEMIC RECOGNITION",

            title: "Anugerah Mencapai OTR",

            description:
                "During the middle of the school year at SMK Tunku Putra, I received the Anugerah Mencapai OTR in recognition of my academic progress. It was a meaningful encouragement during my preparation for the SPM examination."

        },


        spm: {

            category: "SECONDARY SCHOOL · SPM 2023",

            title: "Seven As in Actual SPM",

            description:
                "My SPM journey involved preparation, challenges and determination. I achieved five As in the SPM trial examination before obtaining seven As in the actual SPM 2023 examination. This achievement made my hard work and preparation worthwhile."

        },


        tasawwur: {

            category: "SECONDARY SCHOOL · SUBJECT RECOGNITION",

            title: "Tasawwur Islam – 98%",

            description:
                "I scored 98% in Tasawwur Islam during the SPM trial examination. As a special recognition, I received a gift from my favourite Tasawwur Islam teacher. It remains a memorable academic moment from my secondary school years."

        },


        tvet: {

            category: "SECONDARY SCHOOL · TVET 2023",

            title: "TVET Student Excellence Programme",

            description:
                "I was selected as one of the three best Business Studies students in my class to participate in the TVET Student Excellence Programme 2023 at Universiti Tun Hussein Onn Malaysia (UTHM). This opportunity allowed me to explore further learning and development in the field of technical and vocational education."

        },


        "business-awards": {

            category: "SECONDARY SCHOOL · BUSINESS RECOGNITION",

            title: "Business Appreciation & Student Awards",

            description:
                "I received recognition at Apresiasi Perniagaan. I also received the High Commitment Award and the Learning Ability Award. These recognitions were meaningful reminders of my effort and commitment during my secondary school journey."

        },


        ceremony: {

            category: "SECONDARY SCHOOL · SPM 2023",

            title: "SPM Excellence Awards Ceremony",

            description:
                "I had the opportunity to attend the SPM 2023 Excellence Awards Ceremony at DUN Parit Yaani. The ceremony was officiated by the Johor State EXCO for Education and Information and YB Datuk Najib Sammuri. It was a special opportunity to celebrate academic achievements."

        },


        kor: {

            category: "DIPLOMA · LEADERSHIP 2025",

            title: "Secretary – KOR Community Service",

            description:
                "During my diploma studies, I was given the opportunity to serve as the secretary for KOR Community Service 2025. This role allowed me to experience organisational responsibilities, communication and teamwork while contributing to community activities."

        },


        thailand: {

            category: "DIPLOMA · INTERNATIONAL COMMUNITY SERVICE",

            title: "Misi Bakti Serumpun Sawadikap",

            description:
                "I participated in the Misi Bakti Serumpun Sawadikap community service programme from 13 to 16 August 2025 at AB OM Islamic School, Satun, Thailand. The programme was organised by UiTM Johor Branch under the HGD133 Community Service co-curricular course. It was a meaningful opportunity to experience a different community environment."

        },


        halfmoon: {

            category: "DIPLOMA · ENTREPRENEURSHIP & CHARITY",

            title: "Halfmoon Food-Selling Activity",

            description:
                "My friends and I participated in a food-selling activity during Halfmoon at UiTM. Instead of keeping the money collected from our sales, we decided to donate the proceeds to people in need. This experience showed me how a small business activity can also contribute to social responsibility."

        },


        recycled: {

            category: "DIPLOMA · FIRST PLACE",

            title: "Recycled Clothing Competition",

            description:
                "My friends and I achieved first place in a recycled clothing competition associated with Sekolah Gemereh, Segamat. This was a memorable achievement that allowed us to express creativity and work together as a team."

        },


        internship: {

            category: "DIPLOMA · INDUSTRIAL TRAINING",

            title: "TRUE ZEAL SDN. BHD.",

            description:
                "During my fourth semester break, I completed my industrial training at TRUE ZEAL SDN. BHD. and was attached to the IT Department. One of my major responsibilities was developing an Asset Management System for the company. The experience allowed me to apply academic knowledge in a real workplace."

        },


        ams: {

            category: "DIPLOMA · MAJOR PROJECT",

            title: "Asset Management System",

            description:
                "The Asset Management System was one of my major projects during industrial training at TRUE ZEAL SDN. BHD. The system included asset management, an integrated complaint management function, MySQL database management through phpMyAdmin, and dashboard and reporting features. It also provided options for PDF and Excel reports. The project gave me valuable practical experience in system development."

        },


        cgpa: {

            category: "DIPLOMA · ACADEMIC CONSISTENCY",

            title: "Maintaining a CGPA Above 3.00",

            description:
                "Throughout the semesters I have completed so far, I have maintained a CGPA above 3.00. I continue to work towards improving my academic performance and developing my knowledge throughout my diploma studies."

        }

    };



    /* ==============================================
       08. ACHIEVEMENT DETAIL MODAL
    ============================================== */

    const detailModal =
        document.getElementById("achDetailModal");

    const modalClose =
        document.getElementById("achModalClose");

    const modalCategory =
        document.getElementById("achModalCategory");

    const modalTitle =
        document.getElementById("achModalTitle");

    const modalDescription =
        document.getElementById("achModalDescription");


    function openAchievementDetail(key) {

        const detail =
            achievementDetails[key];


        if (!detail || !detailModal) return;


        modalCategory.textContent =
            detail.category;

        modalTitle.textContent =
            detail.title;

        modalDescription.textContent =
            detail.description;


        detailModal.classList.add("open");

        detailModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }



    function closeAchievementDetail() {

        if (!detailModal) return;


        detailModal.classList.remove("open");

        detailModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }



    document.querySelectorAll("[data-ach-detail]").forEach(
        function(button) {

            if (button.tagName !== "BUTTON") return;


            button.addEventListener("click", function() {

                const key =
                    this.dataset.achDetail;

                openAchievementDetail(key);

            });

        }
    );



    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeAchievementDetail
        );

    }



    if (detailModal) {

        detailModal.addEventListener("click", function(event) {

            if (event.target === detailModal) {

                closeAchievementDetail();

            }

        });

    }



    /* ==============================================
       09. IMAGE LIGHTBOX
    ============================================== */

    const lightbox =
        document.getElementById("achLightbox");

    const lightboxImage =
        document.getElementById("achLightboxImage");

    const lightboxCaption =
        document.getElementById("achLightboxCaption");

    const lightboxClose =
        document.getElementById("achLightboxClose");


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



    achievementImages.forEach(function(img) {

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

        ".ach-stat-card, " +
        ".ach-section-heading, " +
        ".ach-timeline-item, " +
        ".ach-chapter-header, " +
        ".ach-preschool-feature, " +
        ".ach-featured-record, " +
        ".ach-award-card, " +
        ".ach-leadership-feature, " +
        ".ach-otr-feature, " +
        ".ach-spm-feature, " +
        ".ach-internship-feature, " +
        ".ach-ams-feature, " +
        ".ach-cgpa-feature, " +
        ".ach-certificate-item, " +
        ".ach-reflection-content, " +
        ".ach-ending"

    );


    revealElements.forEach(function(element) {

        element.classList.add("ach-reveal");

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
        document.getElementById("achProgress");

    const backTop =
        document.getElementById("achBackTop");


    function updateAchievementScroll() {

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


    window.addEventListener("scroll", updateAchievementScroll);

    updateAchievementScroll();



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

            closeAchievementDetail();

            closeLightbox();

            closeMobileMenu();

        }

    });



    /* ==============================================
       14. INITIAL STATE
    ============================================== */

    filterAchievements("all");

    updateAchievementClock();


});
