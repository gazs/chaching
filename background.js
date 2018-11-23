const sound = new Audio(chrome.extension.getURL('sound.mp3'))

let count = 0;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { numAdsViewable, numSlots } = request;
  const ratio = numAdsViewable / numSlots
  chrome.browserAction.setBadgeText({ text: `${ratio.toFixed(1)}` });
  chrome.browserAction.setBadgeBackgroundColor({color: ratio <= 0.7 ? 'red' : 'blue'})
  if (numAdsViewable > count) {
    count = numAdsViewable;
    sound.play();
  }
});


