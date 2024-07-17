// Listen for mouse up event to detect text selection by the user
document.addEventListener('mouseup', function() {
    const selection = window.getSelection();
    if (selection.toString().trim()) {
      highlightSelection(selection);
    }
  });
  
  // Highlight the selected text
  function highlightSelection(selection) {
    if (!selection.rangeCount) return;
  
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.backgroundColor = 'yellow';  // Apply yellow background for highlighting
    span.style.color = 'black';  // Ensure text is black for contrast
    span.classList.add('highlight');
  
    try {
      range.surroundContents(span);
    } catch (error) {
      console.error('Error applying highlight:', error);
    }
  }
  