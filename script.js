
/* =========================================
   FARAH'S LITTLE UNIVERSE
   HOME PAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    /* HOME TYPING ANIMATION */

    const typingElement = document.getElementById("homeTyping");

    const messages = [
        "Information Management Student",
        "A Dreamer & Explorer",
        "Independent & Curious",
        "Always Learning New Things"
    ];

    let messageIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeText() {

        if (!typingElement) return;

        const currentMessage = messages[messageIndex];

        if (!deleting) {

            typingElement.textContent =
                currentMessage.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentMessage.length) {

                deleting = true;

                setTimeout(typeText, 1500);

                return;
            }

        } else {

            typingElement.textContent =
                currentMessage.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                messageIndex =
                    (messageIndex + 1) % messages.length;

            }

        }

        setTimeout(typeText, deleting ? 40 : 80);

    }

    typeText();


    /* DIGITAL CLOCK */

    function updateClock() {

        const now = new Date();

        const time = now.toLocaleTimeString("en-MY", {
            timeZone: "Asia/Kuala_Lumpur",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        const date = now.toLocaleDateString("en-MY", {
            timeZone: "Asia/Kuala_Lumpur",
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        const clock = document.getElementById("homeClock");
        const dateElement = document.getElementById("homeDate");

        if (clock) {
            clock.textContent = time;
        }

        if (dateElement) {
            dateElement.textContent = date;
        }

    }

    updateClock();

    setInterval(updateClock, 1000);


    /* WELCOME POPUP */

    const toast = document.getElementById("welcomeToast");

    if (toast) {

        setTimeout(function() {
            toast.classList.add("hide");
        }, 5000);

    }

});


/* CLOSE WELCOME POPUP */

function closeToast() {

    const toast = document.getElementById("welcomeToast");

    if (toast) {
        toast.classList.add("hide");
    }

}
