const newTable = document.createElement("table");
const newRow = document.createElement("tr");
newTable.appendChild(newRow);

var width = 30;
newTable.setAttribute("style", "margin: auto; width: " + width + "%");

var imgIndex = 0;
var images = [
    [
        "projects/Lovely Livres 2.png"
    ],
    [
        "projects/Budgie - Shopping List (1).png",
        "projects/Budgie - Shopping List (2).png",
        "projects/Budgie - Budget (1).png",
        "projects/Lifezy - To Do (1).png",
    ],
    [
        "projects/Family Manager 1.png",
        "projects/Family Manager 2.png",
    ],
]

for (let i = 0; i < images[imgIndex].length; i++){
    let newCell = document.createElement("td");
    let image = document.createElement("img");
    newRow.appendChild(newCell);
    newCell.appendChild(image);
    image.setAttribute("src", images[imgIndex][i]);
    image.setAttribute("width", "100%");

    let id = "img" + imgIndex + i;
    image.setAttribute("id", id);
    image.setAttribute("onclick", "openImg('" + id + "')");
    image.setAttribute("class", "myImg");
}

document.getElementById("Projects").appendChild(newTable);

function changeImages(){
    for (let i = 0; i < images[imgIndex].length; i++)
        newRow.removeChild(newRow.lastChild);

    imgIndex++;
    if (imgIndex == images.length)
        imgIndex = 0;

    for (let i = 0; i < images[imgIndex].length; i++){
        let newCell = document.createElement("td");
        let image = document.createElement("img");
        newRow.appendChild(newCell);
        newCell.appendChild(image);
        image.setAttribute("src", images[imgIndex][i]);
        image.setAttribute("width", "100%");

        let id = "img" + imgIndex + i;
        image.setAttribute("id", id);
        image.setAttribute("onclick", "openImg('" + id + "')");
        image.setAttribute("class", "myImg");
    }
}

function zoomImage(where){
    if (where == 'in' && width != 100){
        width += 10;
    }

    if (where == 'out' && width != 0){
        width -= 10;
    }
    newTable.setAttribute("style", "width:" + width + "%; margin: auto;");
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openImg(id){
    var img = document.getElementById(id);
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = "Project Screenshot"; // img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}