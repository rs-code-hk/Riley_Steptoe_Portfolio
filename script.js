function modifyInfo(opacity, h3, p) {
    const infoBox = document.getElementById("info")
    infoBox.style.opacity = opacity;
    infoBox.getElementsByTagName("h3")[0].innerHTML = h3;
    infoBox.getElementsByTagName("p")[0].innerHTML = p;
}