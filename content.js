const runner = async () => {
  const EXTERNAL_CSS_URL =
    "https://raw.githubusercontent.com/TheAmanM/beaver/refs/heads/main/main.css";

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

  (function todaysTimetable() {
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
  })();

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
      const notifications = acorn.children[1].children[2];

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
      main.appendChild(notifications);

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

      fetch(
        "https://raw.githubusercontent.com/TheAmanM/beaver/refs/heads/main/src/navIcons/notifications.svg"
      )
        .then((response) => response.text())
        .then((svgText) => {
          // Parse the SVG text into DOM elements
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
          const svgElement = svgDoc.documentElement;

          navBar.children[1]
            .querySelector(".badge-num")
            .replaceWith(svgElement);
        });

      let profilElement = navBar.children[2];
      console.log(profilElement.innerText);
      const text = profilElement.innerText[0];
      profilElement.remove();

      profilElement = document.createElement("div");
      profilElement.className = "navbar-profile";
      const anchor = document.createElement("a");
      anchor.setAttribute("href", "auth/logout");
      anchor.innerText = text;
      profilElement.appendChild(anchor);
      navBar.appendChild(profilElement);
    })();

    // Removing the navigation links
    (function () {
      document.querySelector("page-footer").remove();
    })();
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
      const response = await fetch(EXTERNAL_CSS_URL);

      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} - ${response.statusText}`
        );
      }
      const cssText = await response.text();
      console.log(
        `%c \u2713 ` + `%c Beaver styling complete!`,
        `background-color: #0dbc7b; color: white;`,
        "color: #0dbc7b;"
      );

      const style = document.createElement("style");
      style.nodeType = "text/css";
      style.textContent = cssText; // Inject the fetched CSS text
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
