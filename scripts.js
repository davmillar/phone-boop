const numbers = {
    "443-401": {
        "name": "Goldfish Cyber Night",
        "foundAt": "RT"
    },
    "584-388": {
        "name": "ETNL Main",
        "foundAt": "RT"
    }, 
    "584-935": {
        "name": "Zelfina's Burgz",
        "foundAt": "RT"
    }, 
    "584-076": {
        "name": "ETNL Reception",
        "foundAt": "RT"
    }, 
    "584-344": {
        "name": "Yummy Pickled Egg",
        "foundAt": "RT"
    },
    "584-344 (2)": {
        "name": "Wedding DJ Wanted",
        "foundAt": "RT"
    }, 
    "584-344 (3)": {
        "name": "M???cita's Pickled Eggs",
        "foundAt": "RT"
    },
    "584-001": {
        "name": "ETNL Station Manager",
        "foundAt": "RT"
    }, 
    "584-748": {
        "name": "ETNL Green Room",
        "foundAt": "RT"
    }, 
    "584-480": {
        "name": "ETNL Rack Room",
        "foundAt": "RT"
    }, 
    "584-873": {
        "name": "ETNL Roof Deck",
        "foundAt": "RT"
    }, 
    "584-986": {
        "name": "ETNL Breakroom",
        "foundAt": "RT"
    }, 
    "584-549": {
        "name": "The Lizard Pit",
        "foundAt": "RT"
    }, 
    "639-466": {
        "name": "Silent Schleppers",
        "foundAt": "RT"
    }, 
    "639-744": {
        "name": "???",
        "foundAt": "RT"
    },
    "639-349": {
        "name": "SeiSo's Specialty Tools",
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
        "name": "DJ Hawk?",
        "foundAt": "RT"
    },
    "484-437": {
        "name": "Doppelgänger Hotline",
        "foundAt": "RT"
    }, 
    "584-447": {
        "name": "Garlic Inferno",
        "foundAt": "RT"
    },
    "584-228": {
        "name": "Ramona's Music Lessons",
        "foundAt": "RT"
    }, 
    "589-777": {
        "name": "Cowboix Hevvven",
        "foundAt": "RT"
    }, 
    "634-799": {
        "name": "???",
        "foundAt": "RT"
    }, 
    "639-119": {
        "name": "Buy Our Collected Calls",
        "foundAt": "RT"
    },
    "639-119 (2)": {
        "name": "Ska Band Hotline",
        "foundAt": "RT"
    }, 
    "484-204": {
        name: "Le Coupez, Alteraciones",
        foundAt: "RT"
    }, 
    "443-401": {
        name: "Misstix",
        foundAt: "RT"
    }, 
    "443-401 (2)": {
        name: "Cyber Night Color",
        foundAt: "RT"
    }, 
    "773-404": {
        name: "Charlie Dram's Mish Mash",
        foundAt: "RT"
    },
    "443-226": {
        name: "Banana Wizard",
        foundAt: "RT"
    },
    "834-286": {
        name: "Defense Class",
        foundAt: "RT"
    },
    "???-???": {
        name: "??? Dram's Dial-A-Romance",
        foundAt: "RT"
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
    