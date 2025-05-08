const displayKeyArea=document.querySelector('.display-key')



function playSoundOnKeyPress(e){

    e.preventDefault()
    const key=e.key.toLowerCase()
    console.log(key);

    displayKeyArea.innerHTML=""
    displayKey(key)

    const mappedkey=keySoundMap[key]||key

    console.log('mapedname', mappedkey);
    

    const audio=new Audio(`sounds/${mappedkey}.mp3`);

    audio.play().catch(error =>{
        console.log('audio plya error', error);
        
    })
    
    
}

document.addEventListener('keydown', playSoundOnKeyPress)


function displayKey(key){
        // create Element to displayKey 
    const keyTOdisplay=document.createElement('p');
    keyTOdisplay.classList.add('key');

    keyTOdisplay.innerText=key.toUpperCase();

    displayKeyArea.appendChild(keyTOdisplay);

}



const keySoundMap = {
    // Letters
    'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g',
    'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n',
    'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u',
    'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z',
  
    // Uppercase (mapped lowercase, if files are same)
    'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g',
    'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n',
    'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u',
    'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z',
  
    // Numbers
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
    '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
  
    // Symbols
    '!': 'exclamation',
    '@': 'at',
    '#': 'hash',
    '$': 'dollar',
    '%': 'percent',
    '^': 'caret',
    '&': 'ampersand',
    '*': 'asterisk',
    '(': 'left-parenthesis',
    ')': 'right-parenthesis',
    '-': 'dash',
    '_': 'underscore',
    '=': 'equals',
    '+': 'plus',
    '[': 'left-bracket',
    ']': 'right-bracket',
    '{': 'left-brace',
    '}': 'right-brace',
    '\\': 'backslash',
    '|': 'pipe',
    ';': 'semicolon',
    ':': 'colon',
    '\'': 'apostrophe',
    '"': 'quote',
    ',': 'comma',
    '.': 'dot',
    '<': 'less-than',
    '>': 'greater-than',
    '/': 'slash',
    '?': 'question',
    '`': 'backtick',
    '~': 'tilde',
    ' ': 'space',
  
    // Special keys (optional)
    'enter': 'enter',
    'backspace': 'backspace',
    'tab': 'tab',
    'shift': 'shift',
    'control': 'control',
    'alt': 'alt',
    'escape': 'escape',
    'capsLock': 'capslock',
    'arrowUp': 'arrowUp',
    'arrowDown': 'arrowDown',
    'arrowLeft': 'arrowLeft',
    'arrowRight': 'arrowRight',
    'delete': 'delete',
    'home':'home',
    'pageup':'pageup',
    'end':'end',
    'pagedown':'pagedown',
    'pageup':'pageup',
    'insert':'insert',
  };