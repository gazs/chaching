var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

let numAdsViewable = 0;
let slots = [];

googletag.cmd.push(() => {
  googletag.pubads()
    //.addEventListener('slotVisibilityChanged', ({inViewPercentage, slot}) => {
      //console.log(slot.getAdUnitPath(), inViewPercentage)
    //})
    .addEventListener('slotRenderEnded', ({isEmpty, size, slot}) => {
      if (!isEmpty && size[0] > 50) {
        slots.push(slot);
        console.log(slot.getAdUnitPath(), 'slotRenderEnded')
      }
    })
    .addEventListener('impressionViewable', ({slot}) => {
      if(slots.includes(slot)) {
        numAdsViewable = numAdsViewable + 1;
        console.log('count ', numAdsViewable)
        console.log('ratio', numAdsViewable / slots.length)

chrome.runtime.sendMessage(
    "foo",
    function (response) {
        console.log(response);
    }
);
      }
    })
});

