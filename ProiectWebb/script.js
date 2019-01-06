"use strict";
var text;
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                text=allText;
            }
        }
    }
    rawFile.send(null);
}
readTextFile("http://localhost/ProiectWebb/ajax_info.json");
var obj = JSON.parse(text);
var count1=obj.items[0].toys[0].cant;
var count2=obj.items[0].toys[1].cant;
var count3=obj.items[1].food[0].cat[0].cant;
var count4=obj.items[1].food[0].cat[1].cant;
var count5=obj.items[1].food[0].cat[2].cant;
var count6=obj.items[1].food[0].cat[3].cant;
var count7=obj.items[1].food[1].dog[0].cant;
var count8=obj.items[1].food[1].dog[1].cant;
var count9=obj.items[1].food[1].dog[2].cant;
var count10=obj.items[1].food[1].dog[3].cant;
var count11=obj.items[2].litter[0].cant;
var count12=obj.items[2].litter[1].cant;
var count13=obj.items[2].litter[2].cant;
document.addEventListener("DOMContentLoaded", function(event) {
    var active_page = document.querySelector('.active').firstChild.href.slice(document.querySelector('.active').firstChild.href.lastIndexOf('/')+1,document.querySelector('.active').firstChild.href.indexOf('.'));
    switch(active_page){
        case "Toys":       
            document.getElementById("toy1").innerHTML= count1;
            document.getElementById("toy2").innerHTML= count2;
            break;
        case "Cats":
            document.getElementById("cat1").innerHTML= count3;
            document.getElementById("cat2").innerHTML= count4;
            document.getElementById("cat3").innerHTML= count5;
            document.getElementById("cat4").innerHTML= count6;
            break;
        case "Dogs":
            document.getElementById("dog1").innerHTML= count7;
            document.getElementById("dog2").innerHTML= count8;
            document.getElementById("dog3").innerHTML= count9;
            document.getElementById("dog4").innerHTML= count10;
            break;
        case "Litter":
            document.getElementById("litter1").innerHTML= count11;
            document.getElementById("litter2").innerHTML= count12;
            document.getElementById("litter3").innerHTML= count13;
            break;
        default:
    }
});
function countm(button){
    var id = button.parentNode.children[2].id;
    var element = document.getElementById(id);
    if(element.innerHTML == 0)
        alert("Pare rau");
    else
        element.innerHTML = element.innerHTML -1;

}