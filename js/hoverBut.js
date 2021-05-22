// var lastScrollTop = 0;
// var scrollBottom = false;

// console.log("load scroll: " + scrollBottom);

// window.addEventListener("scroll", function() { // or window.addEventListener("scroll"....
//     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//     console.log("scroll: " + scrollBottom);
//     if (st > lastScrollTop) {
//         // bottom 
//         scrollBottom = true;
//     } else {
//         // top
//         scrollBottom = false;
//     }
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);

function hoverBut(x) {
    var elements = document.getElementsByClassName("col1of3");
    var container = document.getElementsByClassName("info-container");
    var header = document.getElementsByClassName("header-container");

    // if (scrollBottom) {
    // applying active and non-active states
    for (let i = 0; i < elements.length; i++) {
        // non-active state
        if (elements[i] != x) {
            elements[i].style.opacity = 0.6;

            if ($(window).width() <= 935) {
                elements[i].classList.remove("col1of3-default");
                elements[i].classList.remove("col1of3-active");
                elements[i].classList.add("col1of3-squish");
            }
        } else { // active state
            container[i].style.display = "flex";
            container[i].classList.add("flexbox");
            header[i].style.visibility = "hidden";

            if ($(window).width() <= 935) {
                elements[i].classList.remove("col1of3-default");
                elements[i].classList.remove("col1of3-squish");
                elements[i].classList.add("col1of3-active");
            }
        }
    }
}

function hoverResume() {
    var elements = document.getElementsByClassName("col1of3");
    var container = document.getElementsByClassName("info-container");
    var header = document.getElementsByClassName("header-container");

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 1;
        container[i].style.display = "none";
        container[i].classList.remove("flexbox");
        header[i].style.display = "block";
        header[i].style.opacity = 1;
        header[i].style.visibility = "visible";

        if ($(window).width() <= 935) {
            elements[i].classList.remove("col1of3-squish");
            elements[i].classList.remove("col1of3-active");
            elements[i].classList.add("col1of3-default");
        }
    }
}

var clicked = false;

$(".col1of3")
    .hover(
        function() {
            hoverBut(this);
            // clicked = true;
        },
        function() {
            hoverResume();
            clicked = false;
        }
    )
    .click(
        function() {
            if (!clicked) {
                hoverBut(this);
                clicked = true;
            } else {
                hoverResume();
                clicked = false;
            }
        }
    );