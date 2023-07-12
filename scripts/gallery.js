function changeCentre(pid, imgid, desc){
    document.getElementById(pid).src = document.getElementById(imgid).src;
    // console.log("?");
    // for (let screen of p)
    document.getElementById(pid + "-info").innerHTML = desc;

    
    
    var array = document.getElementsByClassName(pid + "-gallery");
    [...array].forEach(element => {
        element.classList.remove("selected");
        console.log(array, element);
    });

    document.getElementById(imgid).classList.add("selected");
}

var projects = [
    {
        id: "proj1",
        title: "Event Planner (2020)",
        screens: [
            {id: "a", src: "budget/event-list.png", desc: "Information about screen 1 here"},
            {id: "b", src: "budget/event-create.png", desc: "Information about screen 2 here"},
            {id: "c", src: "budget/event-view.png", desc: "Information about screen 3 here"},
        ],
        desc: "Information about screen here",
    },
    {
        id: "proj2",
        title: "Budget Planner (2020)",
        screens: [
            {id: "a", src: "budget/budget-limit.png", desc: "Information about screen 1 here"},
            {id: "b", src: "budget/budget-logs.png", desc: "Information about screen 2 here"},
            {id: "c", src: "budget/budget-savings.png", desc: "Information about screen 3 here"},
        ],
        desc: "Information about screen here",
    },
    {
        id: "proj3",
        title: "Daily Schedule Planner (2020)",
        screens: [
            {id: "a", src: "budget/routine-create.png", desc: "Information about screen 1 here"},
            {id: "b", src: "budget/routine-day.png", desc: "Information about screen 2 here"},
            {id: "c", src: "budget/routine-view.png", desc: "Information about screen 3 here"},
        ],
        desc: "Information about screen here",
    },
    {
        id: "proj4",
        title: "Shopping List (2020)",
        screens: [
            {id: "a", src: "budget/shopping-list.png", desc: "Information about screen 1 here"},
            {id: "b", src: "budget/shopping-item.png", desc: "Information about screen 2 here"},
            {id: "c", src: "budget/shopping-section.png", desc: "Information about screen 3 here"},
        ],
        desc: "Information about screen here",
    },
    {
        id: "proj5",
        title: "Profile (2020)",
        screens: [
            {id: "a", src: "budget/profile-view.png", desc: "Information about screen 1 here"},
            // {id: "b", src: "budget/routine-day.png", desc: "Information about screen 2 here"},
            // {id: "c", src: "budget/routine-view.png", desc: "Information about screen 3 here"},
        ],
        desc: "Information about screen here",
    },
    // {
    //     id: "proj6",
    //     title: "Profile (2020)",
    //     screens: [
    //         {id: "a", src: "webpages/restify-search.png", desc: "Information about screen 1 here"},
    //         // {id: "b", src: "budget/routine-day.png", desc: "Information about screen 2 here"},
    //         // {id: "c", src: "budget/routine-view.png", desc: "Information about screen 3 here"},
    //     ],
    //     desc: "Information about screen here",
    // },
]

{/* <div class="division">
    Budget Planner (2020)
</div>

<div class="container">

    <div class="proj_grid">
        <div class="img_gallery">
            <div class="crop" onclick="changeCentre('proj1', 'proj1-a')">
                <img id="proj1-a" class="photo_selection" src="./images/projects/budget/budget-savings.png">
            </div>
            <div class="crop" onclick="changeCentre('proj1', 'proj1-b')">
                <img id="proj1-b" class="photo_selection" src="./images/projects/budget/budget-logs.png">
            </div>
            <div class="crop" onclick="changeCentre('proj1', 'proj1-c')">
                <img id="proj1-c" class="photo_selection" src="./images/projects/budget/budget-limit.png">
            </div>
        </div>

        <!-- <div class="project_photo"> -->
            <img id="proj1" onclick="openImg('proj1')" class="project_photo myImg" src="./images/projects/budget/budget-logs.png">
        <!-- </div> -->

        <div class="info">
            Information about screen here 
        </div>
    
    </div>

</div> */}

var space = document.getElementById("project-showcase");
var path = "./images/projects/";

for (p of projects){

    // Create divider
    var title = document.createElement("div");
    title.className = "division";
    title.innerText = p.title;

    space.appendChild(title);

    var container = document.createElement("div");
    container.className = "container";
    space.appendChild(container);

    var grid = document.createElement("div");
    grid.className = "proj_grid";
    container.appendChild(grid);

    var img_gallery = document.createElement("div");
    img_gallery.className = "img_gallery";
    // grid.appendChild(img_gallery);

    for (screen of p.screens){
        var frame = document.createElement("div");
        var id = p.id + "-" + screen.id;
        frame.className = "crop";
        frame.setAttribute("onclick", "changeCentre('" + p.id + "', '" + id + "', '" + screen.desc + "')");
        img_gallery.appendChild(frame);

        var pic = document.createElement("img");
        pic.id = id;
        pic.className = "photo_selection";
        pic.classList.add(p.id + "-gallery");
        pic.src = path + screen.src; // + ext;
        frame.appendChild(pic);
    }

    // <img id="proj1" onclick="openImg('proj1')" class="project_photo myImg" src="./images/projects/budget/budget-logs.png">
    var centre = document.createElement("img");
    centre.id = p.id;
    centre.setAttribute("onclick", "openImg('" + p.id + "')");
    centre.classList.add("project_photo");
    centre.classList.add("myImg");
    centre.src = path + p.screens[0].src;      
    grid.appendChild(centre);

    grid.appendChild(img_gallery);

    // <div class="info">
    //     Information about screen here 
    // </div>
    var info = document.createElement("div");
    info.className = "info";
    info.id = p.id + "-info";
    info.innerHTML = p.screens[0].desc; 
    grid.appendChild(info);
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-img");
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





// const newTable = document.createElement("table");
// const newRow = document.createElement("tr");
// newTable.appendChild(newRow);

// // var width = 60;
// var width = 20;
// newTable.setAttribute("style", "margin: auto; width: " + width + "%");

// var imgIndex = 0;
// var path = "images/projects/";
// var images = [
//     // [
//     //     "budget/budget-limit.png",
//     //     "budget/budget-logs.png",
//     //     "budget/budget-savings.png",
//     // ],
//     [
//         "budget/event-list.png",
//         "budget/event-create.png",
//         "budget/event-view.png",
//     ],
//     [
//         "budget/routine-create.png",
//         "budget/routine-day.png",
//         "budget/routine-view.png",
//     ],
//     [
//         "budget/profile-view.png",
//     ],
//     [
//         "budget/shopping-list.png",
//         "budget/shopping-item.png",
//         "budget/shopping-section.png",
//     ]
// ]

// for (let i = 0; i < images[imgIndex].length; i++){
//     let newCell = document.createElement("td");
//     let image = document.createElement("img");
//     newRow.appendChild(newCell);
//     newCell.appendChild(image);
//     image.setAttribute("src", path + images[imgIndex][i]);
//     image.setAttribute("width", "100%");
//     if (images[imgIndex].length == 1)
//         image.setAttribute("width", "33%");

//     let id = "img" + imgIndex + i;
//     image.setAttribute("id", id);
//     image.setAttribute("onclick", "openImg('" + id + "')");
//     image.setAttribute("class", "myImg");
// }

// document.getElementById("Projects").appendChild(newTable);

// function changeImages(){
//     for (let i = 0; i < images[imgIndex].length; i++)
//         newRow.removeChild(newRow.lastChild);

//     imgIndex++;
//     if (imgIndex == images.length)
//         imgIndex = 0;

//     for (let i = 0; i < images[imgIndex].length; i++){
//         let newCell = document.createElement("td");
//         let image = document.createElement("img");
//         newRow.appendChild(newCell);
//         newCell.appendChild(image);
//         image.setAttribute("src", path + images[imgIndex][i]);
//         image.setAttribute("width", "100%");
//         if (images[imgIndex].length == 1)
//             image.setAttribute("width", "33%");

//         let id = "img" + imgIndex + i;
//         image.setAttribute("id", id);
//         image.setAttribute("onclick", "openImg('" + id + "')");
//         image.setAttribute("class", "myImg");
//     }
// }

// function zoomImage(where){
//     if (where == 'in' && width != 100){
//         width += 10;
//     }

//     if (where == 'out' && width != 0){
//         width -= 10;
//     }
//     newTable.setAttribute("style", "width:" + width + "%; margin: auto;");
// }


