var time_to_wait = 40;
// var type_animation = false;
// var time_to_wait = 0;


var text1 = "\
~ Hi! I'm Xaria, a computer programmer born and raised in Barbados, and currently based in Canada. \
I love to code, not only is it amazing to see my ideas come to life but to know that the possibilities are endless with what you can do with code. \
~I earned my HBSc. in Computer Science at the University of Toronto and gained interest in various areas such as Artificial Intelligence, Web/Mobile Development, \
Computational Linguistics, and UI/UX Design.\
~In my free time I enjoy coding, learning new languages and listening to music. Currently, I'm learning French, German, and Korean.\
";

var text2 = "\
~ I'm proficient in C, C++, Python, Java, HTML, CSS, JavaScript, and more. \
";
// ~ Scroll down to take a look at some of the projects I've worked on over the years!";
// ~ Web Development \
// ~ Mobile Development \
// ";

var text3 = "\
~ <i class='fa-solid fa-envelope'></i> Email: \
<a href='mailto:xaria.prempeh@mail.utoronto.ca'>xaria.prempeh@mail.utoronto.ca</a> \
~ <i class='fa-brands fa-linkedin'></i> LinkedIn: \
<a href='https://www.linkedin.com/in/xaria-prempeh/' target='_blank'> xaria-prempeh </a>\
~ <i class='fa-brands fa-github'></i> GitHub: \
<a href='https://github.com/XariaP' target='_blank'> XariaP </a>\
";


var sections = [
    {name: "About Me", icon: "pic1.jpg", status: "selected", text: text1, code: "intro"},
    {name: "Projects", icon: "pic2.jpg", status: "none", text: text2, code: "projects"},
    {name: "Contact Me", icon: "pic3.jpg", status: "none", text: text3, code: "contact"}
];

var typing = [];
var finished = [];

var current_section = sections[0].name;

var navbar = document.getElementById("navbar");

for (let i = 0; i < sections.length; i++){
    if (sections[i].status == "selected"){
        navbar.innerHTML += "<button class='menuButton selected' onclick='changeSection(\""+  i + "\")'> " + sections[i].name + " </button>";
    }
    else {
        navbar.innerHTML += "<button class='menuButton' onclick='changeSection(\""+  i + "\")'> " + sections[i].name + " </button>";
    }
    
}

// document.getElementById("contentBox").getElementsByTagName("div")[0].style.display = "block";
// document.getElementById(current_section).style.display = "block";

// Display default section
document.getElementById(current_section).style.display = "block";

// Switch section
function changeSection(index){
    var path = "images/";
    
    // document.getElementById("section-heading").innerHTML = sections[index].name;
    // document.getElementById("section-img").src = path + sections[index].icon;
    document.getElementsByClassName('menuButton')[index].classList.add('selected');
    
    // Hide other sections
    var status = "none";
    var ID;
    for (let i = 0; i < sections.length; i++){
        ID = sections[i].name;

        if (index != i){
            status = "none";
            document.getElementsByClassName('menuButton')[i].classList.remove('selected');
        }
        else
            status = "block";

        document.getElementById(ID).style.display = status;
    }
    
    document.getElementById("project-showcase").style.display = "none";
    if (sections[index].name == "Projects") 
        document.getElementById("project-showcase").style.display = "block";
    
    // document.getElementById("about-info").style.display = "none";
    // if (sections[index].name == sections[0].name) 
    //     document.getElementById("about-info").style.display = "block";

    document.getElementById("resume").style.display = "none";
    if (sections[index].name == sections[2].name) 
        document.getElementById("resume").style.display = "block";
        
    // if (index == 2){
        // document.getElementById("contentBox").style.width = "max-content";
        // console.log("k");
    // }

    for (let process of typing){
        clearInterval(process);
    }

    typing.push(writeText(sections[index].text, index));
    // setTimeout(function(){
    //     clearInterval(test);
    // }, 200);
}


// var text = "~ Hi! My name is Xaria, born and raised in Barbados. \
// ~ I've been coding for 9 years and I've loved it ever since. \
// ~ I completed my bachelor's in Computer Science at the University of Toronto. \
// ~ My hobbies are learning languages and listening to music.";


// ~ I mostly like solving the problems because the possibilities are endless with what you can do with code. \
// ~ Anytime I can't get something done, I know there's a solution and that's what keeps me going. \
// ~ It's not just the end result for me, it's the process. \

typing.push(writeText(text1, 0));

function writeText(text, index){
    if (finished.includes(index)){
        return;
    }
    let l = 0;
    let i = 0;
    var p;
    clearInterval(p);

    var main = document.getElementById(sections[index].name); //.getElementById("about-info")
    
    var save = document.getElementById(sections[index].code + "-other");
    var newelem = null;

    if (save){
        newelem = document.createElement("div");
        newelem.id = sections[index].code + "-other";
        newelem.innerHTML = save.innerHTML;
    }

    main.innerHTML = "";
    console.log(newelem);
    if (newelem)
        main.appendChild(newelem);

    console.log(save);
    p = setInterval(function(){
        {/* <div id="intro-text" class="container intro"></div> */}

        if (text[l] == "~"){
            // document.getElementById("intro-text").innerHTML += "<br><br>";
            var box = document.createElement("div");
            i++;
            var elemID = sections[index].code + "-text-" + i;
            box.id = elemID;
            box.classList.add("container");
            box.classList.add("intro");
            main.appendChild(box);

            main.insertBefore(box, document.getElementById(sections[index].code + "-other"));
            l++;
        }
        if (text[l] == "<"){
            let element = "";
            while (text[l] != ">"){
                element += text[l];
                l++;
            }
            // element += text[l];

            while (text[l] != "/"){
                element += text[l];
                l++;
            }
            // element += text[l];
            
            while (text[l] != ">"){
                element += text[l];
                l++;
            }
            element += text[l];
            console.log(element);

            var elemID = sections[index].code + "-text-" + i;
            document.getElementById(elemID).innerHTML += element;
            l++;
        }
        else{
            var elemID = sections[index].code + "-text-" + i;
            document.getElementById(elemID).innerHTML += text[l++];
            
        }
        if (l == text.length){ 
            clearInterval(p);
            finished.push(index);
        } // console.log("yes");}
        // document.getElementById("intro").scrollTop = document.getElementById("intro").scrollHeight;
    }, time_to_wait);
    return p;
}


// document.body.innerHTML += "<div class='credits'> \
//                             © 2023 \
//                             <br> \
//                             Coded by Xaria Prempeh with HTML, CSS, and JavaScript \
//                             </div>";