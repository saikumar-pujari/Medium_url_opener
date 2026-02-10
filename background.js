chrome.action.onClicked.addListener((tab) => {
  if (!tab.url) return;
  const targetUrl = `https://freedium-mirror.cfd/${tab.url}`;
  chrome.tabs.create({ url: targetUrl });
});
