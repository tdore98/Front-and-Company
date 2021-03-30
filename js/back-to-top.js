function posBtn(x) {
    var btn = document.getElementById("back-to-top");
    var footer = document.getElementById("footer");

    btn.style.position = x;
    if (x === "absolute") {
        btn.style.bottom = "-" + footer.offsetHeight + "px";
        console.log("absolute")
    } else {
        btn.style.bottom = "2.5%";
    }
}

function modBtn(x) {
    var btn = document.getElementById("back-to-top");

    btn.style.display = x;
}

document.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var currentScrollPos = window.scrollY;

    if (currentScrollPos > windowHeight) {
        modBtn("block");
    } else {
        modBtn("none");
    }
})

// jQuery(function($) {
//     $(window).bind('scroll', function(e) {
//         if ($(window).scrollTop() + window.innerHeight >= $('#footer').offset().top) {
//             posBtn("absolute");
//         } else {
//             posBtn("fixed");
//         }
//     });
// });