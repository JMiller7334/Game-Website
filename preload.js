/*This script handles ensuring all the content on the page is loaded before the animations or the intro are played.
If the loading takes too long the script will abort the halt and allow the user access.*/

//set up the class to mark the halt; add an event to wait for loading.

let loadComplete = false;

document.body.classList.add('js-loading');
window.addEventListener("load", showPage);
console.log("preload.js: preload class added");

function showPage() {
    if (loadComplete === false){
        loadComplete = true;
        document.body.classList.remove("js-loading");
        document.body.classList.remove('intro-container')
        document.getElementById("loadingMsg").remove();
        console.log("preload.js: preload class removed");
    }
}

setTimeout(function() {
    // Code to be executed after the delay
    console.log("preload.js: timed out on load; running anim...");
    showPage();
  }, 50); // 3000 milliseconds = 5 seconds