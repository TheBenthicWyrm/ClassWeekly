var warning = document.querySelector("#warning");
var copyright = document.querySelector("#copyright");

function closeWarning() {
    warning.style.height = "0";
    warning.style.visibility = "hidden";
}

function insertYear() {
    var date = new Date;
    var year = date.getFullYear();

    copyright.innerHTML = "<p>&copy; " + year + " 范子睿</p>";
}

function init() {
    insertYear();
}