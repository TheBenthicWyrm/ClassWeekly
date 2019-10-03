var line = document.querySelector(".line");
var copyright = document.querySelector("#copyright");

function warn() {
    alert("大部分周记分布在第三方图文创作分享网站（如美篇）各位同学的账号下，删除将导致无法访问，因此如须删除请提前联系制作人员，将该篇文章转移。");
}

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

window.onload = function() {
    insertYear();
}