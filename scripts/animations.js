var circle1 = "<div class='circle red'></div>";
var circle2 = "<div class='circle purple'></div>";
var circle3 = "<div class='circle blue'></div>";
var rows = 3;
var lines = 2;

for (let l = 0; l < lines; l++){
    for (let i = 0; i < rows; i++){
        document.getElementsByClassName("circleLine L")[l].innerHTML += circle1 + circle2 + circle3;
    }
    for (let i = 0; i < rows; i++){
        document.getElementsByClassName("circleLine R")[l].innerHTML += circle3 + circle2 + circle1;
    }
}