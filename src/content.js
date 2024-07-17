document.addEventListener('mouseup', function() {
    const selection = window.getSelection();
    if (selection.toString().trim()) {
      highlightSelection(selection);
    }
  });
  