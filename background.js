chrome.action.onClicked.addListener((tab) => {
  if (!tab.url) return;
  //this is creating a new instance as target=_blank
  const targetUrl = `https://freedium-mirror.cfd/${tab.url}`;
  chrome.tabs.create({ url: targetUrl });
});
