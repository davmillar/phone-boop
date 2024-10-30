const numbers = [
    {
        number: "376-101",
        name: "Walter Dram",
        foundAt: "OM"
    },
    {
        number: "376-102",
        name: "Cecelia Dram",
        foundAt: "OM"
    },
    {
        number: "376-105",
        name: "Kaz Matsumura",
        foundAt: "OM"
    },
    {
        number: "376-771",
        name: "Lord Petri Dockett III",
        foundAt: "OM"
    },
    {
        number: "376-772",
        name: "Beatrice Young",
        foundAt: "OM"
    },
    {
        number: "376-773",
        name: "Elder Yanis",
        foundAt: "OM"
    },
    {
        number: "376-774",
        name: "Oni Stern",
        foundAt: "OM"
    },
    {
        number: "376-775",
        name: "Belmont Grant",
        foundAt: "OM"
    },
    {
        number: "376-776",
        name: "Javier Apodaca",
        foundAt: "OM"
    },
    {
        number: "376-777",
        name: "Olive Rojas-Diaz",
        foundAt: "OM"
    },
    {
        number: "376-778",
        name: "Jacqueline Sorrentino",
        foundAt: "OM"
    },
    {
        number: "376-779",
        name: "El Espectro",
        foundAt: "OM"
    },
    {
        number: "376-305",
        name: "Dramcorp Main Line",
        foundAt: "OM"
    },
    {
        number: "376-303",
        name: "Dramcorp IT",
        foundAt: "OM"
    },
    {
        number: "376-307",
        name: "Dramcorp HR",
        foundAt: "OM"
    },
    {
        number: "376-406",
        name: "Dramcorp Legal",
        foundAt: "OM"
    },
    {
        number: "376-501",
        name: "Dramcorp Marketing",
        foundAt: "OM"
    },
    {
        number: "376-868",
        name: "Dramcorp Hotline",
        foundAt: "OM"
    },
    {
        number: "376-912",
        name: "Dramcorp Security",
        foundAt: "OM"
    },
    {
        number: "378-001",
        name: "DART Offices",
        foundAt: "OM"
    },
    {
        number: "378-010",
        name: "DART Portal Testing",
        foundAt: "OM"
    },
    {
        number: "322-426",
        name: "Dramcorp Factory Foreman's Office",
        foundAt: "OM"
    },

    {
        number: "972-736-7676",
        name: "Dug",
        foundAt: "TRU"
    },
    {
        number: "443-401",
        name: "Goldfish Cyber Night",
        foundAt: "RT"
    },
    {
        number: "484-666",
        name: "???",
        foundAt: "???"
    },
    {
        number: "484-777",
        name: "Battle of the Ages/Llama",
        foundAt: "TRU"
    },
    {
        number: "484-237",
        name: "?ur-i-ñoz",
        foundAt: "TRU"
    },
    {
        number: "584-388",
        name: "ETNL Main",
        foundAt: "RT"
    }, 
    {
        number: "584-935",
        name: "Zelfina's Burgz",
        foundAt: "RT"
    }, 
    {
        number: "584-076",
        name: "ETNL Reception",
        foundAt: "RT"
    }, 
    {
        number: "584-344",
        name: "Yummy Pickled Egg",
        foundAt: "RT"
    },
    {
        number: "584-344",
        name: "Wedding DJ Wanted",
        foundAt: "RT"
    }, 
    {
        number: "584-344",
        name: "M???cita's Pickled Eggs",
        foundAt: "RT"
    },
    {
        number: "584-001",
        name: "ETNL Station Manager",
        foundAt: "RT"
    }, 
    {
        number: "584-748",
        name: "ETNL Green Room",
        foundAt: "RT"
    }, 
    {
        number: "584-480",
        name: "ETNL Rack Room",
        foundAt: "RT"
    }, 
    {
        number: "584-873",
        name: "ETNL Roof Deck",
        foundAt: "RT"
    }, 
    {
        number: "584-986",
        name: "ETNL Breakroom",
        foundAt: "RT"
    }, 
    {
        number: "584-549",
        name: "The Lizard Pit",
        foundAt: "RT"
    }, 
    {
        number: "639-466",
        name: "Silent Schleppers",
        foundAt: "RT"
    }, 
    {
        number: "639-744",
        name: "???",
        foundAt: "RT"
    },
    {
        number: "639-349",
        name: "SeiSo's Specialty Tools",
        foundAt: "RT"
    }, 
    {
        number: "639-282",
        name: "???",
        foundAt: "RT"
    }, 
    {
        number: "639-555",
        name: "???",
        foundAt: "RT"
    }, 
    {
        number: "484-211",
        name: "???",
        foundAt: "RT"
    }, 
    {
        number: "278-209",
        name: "???",
        foundAt: "RT"
    },
    {
        number: "484-201",
        name: "???",
        foundAt: "RT"
    },
    {
        number: "713-281",
        name: "DJ Hawk?",
        foundAt: "RT"
    },
    {
        number: "484-437",
        name: "Doppelgänger Hotline",
        foundAt: "RT"
    }, 
    {
        number: "584-447",
        name: "Garlic Inferno",
        foundAt: "RT"
    },
    {
        number: "584-228",
        name: "Ramona's Music Lessons",
        foundAt: "RT"
    }, 
    {
        number: "589-777",
        name: "Cowboix Hevvven",
        foundAt: "RT"
    }, 
    {
        number: "634-799",
        name: "???",
        foundAt: "RT"
    }, 
    {
        number: "639-119",
        name: "Buy Our Collected Calls",
        foundAt: "RT"
    },
    {
        number: "639-119",
        name: "Ska Band Hotline",
        foundAt: "RT"
    }, 
    {
        number: "484-204",
        name: "Le Coupez, Alteraciones",
        foundAt: "RT"
    }, 
    {
        number: "443-401",
        name: "Misstix",
        foundAt: "RT"
    }, 
    {
        number: "443-401",
        name: "Cyber Night Color",
        foundAt: "RT"
    }, 
    {
        number: "773-404",
        name: "Charlie Dram's Mish Mash",
        foundAt: "RT"
    },
    {
        number: "443-226",
        name: "Banana Wizard",
        foundAt: "RT"
    },
    {
        number: "834-286",
        name: "Defense Class",
        foundAt: "RT"
    },
    {
        number: "???-???",
        name: "??? Dram's Dial-A-Romance",
        foundAt: "RT"
    } 
];

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

numbers.sort((dataA, dataB) => {
    let nameComp = dataA.name.localeCompare(dataB.name);

    if (nameComp !== 0) {
        return nameComp;
    }

    return dataA.number.localeCompare(dataB.number);
}).forEach((data) => {
    const listItem = document.createElement('li');
        listItem.appendChild(createStrong(data.name));
            listItem.appendChild(createSpan(''));
            listItem.appendChild(createSpan(data.number));
        
    list.appendChild(listItem);
});
    
document.body.appendChild(list); 
    