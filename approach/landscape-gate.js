(function () {
    var SEEN_KEY = 'bitemarkLandscapeTipSeen';

    document.addEventListener('DOMContentLoaded', function () {
        try {
            if (sessionStorage.getItem(SEEN_KEY) === 'true') return;

            var ua = navigator.userAgent || '';
            var isMobileUA = /iPhone|iPod|Android.*Mobile|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(ua);
            var isNarrow = window.matchMedia('(max-width: 767px)').matches;
            var isPortrait = window.matchMedia('(orientation: portrait)').matches;

            if (!(isMobileUA || isNarrow) || !isPortrait) return;

            var tip = document.createElement('div');
            tip.className = 'bl-landscape-tip';
            tip.innerHTML =
                '<span class="bl-landscape-tip-emoji">&#128260;</span>' +
                '<p class="bl-landscape-tip-text">Tip: rotate to landscape for the full-page view</p>' +
                '<button type="button" class="bl-landscape-tip-close" aria-label="Dismiss">&times;</button>';
            document.body.appendChild(tip);

            var dismissed = false;
            function dismiss() {
                if (dismissed) return;
                dismissed = true;
                sessionStorage.setItem(SEEN_KEY, 'true');
                tip.classList.remove('bl-visible');
                setTimeout(function () { tip.remove(); }, 400);
            }

            requestAnimationFrame(function () {
                tip.classList.add('bl-visible');
            });

            tip.querySelector('.bl-landscape-tip-close').addEventListener('click', dismiss);
            setTimeout(dismiss, 6000);
        } catch (e) {}
    });
})();
