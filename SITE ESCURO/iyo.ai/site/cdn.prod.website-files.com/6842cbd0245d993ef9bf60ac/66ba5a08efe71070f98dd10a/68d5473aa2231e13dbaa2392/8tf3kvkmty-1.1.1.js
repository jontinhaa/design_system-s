// Google Analytics script added by https://google-site-tools-for-webflow.com 
  // GST-GA4-ID: G-8TF3KVKMTY

  (function() {
  var link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://www.googletagmanager.com';
  document.head.appendChild(link);

  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-8TF3KVKMTY';
  
  // Append the script to the head to start the load
  document.head.appendChild(gtagScript);

  // Ensure the dataLayer is initialized
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }

  gtagScript.onload = function() {
      gtag('js', new Date());
      gtag('config', 'G-8TF3KVKMTY');
  };
})();