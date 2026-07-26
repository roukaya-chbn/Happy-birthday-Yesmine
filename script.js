const correctPassword = "1008";

function checkPassword() {

    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {

        document.getElementById("lockScreen").style.display = "none";

        document.getElementById("website").style.display = "block";

        document.getElementById("music").play();

    } else {

        alert("❌ That's not the correct password. Hint: Think of the special date ❤️");

    }

}
