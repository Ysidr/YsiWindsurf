const imgList = [
    "assets/img/IMG_2149.JPG",
    "assets/img/IMG_6519_Original.JPG",
    "assets/img/IMG_2332.JPG"
];

function createImgList(){
    
    chooseImgs();
}

function chooseImgs(){
   let x =  Math.floor(Math.random() * imgList.length);
   renderImage(x);
};

function rotateImg(index){
   if(index >= imgList.length){
       index = 0;
   }else if(index < 0){
       index = imgList.length - 1;
   }
   renderImage(index);
}