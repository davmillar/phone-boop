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

const list = createTag("ul");

numbers
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

document.body.insertBefore(list, document.querySelector('footer'));
