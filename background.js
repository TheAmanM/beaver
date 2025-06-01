chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url === "https://acorn.utoronto.ca/sws/#/"
  ) {
    chrome.tabs
      .sendMessage(tabId, { action: "run" })
      .then((response) => console.log("Content script responded:", response))
      .catch((err) => console.warn("Error:", err));
  }
});
