const createTag = (tagName) => document.createElement(tagName);

const createTagWithContent = (tagName, content) => {
    const newTag = createTag(tagName);
    newTag.textContent = content;
    return newTag;
};

const headings = (contents) => createTagWithContent('h2', contents);

const createSMSLink = (number) => {
    const link = createTagWithContent("a", number);
    link.setAttribute("href", "sms:+1" + number.replace(/\D/g, ""));
    return link;
};

const createSpan = (contents) => createTagWithContent("span", contents);
const createStrong = (contents) => createTagWithContent("strong", contents);

const createImage = (src, alt) => {
    const img = createTag("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    return img;
};

const OMNumbers = numbers.filter((number) => number.foundAt == "OM");
const RTNumbers = numbers.filter((number) => number.foundAt == "RT");
const TRUNumbers = numbers.filter((number) => number.foundAt == "TRU");
const redditNumbers = numbers.filter((number) => number.foundAt == "Reddit");
const discordNumbers = numbers.filter((number) => number.foundAt == "Discord");


const addSection = (list, filteredArray, sectionTitle) => {
    list.appendChild(headings(sectionTitle))
    filteredArray
    .map((dataItem) => ({
        ...dataItem,
        unknown: dataItem.name.match(/(?:\?\?\?)/g),
    }))
    .sort((dataA, dataB) => {
        if (dataA.unknown && !dataB.unknown) {
            return 1;
        }

        if (dataB.unknown && !dataA.unknown) {
            return -1;
        }

        if (!dataA.unknown && !dataB.unknown) {
            let nameComp = dataA.name.localeCompare(dataB.name);

            if (nameComp !== 0) {
                return nameComp;
            }
        }

        return dataA.number.localeCompare(dataB.number);
    }).forEach((data) => {
        const listItem = createTag('li');

        if (data.unknown) {
            listItem.classList.add("unknownItem");

            if (data.text) {
                listItem.appendChild(createSMSLink(data.number));
            } else {
                listItem.appendChild(createSpan(data.number));
            }

            listItem.appendChild(createSpan(data.name));
        } else {
            listItem.appendChild(createStrong(data.name));

            let dottedSpan = createSpan(data.note || '');

            if (data.note) {
                dottedSpan.classList.add('note');
            }

            listItem.appendChild(dottedSpan);

            let numberEl = data.text ?
                createSMSLink(data.number) :
                createSpan(data.number);

            if (data.strike) {
                numberEl.classList.add("strike");
            }

            listItem.appendChild(numberEl);
        }


        list.appendChild(listItem);

        if (data.image) {
            const listItemImg = createTag('li');
            listItemImg.classList.add("imageItem");
            listItemImg.setAttribute("img-src", data.image);

            listItemImg.appendChild(createImage(data.image, data.imageAlt));

            list.appendChild(listItemImg);
        }
        
    });
    return list
}

const fullList = createTag("ul");

const omegaList = addSection(fullList, OMNumbers, 'Location: Omega Mart');
const radioTaveList = addSection(fullList, RTNumbers, 'Location: Radio Tave');
const realUnrealList = addSection(fullList, TRUNumbers, 'Location: The Real Unreal');
const redditList = addSection(fullList, redditNumbers, 'Location Unknown: Found on Reddit');
const discordlList = addSection(fullList, discordNumbers, 'Location Unknown: Found on Discord');

document.body.insertBefore(omegaList, document.querySelector('footer'));
document.body.insertBefore(radioTaveList, document.querySelector('footer'));
document.body.insertBefore(realUnrealList, document.querySelector('footer'));
document.body.insertBefore(redditList, document.querySelector('footer'));
document.body.insertBefore(discordList, document.querySelector('footer'));
