document.addEventListener("keydown", function(event) {
   
    const key = event.key;             
    const code = event.keyCode;        
    const isAlt = event.altKey;        
    const isCtrl = event.ctrlKey;      
    const isShift = event.shiftKey;    

    alert(
      `Key: ${key}\n` +
      `ASCII Code: ${code}\n` +
      `Alt pressed: ${isAlt}\n` +
      `Ctrl pressed: ${isCtrl}\n` +
      `Shift pressed: ${isShift}`
    );
  });