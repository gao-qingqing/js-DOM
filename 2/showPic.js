

function addLoaEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else {
        window.onload = function () {
            onload();
            func();
        }
    }
}



//检验函数
function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imageGallery")) return false;
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for ( var i=0; i<links.length; i++) {
        links[i].onclick = function () {
            // return showPic(this) ? false : true;
            if (showPic(this)) {
                return false
            } else {
                return true;
            }
        }
    }
}

//图片切换函数
function showPic(whichpic) {
    if (!document.getElementById("logo")) return false;
    var source = whichpic.getAttribute("href");
    var logo = document.getElementById("logo");
    if (!logo.nodeName != "IMG") return false;
    logo.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

window.onload= prepareGallery;




