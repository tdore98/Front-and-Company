function hideMainNav() {
    document.getElementById("main-nav-container").style.top = "-91px";
    document.getElementById("main-nav-container").style.boxShadow = "none";
}

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
        hideMainNav();
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

function showMenu() {
    var mobileNav = document.getElementById("mobile-nav");

    mobileNav.style.left = "0";

    $('body').addClass('stop-scrolling');
}

function closeMenu() {
    var mobileNav = document.getElementById("mobile-nav");

    mobileNav.style.left = "-100vw";

    $('body').removeClass('stop-scrolling');

    hideMainNav();
}

document.getElementById("hamburger").addEventListener('click', showMenu);
document.getElementById('close').addEventListener('click', closeMenu);

var mobileNavItem = document.getElementsByClassName('mobile-nav-item');
for (var i = 0; i < mobileNavItem.length; i++) {
    mobileNavItem[i].addEventListener('click', closeMenu);
}