
const sound = new Audio(chrome.extension.getURL('sound.mp3'))

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request)
  const { numAdsViewable, numSlots } = request;
  chrome.browserAction.setBadgeText({ text: `${numAdsViewable}` });
  sound.play();
});


