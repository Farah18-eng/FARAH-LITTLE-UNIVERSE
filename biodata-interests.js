
/* =========================================
   FARAHVERSE BIODATA
   INTEREST TABS CONTROLLER
   GAMES / SPORTS / MUSIC
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const section = document.getElementById("interests");

    if (!section) return;

    const tabs = Array.from(
        section.querySelectorAll(".bio-interest-tab")
    );

    const panels = Array.from(
        section.querySelectorAll(".bio-interest-panel")
    );

    if (!tabs.length || !panels.length) return;


    function activateTab(tab, moveFocus = false) {

        const targetId = tab.dataset.target;

        const targetPanel = document.getElementById(targetId);

        if (!targetPanel || !section.contains(targetPanel)) {
            console.error("Interest panel not found:", targetId);
            return;
        }


        // UPDATE BUTTONS

        tabs.forEach(function (item) {

            const selected = item === tab;

            item.classList.toggle("active", selected);

            item.setAttribute(
                "aria-selected",
                selected ? "true" : "false"
            );

            item.setAttribute(
                "tabindex",
                selected ? "0" : "-1"
            );

        });


        // UPDATE PANELS

        panels.forEach(function (panel) {

            const selected = panel === targetPanel;

            panel.hidden = !selected;

            panel.classList.toggle("active", selected);

        });


        if (moveFocus) {
            tab.focus();
        }

    }


    // CLICK EVENT

    tabs.forEach(function (tab, index) {

        tab.addEventListener("click", function () {

            activateTab(tab);

        });


        // KEYBOARD ACCESSIBILITY

        tab.addEventListener("keydown", function (event) {

            let nextIndex = index;

            if (event.key === "ArrowRight") {

                nextIndex = (index + 1) % tabs.length;

            } else if (event.key === "ArrowLeft") {

                nextIndex = (index - 1 + tabs.length) % tabs.length;

            } else if (event.key === "Home") {

                nextIndex = 0;

            } else if (event.key === "End") {

                nextIndex = tabs.length - 1;

            } else {

                return;

            }

            event.preventDefault();

            activateTab(tabs[nextIndex], true);

        });

    });


    // INITIAL TAB

    const initialTab =
        tabs.find(tab =>
            tab.getAttribute("aria-selected") === "true"
        ) || tabs[0];

    activateTab(initialTab);

});
