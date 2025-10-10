function renderImage(index) {
    document.getElementById("AboutMeImg").innerHTML =
        `<div class="buttonsandImgDiv">
            <div class="AboutMeRenderedImg">
                <img src="${imageGroups.imgList[index]}" alt="About Me Image" class="img-fluid rounded" style="max-width: 100%;">
                
                <div class="buttons">
                    <button class="buttonLeft" onclick="rotateImg(${index - 1})">
                        <img src="./assets/icons/arrow-1293391_640.png" alt="">
                    </button>
                    <button class="buttonRight" onclick="rotateImg(${index + 1})">
                        <img src="./assets/icons/arrow-1293392_640.png" alt="">
                    </button>
                </div>
            </div>
        </div>`;
}

function renderAllImages() {
    document.getElementById("galleries").innerHTML = "";

    Object.keys(imageGroups).forEach(groupName => {
        if (groupName != "imgList") {
            document.getElementById("galleries").innerHTML += ` 
        <section class="sectionGallery">
            <button class="collapsible" onclick="openSection('${groupName}')">${groupName}</button>
            <div class="gallery height0" id="${groupName}">
            </div>
        </section>`;
        }

        const container = document.getElementById(groupName);
        if (!container) return;

        if (groupName === "Alle Bilder") {
            Object.keys(imageGroups).forEach(otherGroup => {
                if (otherGroup !== "imgList" && otherGroup !== "Alle Bilder") {
                    imageGroups[otherGroup].forEach(img => {
                        container.innerHTML += `
                            <img onclick="openImg('${otherGroup}', ${imageGroups[otherGroup].indexOf(img)})" src="${img}" alt="Gallery Image">
                        `;
                    });
                }
            });
            container.innerHTML += `
            <div class="clearBoth"></div>`;
        } else {
            imageGroups[groupName].forEach((img, index) => {
                container.innerHTML += `
                    <img onclick="openImg('${groupName}', ${index})" src="${img}" alt="Gallery Image">
                `;
            });
        }
    });
}