
/* ==================================================
   FARAHVERSE
   INTERACTIVE DIGITAL UNIVERSE
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. CREATE MOVING STAR FIELD
    ============================================== */

    const starField = document.getElementById("starField");

    if (starField) {

        for (let i = 0; i < 75; i++) {

            const star = document.createElement("span");

            star.className = "universe-star";

            star.textContent = Math.random() > 0.7 ? "✦" : "·";

            star.style.left = Math.random() * 100 + "%";

            star.style.top = Math.random() * 100 + "%";

            star.style.fontSize =
                (Math.random() * 9 + 3) + "px";

            star.style.animationDelay =
                (Math.random() * 4) + "s";

            star.style.animationDuration =
                (Math.random() * 3 + 2) + "s";

            starField.appendChild(star);

        }

    }



    /* ==============================================
       02. CINEMATIC ENTRY
    ============================================== */

    const entryScreen =
        document.getElementById("entryScreen");

    const enterWithSound =
        document.getElementById("enterWithSound");

    const enterQuietly =
        document.getElementById("enterQuietly");

    const entryAudioStatus =
        document.getElementById("entryAudioStatus");


    let hasEntered = false;


    function enterUniverse() {

        if (hasEntered) return;

        hasEntered = true;


        if (entryScreen) {

            entryScreen.classList.add("leaving");

            setTimeout(function() {

                entryScreen.style.display = "none";

            }, 1000);

        }


        document.body.classList.add("universe-entered");

        updateClock();

    }



    if (enterWithSound) {

        enterWithSound.addEventListener("click", async function() {

            enterWithSound.disabled = true;

            if (entryAudioStatus) {

                entryAudioStatus.textContent =
                    "PREPARING YOUR SOUNDTRACK...";

            }


            try {

                await playMusic();

                if (entryAudioStatus) {

                    entryAudioStatus.textContent =
                        "SOUNDTRACK ACTIVATED ♫";

                }

            } catch (error) {

                if (entryAudioStatus) {

                    entryAudioStatus.textContent =
                        "MUSIC FILE NOT READY · CHECK AUDIO FOLDER";

                }

            }


            setTimeout(enterUniverse, 450);

        });

    }



    if (enterQuietly) {

        enterQuietly.addEventListener("click", function() {

            pauseMusic();

            enterUniverse();

        });

    }



    /* ==============================================
       03. MALAYSIA LIVE CLOCK & GREETING
    ============================================== */

    const heroClock =
        document.getElementById("heroClock");

    const heroDate =
        document.getElementById("heroDate");

    const clockGreeting =
        document.getElementById("clockGreeting");

    const dashboardDate =
        document.getElementById("dashboardDate");

    const dashboardTime =
        document.getElementById("dashboardTime");

    const heroGreeting =
        document.getElementById("heroGreeting");


    const malaysiaTimeZone = "Asia/Kuala_Lumpur";


    function updateClock() {

        const now = new Date();


        const time = new Intl.DateTimeFormat("en-MY", {

            timeZone: malaysiaTimeZone,

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit",

            hour12: true

        }).format(now);


        const date = new Intl.DateTimeFormat("en-MY", {

            timeZone: malaysiaTimeZone,

            weekday: "long",

            day: "2-digit",

            month: "long",

            year: "numeric"

        }).format(now);


        const hour = Number(

            new Intl.DateTimeFormat("en-MY", {

                timeZone: malaysiaTimeZone,

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


        if (heroClock) {

            heroClock.textContent = time;

        }


        if (heroDate) {

            heroDate.textContent = date.toUpperCase();

        }


        if (clockGreeting) {

            clockGreeting.textContent = greeting + " ♡";

        }


        if (dashboardDate) {

            dashboardDate.textContent = date;

        }


        if (dashboardTime) {

            dashboardTime.textContent = time;

        }


        if (heroGreeting) {

            heroGreeting.textContent =
                greeting + ", WELCOME TO MY WORLD";

        }

    }


    updateClock();

    const clockInterval = setInterval(updateClock, 1000);



    /* ==============================================
       04. HERO TYPING EFFECT
    ============================================== */

    const typingElement =
        document.getElementById("heroTyping");


    const typingWords = [

        "INFORMATION MANAGEMENT STUDENT",

        "CREATIVE EXPLORER",

        "A GIRL WITH BIG DREAMS",

        "ALWAYS LEARNING",

        "A LITTLE UNIVERSE OF DREAMS"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let isDeleting = false;


    function typingAnimation() {

        if (!typingElement) return;


        const currentWord = typingWords[wordIndex];


        if (!isDeleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                isDeleting = true;

                setTimeout(typingAnimation, 1700);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, letterIndex - 1);

            letterIndex--;


            if (letterIndex === 0) {

                isDeleting = false;

                wordIndex =
                    (wordIndex + 1) % typingWords.length;

            }

        }


        setTimeout(
            typingAnimation,
            isDeleting ? 35 : 65
        );

    }


    if (typingElement) {

        typingAnimation();

    }



    /* ==============================================
       05. HOME IMAGE LOADING
    ============================================== */

    const homeImages =
        document.querySelectorAll(".home-image");


    homeImages.forEach(function(img) {

        const photoBox = img.closest(".home-photo");


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
       06. MOBILE NAVIGATION
    ============================================== */

    const menuToggle =
        document.getElementById("farahMenuToggle");

    const navLinks =
        document.getElementById("farahNavLinks");


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
       07. REAL MUSIC PLAYER
    ============================================== */

    const audio =
        document.getElementById("farahAudio");

    const musicToggle =
        document.getElementById("musicToggle");

    const musicMute =
        document.getElementById("musicMute");

    const musicClose =
        document.getElementById("musicClose");

    const musicPlayer =
        document.getElementById("floatingMusicPlayer");

    const musicBars =
        document.getElementById("floatingMusicBars");


    let musicIsPlaying = false;

    let musicIsMuted = false;


    if (audio) {

        audio.volume = 0.35;

    }



    function updateMusicUI() {

        if (musicToggle) {

            musicToggle.textContent =
                musicIsPlaying ? "Ⅱ" : "▶";

            musicToggle.setAttribute(
                "aria-label",
                musicIsPlaying ? "Pause music" : "Play music"
            );

        }


        if (musicMute) {

            musicMute.textContent =
                musicIsMuted ? "×" : "♪";

        }


        if (musicBars) {

            musicBars.classList.toggle(
                "playing",
                musicIsPlaying && !musicIsMuted
            );

        }


        if (musicPlayer) {

            musicPlayer.classList.toggle(
                "music-active",
                musicIsPlaying && !musicIsMuted
            );

        }

    }



    async function playMusic() {

        if (!audio) {

            throw new Error("Audio element unavailable.");

        }


        try {

            await audio.play();

            musicIsPlaying = true;

            updateMusicUI();

            return true;

        } catch (error) {

            musicIsPlaying = false;

            updateMusicUI();

            throw error;

        }

    }



    function pauseMusic() {

        if (!audio) return;

        audio.pause();

        musicIsPlaying = false;

        updateMusicUI();

    }



    if (audio) {

        audio.addEventListener("play", function() {

            musicIsPlaying = true;

            updateMusicUI();

        });


        audio.addEventListener("pause", function() {

            musicIsPlaying = false;

            updateMusicUI();

        });


        audio.addEventListener("error", function() {

            const musicInfo =
                document.querySelector(".floating-music-info small");

            if (musicInfo) {

                musicInfo.textContent =
                    "Add dreamscape-voyage.mp3 to audio folder";

            }

        });

    }



    /* PLAY / PAUSE */

    if (musicToggle) {

        musicToggle.addEventListener("click", async function() {

            if (musicIsPlaying) {

                pauseMusic();

            } else {

                try {

                    await playMusic();

                } catch (error) {

                    alert(
                        "Music file not found. Please check your audio folder."
                    );

                }

            }

        });

    }



    /* MUTE / UNMUTE */

    if (musicMute && audio) {

        musicMute.addEventListener("click", function() {

            musicIsMuted = !musicIsMuted;

            audio.muted = musicIsMuted;

            updateMusicUI();

        });

    }



    /* COLLAPSE / EXPAND MUSIC PLAYER */

    if (musicClose && musicPlayer) {

        musicClose.addEventListener("click", function() {

            const collapsed =
                musicPlayer.classList.toggle("collapsed");


            musicClose.textContent =
                collapsed ? "♫" : "×";

            musicClose.setAttribute(
                "aria-label",
                collapsed ? "Expand music player" : "Collapse music player"
            );

        });

    }



    /* ==============================================
       08. DAILY INSPIRATION
    ============================================== */

    const quotes = [

        "Small steps are still progress. Keep moving forward. ♡",

        "You do not have to be perfect to be proud of yourself.",

        "Your journey is yours. Take your time and enjoy it.",

        "Keep dreaming, even when the road feels uncertain.",

        "Be proud of how far you have come.",

        "The best version of you is still being created.",

        "Make memories, collect experiences and never stop learning.",

        "Your story is unique. Never compare your chapter to someone else's.",

        "Sometimes, the bravest thing is simply to begin again.",

        "Keep your heart kind and your dreams bigger than your fears.",

        "Every new day gives you another chance to grow.",

        "You are allowed to change, explore and become someone new."

    ];


    const dailyQuote =
        document.getElementById("dailyQuote");

    const newQuote =
        document.getElementById("newQuote");

    const inspirationText =
        document.getElementById("inspirationText");

    const refreshInspiration =
        document.getElementById("refreshInspiration");


    let lastQuoteIndex = -1;


    function getRandomQuote() {

        let index;


        do {

            index = Math.floor(
                Math.random() * quotes.length
            );

        } while (
            index === lastQuoteIndex &&
            quotes.length > 1
        );


        lastQuoteIndex = index;

        return quotes[index];

    }



    function changeQuote() {

        const quote = getRandomQuote();


        if (dailyQuote) {

            dailyQuote.textContent = quote;

        }


        if (inspirationText) {

            inspirationText.textContent = quote;

        }

    }


    changeQuote();


    if (newQuote) {

        newQuote.addEventListener("click", changeQuote);

    }


    if (refreshInspiration) {

        refreshInspiration.addEventListener("click", changeQuote);

    }



    /* ==============================================
       09. SCROLL REVEAL
    ============================================== */

    const revealElements =
        document.querySelectorAll(".home-reveal");


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
                threshold: 0.12
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
       10. SCROLL PROGRESS
    ============================================== */

    const progressBar =
        document.getElementById("farahProgress");

    const backTop =
        document.getElementById("farahBackTop");


    function updateScroll() {

        const scrollTop =
            window.scrollY || document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;


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
       12. CURSOR GLOW
    ============================================== */

    let cursorGlow = null;


    if (window.matchMedia("(pointer: fine)").matches) {

        cursorGlow = document.createElement("div");

        cursorGlow.className = "farah-cursor-glow";

        document.body.appendChild(cursorGlow);


        document.addEventListener("pointermove", function(event) {

            cursorGlow.style.left = event.clientX + "px";

            cursorGlow.style.top = event.clientY + "px";

        });

    }



    /* ==============================================
       13. CLICK SPARKLES
    ============================================== */

    document.addEventListener("click", function(event) {

        const sparkle = document.createElement("span");

        sparkle.className = "farah-click-sparkle";

        sparkle.textContent =
            Math.random() > 0.5 ? "✦" : "✧";


        sparkle.style.left = event.clientX + "px";

        sparkle.style.top = event.clientY + "px";


        document.body.appendChild(sparkle);


        setTimeout(function() {

            sparkle.remove();

        }, 850);

    });



    /* ==============================================
       14. SURPRISE MODAL
    ============================================== */

    const modal =
        document.getElementById("farahModal");

    const modalMessage =
        document.getElementById("modalMessage");

    const modalClose =
        document.getElementById("farahModalClose");

    const modalDone =
        document.getElementById("modalDone");


    const surpriseMessages = [

        "You are capable of creating a beautiful life, one little step at a time. ♡",

        "Never forget the little girl who once dreamed of everything you are becoming.",

        "Your future is waiting for you. Keep showing up for yourself.",

        "You are stronger than the days that made you doubt yourself.",

        "Let your dreams be bigger than your fears. ✨",

        "Life is a journey. Enjoy the moments between the milestones.",

        "Never stop discovering new versions of yourself."

    ];


    function openSurprise() {

        if (!modal) return;


        const message = surpriseMessages[
            Math.floor(Math.random() * surpriseMessages.length)
        ];


        modalMessage.textContent = message;

        modal.classList.add("open");

        document.body.style.overflow = "hidden";

    }


    function closeSurprise() {

        if (!modal) return;

        modal.classList.remove("open");

        document.body.style.overflow = "";

    }



    /* Open surprise by clicking daily reminder widget */

    if (dailyQuote) {

        dailyQuote.style.cursor = "pointer";

        dailyQuote.addEventListener("click", openSurprise);

    }


    if (modalClose) {

        modalClose.addEventListener("click", closeSurprise);

    }


    if (modalDone) {

        modalDone.addEventListener("click", closeSurprise);

    }


    if (modal) {

        modal.addEventListener("click", function(event) {

            if (event.target === modal) {

                closeSurprise();

            }

        });

    }



    /* ==============================================
       15. ESCAPE KEY
    ============================================== */

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            closeSurprise();

            closeMobileMenu();

        }

    });



    /* ==============================================
       16. PAGE INITIALISATION
    ============================================== */

    updateClock();

    updateMusicUI();

});
