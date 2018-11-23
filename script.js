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
      }
    })
    .addEventListener('impressionViewable', ({slot}) => {
      if(slots.includes(slot)) {
        numAdsViewable = numAdsViewable + 1;

        window.postMessage({
          type: 'chaching',
          numAdsViewable,
          numSlots: slots.length
        })
      }
    })
});

