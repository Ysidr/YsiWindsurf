const imageGroups = {
    imgList: [
        "assets/img/IMG_2149.JPG",
        "assets/img/IMG_7036.JPG",
        "assets/img/IMG_6519_Original.JPG",
        "assets/img/IMG_2332.JPG",
        "assets/img/IMG_7038.JPG"
    ],
    "Ich als Windsurf Lehrer": [
        "assets/img/IMG_1839.JPG",
        "assets/img/IMG_4970.JPG",
        "assets/img/IMG_4971.JPG",
        "assets/img/IMG_4972.JPG",
        "assets/img/IMG_4973.JPG",
        "assets/img/IMG_4974.JPG",
        "assets/img/IMG_4975.JPG",
        "assets/img/IMG_4976.JPG",
        "assets/img/IMG_4977.JPG",
        "assets/img/IMG_4978.JPG",
        "assets/img/IMG_7036.JPG",
        "assets/img/IMG_7037.JPG",
        "assets/img/IMG_7038.JPG",
        "assets/img/IMG_7039.JPG",
        "assets/img/IMG_7040.JPG",
        "assets/img/IMG_7041.JPG",
        "assets/img/IMG_7042.JPG",
        "assets/img/IMG_7043.JPG",
        "assets/img/IMG_7044.JPG",
        "assets/img/IMG_7045.JPG",
        "assets/img/IMG_7045.JPG"
    ],
    "Einfach nur Ich": [
        "assets/img/IMG_1898.JPG",
        "assets/img/IMG_2149.JPG",
        "assets/img/IMG_2332.JPG",
        "assets/img/IMG_2615.JPG",
        "assets/img/IMG_2670.JPG",
        "assets/img/IMG_6519_Original.JPG"
    ],
    "Alle Bilder": [
        "assets/img/IMG_6519_Original.JPG",
        "assets/img/IMG_1839.JPG",
        "assets/img/IMG_1898.JPG",
        "assets/img/IMG_2149.JPG",
        "assets/img/IMG_2332.JPG",
        "assets/img/IMG_2615.JPG",
        "assets/img/IMG_2670.JPG",
        "assets/img/IMG_4970.JPG",
        "assets/img/IMG_4971.JPG",
        "assets/img/IMG_4972.JPG",
        "assets/img/IMG_4973.JPG",
        "assets/img/IMG_4974.JPG",
        "assets/img/IMG_4975.JPG",
        "assets/img/IMG_4976.JPG",
        "assets/img/IMG_4977.JPG",
        "assets/img/IMG_4978.JPG",
        "assets/img/IMG_7036.JPG",
        "assets/img/IMG_7037.JPG",
        "assets/img/IMG_7038.JPG",
        "assets/img/IMG_7039.JPG",
        "assets/img/IMG_7040.JPG",
        "assets/img/IMG_7041.JPG",
        "assets/img/IMG_7042.JPG",
        "assets/img/IMG_7043.JPG",
        "assets/img/IMG_7044.JPG",
        "assets/img/IMG_7045.JPG",
        "assets/img/IMG_7045.JPG"
    ]
};

function init() {
    createImgList();
    renderAllImages();
};

function addDNone(id) {
    document.getElementById(id).classList.add("d-none")
    document.getElementById("body").classList.remove("noScroll");

};


function createImgList() {

    chooseImgs();
};

function chooseImgs() {
    let x = Math.floor(Math.random() * imageGroups.imgList.length);
    renderImage(x);
};

function rotateImg(index) {
    if (index >= imageGroups.imgList.length) {
        index = 0;
    } else if (index < 0) {
        index = imageGroups.imgList.length - 1;
    }
    renderImage(index);

};

function openImg(listName, imageIndex) {
    const imageList = imageGroups[listName];
    document.getElementById("greyOut").classList.toggle("d-none");
    document.getElementById("body").classList.add("noScroll");
    document.getElementById("greyOut").innerHTML = `
        <div class="innerGrayOut" id="innerGrayOut">
            <img src="${imageList[imageIndex]}" alt="">
        </div>`;
}

function openSection(ID) {
    if (!document.getElementById(ID).classList.contains("height0")) {
        document.getElementById(ID).classList.add("height0");

    } else {
        document.querySelectorAll(".gallery").forEach(element => {
            element.classList.add("height0");
        });

        document.getElementById(ID).classList.remove("height0");
    }

}

function renderAllImages() {
    document.querySelectorAll(".gallery").forEach(gallery => {
        gallery.innerHTML = "";
    });

    Object.keys(imageGroups).forEach(groupName => {
        const container = document.getElementById(groupName);
        if (!container) return;

        imageGroups[groupName].forEach((img, index) => {
            container.innerHTML += `
                <img onclick="openImg('${groupName}', ${index})" src="${img}" alt="Gallery Image">
            `;
        });
    });
}
