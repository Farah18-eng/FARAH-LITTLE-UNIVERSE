
/* ==================================================
   FARAHVERSE
   CONNECTION CONTROL CENTER
   INTERACTIVE CONTACT SYSTEM
================================================== */

document.addEventListener("DOMContentLoaded", function() {

    document.body.classList.add("js-enabled");


    /* ==============================================
       01. MOVING STAR SYSTEM
    ============================================== */

    const starField =
        document.getElementById("contactStarField");


    if (starField) {

        for (let i = 0; i < 65; i++) {

            const star = document.createElement("span");

            star.className = "contact-star-particle";

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

    const contactClock =
        document.getElementById("contactClock");

    const contactDate =
        document.getElementById("contactDate");

    const contactGreeting =
        document.getElementById("contactGreeting");

    const clockGreeting =
        document.getElementById("contactClockGreeting");


    function updateContactClock() {

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


        if (contactClock) {

            contactClock.textContent = time;

        }


        if (contactDate) {

            contactDate.textContent =
                date.toUpperCase();

        }


        if (contactGreeting) {

            contactGreeting.textContent =
                greeting + " · A LITTLE SPACE TO SAY HELLO";

        }


        if (clockGreeting) {

            clockGreeting.textContent =
                greeting + " ♡";

        }

    }


    updateContactClock();

    setInterval(updateContactClock, 1000);



    /* ==============================================
       03. HERO TYPING ANIMATION
    ============================================== */

    const typingElement =
        document.getElementById("contactTyping");


    const typingWords = [

        "EVERY HELLO MATTERS",

        "LET'S START A CONVERSATION",

        "GOOD PEOPLE, GOOD CONNECTIONS",

        "SHARE AN IDEA",

        "SAY SOMETHING NICE",

        "WELCOME TO MY UNIVERSE"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeContact() {

        if (!typingElement) return;


        const currentWord =
            typingWords[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeContact, 1600);

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
            typeContact,
            deleting ? 35 : 65
        );

    }


    if (typingElement) {

        typeContact();

    }



    /* ==============================================
       04. MOBILE NAVIGATION
    ============================================== */

    const menuToggle =
        document.getElementById("contactMenuToggle");

    const navLinks =
        document.getElementById("contactNavLinks");


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
       05. COPY EMAIL
    ============================================== */

    const copyEmailButton =
        document.getElementById("copyEmail");

    const copyFeedback =
        document.getElementById("copyFeedback");


    const emailAddress =
        "faraheleyana18@gmail.com";


    async function copyEmailAddress() {

        try {

            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {

                await navigator.clipboard.writeText(
                    emailAddress
                );

            } else {

                const tempInput =
                    document.createElement("textarea");


                tempInput.value = emailAddress;

                tempInput.style.position = "fixed";

                tempInput.style.opacity = "0";

                document.body.appendChild(tempInput);


                tempInput.select();

                const copied =
                    document.execCommand("copy");


                tempInput.remove();


                if (!copied) {

                    throw new Error("Copy unavailable.");

                }

            }


            if (copyFeedback) {

                copyFeedback.textContent =
                    "✓ EMAIL ADDRESS COPIED SUCCESSFULLY";

            }


            if (copyEmailButton) {

                copyEmailButton.textContent =
                    "COPIED ✓";

            }


        } catch (error) {

            if (copyFeedback) {

                copyFeedback.textContent =
                    "Please copy the email address manually.";

            }

        }

    }



    if (copyEmailButton) {

        copyEmailButton.addEventListener(
            "click",
            copyEmailAddress
        );

    }



    /* ==============================================
       06. CHARACTER COUNTER
    ============================================== */

    const messageInput =
        document.getElementById("senderMessage");

    const characterCount =
        document.getElementById("characterCount");


    function updateCharacterCount() {

        if (!messageInput || !characterCount) return;


        characterCount.textContent =
            messageInput.value.length;

    }


    if (messageInput) {

        messageInput.addEventListener(
            "input",
            updateCharacterCount
        );

    }


    updateCharacterCount();



    /* ==============================================
       07. FORM ELEMENTS
    ============================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formStatus =
        document.getElementById("formStatus");

    const sendButton =
        document.getElementById("sendMessageButton");

    const sendButtonText =
        document.getElementById("sendButtonText");

    const replyToField =
        document.getElementById("replyToField");



    /* ==============================================
       08. FORM STATUS MESSAGE
    ============================================== */

    function showFormStatus(message, type) {

        if (!formStatus) return;


        formStatus.textContent = message;

        formStatus.className =
            "terminal-form-status " + type;

        formStatus.hidden = false;


        formStatus.scrollIntoView({

            behavior: "smooth",

            block: "nearest"

        });

    }



    /* ==============================================
       09. EMAIL FORM SUBMISSION
       FORMSUBMIT AJAX
    ============================================== */

    if (contactForm) {

        contactForm.addEventListener("submit", async function(event) {

            event.preventDefault();


            /* BROWSER VALIDATION */

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;

            }



            /* HONEYPOT SPAM PROTECTION */

            const honeyField =
                contactForm.querySelector('[name="_honey"]');


            if (honeyField && honeyField.value.trim() !== "") {

                return;

            }



            /* FORM DATA */

            const formData =
                new FormData(contactForm);


            const senderName =
                formData.get("name").trim();

            const senderEmail =
                formData.get("email").trim();

            const selectedSubject =
                formData.get("subject");

            const senderMessage =
                formData.get("message").trim();



            /* BASIC VALIDATION */

            if (
                !senderName ||
                !senderEmail ||
                !selectedSubject ||
                !senderMessage
            ) {

                showFormStatus(

                    "Please complete all required fields.",

                    "error"

                );

                return;

            }



            if (senderMessage.length < 5) {

                showFormStatus(

                    "Please write a little more in your message.",

                    "error"

                );

                return;

            }



            /* PREPARE REPLY ADDRESS */

            if (replyToField) {

                replyToField.value = senderEmail;

            }



            /* PREPARE EMAIL PAYLOAD */

            const payload =
                Object.fromEntries(formData.entries());


            payload._subject =
                "Farahverse Contact: " + selectedSubject;



            /* SENDING STATE */

            sendButton.disabled = true;

            sendButtonText.textContent =
                "TRANSMITTING MESSAGE...";


            sendButton.classList.add("sending");


            showFormStatus(

                "Your message is being submitted. Please wait...",

                "info"

            );



            try {


                /* SEND TO FORMSUBMIT AJAX */

                const response = await fetch(

                    "https://formsubmit.co/ajax/faraheleyana18@gmail.com",

                    {

                        method: "POST",

                        headers: {

                            "Content-Type": "application/json",

                            "Accept": "application/json"

                        },

                        body: JSON.stringify(payload)

                    }

                );



                const data =
                    await response.json();



                /*
                   Check both the HTTP response
                   and FormSubmit's actual success value.
                */

                const successful =

                    response.ok &&

                    (
                        data.success === true ||
                        data.success === "true"
                    );



                if (!successful) {


                    const serverMessage =
                        String(data.message || data.error || "");


                    const activationRequired =
                        /activat/i.test(serverMessage);



                    if (activationRequired) {

                        showFormStatus(

                            "Your form needs activation. " +
                            "Please check Farah's inbox for the " +
                            "FormSubmit activation email and confirm it. " +
                            "Then the form can deliver future messages.",

                            "info"

                        );

                    } else {

                        throw new Error(

                            serverMessage ||

                            "The message could not be submitted."

                        );

                    }


                    return;

                }



                /* SUCCESS */

                showFormStatus(

                    "✓ Your message was accepted by the contact service. " +
                    "Thank you for reaching out to Farah! " +
                    "If this was the first submission, make sure " +
                    "the email activation has been completed.",

                    "success"

                );



                /* RESET FORM */

                contactForm.reset();


                updateCharacterCount();



            } catch (error) {


                console.error(
                    "Contact form submission error:",
                    error
                );


                showFormStatus(

                    "We could not confirm your message submission. " +
                    "Please try again or email Farah directly at " +
                    "faraheleyana18@gmail.com.",

                    "error"

                );

            } finally {


                /* RESTORE BUTTON */

                sendButton.disabled = false;

                sendButtonText.textContent =
                    "TRANSMIT MESSAGE";

                sendButton.classList.remove("sending");

            }

        });

    }



    /* ==============================================
       10. SCROLL REVEAL
    ============================================== */

    const revealElements = document.querySelectorAll(

        ".contact-dashboard-heading, " +
        ".contact-stat-card, " +
        ".contact-section-heading, " +
        ".channel-card, " +
        ".terminal-sidebar, " +
        ".terminal-form-card, " +
        ".social-connect-card, " +
        ".contact-ending"

    );


    revealElements.forEach(function(element) {

        element.classList.add("contact-reveal");

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
        document.getElementById("contactProgress");

    const backTop =
        document.getElementById("contactBackTop");


    function updateContactScroll() {

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


    window.addEventListener("scroll", updateContactScroll);

    updateContactScroll();



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
       13. INITIAL PAGE STATE
    ============================================== */

    updateContactClock();

    updateCharacterCount();


});
