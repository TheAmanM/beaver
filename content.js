const runner = async () => {
  const EXTERNAL_CSS_URL =
    "https://raw.githubusercontent.com/TheAmanM/beaver/refs/heads/main/main.css";

  const cssData = `@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wdth,wght@75..100,300..800&display=swap");

/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 2 */
  border: 0 solid; /* 3 */
  outline: none !important;
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured sans font-family by default.
  5. Use the user's configured sans font-feature-settings by default.
  6. Use the user's configured sans font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  tab-size: 4; /* 3 */
  font-family: --theme(
    --default-font-family,
    ui-sans-serif,
    system-ui,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji"
  ); /* 4 */
  font-feature-settings: --theme(
    --default-font-feature-settings,
    normal
  ); /* 5 */
  font-variation-settings: --theme(
    --default-font-variation-settings,
    normal
  ); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
  Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
  font-family: "Open Sans";
}

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
  font-family: "Open Sans";
}

/*
  Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
  1. Use the user's configured mono font-family by default.
  2. Use the user's configured mono font-feature-settings by default.
  3. Use the user's configured mono font-variation-settings by default.
  4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: --theme(
    --default-mono-font-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace
  ); /* 1 */
  font-feature-settings: --theme(
    --default-mono-font-feature-settings,
    normal
  ); /* 2 */
  font-variation-settings: --theme(
    --default-mono-font-variation-settings,
    normal
  ); /* 3 */
  font-size: 1em; /* 4 */
}

/*
  Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
  Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
  Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/

ol,
ul,
menu {
  list-style: none;
}

/*
  1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  border-radius: 0; /* 2 */
  background-color: transparent; /* 3 */
  opacity: 1; /* 4 */
}

/*
  Restore default font weight.
*/

:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/

:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/

::file-selector-button {
  margin-inline-end: 4px;
}

/*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

::placeholder {
  opacity: 1;
}

/*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using color-mix(…) with currentcolor. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
  (contain-intrinsic-size: 1px) /* Safari 17+ */ {
  ::placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
}

/*
  Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

::-webkit-date-and-time-value {
  min-height: 1lh; /* 1 */
  text-align: inherit; /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to display: block.
*/

::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/

button,
input:where([type="button"], [type="reset"], [type="submit"]),
::file-selector-button {
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden]:where(:not([hidden="until-found"])) {
  display: none !important;
}

/* Beaver begins here */

:root {
  --color-acorn: #013a6f;
  --color-secondary: #ecf1f9;

  --body-text: #76787c;
  --color-primary: #aaa;
  --border: #ddd;
}

#scrollMain {
  position: absolute;
  display: none;
  /* TODO: Come back to this */
}

#acorn-nav-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;

  padding-block: 1.5rem;
  padding-inline: 2rem;
}

#acorn-nav-top > div > div:nth-child(1) {
  display: flex;
  gap: 2rem;
  font-weight: 600;
}

#acorn-nav-top > div:nth-child(2) > div {
  display: flex;
  gap: 1rem;
}

#acorn-nav-top > div:nth-child(2) > div > div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline: 0.75rem;
  height: 3rem;
  aspect-ratio: 1;

  border-radius: 100%;
  background-color: var(--color-secondary);
}

#body-container {
  display: flex;
}

.main {
  flex: 1 1 0;
}

#main-content {
  width: 100%;
  max-width: 80rem;
  margin-inline: auto;
}

side-nav#acorn-nav-side-parent {
  width: 22rem;
  max-width: 22rem;
  min-width: 22rem;
  /* TODO: Make this proper */

  background-color: var(--color-acorn);
}

ul.nav-section-container {
  padding-inline: 1.5rem;
  padding-block-start: 1rem;
}

ul.nav-section-container .nav-header {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ecf1f9;
  opacity: 0.5;
  margin-bottom: -0.75rem;
  margin-top: 2rem;
}

ul.nav-section-container :not(.nav-header) {
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}

ul.nav-section-container li {
  margin-block: 1rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-acorn);
}

.global-message {
  padding: 0.75rem 2rem;
  border: 4px solid var(--color-acorn);
  border-radius: 1.5rem;
}

.alert-body .acorn-notice-margin {
  font-family: "Open Sans";
  color: var(--color-acorn);
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.alert-body p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: var(--body-text);

  margin-top: 0.5rem;
}

.alert-body p a {
  color: var(--color-acorn);
}

@media screen and (min-width: 64rem) {
  .card-container.dashboard-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

.card-container a {
  color: var(--color-acorn);
}

.card-container.dashboard-container {
  margin-top: 1.5rem;
}

.card-container.dashboard-container > * {
  background: var(--color-secondary);
  padding-block: 1.25rem;
  padding-inline: 2rem;
  border-radius: 1.5rem;
}

.card-container.dashboard-container > * h2 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-acorn);
}

profile-checklist p, calendar p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: var(--body-text);

  margin-block: 0.5rem;
}

profile-checklist, calendar {
  position: relative;
}

profile-checklist > svg, calendar > svg {
  position: absolute;
  bottom: 0px;
  right: 0px;
  pointer-events: none;

  border-bottom-right-radius: 1.5rem;
}


calendar .mat-mdc-card-actions {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
}

nav#acorn-nav-top > div:nth-child(1) > .flex-display {
  border: 1px solid red;
}

.sidebar-logo {
  margin-inline: auto;
  margin-block-start: 2rem;
}

.acornLogo {
  height: 5rem;
}

`;

  const linkToSvg = {
    Dashboard: "dashboard.svg",
    "Profile & Settings": "profile-settings.svg",
    "Enrol & Manage": "enrol-manage.svg",
    Courses: "courses.svg",
    Programs: "programs.svg",
    "Timetable & Exams": "timetable-exams.svg",
    "Accommodated Testing Services": "accommodated.svg",
    "Planning Tools": "planning.svg",
    "Academic History": "history.svg",
    "Transcript & Enrolment Confirmation": "transcript-enrolment.svg",
    "Graduation & Convocation": "graduation.svg",
    Quercus: "quercus.svg",
    "Financial Account": "financial.svg",
    "Invoice & Net Cost": "invoice.svg",
    "Incidental Fees": "incidental.svg",
    "Payment History": "payment-history.svg",
    "Account Details": "account-details.svg",
    "Make a Payment": "payment.svg",
    "Grants, Aid & Awards": "grants.svg",
    "Tuition Fee Deferral": "deferral.svg",
    "Tax Forms": "tax.svg",
    "Health & Wellness": "health.svg",
    Involvement: "involvement.svg",
    "Jobs & Career Planning": "jobs.svg",
    "Accessibility & Equity": "equity.svg",
    "International Opportunities": "international.svg",
    Housing: "housing.svg",
    "Family Care": "family.svg",
  };

  function todaysTimetable() {
    const calendar = document.querySelector(
      ".card-container.dashboard-container"
    );

    console.log("Replacing! 3");

    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        // Check added or modified nodes
        const nodes = [...mutation.addedNodes, ...mutation.target.childNodes];
        for (const node of nodes) {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            node.innerHTML.includes("You don't have any activities")
          ) {
            replaceTimetableContent();
          }
        }
      }
    });

    function replaceTimetableContent() {
      const todaysTimetableElements = calendar.querySelectorAll(
        ".mat-mdc-card-content div"
      );
      console.log("Running replacer 3");
      console.log(todaysTimetableElements);
      for (const randomDiv of todaysTimetableElements) {
        console.log("Checking 3");
        if (randomDiv.innerText.includes("You don't have any activities")) {
          console.log("Found! 3");
          const replacer = document.createElement("p");
          replacer.innerHTML = `You don’t have any actual activities planned for today. <a href="https://www.utoronto.ca/events">Here’s what’s on at here today</a>.`;
          calendar.querySelector(".mat-mdc-card-content").replaceWith(replacer);
          console.log("Replaced! 3");

          observer.disconnect();

          (function () {
            fetch(
              "https://raw.githubusercontent.com/TheAmanM/beaver/refs/heads/main/src/backgrounds/calendar.svg"
            )
              .then((response) => response.text())
              .then((svgText) => {
                // Parse the SVG text into DOM elements
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
                const svgElement = svgDoc.documentElement;

                document.querySelector("calendar").appendChild(svgElement);
              });
          })();

          break;
        }
      }
    }

    replaceTimetableContent();
    observer.observe(calendar, {
      childList: true,
      subtree: true,
    });
  }

  function injectContent() {
    console.log("Injecting content");

    (function () {
      const financialList = document.querySelector(
        ".financial.expand-container"
      );
      const parentUL = financialList.parentElement;

      // Reference to insert before the first child of the parent <ul>
      const firstChild = parentUL.firstElementChild;

      // Move the main <a> link into a new <li> and insert it at the start
      const mainLink = financialList.querySelector("a");
      if (mainLink) {
        const newLI = document.createElement("li");
        newLI.appendChild(mainLink);
        parentUL.insertBefore(newLI, firstChild);
      }

      // Collect the <li> items from the nested <ul>
      const nestedLIs = financialList.querySelectorAll("ul > li");

      // Insert each <li> at the start in reverse order to preserve original order
      [...nestedLIs].reverse().forEach((li) => {
        parentUL.insertBefore(li, firstChild);
      });

      // Remove the now-empty financialList container
      financialList.remove();
    })();

    (function () {
      const academicList = document.querySelector(".enrol.expand-container");
      const parentUL = academicList.parentElement;

      // Reference to insert before the first child of the parent <ul>
      const firstChild = parentUL.firstElementChild;

      // Move the main <a> link into a new <li> and insert it at the start
      const mainLink = academicList.querySelector("a > acorn-block-tooltip");
      if (mainLink) {
        const newLI = document.createElement("li");
        newLI.appendChild(mainLink);
        parentUL.insertBefore(newLI, firstChild);
      }

      // Collect the <li> items from the nested <ul>
      const nestedLIs = academicList.querySelectorAll("ul > li");

      // Insert each <li> at the start in reverse order to preserve original order
      [...nestedLIs].reverse().forEach((li) => {
        parentUL.insertBefore(li, firstChild);
      });

      // Remove the now-empty academicList container
      academicList.remove();
    })();

    const sidebarLinks = document.querySelectorAll(
      "ul.nav-section-container a"
    );

    for (const link of sidebarLinks) {
      if (link.innerText && link.innerText in linkToSvg) {
        console.log("Found:", link.innerText);
        const parent = link.parentElement;
        fetch(
          "https://raw.githubusercontent.com/TheAmanM/beaver/refs/heads/main/src/icons/" +
            linkToSvg[link.innerText]
        )
          .then((response) => response.text())
          .then((svgText) => {
            // Parse the SVG text into DOM elements
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
            const svgElement = svgDoc.documentElement;

            // Insert SVG as first child of 'parent'
            if (parent.firstChild) {
              parent.insertBefore(svgElement, parent.firstChild);
            } else {
              parent.appendChild(svgElement);
            }

            parent.style.setProperty("display", "flex");
            parent.style.setProperty("gap", "0.5rem");
          });
      }
    }
    const quercusLink = document.querySelector(
      ".nav-section-container sis-icon"
    );
    quercusLink.remove();

    (function () {
      const todaysTimetableElements = document.querySelectorAll(
        "profile-checklist div"
      );
      console.log("Running replacer 2");
      console.log(todaysTimetableElements);
      for (const randomDiv of todaysTimetableElements) {
        console.log("Checking 2");
        if (
          randomDiv.innerText.includes(
            "You've completed your profile checklist"
          )
        ) {
          console.log("Found! 2");
          const replacer = document.createElement("p");
          replacer.innerHTML = `Maintaining your personal information helps U of T serve you better and ensures that we can contact you.<br /><br />You’ve completed your profile checklist. You can always <a href="https://acorn.utoronto.ca/sws/#/profileAndSettings">visit the Profile page</a> to make updates.`;
          document
            .querySelector("profile-checklist .mat-mdc-card-content")
            .replaceWith(replacer);
          console.log("Replaced! 2");
          break;
        }
      }
    })();

    (function () {
      fetch(
        "https://raw.githubusercontent.com/TheAmanM/beaver/refs/heads/main/src/backgrounds/profile.svg"
      )
        .then((response) => response.text())
        .then((svgText) => {
          // Parse the SVG text into DOM elements
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
          const svgElement = svgDoc.documentElement;

          document.querySelector("profile-checklist").appendChild(svgElement);
        });
    })();

    // Rearranging the sidebar

    (function () {
      // Get references to the needed elements
      const acorn = document.querySelector(".acorn");
      const contents = acorn.children[1];
      const sidebar = acorn.children[1].children[0];
      const dashboard = acorn.children[1].children[1];
      const topbar = acorn.children[0];

      // Create the new main container
      const main = document.createElement("div");
      main.classList.add("main");

      // Move topbar and dashboard into the new main container
      main.appendChild(topbar);
      main.appendChild(dashboard);

      // Move sidebar outside contents and into .acorn
      acorn.insertBefore(sidebar, contents);

      // Replace contents with the new main
      acorn.replaceChild(main, contents);

      acorn.style.setProperty("display", "flex");
    })();

    // Adding logo to sidebar

    (function () {
      const logoImage = document.createElement("img");
      logoImage.className = "sidebar-logo";
      logoImage.setAttribute(
        "src",
        "https://acorn.utoronto.ca/sws/assets/images/top_navigation/uoft_logo_v2_2x.png"
      );
      const navBar = document.querySelector("side-nav");
      navBar.insertBefore(logoImage, navBar.firstChild);
    })();

    // Fixing the top bar (lgoo and buttons)
    (function () {
      const topBar = document.querySelector("#acorn-nav-top");

      const acornLogo = document.createElement("img");
      acornLogo.className = "acornLogo";
      acornLogo.setAttribute(
        "src",
        "https://undergrad.engineering.utoronto.ca/wp-content/uploads/2019/04/ACORNLogo.png"
      );
      topBar.children[0].replaceWith(acornLogo);
    })();

    (function () {
      const navBar = document.querySelector("nav#acorn-nav-top .flex-display");
      document.createElement("svg");

      fetch(
        "https://raw.githubusercontent.com/TheAmanM/beaver/refs/heads/main/src/navIcons/help.svg"
      )
        .then((response) => response.text())
        .then((svgText) => {
          // Parse the SVG text into DOM elements
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
          const svgElement = svgDoc.documentElement;

          // Create a new <a> element to wrap the SVG
          const anchor = document.createElement("a");
          anchor.href = "#/help-and-feedback/contacts-resources";
          anchor.appendChild(svgElement);

          navBar.children[0].querySelector("a").replaceWith(anchor);
        });

      // fetch(
      //   "https://raw.githubusercontent.com/TheAmanM/beaver/refs/heads/main/src/navIcons/notifications.svg"
      // )
      //   .then((response) => response.text())
      //   .then((svgText) => {
      //     // Parse the SVG text into DOM elements
      //     const parser = new DOMParser();
      //     const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      //     const svgElement = svgDoc.documentElement;

      //     navBar.children[1]
      //       .querySelector(".badge-num")
      //       .replaceWith(svgElement);
      //   });
    })();

    todaysTimetable();
  }

  // Function to remove all <style> and <link rel="stylesheet"> tags
  function removeAllStylingTags() {
    // Remove <style> tags
    const styleTags = document.querySelectorAll("style");
    styleTags.forEach((tag) => {
      tag.remove();
    });

    // Remove <link rel="stylesheet"> tags
    const linkTags = document.querySelectorAll('link[rel="stylesheet"]');
    linkTags.forEach((tag) => {
      tag.remove();
    });
  }

  // Function to fetch custom CSS and inject it as a <style> tag
  async function injectCustomCssFromExternalUrl() {
    try {
      // const response = await fetch(EXTERNAL_CSS_URL);

      // if (!response.ok) {
      //   throw new Error(
      //     `HTTP error! status: ${response.status} - ${response.statusText}`
      //   );
      // }
      // const cssText = await response.text();
      console.log(
        `%c \u2713 ` + `%c Beaver styling complete!`,
        `background-color: #0dbc7b; color: white;`,
        "color: #0dbc7b;"
      );

      const style = document.createElement("style");
      style.nodeType = "text/css";
      style.textContent = cssData; // Inject the fetched CSS text
      document.head.appendChild(style);
      console.log("Custom CSS injected into document.head.");

      injectContent();
    } catch (error) {
      console.error("Failed to inject custom CSS from external URL:", error);
      // Log the error for debugging purposes
      // You might want to display a user-friendly message or fall back to default styles
    }
  }

  // --- Main execution flow at document_end ---
  console.log("Content script running at document_end.");

  // 1. Remove all existing styling tags
  removeAllStylingTags();
  console.log("All existing styling tags removed.");

  // 2. Inject the custom CSS from the external URL
  await injectCustomCssFromExternalUrl(); // Use await because fetch is asynchronous
};

(() => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "run") {
      console.log(
        "Hello from content script! Running code on:",
        window.location.href
      );
      runner();
      sendResponse({ status: "done" });
    }
  });
})();
