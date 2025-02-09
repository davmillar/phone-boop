const numbers = [
    {
        number: "584-969",
        name: "Pennsylvania Dutch Yinz-enary",
        foundAt: "RT"
    },
    {
        number: "313-131",
        name: "??? (C-Street/Denver according to ETNL Reception Desk)",
        foundAt: "RT"
    },
    {
        number: "376-101",
        name: "Walter Dram",
        foundAt: "OM",
        group: 'Dramcorp C-Suite'
    },
    {
        number: "376-102",
        name: "Cecelia Dram",
        foundAt: "OM",
        group: 'Dramcorp C-Suite'
    },
    {
        number: "376-105",
        name: "Kaz Matsumura",
        foundAt: "OM",
        group: 'Dramcorp C-Suite'
    },
    {
        number: "376-771",
        name: "Lord Petri Dockett III",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },    
    {
        number: "376-101",
        name: "Walter (Work)",
        foundAt: "OM",
        group: 'Dram',
        person: true
    },
    {
        number: "376-102",
        name: "Cecelia (Work)",
        foundAt: "OM",
        group: 'Dram',
        person: true
    },
    {
        number: "376-105",
        name: "Matsumura, Kaz (Work)",
        foundAt: "OM",
        person: true
    },
    {
        number: "376-771",
        name: "Dockett, Lord Petri III (Work)",
        foundAt: "OM",
        person: true
    },
    {
        number: "376-771",
        name: "Milica Harambasic",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-772",
        name: "Beatrice Young",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-772",
        name: "Vydilla Alton",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-772",
        name: "Element B: Disambiguator / Terrestriator",
        foundAt: "OM",
        group: 'Factory Elements'
    },
    {
        number: "376-773",
        name: "Elder Yanis",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-774",
        name: "Oni Stern",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-775",
        name: "Belmont Grant",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-775",
        name: "Grant, Belmont",
        foundAt: "OM",
        person: true
    },
    {
        number: "376-776",
        name: "Javier Apodaca",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-777",
        name: "Olive Rojas-Diaz",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-778",
        name: "Jacqueline Sorrentino",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-779",
        name: "El Espectro",
        foundAt: "OM",
        group: 'Dramcorp Board'
    },
    {
        number: "376-305",
        name: "Dramcorp Main Line",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-303",
        name: "Dramcorp IT",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-307",
        name: "Dramcorp HR",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-406",
        name: "Dramcorp Legal",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-501",
        name: "Ari Antoniu",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-501",
        name: "Tallulah Corrian",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-501",
        name: "Dramcorp Marketing",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-868",
        name: "Dramcorp Hotline",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "378-001",
        name: "DART Offices",
        foundAt: "OM",
        group: 'DART'
    },
    {
        number: "378-010",
        name: "DART Portal Testing",
        foundAt: "OM",
        group: 'DART'
    },
    {
        number: "378-492",
        name: "DART Flyer",
        foundAt: "RT",
        group: 'DART'
    },
    {
        number: "322-426",
        name: "Factory Foreman's Office",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "972-736-7676",
        name: "Dug",
        note: "old #, use MW app",
        strike: true,
        foundAt: "TRU",
        image: "dug.png",
        imageAlt: "Got a bean for your mind garden? Text Dug at 972-736-7676"
    },
    {
        number: "443-401",
        name: "Cyber Night",
        foundAt: "RT"
    },
    {
        number: "484-666",
        name: "Plotzo/Undermallers?",
        foundAt: "???"
    },
    {
        number: "484-588",
        name: "??, Marguerite",
        person: true,
        note: "Delaneys' neighbor",
        foundAt: "TRU"
    },
    {
        number: "484-777",
        name: "Battle of the Ages",
        foundAt: "TRU",
        group: 'En Espa\ñol'
    },
    {
        number: "484-237",
        name: "?ur-i-\ñoz",
        foundAt: "TRU"
    },
    {
        number: "584-388",
        name: "ETNL Main",
        foundAt: "RT",
        group: 'ETNL'
    },
    {
        number: "584-935",
        name: "Zelfina's Burgz",
        foundAt: "RT"
    },
    {
        number: "584-076",
        name: "ETNL Reception",
        foundAt: "RT",
        group: 'ETNL'
    },
    {
        number: "584-344",
        name: "Mamacita's Pickled Eggs",
        foundAt: "RT"
    },
    {
        number: "584-001",
        name: "ETNL Station Manager",
        foundAt: "RT",
        group: 'ETNL'
    },
    {
        number: "584-748",
        name: "ETNL Green Room",
        foundAt: "RT",
        group: 'ETNL'
    },
    {
        number: "584-480",
        name: "ETNL Rack Room",
        foundAt: "RT",
        group: 'ETNL'
    },
    {
        number: "584-873",
        name: "ETNL Roof Deck",
        foundAt: "RT",
        group: 'ETNL'
    },
    {
        number: "584-986",
        name: "ETNL Breakroom",
        foundAt: "RT",
        group: 'ETNL'
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
        name: "Silent Schleppers",
        foundAt: "RT"
    },
    {
        number: "639-349",
        name: "Are you Flexing On Me Bro? (Male Aggression Hotline)",
        foundAt: "RT"
    },
    {
        number: "639-282",
        name: "Amalgam",
        foundAt: "RT"
    },
    {
        number: "484-327",
        name: "Ear Idyllic Ear Scan",
        foundAt: "RT"
    },
    {
        number: "639-555",
        name: "??? (Call failed)",
        foundAt: "RT"
    },
    {
        number: "484-211",
        name: "Lampshop Alley",
        foundAt: "RT",
        group: 'Payphones'
    },
    {
        number: "???-???",
        name: "House of Eternal Return",
        foundAt: "Factory Obscura Mixtape",
        note: "Talk/watch from Factory Obscura Mixtape in OKC",
        group: 'Payphones'
    },
    {
        number: "???-???",
        name: "??? Video phone at Factory Obscura Mixtape in OKC, can contact from payphone at House of Eternal Return in Santa Fe",
        foundAt: "HoER"
    },
    {
        number: "839-000",
        name: "???",
        foundAt: "TRU"
    },
    {
        number: "484-366",
        name: "Presidential World Domination Red Phone Line",
        foundAt: "RT"
    },
    {
        number: "484-221",
        name: "Emergence",
        foundIn: "TRU"
    },
    {
        number: "834-286",
        name: "LaVerne (Cell)",
        person: true,
        // strike: true,
        foundAt: "TRU",
        group: 'Fuqua'
    },
    {
        number: "484-366",
        name: "??, Drew (Cell)",
        person: true,
        strike: true,
        foundAt: "TRU"
    },
    {
        number: "773-214",
        name: "Jerrica (Cell)",
        person: true,
        strike: true,
        foundAt: "TRU",
        group: 'Fuqua'
    },
    {
        number: "010-222-8371",
        name: "Smellin Melvin",
        foundAt: "RT"
    },
    {
        number: "278-201",
        name: "Panopticon Technician",
        foundAt: "RT",
        foundBy: "AgentX"
    },
    {
        number: "278-986",
        name: "Fishy Delishy",
        foundAt: "RT"
    },
    {
        number: "278-208",
        name: "The Cycle",
        foundAt: "RT"
    },
    {
        number: "594-386",
        name: "??? (RT Teaser Commercial)",
        foundAt: "RT"
    },
    {
        number: "584-386",
        name: "ETNL Main/Phone Tree",
        foundAt: "RT",
        group: 'ETNL'
    },
    {
        number: "484-201",
        name: "Carmen (Home)",
        person: true,
        foundAt: "RT",
        group: 'Delaney'
    },
    {
        number: "713-281",
        name: "??? DJ Hawk? (Cannot be completed as dialed)",
        foundAt: "RT"
    },
    {
        number: "484-437",
        name: "Doppelgänger Hotline (Not in service)",
        foundAt: "RT"
    },
    {
        number: "484-237",
        name: "No Questions Asked New Identity Hotline",
        foundAt: "TRU"
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
        number: "1-777-CBX-HVVN",
        name: "Cowboix Hevvven",
        foundAt: "RT"
    },
    {
        number: "634-799",
        name: "??? (Cannot be completed as dialed)",
        foundAt: "RT"
    },
    {
        number: "639-119",
        name: "Emergency Dispatch Center",
        foundAt: "RT"
    },
    {
        number: "484-204",
        name: "Le Coupez, Alteraciones",
        foundAt: "RT"
    },
    {
        number: "773-404",
        name: "Charlie Dram's Gas Station",
        foundAt: "RT"
    },
    {
        number: "773-404",
        name: "Charlie (Work)",
        foundAt: "RT",
        group: "Dram",
        person: true
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
        number: "664-739",
        name: "Hester",
        foundAt: "RT",
        group: "Dram",
        person: true
    },
    {
        number: "664-739",
        name: "Hester Dram's Dial-A-Romance",
        foundAt: "RT"
    },
    {
        number: "664-666",
        name: "Chambers of Customer Service",
        foundAt: "RT",
        group: 'Dramcorp'
    },
    {
        number: "443-242",
        name: "Prank Bell",
        foundAt: "RT"
    },
    {
        number: "639-000",
        name: "Meow Wolf Helpline",
        foundAt: "???"
    },
    {
        number: "322-201",
        name: "???",
        foundAt: "TRU"
    },
    {
        number: "278-LAW (529)",
        name: "Law Offices of La Madrina",
        foundAt: "Reddit"
    },
    {
        number: "262-201",
        name: "CS?",
        foundAt: "Discord"
    },
    {
        number: "262-202",
        name: "R@s Nest",
        foundAt: "Discord"
    },
    {
        number: "262-203",
        name: "Rest Stop (CS Bathroom)",
        foundAt: "Discord"
    },
    {
        number: "276-676",
        name: "Marin Dram Tip Line",
        foundAt: "Discord"
    },
    {
        number: "278-112",
        name: "Elektro",
        foundAt: "Discord"
    },
    {
        number: "278-202",
        name: "SaLawn",
        foundAt: "Discord"
    },
    {
        number: "278-203",
        name: "C-Street Alley Payphone",
        foundAt: "Discord",
        group: 'Payphones'
    },
    {
        number: "278-204",
        name: "Mijo Miho",
        foundAt: "Discord"
    },
    {
        number: "278-205",
        name: "C-Street North Payphone",
        foundAt: "Discord",
        group: 'Payphones'
    },
    {
        number: "278-207",
        name: "C-Street South Payphone",
        foundAt: "Discord",
        group: 'Payphones'
    },
    {
        number: "278-209",
        name: "Cotter, May & Fred",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "278-221",
        name: "Sid the Psychic",
        foundAt: "Discord"
    },
    {
        number: "278-346",
        name: "Oprheum Monoplex Movie Phone",
        foundAt: "Discord"
    },
    {
        number: "278-404",
        name: "Forgotten Four Tipline",
        foundAt: "Discord"
    },
    {
        number: "278-404",
        name: "Tracking Error",
        foundAt: "Discord"
    },
    {
        number: "278-4VR (487)",
        name: "The Gyre Apartments",
        foundAt: "Discord"
    },
    {
        number: "278-563",
        name: "Infatuation Station Stanline",
        foundAt: "Discord"
    },
    {
        number: "278-569",
        name: "Hair Management",
        foundAt: "Discord"
    },
    {
        number: "278-636",
        name: "SameDay News Office",
        foundAt: "Discord"
    },
    {
        number: "278-747",
        name: "Daily Phaseball Recap",
        foundAt: "Discord"
    },
    {
        number: "278-766",
        name: "Cecil Baca's Audio Poem Repository",
        foundAt: "Discord"
    },
    {
        number: "278-930",
        name: "Convergence Exchange Main Line",
        foundAt: "Discord"
    },
    {
        number: "278-995",
        name: "Pet Shop",
        foundAt: "Discord"
    },
    {
        number: "303-362",
        name: "Tut Field Office",
        foundAt: "Discord"
    },
    {
        number: "303-371",
        name: "Cheshire Manor Apartment For Rent",
        foundAt: "Discord"
    },
    {
        number: "303-373",
        name: "Call Home?",
        foundAt: "Discord"
    },
    {
        number: "303-375",
        name: "Call The Doc?",
        foundAt: "Discord"
    },
    {
        number: "303-391",
        name: "Miss Prim's Exotic Beasts By Appointment Only",
        foundAt: "Discord"
    },
    {
        number: "303-462",
        name: "Cosmic Safari Guided Tours Of The Beyond",
        foundAt: "Discord"
    },
    {
        number: "303-719",
        name: "Smiley?",
        foundAt: "Discord"
    },
    {
        number: "303-720",
        name: "Dad?",
        foundAt: "Discord"
    },
    {
        number: "303-762",
        name: "The Arsenal?",
        foundAt: "Discord"
    },
    {
        number: "303-888",
        name: "Hypnocorp",
        foundAt: "Discord"
    },
    {
        number: "303-939",
        name: "Queries of the Unexplained Investigations and Research Community (QUIRC)",
        foundAt: "Discord"
    },
    {
        number: "322-202",
        name: "Source Well Security Station",
        foundAt: "Discord"
    },
    {
        number: "322-205",
        name: "Accident Avoidance Operations",
        foundAt: "Discord"
    },
    {
        number: "322-206",
        name: "Anomalous Composition Monitoring Station",
        foundAt: "Discord"
    },
    {
        number: "322-207",
        name: "Omega Mart Factory",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "322-350",
        name: "Element A: Florisium",
        foundAt: "Discord",
        group: 'Factory Elements'
    },
    {
        number: "322-352",
        name: "Element C: Helical Wheevorizer",
        foundAt: "Discord",
        group: 'Factory Elements'
    },
    {
        number: "322-353",
        name: "Element D: Product Incubator",
        foundAt: "Discord",
        group: 'Factory Elements'
    },
    {
        number: "322-355",
        name: "Element F: Horminal Essentuizer",
        foundAt: "Discord",
        group: 'Factory Elements'
    },
    {
        number: "322-356",
        name: "Element H: Geodoica",
        foundAt: "Discord",
        group: 'Factory Elements'
    },
    {
        number: "322-457",
        name: "Klemens, Herc",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "322-463",
        name: "Skilton, Cadence",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "322-471",
        name: "Harambasic, Milica",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "322-479",
        name: "Antoniu, Ari",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "322-482",
        name: "Alton, Vydilla",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "322-484",
        name: "Nightshade, Lester",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "322-487",
        name: "Al-Balushi, Nawar",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "322-490",
        name: "Askfry, Zenit",
        person: true,
        foundAt: "Discord"
    },
    {
        number: "352-201",
        name: "QDOT Denver Station",
        foundAt: "Discord",
        group: 'QDOT'
    },
    {
        number: "376-201",
        name: "Marketing & Future Now Office",
        foundAt: "Discord",
        group: 'Dramcorp'
    },
    {
        number: "376-202",
        name: "VP of Tomorrowment's Desk",
        foundAt: "Discord",
        group: 'Dramcorp'
    },
    {
        number: "376-203",
        name: "Omega Mart Bathroom",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "376-203",
        name: "Dramcorp IT",
        foundAt: "Discord",
        group: 'Dramcorp'
    },
    {
        number: "376-206",
        name: "Dramcorp Legal",
        foundAt: "Discord",
        group: 'Dramcorp'
    },
    {
        number: "376-210",
        name: "Dram Reception Waiting Zone",
        foundAt: "Discord",
        group: 'Dramcorp'
    },
    {
        number: "376-211",
        name: "Money Tornado",
        foundAt: "Discord"
    },
    {
        number: "376-212",
        name: "VP of Futurability's Desk",
        note: 'Kaz',
        foundAt: "Discord",
        group: 'Dramcorp'
    },
    {
        number: "376-610",
        name: "DART Portal Testing",
        foundAt: "Discord",
        group: 'DART'
    },
    {
        number: "376-633",
        name: "DART-Med",
        foundAt: "Discord",
        group: 'DART'
    },
    {
        number: "376-633",
        name: "Portal Sickness Hotline",
        foundAt: "Discord",
        group: 'DART'
    },
    {
        number: "376-912",
        name: "Dramcorp Security",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-912",
        name: "Chuck Stager",
        foundAt: "OM",
        group: 'Dramcorp'
    },
    {
        number: "376-912",
        name: "Stager, Chuck (Work)",
        foundAt: "OM",
        person: true
    },
    {
        number: "378-989",
        name: "What Is This?",
        note: 'Plot Explainer',
        foundAt: "Discord"
    },
    {
        number: "423-525",
        name: "Kaliedogoth Public Forum",
        foundAt: "Discord"
    },
    {
        number: "437-438",
        name: "Society of Periphery Studies",
        foundAt: "Discord"
    },
    {
        number: "484-186",
        name: "Highest Moral Authority Questions",
        foundAt: "Discord"
    },
    {
        number: "484-623",
        name: "Seymour the Subroutine",
        foundAt: "Discord"
    },
    {
        number: "484-623",
        name: "Dentist",
        strike: true,
        foundAt: "Discord"
    },
    {
        number: "484-635",
        name: "Bangerz",
        foundAt: "Discord"
    },
    {
        number: "484-746",
        name: "Beep Beep?",
        foundAt: "Discord"
    },
    {
        number: "484-946",
        name: "Personality Test",
        foundAt: "Discord"
    },
    {
        number: "484-975",
        name: "Chore Wheel",
        foundAt: "Discord"
    },
    {
        number: "484-986",
        name: "Save Less Foods",
        note: "Chef Choose Your Own Adventure",
        foundAt: "Discord"
    },
    {
        number: "663-000",
        name: "Omega Mart Main Line",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "663-266",
        name: "Omega Mart Main",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "663-266",
        name: "Difficult Spills Hotline",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "664-201",
        name: "Omega Mart Produce",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "664-203",
        name: "Omega Mart Aisle 5",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "664-204",
        name: "Omega Mart Apparel",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "664-205",
        name: "Omega Mart Garden",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "664-206",
        name: "Omega Mart Deli Arts",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "664-207",
        name: "Omega Mart Breakroom",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "664-665",
        name: "Omega Mart Reporting Issue Hotline",
        foundAt: "Discord",
        group: 'Omega Mart'
    },
    {
        number: "738-101",
        name: "QDOT Superconductor General's Desk",
        foundAt: "Discord",
        group: 'QDOT'
    },
    {
        number: "738-143",
        name: "QDOT Department of Quantum and Mnemonic Research",
        foundAt: "Discord",
        group: 'QDOT'
    },
    {
        number: "738-738",
        name: "QDOT Traveler Hotline",
        foundAt: "Discord",
        group: 'QDOT'
    },
    {
        number: "738-786",
        name: "QDOT Memory Storm Hotline",
        foundAt: "Discord",
        group: 'QDOT'
    },
    {
        number: "773-201",
        name: "Seven Monolith Village",
        foundAt: "Discord"
    },
    {
        number: "773-202",
        name: "Alpha Servie Phone",
        foundAt: "Discord"
    },
    {
        number: "773-214",
        name: "Maria's Burrito Explosion",
        foundAt: "Discord"
    },
    {
        number: "773-737",
        name: "Attention Dramcorp Drones Message",
        foundAt: "Discord"
    },
    {
        number: "834-001",
        name: "DASMR",
        foundAt: "Discord"
    },
    {
        number: "834-114",
        name: "Emotional Release Hotline",
        foundAt: "Discord"
    },
    {
        number: "834-170",
        name: "Desert Creatures Deliverance",
        foundAt: "Discord"
    },
    {
        number: "834-200",
        name: "Kaz's Self-Guided Emotion-Disintegrator",
        foundAt: "Discord"
    },
    {
        number: "834-344",
        name: "Marin",
        person: true,
        foundAt: "Discord",
        group: "Dram"
    },
    {
        number: "834-466",
        name: "Buseca Wisdom Line (Seven Monolith Village Radio Station)",
        foundAt: "Discord"
    },
    {
        number: "834-737",
        name: "Lara, Jesse, & Ximena (L.X.J)",
        foundAt: "Discord"
    },
    {
        number: "834-777",
        name: "Rose's Medical Service",
        foundAt: "Discord"
    },
    {
        number: "869-496",
        name: "Interdimensional Workers of the Multiverse",
        foundAt: "Discord"
    },
    {
        number: "101-462",
        name: "??? Cosmic Safari",
        foundAt: "Discord"
    },
    {
        number: "170-415",
        name: "??? (Jessamy's RTD pass number found in Exchange memory wall)",
        foundAt: "Discord"
    },
    {
        number: "278-227",
        name: "Alien Snow Day 1",
        foundAt: "Discord",
        foundBy: "MWF1"
    },
    {
        number: "278-229",
        name: "Alien Snow Day 2",
        foundAt: "Discord",
        foundBy: "MWF1"
    },
    {
        number: "278-279",
        name: "???",
        foundAt: "Discord"
    },
    {
        number: "278-729",
        name: "???",
        foundAt: "Discord"
    },
    {
        number: "278-929",
        name: "Alien Snow Day 3",
        note: "Pin: 5",
        foundAt: "Discord",
        foundBy: "MWF1"
    },
    {
        number: "303-192",
        name: "??? (Mountain Bell phone book from 1992 with number scratched to make 6-digit VOCS number)",
        foundAt: "Discord"
    },
    {
        number: "303-333",
        name: "Message about Senal family?",
        foundAt: "CS",
        foundBy: "u/exgaysurvivordan"
    },
    {
        number: "322-354",
        name: "DART Factory Maintenance Oscillibond Line",
        foundAt: "Discord",
        group: 'DART'
    },
    {
        number: "322-478",
        name: "Dramcorp Fired Employee?",
        foundAt: "Discord",
        group: 'Dramcorp'
    },
    {
        number: "367-305",
        name: "???",
        foundAt: "Discord"
    },
    {
        number: "(20P)-229S-11",
        name: "??? (HouseOnAHouseOnAHouse.com C-Street Poster)",
        foundAt: "Discord"
    },
    {
        number: "373-775",
        name: "???",
        foundAt: "Discord"
    },
    {
        number: "129-150",
        name: "??? GSM? From Xerox packet at ETNL reception",
        foundAt: "RT"
    },
    {
        number: "136-186",
        name: "??? g/m^2? From Xerox packet at ETNL reception",
        foundAt: "RT"
    },
    {
        number: "378-209",
        name: "Dictation of Letter to Walter Dram",
        foundAt: "Discord"
    },
    {
        number: "378-421",
        name: "Source/Happle Voice Memo",
        foundAt: "Discord"
    },
    {
        number: "378-492",
        name: "Dramlite Conversation",
        foundAt: "Discord"
    },
    {
        number: "378-716",
        name: "Plenty Valley Jingle",
        foundAt: "Discord"
    },
    {
        number: "584-635",
        name: "Madame K",
        foundBy: "TrashCam on Discord"
    },
    {
        number: "378-812",
        name: "Potluck/Cecelia Dram Conversation",
        foundAt: "Discord"
    },
    {
        number: "378-896",
        name: "Nula/Source Explainer",
        foundAt: "Discord"
    },
    {
        number: "378-987",
        name: "???",
        foundAt: "Discord"
    },
    {
        number: "423-277",
        name: "Is Eemia Still Frozen?",
        foundAt: "Discord"
    },
    {
        number: "437-776",
        name: "Power of Positive Mechanics",
        foundAt: "Discord"
    },
    {
        number: "478-201",
        name: "???",
        foundAt: "Discord"
    },
    {
        number: "484-078",
        name: "Pharmacy",
        note: "TRU Trailer",
        strike: true,
        foundAt: "TRU"
    },
    {
        number: "484-204",
        name: "??",
        person: true,
        note: "Marguerite's Nurse",
        foundAt: "TRU"
    },
    {
        number: "484-207",
        name: "???",
        foundAt: "Discord"
    },
    {
        number: "484-222",
        name: "Adventure of Your Making",
        foundAt: "Discord"
    },
    {
        number: "484-222",
        name: "Family Doctor",
        strike: true,
        foundAt: "TRU"
    },
    {
        number: "484-282",
        name: "9th Caller Auctions",
        foundAt: "Discord"
    },
    {
        number: "484-401",
        name: "Specific Information Line",
        foundAt: "Discord"
    },
    {
        number: "484-424",
        name: "Hyperventilating Crisis Hotline",
        foundAt: "Discord"
    },
    {
        number: "484-634",
        name: "Not Interesting Hotline",
        foundAt: "Discord"
    },
    {
        number: "484-726",
        name: "S.A.M.M.I.",
        foundAt: "TRU",
        group: 'En Espa\ñol'
    },
    {
        number: "484-736",
        name: "Skeptic Friends Network",
        foundAt: "Discord"
    },
    {
        number: "484-736",
        name: "Carmen (Cell)",
        person: true,
        strike: true,
        foundAt: "TRU",
        group: 'Delaney'
    },
    {
        number: "378-764",
        name: "???",
        foundAt: "Discord"
    },
    {
        number: "484-764",
        name: "???",
        foundAt: "TRU"
    },
    {
        number: "484-848",
        name: "Validate Your Emotions (Your Heart)",
        foundAt: "TRU"
    },
    {
        number: "484-878",
        name: "Ice Cream Psychic Hotline",
        foundAt: "Discord"
    },
    {
        number: "484-888",
        name: "???",
        foundAt: "Discord"//,
        // group: 'En Espa\ñol'
    },
    {
        number: "484-976",
        name: "Worm Group Singles Club",
        foundAt: "Discord"
    },
    {
        number: "640-666",
        name: "??? (Cannot be completed as dialed)",
        foundAt: "Discord"
    },
    {
        number: "834-723",
        name: "Radio Free ?",
        foundAt: "Discord"
    },
    {
        number: "848-222",
        name: "??? (Jingle tones)",
        foundAt: "Discord"
    },
    {
        number: "877-942-8484",
        name: "Stokes, Sherman",
        foundAt: "Reddit",
        person: true
    },
    {
        number: "877-942-8484",
        name: "Sherman Stokes",
        foundAt: "Reddit"
    },
    {
        number: "278-832",
        name: "Techstream",
        foundBy: "MWF1"
    },
    {
        number: "437-646",
        name: "Nimsesku Preserve Database",
        foundBy: "MWF1"
    },
    {
        number: "484-078",
        name: "Build-A-Decree",
        foundBy: "MWF1"
    },
    {
        number: "484-147",
        name: "Universe Splitter",
        foundBy: "MWF1"
    },
    {
        number: "484-242",
        name: "Cosmic Beings Missed Connections",
        foundBy: "MWF1"
    },
    {
        number: "484-337",
        name: "GUIDES Emotion Simulator",
        foundBy: "MWF1"
    }
];
