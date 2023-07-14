var backgrounds = ["dynamic", "dynamic2"]; // "black" "zoom", "white"
var current_bg = 1;

function changeBG(){
    if (current_bg == backgrounds.length - 1)
        current_bg = 0;
    else
        current_bg++;
        
    document.body.className = backgrounds[current_bg] + "-bg";
}