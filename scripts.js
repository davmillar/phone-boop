const numbers = {
    "443-401": {
        "name": "Goldfish Cyber Night",
        "foundAt": "TRU"
    },
    "584-076": {
        "name": "ETNL Reception"
    }, 
    "584-001": {
        "name": "ETNL Station Manager"
    }, 
    "584-748": {
        "name": "ETNL Green Room"
    }, 
    "584-480": {
        "name": "ETNL Rack Room"
    }, 
    "584-873": {
        "name": "ETNL Roof Deck"
    }, 
    "584-986": {
        "name": "ETNL Breakroom"
    }, 
    "639-466": {
        "name": "Silent Schleppers"
    }, 
    "639-744": {
        "name": "???",
        "foundAt": "RT"
    }, 
    "639-282": {
        "name": "???",
        "foundAt": "RT"
    }, 
    "639-555": {
        "name": "???",
        "foundAt": "RT"
    }, 
    "484-211": {
        "name": "???",
        "foundAt": "RT"
    }, 
    "278-209": {
        "name": "???",
        "foundAt": "RT"
    },
    "484-201": {
        "name": "???",
        "foundAt": "RT"
    },
    "713-281": {
        "name": "DJ Hawk?"
    } 
};

const createSpan = (contents) => {
    const span = document.createElement('span');
    span.textContent = contents;
    return span;
};

const createStrong = (contents) => {
    const span = document.createElement('strong');
    span.textContent = contents;
    return span;
}; 


const list = document.createElement('ul');

Object.entries(numbers).sort(([numberA, dataA], [numberB, dataB]) => dataA.name.localeCompare(dataB.name)).forEach(([number, data]) => {
    const listItem = document.createElement('li');
        listItem.appendChild(createStrong(data.name));
            listItem.appendChild(createSpan(''));
            listItem.appendChild(createSpan(number));
        
    list.appendChild(listItem);
});
    
document.body.appendChild(list); 
    