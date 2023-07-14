var sections = [
    {name: "About Me", icon: "pic1.jpg"},
    {name: "Projects", icon: "pic2.jpg"},
    {name: "Resume", icon: "pic3.jpg"}
];

var current_section = sections[1].name;

var navbar = document.getElementById("navbar");

for (let i = 0; i < sections.length; i++){
    navbar.innerHTML += "<button class='menuButton' onclick='changeSection(\""+  i + "\")'> " + sections[i].name + " </button>";
}

document.getElementById("contentBox").getElementsByTagName("div")[0].style.display = "block";
document.getElementById(current_section).style.display = "block";


// Display default section
document.getElementById(current_section).style.display = "block";

// Switch section
function changeSection(index){
    var path = "images/";
    
    document.getElementById("section-heading").innerHTML = sections[index].name;
    document.getElementById("section-img").src = path + sections[index].icon;
    
    // Hide other sections
    var status = "none";
    var ID;
    for (let i = 0; i < sections.length; i++){
        ID = sections[i].name;

        if (index != i)
            status = "none";
        else
            status = "block";

        document.getElementById(ID).style.display = status;
    }
    
    document.getElementById("project-showcase").style.display = "none";
    if (sections[index].name == "Projects") 
        document.getElementById("project-showcase").style.display = "block";
    // if (index == 2){
        // document.getElementById("contentBox").style.width = "max-content";
        // console.log("k");
    // }
}


// document.body.innerHTML += "<div class='credits'> \
//                             © 2023 \
//                             <br> \
//                             Coded by Xaria Prempeh with HTML, CSS, and JavaScript \
//                             </div>";