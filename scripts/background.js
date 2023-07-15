var backgrounds = ["light", "dark"];
var current_bg = 0;

function changeBG(){
    document.body.classList.remove(backgrounds[current_bg] + "-bg");
    if (current_bg == backgrounds.length - 1)
        current_bg = 0;
    else
        current_bg++;
    document.body.classList.add(backgrounds[current_bg] + "-bg");
}