var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('script.js');
(document.head || document.documentElement).appendChild(s);

window.addEventListener("message", (e) => {
  if (e.data.type === 'chaching') {
    chrome.runtime.sendMessage(e.data);
  }
});

