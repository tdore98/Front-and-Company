var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    // anything before static position of nav has no shadow
    if (currentScrollPos < 1080) {
        document.getElementById("main-nav-container").style.boxShadow = "none";
    }

    // if scroll up has occured show nav and add shadow
    else if (prevScrollpos > currentScrollPos) {
        document.getElementById("main-nav-container").style.top = "0";
        document.getElementById("main-nav-container").style.boxShadow = "0 0 1rem 0 rgba(0, 0, 0, 0.2)";
    }

    // if scroll down has occure hide nav and disable shadow
    else {
        document.getElementById("main-nav-container").style.top = "-91px";
        document.getElementById("main-nav-container").style.boxShadow = "none";
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
    $(".large-card").click(function() {
        toggleLargeCard(this);
    })
})

function toggleLargeCard(x) {
    var card = x;
    var cardContent = card.children;

    if (cardContent[1].style.display == "block") {
        cardContent[1].style.display = "none";
        cardContent[0].style.marginBottom = "0";
        cardContent[0].classList.remove('active', 'dash');
    } else {
        cardContent[1].style.display = "block";
        cardContent[0].style.marginBottom = "0.5em";
        cardContent[0].classList.add('active', 'dash');
    }

}

function hideLargeCard(x) {
    var card = x;
    var cardContent = $(x).children('.card-content'); // change this to ".card-content"

    $(cardContent).css('display', 'none');
}

function showLargeCard(x) {
    var card = x;
    var cardContent = $(x).children('.card-content'); // change this to ".card-content"

    $(cardContent).css('display', 'block');
}