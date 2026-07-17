/* ── Mobile "not ready yet" guard ── */

document.addEventListener("DOMContentLoaded", () => {
    const PROCEED_KEY = "mobileProceed";
    let proceeded = false;
    try { proceeded = sessionStorage.getItem(PROCEED_KEY) === "true"; } catch (e) {}

    // Re-check here (not just trust the early inline-script class): the inline check runs
    // before the viewport meta tag is parsed, so its narrow-viewport read can be wrong on
    // some browsers. By DOMContentLoaded the real viewport is settled, so this is authoritative.
    const ua = navigator.userAgent || "";
    const isMobileUA = /iPhone|iPod|Android.*Mobile|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isNarrow = window.matchMedia("(max-width: 767px)").matches;
    const isMobile = isMobileUA || isNarrow;

    if (proceeded || !isMobile) {
        document.documentElement.classList.remove("bm-mobile-guard");
        return;
    }
    document.documentElement.classList.add("bm-mobile-guard");

    const overlay = document.createElement("div");
    overlay.className = "bm-mobile-overlay";
    overlay.innerHTML = `
        <div class="bm-mobile-overlay-card">
            <div class="bm-mobile-overlay-emoji">🍽️</div>
            <p class="bm-mobile-overlay-title">Hey, sorry about that!</p>
            <p class="bm-mobile-overlay-text">This website isn't ready for mobile yet. Please use a desktop for the full experience.</p>
            <button type="button" class="bm-mobile-overlay-btn" id="bm-proceed-btn">Proceed anyway</button>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("bm-proceed-btn").addEventListener("click", () => {
        try { sessionStorage.setItem(PROCEED_KEY, "true"); } catch (e) {}
        document.documentElement.classList.remove("bm-mobile-guard");
        overlay.remove();
        if (typeof window.__startIntroVideo === "function") {
            window.__startIntroVideo();
        } else {
            if (typeof window.__triggerIpodReveal === "function") {
                window.__triggerIpodReveal();
            }
        }
    });
});
