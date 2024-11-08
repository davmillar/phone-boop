const createTag = (tagName) => document.createElement(tagName);

const createTagWithContent = (tagName, content) => {
    const newTag = createTag(tagName);
    newTag.textContent = content;
    return newTag;
};

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

const wpList = document.getElementById('white-pages');
const ypList = document.getElementById('yellow-pages');
let currentGroupWP;
let currentGroupYP;
let previousItemWP;
let previousItemYP;

numbers
    .map((dataItem) => ({
        ...dataItem,
        compareName: dataItem.group ? dataItem.group + ' | ' + dataItem.name : dataItem.name,
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
            let nameComp = dataA.compareName.localeCompare(dataB.compareName);

            if (nameComp !== 0) {
                return nameComp;
            }
        }

        return dataA.number.localeCompare(dataB.number);
    }).forEach((data) => {
        let useList = data.person ? wpList : ypList;
        let previousItem = data.person ? previousItemWP : previousItemYP;
        let currentGroup = data.person ? currentGroupWP : currentGroupYP;

        if (data.group !== currentGroup) {
            if (data.group) {
                const listGroupHeader = createTagWithContent('li', data.group);
                listGroupHeader.classList.add("list-header");
                useList.appendChild(listGroupHeader);
            }
            previousItem.classList.add('space-below');
        }

        if (data.person) {
            currentGroupWP = data.group;
        } else {
            currentGroupYP = data.group;
        }

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
            if (data.group) {
                listItem.classList.add('in-group');
            }

            if (data.name.match(/^\?\?[^\?]?/)) {
                let nameSpan = createSpan('');
                let redactedBit = createSpan(Math.floor((Math.random() * 3000) + 10) ^ 2);
                redactedBit.classList.add('redacted');
                nameSpan.appendChild(redactedBit);
                nameSpan.appendChild(createSpan(data.name.replace(/(\?\?)/, '')));
                listItem.appendChild(nameSpan);
            } else {
                listItem.appendChild(createSpan(data.name));
            }

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

        if (data.person) {
            previousItemWP = listItem;
        } else {
            previousItemYP = listItem;
        }

        useList.appendChild(listItem);

        if (data.image) {
            const listItemImg = createTag('li');
            listItemImg.classList.add("imageItem");
            listItemImg.setAttribute("img-src", data.image);

            listItemImg.appendChild(createImage(data.image, data.imageAlt));

            useList.appendChild(listItemImg);

            if (data.person) {
                previousItemWP = listItem;
            } else {
                previousItemYP = listItem;
            }
        }
    });
