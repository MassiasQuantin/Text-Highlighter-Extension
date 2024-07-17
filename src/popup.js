document.getElementById('clearHighlights').addEventListener('click', function() {
    chrome.storage.sync.set({ highlights: [] }, () => {
      console.log("Highlights cleared.");
    });
  });
  