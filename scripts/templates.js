function renderImage(index){
    document.getElementById("AboutMeImg").innerHTML = `<button onclick="rotateImg(${index-1})"><-</button>
            <div class= "AboutMeRenderedImg"><img src="${imgList[index]}" alt="About Me Image" class="img-fluid rounded" style="max-width: 100%;"></div>
            <button onclick="rotateImg(${index+1})">-></button>`;
};

function renderAllImages(){
    document.getElementById("gallery").innerHTML = ``;
    let index=0;
    allImgList.forEach(element => {
        document.getElementById("gallery").innerHTML += `<img onclick="openImg(${index})" src="${element}" alt="Gallery Image">`
        index++;
    });
}