function renderImage(index){
    document.getElementById("AboutMeImg").innerHTML = `<button onclick="rotateImg(${index-1})"><-</button>
            <div class= "AboutMeRenderedImg"><img src="${imgList[index]}" alt="About Me Image" class="img-fluid rounded" style="max-width: 100%;"></div>
            <button onclick="rotateImg(${index+1})">-></button>`;
};