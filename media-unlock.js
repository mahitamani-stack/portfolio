(function () {
  var banner;

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

  function updateCapsuleText() {
    if (!banner) return;
    if (window.isIpodAudioPlaying && window.isIpodAudioPlaying()) {
      banner.textContent = 'Turn off sound';
    } else {
      banner.textContent = 'Turn on sound';
    }
  }
  window.__updateSoundCapsule = updateCapsuleText;

  function handleCapsuleClick(e) {
    if (e) e.stopPropagation();
    
    if (sessionStorage.getItem('mediaUnlocked') !== 'true') {
      sessionStorage.setItem('mediaUnlocked', 'true');
      unlockAll();
      if (window.playIpodAudio) window.playIpodAudio();
    } else {
      if (window.isIpodAudioPlaying && window.isIpodAudioPlaying()) {
        if (window.pauseIpodAudio) window.pauseIpodAudio();
      } else {
        if (window.playIpodAudio) window.playIpodAudio();
      }
    }
    updateCapsuleText();
  }

  function autoUnlockGesture() {
    if (sessionStorage.getItem('mediaUnlocked') !== 'true') {
      sessionStorage.setItem('mediaUnlocked', 'true');
      unlockAll();
      updateCapsuleText();
    }
    document.removeEventListener('click', autoUnlockGesture, true);
    document.removeEventListener('touchstart', autoUnlockGesture, true);
    document.removeEventListener('keydown', autoUnlockGesture, true);
  }

  function showBanner() {
    if (document.getElementById('site-sound-toggle-capsule')) return;

    banner = document.createElement('div');
    banner.id = 'site-sound-toggle-capsule';
    banner.setAttribute('role', 'button');
    banner.style.cssText = [
      'position:fixed', 'top:14px', 'left:50%', 'transform:translateX(-50%)',
      'background:#111', 'color:#fff', 'padding:0.6rem 1.25rem',
      'border-radius:999px', 'font-family:\'Instrument Serif\', serif', 'font-size:0.95rem',
      'letter-spacing:0.02em', 'z-index:999999', 'cursor:pointer',
      'box-shadow:0 6px 18px rgba(0,0,0,0.25)', 'user-select:none',
      'transition:transform 0.2s ease, background-color 0.2s ease'
    ].join(';');

    banner.addEventListener('mouseenter', function() {
      banner.style.transform = 'translateX(-50%) scale(1.05)';
      banner.style.background = '#222';
    });
    banner.addEventListener('mouseleave', function() {
      banner.style.transform = 'translateX(-50%) scale(1)';
      banner.style.background = '#111';
    });

    banner.addEventListener('click', handleCapsuleClick);
    document.body.appendChild(banner);
    updateCapsuleText();
  }

  document.addEventListener('DOMContentLoaded', function () {
    showBanner();

    if (sessionStorage.getItem('mediaUnlocked') === 'true') {
      unlockAll();
      // Wait a moment for iPod audio script to set up state
      setTimeout(updateCapsuleText, 100);
    } else {
      document.addEventListener('click', autoUnlockGesture, true);
      document.addEventListener('touchstart', autoUnlockGesture, true);
      document.addEventListener('keydown', autoUnlockGesture, true);
    }

    var observer = new MutationObserver(function () {
      if (sessionStorage.getItem('mediaUnlocked') === 'true') unlockAll();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
