(function () {
  function unlockAll() {
    try {
      if (window.__siteAudioCtx && window.__siteAudioCtx.state === 'suspended') {
        window.__siteAudioCtx.resume();
      }
    } catch (e) {}

    document.querySelectorAll('video.site-media, audio.site-media').forEach(function (el) {
      if (!el.paused || el.dataset.userPaused === 'true') return;
      var p = el.play();
      if (p && p.catch) p.catch(function () {});
    });
  }
  window.__unlockSiteMedia = unlockAll;

  if (sessionStorage.getItem('mediaUnlocked') === 'true') {
    document.addEventListener('DOMContentLoaded', unlockAll);
    return;
  }

  var banner;
  function hideBanner() {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
  }

  function grant() {
    sessionStorage.setItem('mediaUnlocked', 'true');
    unlockAll();
    hideBanner();
    document.removeEventListener('click', grant, true);
    document.removeEventListener('touchstart', grant, true);
    document.removeEventListener('keydown', grant, true);
  }

  function showBanner() {
    banner = document.createElement('div');
    banner.textContent = 'Tap to enable video & sound';
    banner.setAttribute('role', 'button');
    banner.style.cssText = [
      'position:fixed', 'top:14px', 'left:50%', 'transform:translateX(-50%)',
      'background:#111', 'color:#fff', 'padding:0.6rem 1.15rem',
      'border-radius:999px', 'font-family:sans-serif', 'font-size:0.82rem',
      'letter-spacing:0.02em', 'z-index:999999', 'cursor:pointer',
      'box-shadow:0 6px 18px rgba(0,0,0,0.25)', 'user-select:none'
    ].join(';');
    banner.addEventListener('click', grant);
    document.body.appendChild(banner);
  }

  document.addEventListener('DOMContentLoaded', function () {
    showBanner();
    document.addEventListener('click', grant, true);
    document.addEventListener('touchstart', grant, true);
    document.addEventListener('keydown', grant, true);

    var observer = new MutationObserver(function () {
      if (sessionStorage.getItem('mediaUnlocked') === 'true') unlockAll();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
