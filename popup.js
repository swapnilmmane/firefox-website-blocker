document.addEventListener('DOMContentLoaded', function() {
    const siteInput = document.getElementById('siteInput');
    const addSiteButton = document.getElementById('addSiteButton');
    const blockList = document.getElementById('blockList');

    let blockedSites = [];

    // Load blocked sites from storage on popup load
    browser.storage.sync.get(['blockedSites']).then(result => {
        if (result.blockedSites) {
            blockedSites = result.blockedSites;
            renderBlockList();
        }
    });

    addSiteButton.addEventListener('click', function() {
        const sites = siteInput.value.split(',').map(site => site.trim()).filter(site => site && !blockedSites.includes(site));
        if (sites.length > 0) {
            blockedSites = blockedSites.concat(sites);
            browser.runtime.sendMessage({ action: "updateBlockedSites", blockedSites: blockedSites }).then(response => {
                if (response.status === "success") {
                    renderBlockList();
                    siteInput.value = '';
                }
            });
        }
    });

    function renderBlockList() {
        blockList.innerHTML = '';
        blockedSites.forEach(site => {
            const div = document.createElement('div');
            div.className = 'site';
            div.textContent = site;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                blockedSites = blockedSites.filter(s => s !== site);
                browser.runtime.sendMessage({ action: "updateBlockedSites", blockedSites: blockedSites }).then(response => {
                    if (response.status === "success") {
                        renderBlockList();
                    }
                });
            });
            div.appendChild(removeButton);
            blockList.appendChild(div);
        });
    }
});