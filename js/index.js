
//CREATING A CLOSE BUTTON AND APPENDING IT TO EACH LIST ITEM
var myNodeList =document.getElementsByTagName("LI");
var i;
for (i=0; i<myNodeList.length; i++){
    var span=document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//ALLOWS YOU TO CLICK ON A CLOSE BUTTON

var close = document.getElementsByClassName("close");
var i;
for(i=0; i<close.length; i++){
    close[i].onclick=function(){
        var div =this.parentElement;
        div.style.display = "none";
    }
}
//ADD A CHECKED SYMBOL WHEN CLICKING ON A LIST ITEM

var list =document.querySelector('ul');
list.addEventListener('click',function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);
//CREATING A NEW LIST WHEN CLICKING ON THE ADD BUTTON

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
