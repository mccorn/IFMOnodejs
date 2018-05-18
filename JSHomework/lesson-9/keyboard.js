window.onload = function() {
    let keyboardarray = [];
    
    window.onkeydown = function(event) {
        let keyChar = String.fromCharCode(event.keyCode);
        let screen = document.getElementById('screen');
        if (!keyboardarray.includes(event.keyCode)) {
            addKey(event);    
        };
        if (keyChar.match(/\w/)) screen.textContent = keyChar; else screen.textContent = event.keyCode;
    };
    function addKey(event) {
        let screen = document.getElementById('screen');
        let keyboard = document.getElementById('keyboard');
        let keyDiv =  document.createElement('div');
        let keyChar = String.fromCharCode(event.keyCode);
        keyDiv.classList.add('key');
        if (keyChar.match(/\w/)) keyDiv.textContent = keyChar; else keyDiv.textContent = event.keyCode;
        keyboardarray.push(event.keyCode);
        keyboard.append(keyDiv);
//        console.log(event.keyCode.toString());
    };
};

