
function Toggle() {
    let droplistStatus = document.getElementById("dropdown-list");

    let toggle = window.getComputedStyle(droplistStatus).display;
    if(toggle === "none"){
        droplistStatus.style.display = "block"
        droplistStatus.style.animation= "toggle 1s ease-in-out"; 
    } else{
        droplistStatus.style.display = "none"
    }
}