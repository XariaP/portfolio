var circle1 = "<div class='circle first'></div>";
var circle2 = "<div class='circle second'></div>";
var circle3 = "<div class='circle third'></div>";
var rows = 3;
var lines = 1;
var cols = 1;

lines = document.getElementsByClassName("line").length;
console.log(lines);

for (let l = 0; l < lines; l++){
    var line = document.getElementsByClassName("line")[l];
        
    for (let c = 0; c < cols; c++){
        var row = document.createElement("div");
        row.classList.add("circleLine");
        row.classList.add("L");
        for (let i = 0; i < rows; i++){
            row.innerHTML += circle1 + circle2 + circle3;
        }
        line.appendChild(row);
    }
    for (let c = 0; c < cols; c++){
        var row = document.createElement("div");
        row.classList.add("circleLine");
        row.classList.add("R");
        for (let i = 0; i < rows; i++){
            row.innerHTML += circle3 + circle2 + circle1;
        }
        line.appendChild(row);
        // document.getElementsByClassName("circleLine R")[l].innerHTML += circle3 + circle2 + circle1;
    }
}