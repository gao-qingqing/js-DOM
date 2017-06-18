/**
 * Created by Lenovo on 2017/6/18.
 */
//兼容所以得浏览器

function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch (e) {}
            try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch (e) {}
            try {return new ActiveXObject("Msxml2.XMLHTTP");}
            catch (e) {}
            return false;
        }
        return new XMLHttpRequest();
    }