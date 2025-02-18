function warn() {
    alert("大部分周记分布在第三方图文创作分享网站（如美篇）各位同学的账号下，如须删除请提前联系制作人员，否则将导致该篇周记无法访问。");
}

var copyright = document.querySelector("#copyright");

function insertYear() {
    copyright.innerHTML = "<p>&copy; 2019 范子睿</p>";
}

var line = document.querySelector(".line");
var startDot = document.querySelector("#start");
var endDot = document.querySelector("#end");

function adjustLine() {
    var startY = startDot.offsetTop;
    var endY = endDot.offsetTop;
    var height = endY - startY;

    line.style.height = height + "px";
}

var warning = document.querySelector("#warning");

var on = true;

function blink() {
    if (on) {
        warning.style.visibility = "visible";
    }
    else {
        warning.style.visibility = "hidden";
    }
    
    on = !on;
}

setInterval("blink()", 1000);

window.onload = function() {
    insertYear();

    adjustLine();
}

window.onresize = function() {
    adjustLine();
}