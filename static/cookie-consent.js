// Google Consent Mode v2 Integration
// This script must load BEFORE Google Tag Manager
(function() {
  'use strict';


  // Initialize dataLayer and gtag for consent mode
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  // Check if user has previously given consent
  // The hugo-modules cookie-consent component uses Cookies.js and stores 'cookie-consent'
  function hasConsent() {
    // Simple cookie check without dependency on Cookies.js
    const name = 'cookie-consent';
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length) === 'true';
      }
    }
    return null;
  }

  const consentGiven = hasConsent();

  // Set default consent state BEFORE GTM loads
  if (consentGiven === true) {
    // User previously granted consent
    gtag('consent', 'default', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });
  } else {
    // No consent yet or denied - default to denied
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'wait_for_update': 500
    });
  }

  // Hook into the existing cookie-consent banner's accept button
  // This runs after DOM is ready
  function setupConsentHandler() {
    const cookieButton = document.getElementById('cookie-button');
    if (cookieButton) {
      // Store original onclick handler
      const originalOnClick = cookieButton.onclick;

      // Override with our consent update
      cookieButton.onclick = function() {
        // Call original handler first (sets the cookie)
        if (originalOnClick) {
          originalOnClick.call(this);
        }

        // Update consent mode to granted
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
      };
    }
  }

  // Run setup when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupConsentHandler);
  } else {
    setupConsentHandler();
  }
})();
