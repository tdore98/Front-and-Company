function disableAnimation() {
    var element = document.getElementsByClassName("header-container");

    setTimeout(function() {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.add("pauseAnimation");
        };
        console.log("animation paused");
    }, 2950);
}

var element = document.getElementsByClassName("header-container");
console.log(document.readyState);
window.addEventListener('DOMContentLoaded', disableAnimation);