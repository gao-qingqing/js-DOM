/**
 * Created by Lenovo on 2017/6/17.
 */
<!--将占位符图片换成想要的图片-->
function showPic(whichpic) {
//        whichpic代替一个元素的节点，<a>元素
    var source = whichpic.getAttribute("href");
    var logo = document.getElementById("logo");
    logo.setAttribute("src", source);
//        setAttribute等价于logo.src = source;
//    文字替换
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    // alert(description.childNodes[0].nodeValue);
    description.childNodes[0].nodeValue = text;
//    也可以写成第一个或者最后一个
    description.firstChild.nodeValue = text;
}





function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    // alert(body_element.childNodes.length);
    alert(body_element.nodeType);
//    childNodes的结果一般会比较大，它是所有的节点中的，nodeType来说
//     var description = document.getElementById("description");
//     alert(description.childNodes[0].nodeValue);
}
//使函数在页面加载时执行
window.onload = countBodyChildren;



