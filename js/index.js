const movieDB = db.collection("movies");
var cuurentUser;

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

function movieInfo() {
    location.href = "movie.html";
}

function checkLogInandOut() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // currentUser = db.collection("users").doc(user.uid);
            document.getElementById("logout").innerHTML = "LOGOUT";
        } else {
            document.getElementById("logout").innerHTML = "LOGIN";
        }
    })
}
checkLogInandOut();

function goToLogin() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            firebase.auth().signOut();
        } else {
            window.location.href = "login.html";
        }
    })
}

function displayAllMovies() {
    movieDB.get().then(allMovies => {
        allMovies.forEach(doc => {
            addMovies(doc);
        })
    })
}
var i = 0;
function addMovies(doc) {

    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", "id" + i);
    let imgName = doc.data().name.replaceAll(" ", "_").toLowerCase();
    let img = document.createElement("img");
    img.setAttribute("src", "imgs/" + imgName + ".jpg");
    let title = document.createElement("div");
    let name = document.createElement("h2");
    name.innerHTML = (i + 1) + ". " + doc.data().name;
    name.setAttribute("class", "name");
    let rating = document.createElement("p");
    rating.innerHTML = doc.data().rating;
    rating.setAttribute("class", "rating");
    let caption = document.createElement("div");
    var genre = document.createElement("p");
    genre.innerHTML = doc.data().genre;
    genre.setAttribute("class", "genre");
    let length = document.createElement("p");
    length.innerHTML = doc.data().length;
    length.setAttribute("class", "length");
    title.appendChild(name);
    title.appendChild(rating);
    caption.appendChild(genre);
    caption.appendChild(length);
    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(caption);
    document.getElementById("card").appendChild(box);
    i++;
}

displayAllMovies();