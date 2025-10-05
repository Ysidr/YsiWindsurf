const imgList = [
    "assets/img/IMG_2149.JPG",
    "assets/img/IMG_6519_Original.JPG",
    "assets/img/IMG_2332.JPG"
];

const allImgList = [
    "assets/img/IMG_6519_Original.JPG",
    "assets/img/IMG_1839.JPG",
    "assets/img/IMG_1898.JPG",
    "assets/img/IMG_2149.JPG",
    "assets/img/IMG_2332.JPG",
    "assets/img/IMG_2615.JPG",
    "assets/img/IMG_2670.JPG",
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
];

function init(){
    createImgList();
    renderAllImages();
};

function addDNone(id){
    document.getElementById(id).classList.add("d-none")
};


function createImgList() {

    chooseImgs();
};

function chooseImgs() {
    let x = Math.floor(Math.random() * imgList.length);
    renderImage(x);
};

function rotateImg(index) {
    if (index >= imgList.length) {
        index = 0;
    } else if (index < 0) {
        index = imgList.length - 1;
    }
    renderImage(index);
    console.log("./assets");

};

function openImg(imageIndex) {
    document.getElementById("greyOut").classList.toggle("d-none");
    document.getElementById("greyOut").innerHTML = ` <div class="innerGrayOut" id="innerGrayOut">
            <img src="${allImgList[imageIndex]}" alt="">
        </div>`


};

