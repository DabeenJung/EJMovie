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