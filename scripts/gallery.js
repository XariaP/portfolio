function changeCentre(pid, imgid, desc){
    document.getElementById(pid).src = document.getElementById(imgid).src;
    // console.log("?");
    // for (let screen of p)
    // document.getElementById(pid + "-info").innerHTML = desc;
    var array = document.getElementsByClassName(pid + "-gallery");
    [...array].forEach(element => {
        element.classList.remove("selected");
        // console.log(array, element);
    });

    document.getElementById(imgid).classList.add("selected");
}

var projects = [
    {
        id: "proj4",
        title: "Create Shopping Lists",
        screens: [
            {id: "a", src: "budget/shopping-list.png", desc: "Information about screen 1 here"},
            {id: "b", src: "budget/shopping-item.png", desc: "Information about screen 2 here"},
            {id: "c", src: "budget/shopping-section.png", desc: "Information about screen 3 here"},
        ],
        desc: "<ul class='proj-desc'> \
            <li>Create multiple shopping lists for all your needs.</li>\
            <li>Conveniently categorize different items to help break down your next shopping trip.</li>\
            <li>Record quantities of each item as needed.</li>\
            <li>Fully customizable with colour coding and icons to make reading the shopping list easier.</li>\
            <li>Simply tap items to colour their icon and mark them as complete.</li>\
        </ul>",
    },
    {
        id: "proj3",
        title: "Check Daily Schedules",
        screens: [
            {id: "a", src: "budget/routine-view.png", desc: "Information about screen 1 here"},
            {id: "b", src: "budget/routine-day.png", desc: "Information about screen 2 here"},
            {id: "c", src: "budget/routine-create.png", desc: "Information about screen 3 here"},
        ],
        desc: "<ul class='proj-desc'> \
            <li>Store daily routines or course timetables in one place.</li>\
            <li>Conveniently emphasizes which task you should be doing based on the current time. </li>\
            <li>Colour coded categories to group similar tasks together.</li>\
            <li>Ability to set the same task for different times on different days instead of recreating the task.</li>\
            <li>Recieve reminders for tasks before their specified start time.</li>\
        </ul>",
    },
    {
        id: "proj2",
        title: "Budget & Track Your Spending",
        screens: [
            {id: "a", src: "budget/budget-limit.png", desc: "Information about screen 1 here"},
            {id: "b", src: "budget/budget-logs.png", desc: "Information about screen 2 here"},
            {id: "c", src: "budget/budget-savings.png", desc: "Information about screen 3 here"},
        ],
        // desc: "Helps you manage your spending habits by setting monthly spending limits on separate categories. Can easily track and display all transactions and deposits you make. It will display a red warning message once you've spent over the limit. You can also go back to view your spending history from previous months. Will calculate how much funds you're expected to have at the end of the month give that you spend within the limits.",
        desc: "<ul class='proj-desc'> \
            <li>Manage your spending habits by setting monthly spending limits on separate categories.</li>\
            <li>Easily track any transactions and deposits you make.</li>\
            <li>Be alerted whenever you spend over the limit.</li>\
            <li>View your spending history from previous months.</li>\
            <li>See funds expected at the end of the month given that you spend within the limits.</li>\
        </ul>",
    },
    {
        id: "proj1",
        title: "Manage Upcoming Events",
        screens: [
            {id: "a", src: "budget/event-create.png", desc: "Information about screen 1 here"},
            {id: "b", src: "budget/event-list.png", desc: "Information about screen 2 here"},
            {id: "c", src: "budget/event-view.png", desc: "Information about screen 3 here"},
        ],
        // desc: "Keeps track of upcoming and past events in a format that's easy to read. Easily store important information about each event and recieve notifications to remind you of upcoming events."
        desc: "<ul class='proj-desc'> \
            <li>Keep track of upcoming and past events in a format that's easy to read.</li>\
            <li>Easily store important information about each event.</li>\
            <li>Recieve notifications to remind you of upcoming events.</li>\
        </ul>",
    },

    // {
    //     id: "proj5",
    //     title: "Profile (2020)",
    //     screens: [
            // {id: "a", src: "budget/profile-view.png", desc: "Information about screen 1 here"},
            // {id: "b", src: "budget/routine-day.png", desc: "Information about screen 2 here"},
            // {id: "c", src: "budget/routine-view.png", desc: "Information about screen 3 here"},
    //     ],
    //     desc: "Information about screen here",
    // },
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

// var space = document.getElementById("project-showcase");
var space = document.getElementById("budgie-area");
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
        if (screen.id == "a")
            pic.classList.add("selected");
        pic.src = path + screen.src; // + ext;
        // frame.innerHTML = "<div class='view-tag'> View </div>";
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
    // info.innerHTML = p.screens[0].desc; 
    info.innerHTML = p.desc;
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





var projects2 = [
    {
        id: "proj7",
        title: "Customize Profile",
        screens: [
            {id: "a", src: "0-new-user.png", desc: "Information about screen 1 here"},
            {id: "b", src: "0-profile-edit.png", desc: "Information about screen 2 here"},
            {id: "c", src: "0-profile-edit2.png", desc: "Information about screen 3 here"},
        ],
        desc: "<ul class='proj-desc'> \
            <li>Friendly greeting message for new users to introduce them to the app.</li>\
            <li>Customize profile with a variety of profile images to express yourself.</li>\
            <li>Track courses/subjects and any activities or clubs you attend.</li>\
        </ul>",
    },
    {
        id: "proj8",
        title: "Time Sensitive Background",
        screens: [
            {id: "a", src: "4-midday-bg.png", desc: "Information about screen 1 here"},
            {id: "b", src: "4-evening-bg.png", desc: "Information about screen 2 here"},
            {id: "c", src: "4-night-bg.png", desc: "Information about screen 3 here"},
        ],
        desc: "<ul class='proj-desc'> \
            <li>Colourful background constantly changes to reflect the time of day.</li>\
            <li>Quick access to the date and time from the home screen. </li>\
            <li>Quickly view reminders for deadlines and daily events from the home screen.</li>\
            <li>Home screen with easy access to the main features. </li>\
        </ul>",
    },
    {
        id: "proj12",
        title: "Timetable Checklist",
        screens: [
            {id: "a", src: "1-manage-events.png", desc: "Information about screen 1 here"},
            {id: "b", src: "1-create-event.png", desc: "Information about screen 2 here"},
            {id: "c", src: "1-view-events-menu.png", desc: "Information about screen 3 here"},
            {id: "d", src: "1-check-event.png", desc: "Information about screen 3 here"},
        ],
        // desc: "Keeps track of upcoming and past events in a format that's easy to read. Easily store important information about each event and recieve notifications to remind you of upcoming events."
        desc: "<ul class='proj-desc'> \
            <li>Schedule weekly tasks to help with studying and tracking extra curricular activities.</li>\
            <li>Quickly create tasks using prompts based on your profile or enter your own.</li>\
            <li>View today's checklist from the home screen to track progress.</li>\
            <li>Recieve reminders for uncompleted tasks.</li>\
        </ul>",
    },
    {
        id: "proj10",
        title: "Track Deadlines",
        screens: [
            {id: "a", src: "5-assignment.png", desc: "Information about screen 1 here"},
            {id: "b", src: "5-assignment-options.png", desc: "Information about screen 2 here"},
            {id: "c", src: "5-deadline-view.png", desc: "Information about screen 3 here"},
            {id: "d", src: "5-deadline-reminder.png", desc: "Information about screen 3 here"},
            
        ],
        // desc: "Keeps track of upcoming and past events in a format that's easy to read. Easily store important information about each event and recieve notifications to remind you of upcoming events."
        desc: "<ul class='proj-desc'> \
            <li>Keep track of upcoming deadlines sorted by highest priority first. </li>\
            <li>Recieve rewards for completing them on time.</li> \
            <li>Filter deadlines and use customizable tags, e.g. 'Assignment', 'Exam'.</li>\
            <li>Colour-coded tags and varying rewards to mark overdue and upcoming assignments.</li>\
            <li>Quickly view a deadline summary right from the home screen.</li>\
        </ul>",
    },
    {
        id: "proj11",
        title: "Rewards",
        screens: [
            {id: "a", src: "2-assignment-gain.png", desc: "Information about screen 1 here"},
            {id: "b", src: "2-assignment-loss.png", desc: "Information about screen 2 here"},
            {id: "c", src: "2-rewards-store.png", desc: "Information about screen 3 here"},
            {id: "d", src: "2-rewards-store2.png", desc: "Information about screen 3 here"},
        ],
        // desc: "Keeps track of upcoming and past events in a format that's easy to read. Easily store important information about each event and recieve notifications to remind you of upcoming events."
        desc: "<ul class='proj-desc'> \
            <li>Gives an incentive to finish assignments on time.</li>\
            <li>Rewards you with more keys the earlier you complete an assignment.</li>\
            <li>Lose keys when assignments aren't completed on time.</li>\
            <li>Redeem keys in the image shop to unlock more customization for your profile.</li>\
        </ul>",
    },
    {
        id: "proj9",
        title: "Special Greetings",
        screens: [
            {id: "a", src: "3-birthday-greeting2.png", desc: "Information about screen 1 here"},
            {id: "b", src: "3-birthday-greeting.png", desc: "Information about screen 2 here"},
            {id: "c", src: "3-profile-view-birthday.png", desc: "Information about screen 3 here"},
        ],
        // desc: "Helps you manage your spending habits by setting monthly spending limits on separate categories. Can easily track and display all transactions and deposits you make. It will display a red warning message once you've spent over the limit. You can also go back to view your spending history from previous months. Will calculate how much funds you're expected to have at the end of the month give that you spend within the limits.",
        desc: "<ul class='proj-desc'> \
            <li>Receive personalized greetings on your birthday and other holidays.</li>\
            <li>Profile automatically updates your age.</li>\
            <li>Plans for further customization by allowing opting out of certain greetings or creating custom holidays.</li>\
        </ul>",
    },
]

var space = document.getElementById("school-assist-area");
var path = "./images/projects/school/";

for (p of projects2){
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
        if (screen.id == "a")
            pic.classList.add("selected");
        pic.src = path + screen.src; // + ext;

        frame.appendChild(pic);
    }
    
    var centre = document.createElement("img");
    centre.id = p.id;
    centre.setAttribute("onclick", "openImg('" + p.id + "')");
    centre.classList.add("project_photo");
    centre.classList.add("myImg");
    centre.src = path + p.screens[0].src;
    grid.appendChild(centre);

    grid.appendChild(img_gallery);

    var info = document.createElement("div");
    info.className = "info";
    info.id = p.id + "-info";
    info.innerHTML = p.desc;
    grid.appendChild(info);
}