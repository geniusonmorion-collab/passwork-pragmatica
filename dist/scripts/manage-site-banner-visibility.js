// Runs while <head> parses, so a dismissed banner never paints. The rule is
// scoped to the dismissed banner's uid, so a newly published banner still shows.
// Keep the storage key in sync with site-banner.tsx.
function hideDismissedSiteBanner() {
    try {
        const record = JSON.parse(localStorage.getItem("attio-site-banner-dismissal") || "null")

        if (!record || !/^[\w-]+$/.test(record.uid) || !(record.until > Date.now())) return

        const banner = `.site-banner[data-banner-uid="${record.uid}"]`
        const style = document.createElement("style")

        style.textContent = `
            :root:has(${banner}) {
                --site-header-banner-height: var(--site-header-banner-hidden-height);
                --color-overscroll-top: var(--color-page-background);
            }
            ${banner} { display: none; }
        `
        document.head.appendChild(style)
    } catch {
        // Storage is blocked, so the banner shows.
    }
}

hideDismissedSiteBanner()
