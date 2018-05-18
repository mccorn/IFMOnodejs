window.onload = function() {
    let keyboardarray = [];
    
    window.onkeydown = function(event) {
        let keyChar = String.fromCharCode(event.keyCode);
        let screen = document.getElementById('screen');
        if (!keyboardarray.includes(event.keyCode)) {
            addKey(event);    
        };
        if (keyChar.match('\/d*/w*\g') == 0) {
            screen.textContent = event.keyCode;
        } else screen.textContent =  keyChar;
    };
    function addKey(event) {
        let screen = document.getElementById('screen');
        let keyboard = document.getElementById('keyboard');
        let keyDiv =  document.createElement('div');
        let keyChar = String.fromCharCode(event.keyCode);
        keyDiv.classList.add('key');
        keyDiv.textContent = keyChar;
        keyboardarray.push(event.keyCode);
        keyboard.append(keyDiv);
        console.log(event.keyCode.toString());
    };
};

