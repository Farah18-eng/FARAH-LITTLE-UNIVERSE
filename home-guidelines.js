
/* =====================================================
   FARAHVERSE - HOME GUIDELINES & INTERACTIVE FEATURES
   File: js/home-guidelines.js
   Compatible with current FARAHVERSE index.html
===================================================== */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        /* =============================================
           1. ACCESSIBILITY PANEL
        ============================================= */

        const body = document.body;

        const accessToggle =
            document.getElementById("accessibilityToggle");

        const accessPanel =
            document.getElementById("accessibilityOptions");

        const contrastToggle =
            document.getElementById("contrastToggle");

        const motionToggle =
            document.getElementById("motionToggle");

        const textOnlyToggle =
            document.getElementById("textOnlyToggle");

        const fontIncrease =
            document.getElementById("fontIncrease");

        const fontDecrease =
            document.getElementById("fontDecrease");

        const fontReset =
            document.getElementById("fontReset");

        const accessibilityReset =
            document.getElementById("accessibilityReset");

        let fontScale = 1;


        if (accessToggle && accessPanel) {

            accessToggle.addEventListener("click", function () {

                const willOpen = accessPanel.hidden;

                accessPanel.hidden = !willOpen;

                accessToggle.setAttribute(
                    "aria-expanded",
                    String(willOpen)
                );

            });

        }


        function setPressed(button, isPressed) {

            if (button) {
                button.setAttribute(
                    "aria-pressed",
                    String(isPressed)
                );
            }

        }


        function setFontScale(nextScale) {

            fontScale = Math.max(
                0.85,
                Math.min(1.4, nextScale)
            );

            body.style.setProperty(
                "--guide-font-scale",
                fontScale.toFixed(2)
            );

            body.classList.add(
                "guideline-font-adjusted"
            );

        }


        fontIncrease?.addEventListener("click", function () {

            setFontScale(fontScale + 0.1);

        });


        fontDecrease?.addEventListener("click", function () {

            setFontScale(fontScale - 0.1);

        });


        fontReset?.addEventListener("click", function () {

            fontScale = 1;

            body.style.setProperty(
                "--guide-font-scale",
                "1"
            );

            body.classList.add(
                "guideline-font-adjusted"
            );

        });


        contrastToggle?.addEventListener("click", function () {

            const active = body.classList.toggle(
                "guideline-high-contrast"
            );

            setPressed(contrastToggle, active);

        });


        motionToggle?.addEventListener("click", function () {

            const active = body.classList.toggle(
                "guideline-reduced-motion"
            );

            setPressed(motionToggle, active);

        });


        textOnlyToggle?.addEventListener("click", function () {

            const active = body.classList.toggle(
                "guideline-text-only"
            );

            setPressed(textOnlyToggle, active);

        });


        accessibilityReset?.addEventListener("click", function () {

            body.classList.remove(
                "guideline-high-contrast",
                "guideline-reduced-motion",
                "guideline-text-only",
                "guideline-font-adjusted"
            );

            fontScale = 1;

            body.style.removeProperty(
                "--guide-font-scale"
            );

            setPressed(contrastToggle, false);
            setPressed(motionToggle, false);
            setPressed(textOnlyToggle, false);

        });



        /* =============================================
           2. GLOBAL WEBSITE SEARCH
        ============================================= */

        const pages = [

            {
                name: "Home",
                url: "index.html",
                keywords: "welcome farahverse personal digital world dreams universe social galaxy"
            },

            {
                name: "Biodata",
                url: "biodata.html",
                keywords: "profile about farah personal interests photography travel cooking games sports"
            },

            {
                name: "Experience",
                url: "experience.html",
                keywords: "work cashier roti john canteen otak otak internship true zeal asset management complaint database reports mitsumi"
            },

            {
                name: "Achievements",
                url: "achievements.html",
                keywords: "awards sports netball hockey handball MSSJ MSSM OTR SPM handwriting javelin discus"
            },

            {
                name: "Education",
                url: "education.html",
                keywords: "preschool primary secondary diploma uitm segamat SI110 subjects school course semester"
            },

            {
                name: "Family",
                url: "family.html",
                keywords: "father mother sister brother family raya siblings memories"
            },

            {
                name: "Friends",
                url: "friends.html",
                keywords: "puyie best friend friendship school university support memories"
            },

            {
                name: "Gallery",
                url: "gallery.html",
                keywords: "photos pictures portrait school sports solo OOTD friends university work internship"
            },

            {
                name: "Contact",
                url: "contact.html",
                keywords: "email instagram tiktok message contact connect"
            }

        ];


        const searchForm =
            document.getElementById("siteSearchForm");

        const searchInput =
            document.getElementById("siteSearchInput");

        const searchResults =
            document.getElementById("siteSearchResults");


        function renderSearchMessage(message) {

            if (!searchResults) return;

            searchResults.replaceChildren();

            const paragraph = document.createElement("p");

            paragraph.textContent = message;

            searchResults.appendChild(paragraph);

        }


        function performSearch() {

            if (!searchInput || !searchResults) return;

            const query = searchInput.value
                .trim()
                .toLowerCase();

            searchResults.replaceChildren();


            if (!query) {

                renderSearchMessage(
                    "Please enter a keyword to search."
                );

                return;

            }


            const terms = query
                .split(/\s+/)
                .filter(Boolean);


            const matches = pages.filter(function (page) {

                const searchable = (
                    page.name + " " + page.keywords
                ).toLowerCase();

                return terms.every(function (term) {

                    return searchable.includes(term);

                });

            });


            if (!matches.length) {

                renderSearchMessage(
                    "No matching pages found. Try another keyword."
                );

                return;

            }


            const heading = document.createElement("p");

            heading.textContent =
                matches.length + " page(s) found:";

            searchResults.appendChild(heading);


            matches.forEach(function (page) {

                const link = document.createElement("a");

                link.className =
                    "guideline-search-result";

                link.href = page.url;

                link.textContent =
                    page.name + " ->";

                searchResults.appendChild(link);

            });

        }


        searchForm?.addEventListener("submit", function (event) {

            event.preventDefault();

            performSearch();

        });


        searchInput?.addEventListener("input", function () {

            if (this.value.trim()) {

                performSearch();

            } else {

                renderSearchMessage(
                    "Search results will appear here."
                );

            }

        });



        /* =============================================
           3. RESPONSIVE SOCIAL GALAXY IMAGE MAP

           Six destinations:
           Instagram, TikTok, Email, UiTM, Gallery, Friends.

           SVG original dimensions: 1200 x 700.
           Coordinates are resized for smaller screens.
        ============================================= */

        const socialMapImage =
            document.getElementById(
                "farahverseSocialMapImage"
            );

        const socialMap =
            document.getElementById(
                "farahverseSocialMap"
            );

        const socialFeedback =
            document.getElementById(
                "socialGalaxyFeedback"
            );


        if (socialMapImage && socialMap) {

            const socialAreas = Array.from(
                socialMap.querySelectorAll("area")
            );


            const originalCoordinates = socialAreas.map(
                function (area) {

                    return area.coords
                        .split(",")
                        .map(Number);

                }
            );


            function resizeSocialImageMap() {

                const naturalWidth =
                    socialMapImage.naturalWidth || 1200;

                const naturalHeight =
                    socialMapImage.naturalHeight || 700;

                const displayedWidth =
                    socialMapImage.clientWidth;

                const displayedHeight =
                    socialMapImage.clientHeight;


                if (!displayedWidth || !displayedHeight) {
                    return;
                }


                const scaleX =
                    displayedWidth / naturalWidth;

                const scaleY =
                    displayedHeight / naturalHeight;


                socialAreas.forEach(function (area, index) {

                    const original =
                        originalCoordinates[index];

                    if (!original) return;


                    const scaled = original.map(
                        function (value, coordinateIndex) {

                            return Math.round(
                                value *
                                (
                                    coordinateIndex % 2 === 0
                                        ? scaleX
                                        : scaleY
                                )
                            );

                        }
                    );


                    area.coords = scaled.join(",");

                });

            }


            socialAreas.forEach(function (area) {

                const destination =
                    area.dataset.destination ||
                    area.title ||
                    area.alt ||
                    "Destination";


                function showDestination() {

                    if (socialFeedback) {

                        socialFeedback.textContent =
                            "Selected orbit: " +
                            destination +
                            ". Follow the link to continue.";

                    }

                }


                area.addEventListener(
                    "mouseenter",
                    showDestination
                );

                area.addEventListener(
                    "focus",
                    showDestination
                );

                area.addEventListener(
                    "click",
                    showDestination
                );

            });


            if (socialMapImage.complete) {

                resizeSocialImageMap();

            } else {

                socialMapImage.addEventListener(
                    "load",
                    resizeSocialImageMap,
                    { once: true }
                );

            }


            window.addEventListener(
                "resize",
                resizeSocialImageMap,
                { passive: true }
            );


            if ("ResizeObserver" in window) {

                const mapObserver =
                    new ResizeObserver(resizeSocialImageMap);

                mapObserver.observe(socialMapImage);

            }

        }



        /* =============================================
           4. CINEMATIC ENTRY + MUSIC PLAYER
        ============================================= */

        const INTRO_SESSION_KEY =
            "farahverse_intro_seen";


        const entryScreen =
            document.getElementById("entryScreen");

        const enterWithSound =
            document.getElementById("enterWithSound");

        const enterQuietly =
            document.getElementById("enterQuietly");

        const entryAudioStatus =
            document.getElementById("entryAudioStatus");


        const audio =
            document.getElementById("farahAudio");

        const playButton =
            document.getElementById("musicToggle");

        const muteButton =
            document.getElementById("musicMute");

        const closeMusicButton =
            document.getElementById("musicClose");

        const musicPlayer =
            document.getElementById("floatingMusicPlayer");

        const musicBars =
            document.getElementById("floatingMusicBars");


        let introAlreadySeen = false;


        try {

            introAlreadySeen =
                sessionStorage.getItem(
                    INTRO_SESSION_KEY
                ) === "yes";

        } catch (error) {

            console.warn(
                "FARAHVERSE: session storage is unavailable.",
                error
            );

        }


        if (entryScreen && introAlreadySeen) {

            entryScreen.classList.add("entry-hidden");

        }


        function closeEntry() {

            if (entryScreen) {

                entryScreen.classList.add("entry-hidden");

            }


            try {

                sessionStorage.setItem(
                    INTRO_SESSION_KEY,
                    "yes"
                );

            } catch (error) {

                console.warn(
                    "FARAHVERSE: could not save intro state.",
                    error
                );

            }

        }


        async function playMusic() {

            if (!audio) {

                if (entryAudioStatus) {

                    entryAudioStatus.textContent =
                        "MUSIC FILE IS NOT AVAILABLE.";

                }

                return;

            }


            try {

                await audio.play();


                if (playButton) {

                    playButton.textContent = "II";

                    setPressed(playButton, true);

                }


                musicBars?.classList.add("playing");


                if (entryAudioStatus) {

                    entryAudioStatus.textContent =
                        "NOW PLAYING - DREAMSCAPE VOYAGE";

                }

            } catch (error) {

                console.warn(
                    "FARAHVERSE: music could not be played.",
                    error
                );


                if (entryAudioStatus) {

                    entryAudioStatus.textContent =
                        "MUSIC COULD NOT PLAY. YOU CAN STILL EXPLORE FARAHVERSE.";

                }

            }

        }


        function pauseMusic() {

            if (!audio) return;

            audio.pause();


            if (playButton) {

                playButton.textContent = ">";

                setPressed(playButton, false);

            }


            musicBars?.classList.remove("playing");

        }


        /* ENTER WITH MUSIC */

        enterWithSound?.addEventListener(
            "click",
            async function () {

                closeEntry();

                await playMusic();

            }
        );


        /* ENTER WITHOUT MUSIC */

        enterQuietly?.addEventListener(
            "click",
            function () {

                closeEntry();

            }
        );


        /* PLAYER PLAY / PAUSE */

        playButton?.addEventListener(
            "click",
            function () {

                if (!audio) return;

                if (audio.paused) {

                    playMusic();

                } else {

                    pauseMusic();

                }

            }
        );


        /* MUTE / UNMUTE */

        muteButton?.addEventListener(
            "click",
            function () {

                if (!audio) return;

                audio.muted = !audio.muted;

                this.textContent =
                    audio.muted ? "x" : "♪";

                setPressed(this, audio.muted);

            }
        );


        /* CLOSE MUSIC PLAYER */

        closeMusicButton?.addEventListener(
            "click",
            function () {

                pauseMusic();

                if (musicPlayer) {

                    musicPlayer.hidden = true;

                }

            }
        );


        audio?.addEventListener("play", function () {

            if (playButton) {

                playButton.textContent = "II";

                setPressed(playButton, true);

            }

            musicBars?.classList.add("playing");

        });


        audio?.addEventListener("pause", function () {

            if (playButton) {

                playButton.textContent = ">";

                setPressed(playButton, false);

            }

            musicBars?.classList.remove("playing");

        });


        audio?.addEventListener("error", function () {

            if (entryAudioStatus) {

                entryAudioStatus.textContent =
                    "MUSIC FILE NOT FOUND. CHECK audio/dreamscape-voyage.mp3.";

            }

        });


        if (audio && playButton && audio.paused) {

            playButton.textContent = ">";

            setPressed(playButton, false);

        }



        /* =============================================
           5. DAILY QUOTES + INSPIRATION MESSAGE
        ============================================= */

        const quotes = [

            "Small steps are still progress.",

            "You are allowed to grow at your own pace.",

            "Make memories, not excuses.",

            "Your journey does not have to look like anyone else's.",

            "Keep growing, keep going.",

            "Every new chapter starts with courage.",

            "Be proud of how far you have come.",

            "Beautiful things take time."

        ];


        function getRandomQuote(currentText) {

            if (quotes.length === 1) {
                return quotes[0];
            }


            let nextQuote =
                quotes[Math.floor(Math.random() * quotes.length)];


            while (nextQuote === currentText) {

                nextQuote =
                    quotes[Math.floor(Math.random() * quotes.length)];

            }


            return nextQuote;

        }


        document.getElementById("newQuote")
            ?.addEventListener("click", function () {

                const quoteElement =
                    document.getElementById("dailyQuote");


                if (quoteElement) {

                    quoteElement.textContent =
                        getRandomQuote(quoteElement.textContent);

                }

            });


        document.getElementById("refreshInspiration")
            ?.addEventListener("click", function () {

                const inspirationElement =
                    document.getElementById("inspirationText");


                if (inspirationElement) {

                    inspirationElement.textContent =
                        getRandomQuote(inspirationElement.textContent);

                }

            });



        /* =============================================
           6. FARAHVERSE AI JOURNEY VIDEO

           IMPORTANT:
           Current index.html video ID is:
           farahverseJourneyVideo
        ============================================= */

        const journeyVideo =
            document.getElementById(
                "farahverseJourneyVideo"
            );


        if (journeyVideo) {

            journeyVideo.addEventListener(
                "error",
                function () {

                    console.warn(
                        "FARAHVERSE: journey video could not be loaded. Check videos/farahverse-intro.mp4."
                    );

                }
            );


            journeyVideo.addEventListener(
                "loadedmetadata",
                function () {

                    journeyVideo.setAttribute(
                        "aria-label",
                        "Farahverse: My Journey AI cinematic video"
                    );

                }
            );

        }



        /* =============================================
           7. SCROLL PROGRESS + BACK TO TOP
        ============================================= */

        const progressBar =
            document.getElementById("farahProgress");

        const backToTop =
            document.getElementById("farahBackTop");


        let scrollTicking = false;


        function updateScrollProgress() {

            const scrollTop =
                window.scrollY ||
                document.documentElement.scrollTop;


            const scrollableHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;


            const percentage =
                scrollableHeight > 0
                    ? (scrollTop / scrollableHeight) * 100
                    : 0;


            if (progressBar) {

                progressBar.style.width =
                    percentage.toFixed(2) + "%";

            }


            backToTop?.classList.toggle(
                "show",
                scrollTop > 400
            );


            scrollTicking = false;

        }


        window.addEventListener(
            "scroll",
            function () {

                if (!scrollTicking) {

                    window.requestAnimationFrame(
                        updateScrollProgress
                    );

                    scrollTicking = true;

                }

            },
            { passive: true }
        );


        backToTop?.addEventListener(
            "click",
            function () {

                const reduceMotion =
                    body.classList.contains(
                        "guideline-reduced-motion"
                    );


                window.scrollTo({

                    top: 0,

                    behavior: reduceMotion
                        ? "auto"
                        : "smooth"

                });

            }
        );


        updateScrollProgress();


        /* =============================================
           8. FINAL INITIALISATION
        ============================================= */

        console.info(
            "FARAHVERSE Home Guidelines JavaScript is ready."
        );

    });

})();
