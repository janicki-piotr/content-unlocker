chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && new URL(tab.url).hostname.includes("onet.pl")) {
        chrome.cookies.getAll({domain: "onet.pl"}, function(cookies) {
            chrome.cookies.remove({url: "https://.onet.pl/", name: "__tbc"});
          });
    }
  })