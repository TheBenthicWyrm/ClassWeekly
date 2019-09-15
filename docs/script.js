var warning = document.querySelector("#warning");
var line = document.querySelector(".line");
var copyright = document.querySelector("#copyright");

function closeWarning() {
    warning.style.height = "0";
    warning.style.visibility = "hidden";
}

function adjustLine() {
    var height = document.body.clientHeight;

    line.style.height = height - 530 + "px";
}

function insertYear() {
    var date = new Date;
    var year = date.getFullYear();

    copyright.innerHTML = "<p>&copy; " + year + " 范子睿</p>";
}

function init() {
    adjustLine();

    insertYear();
}