var lastScrollTop = 0;
var header = document.getElementsByClassName("header-container");
var container = document.getElementsByClassName("info-container");
var i;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function() { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        for (i = 0; i < header.length; i++) {
            header[i].classList.remove("animation-fadeIn");
            header[i].style.opacity = 0;
            // console.log("opacity drop: " + i);
        }
    } else {
        for (i = 0; i < header.length; i++) {
            header[i].style.opacity = 0.9;
            // console.log("opacity return");
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);