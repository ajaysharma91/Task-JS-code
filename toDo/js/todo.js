
$(document).ready(function(){
	var myList = document.getElementsByTagName("LI");
	//document.getElementsByTagName("LI");
     for (var i = 0; i < myList.length; i++) {
     	var span = document.createElement("SPAN");
     	var txt = document.createTextNode("\u00D7");
     	span.className="close";
     	span.appendChild(txt);
     	span.style.color = "#ff0000";
     	myList[i].appendChild(span);
     }


     var c = document.getElementsByClassName("close");
     for (var i = 0; i < c.length; i++) {
     	 c[i].onclick = function(){
     	 	var div = this.parentElement;
     	 	div.style.display="none";
     	 }
     }


});

 function add()
     {
     	//alert("call add function");
     	var li = document.createElement("li");
     	var text = document.getElementById("text1");
     	var txt = document.createTextNode(text);
     	li.appendChild(txt);
     	li.className="list-group-item";
     	if(text ==="")
     	{
     		alert("Enter Text");
     	}else{ 
     		document.getElementById("list").appendChild(li);
     		
     	}

        document.getElementById("text1").value = "";
      var myList = document.getElementsByTagName("LI");
	//document.getElementsByTagName("LI");
    
     	var span = document.createElement("SPAN");
     	var txt = document.createTextNode("\u00D7");
     	span.className="close";
     	span.appendChild(txt);
     	span.style.color = "#ff0000";
     	//alert(myList[i].value);
     	myList[myList.length-1].appendChild(span);
   


     var c = document.getElementsByClassName("close");
     for (var i = 0; i < c.length; i++) {
     	 c[i].onclick = function(){
     	 	var div = this.parentElement;
     	 	div.style.display="none";
     	 }
     }
  }

     
