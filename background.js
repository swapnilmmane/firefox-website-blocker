let blockedSites = [];

// Load blocked sites from storage on startup
browser.storage.sync.get(['blockedSites']).then(result => {
    if (result.blockedSites) {
        blockedSites = result.blockedSites;
    }
});

browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: blockedSites.some(site => details.url.includes(site.trim())) };
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateBlockedSites") {
        blockedSites = request.blockedSites;
        browser.storage.sync.set({ blockedSites: blockedSites });
        sendResponse({ status: "success" });
    }
});