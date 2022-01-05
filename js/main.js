document.getElementById("left").addEventListener("click", changeImageAgain, false);
document.getElementById("right").addEventListener("click", changeImageAgain, false);

function changeImageAgain() {
    var image = document.getElementById("movieposter");
    if (image.src.match("imgs/poster2.jpg")) {
        image.src = "imgs/poster3.png";
    } else {
        image.src = "imgs/poster2.jpg";
    }
}

document.getElementById("close").addEventListener("click", closeTab, false);

function closeTab() {
    var advertise = document.getElementById("ad");
    advertise.style.visibility = "hidden";
}

function GoToMain() {
    location.href = "main.html";
}

function movieInfo() {
    location.href = "movie.html";
}

function GoToSearch() {
    location.href = "search.html";
}