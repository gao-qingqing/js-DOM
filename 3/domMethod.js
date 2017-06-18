/**
 * Created by Lenovo on 2017/6/18.
 */

//appendChild()  在后面插入节点
//    insertBefore() 在将一个新元素插入到原油元素的前面。。
//    createElement() 只能创建元素节点     用createTextNode  可以创建一个文本节点
var para = document.createElement("p");
var txt1 = document.createTextNode("this is");
para.appendChild(txt1);
var emphasis = document.createElement("em");
var txt2 = document.createTextNode("my");
emphasis.appendChild(txt2);
para.appendChild(emphasis);
var txt3 = document.createTextNode("content.");
para.appendChild(txt3);
var testDiv = document.getElementById("testDiv");
testDiv.appendChild(para);


//编写insertAfter函数
function insertAfter() {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    //    nextSibling兄弟元素
    }
}




//验证
// window.onload = function () {
//     var para = document.createElement("p");
//     var info = "nodeName: ";
//     info += para.nodeName;
//     info += " nodeType:  ";
//     info += para.nodeType;
//     alert(info);
// }