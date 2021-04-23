$(document).ready(function() {
    $(".card").click(function() {
        toggleLargeCard(this);
    });
});

function toggleLargeCard(x) {
    var card = x;
    var cardContent = card.children;

    if (cardContent[1].style.display == "flex") {
        cardContent[1].style.display = "none";
        // cardContent[0].style.marginBottom = "0";
        // cardContent[0].classList.remove('active', 'dash');
    } else {
        cardContent[1].style.display = "flex";
        // cardContent[0].style.marginBottom = "0.5em";
        // cardContent[0].classList.add('active', 'dash');
    }
}

function hideLargeCard(x) {
    var card = x;
    var cardContent = $(x).children('.card-content');

    $(cardContent).css('display', 'none');
}

function showLargeCard(x) {
    var card = x;
    var cardContent = $(x).children('.card-content');

    $(cardContent).css('display', 'flex');
}