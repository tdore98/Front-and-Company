function cardHeight() {
    var detail = document.getElementsByClassName('card-detail');
    var maxHeight = detail[detail.length - 1].offsetHeight;
    console.log("max height: " + maxHeight);

    for (var i = 0; i < detail.length; i++) {
        if (detail[i].offsetHeight > maxHeight) {
            maxHeight = detail[i].offsetHeight;
            console.log('updating maxHeight' + maxHeight);
        }

        detail[i].style.height = maxHeight + "px";
        console.log('updating content height' + i);
    }
}

window.addEventListener('DOMContentLoaded', cardHeight);