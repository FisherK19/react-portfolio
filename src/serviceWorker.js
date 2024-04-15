// Helper to determine if the hostname is localhost
function isLocalhost() {
    return Boolean(window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
  }
  
  // Logs messages in the console for localhost
  function logForLocalhost(registration) {
    navigator.serviceWorker.ready.then(() => {
      console.log(
        'This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA'
      );
    });
  }
  
  // Handle service worker registration with valid scenarios
  function handleSWRegistration(swUrl, config) {
    navigator.serviceWorker.register(swUrl).then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.');
                if (config && config.onUpdate) config.onUpdate(registration);
              } else {
                console.log('Content is cached for offline use.');
                if (config && config.onSuccess) config.onSuccess(registration);
              }
            }
          };
        }
      };
    }).catch(error => {
      console.error('Error during service worker registration:', error);
    });
  }
  
  // Check if the service worker exists and handle accordingly
  function checkServiceWorker(swUrl, config) {
    fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
      .then(response => {
        if (!response.ok || response.headers.get('content-type')?.indexOf('javascript') === -1) {
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => window.location.reload());
          });
        } else {
          handleSWRegistration(swUrl, config);
        }
      }).catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
      });
  }
  
  // Main function to register the service worker
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) return;
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost()) {
          checkServiceWorker(swUrl, config);
          logForLocalhost();
        } else {
          handleSWRegistration(swUrl, config);
        }
      });
    }
  }
  
  // Function to unregister the service worker
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      }).catch(error => {
        console.error(error.message);
      });
    }
  }
  