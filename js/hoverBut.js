function hoverBut(x) {
    var elements = document.getElementsByClassName("col1of3");
    var container = document.getElementsByClassName("info-container");
    var header = document.getElementsByClassName("header-container");
    var i;

    for (i = 0; i < elements.length; i++) {
        if (elements[i] != x) {
            // elements[i].style.opacity = 0.6;
            elements[i].classList.add("opacity-6");
            elements[i].classList.remove("opacity-9");
        } else {
            container[i].style.visibility = "visible";
            header[i].style.display = "none";
        }
    }
}

function hoverResume() {
    var elements = document.getElementsByClassName("col1of3");
    var container = document.getElementsByClassName("info-container");
    var header = document.getElementsByClassName("header-container");

    var i;
    for (i = 0; i < elements.length; i++) {
        // elements[i].style.opacity = 0.9;
        elements[i].classList.add("opacity-9");
        elements[i].classList.remove("opacity-6");
        container[i].style.visibility = "hidden";
        header[i].style.display = "block";
        header[i].style.opacity = 0.9;
    }
}