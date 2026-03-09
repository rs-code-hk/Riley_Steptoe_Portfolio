
function closeInfo() {
    const infoBox = document.getElementById("info")
    infoBox.style.opacity = "0%"
    infoBox.getElementsByTagName("h3")[0].innerHTML = "";
    infoBox.getElementsByTagName("p")[0].innerHTML = "";
}

function infoDD() {
    const infoBox = document.getElementById("info")
    infoBox.style.opacity = "75%"
    infoBox.getElementsByTagName("h3")[0].innerHTML = "Dungeons and Dragons";
    infoBox.getElementsByTagName("p")[0].innerHTML = "Dungeons and Dragons (Or D&D) is a Role Playing Game where the players create a play a character that goes on adventures created by the Dungeon Master (DM, sometimes called a Game Master or DM)";
}

function infoMarkup() {
    const infoBox = document.getElementById("info")
    infoBox.style.opacity = "75%"
    infoBox.getElementsByTagName("h3")[0].innerHTML = "Markup Languages";
    infoBox.getElementsByTagName("p")[0].innerHTML = "Markup languages are languages used to store large amounts of data that can be compiled in another coding language.";
}

function modifyInfo(opacity, h3, p) {
    const infoBox = document.getElementById("info")
    infoBox.style.opacity = opacity;
    infoBox.getElementsByTagName("h3")[0].innerHTML = h3;
    infoBox.getElementsByTagName("p")[0].innerHTML = p;
}