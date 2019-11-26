function warn() {
    alert("大部分周记分布在第三方图文创作分享网站（如美篇）各位同学的账号下，如须删除请提前联系制作人员，否则将导致无法访问。");
}

var copyright = document.querySelector("#copyright");

function insertYear() {
    var date = new Date;
    var year = date.getFullYear();

    if (year == 2019) {
        copyright.innerHTML = "<p>&copy; 2019 范子睿</p>";
    }
    else {
        copyright.innerHTML = "<p>&copy; 2019-" + year + " 范子睿</p>";
    }
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

window.onload = function() {
    insertYear();

    adjustLine();
}