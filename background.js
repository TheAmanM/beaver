// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (
//     changeInfo.status === "complete" &&
//     tab.url === "https://acorn.utoronto.ca/sws/#/"
//   ) {
//     chrome.tabs
//       .sendMessage(tabId, { action: "run" })
//       .then((response) => console.log("Content script responded:", response))
//       .catch((err) => console.warn("Error:", err));
//   }
// });

const targetUrl = "https://acorn.utoronto.ca/sws/#/"; // URL to watch
const tabUrlMap = {}; // Stores last known URL for each tab

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const previousUrl = tabUrlMap[tabId];
    const currentUrl = tab.url;

    // Update stored URL for this tab
    tabUrlMap[tabId] = currentUrl;

    // ✅ If we navigated *to* the target URL, send a message to the content script
    if (currentUrl === targetUrl && previousUrl !== targetUrl) {
      console.log(`Navigated to target URL — sending message to tab ${tabId}`);
      chrome.tabs.sendMessage(tabId, { action: "run" });
    }

    // ✅ If we navigated *away from* the target URL, reload the page
    if (previousUrl === targetUrl && currentUrl !== targetUrl) {
      console.log(`Navigated away from target URL — reloading tab ${tabId}`);
      chrome.tabs.reload(tabId);
    }
  }
});

// Clean up when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabUrlMap[tabId];
});
