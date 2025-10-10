const imageGroups = {
    imgList: [
        "assets/img/aboutMe/IMG_2149.JPG",
        "assets/img/aboutMe/IMG_2332.JPG",
        "assets/img/aboutMe/IMG_2670.JPG",
        "assets/img/aboutMe/IMG_6519_Original_2.JPG",
        "assets/img/aboutMe/IMG_7036_2.JPG",
        "assets/img/aboutMe/IMG_7038_2.JPG"
    ],
    "Ich als Windsurf Lehrer": [
        "assets/img/instructor/IMG_1839.JPG",
        "assets/img/instructor/IMG_4971.JPG",
        "assets/img/instructor/IMG_4972.JPG",
        "assets/img/instructor/IMG_4973.JPG",
        "assets/img/instructor/IMG_4974.JPG",
        "assets/img/instructor/IMG_4975.JPG",
        "assets/img/instructor/IMG_4976.JPG",
        "assets/img/instructor/IMG_4977.JPG",
        "assets/img/instructor/IMG_4978.JPG",
        "assets/img/instructor/IMG_7036.JPG",
        "assets/img/instructor/IMG_7037.JPG",
        "assets/img/instructor/IMG_7038.JPG",
        "assets/img/instructor/IMG_7039.JPG",
        "assets/img/instructor/IMG_7040.JPG",
        "assets/img/instructor/IMG_7041.JPG",
        "assets/img/instructor/IMG_7042.JPG",
        "assets/img/instructor/IMG_7043.JPG",
        "assets/img/instructor/IMG_7044.JPG",
        "assets/img/instructor/IMG_7045.JPG",
        "assets/img/instructor/IMG_7046.JPG",
        "assets/img/instructor/IMG_4970.JPG"
    ],
    "Einfach nur Ich": [
        "assets/img/me/IMG_1898.JPG",
        "assets/img/me/IMG_2149_2.JPG",
        "assets/img/me/IMG_2332_2.JPG",
        "assets/img/me/IMG_2615.JPG",
        "assets/img/me/IMG_2670_2.JPG",
        "assets/img/me/IMG_6519_Original.JPG"
    ],
    "Alle Bilder": [

    ]
};

function init() {
function init() {
    createImgList();
    renderAllImages();
};

function addDNone(id) {
function addDNone(id) {
    document.getElementById(id).classList.add("d-none")
    document.getElementById("body").classList.remove("noScroll");

    document.getElementById("body").classList.remove("noScroll");

};


function createImgList() {

    chooseImgs();
};

function chooseImgs() {
    let x = Math.floor(Math.random() * imageGroups.imgList.length);
    let x = Math.floor(Math.random() * imageGroups.imgList.length);
    renderImage(x);
};

function rotateImg(index) {
    if (index >= imageGroups.imgList.length) {
    if (index >= imageGroups.imgList.length) {
        index = 0;
    } else if (index < 0) {
        index = imageGroups.imgList.length - 1;
        index = imageGroups.imgList.length - 1;
    }
    renderImage(index);

};

function openImg(listName, imageIndex) {
    const imageList = imageGroups[listName];
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

