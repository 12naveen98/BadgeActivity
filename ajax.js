function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response= JSON.parse(this.responseText);
            console.log(response);
            var grocery=response.list;
            console.log(grocery);
            var slno="";
             var name="";
             var quantity="";
             var unit="";
             var dept="";
             var notes="";
            for(var i=0;i<grocery.length;i++){
                // slno +="<li>"+grocery[i].serialNumber+"</li>";
                // name +="<li>"+grocery[i].name+"</li>";
                //  quantity +="<li>"+grocery[i].quantity+"</li>";
                //  unit +="<li>"+grocery[i].unit+"</li>";
                //  dept +="<li>"+grocery[i].department+"</li>";
                //  notes +="<li>"+grocery[i].notes+"</li>";
                slno +=grocery[i].serialNumber+"<br>";
                name +=grocery[i].name+"<br>";
                 quantity +=grocery[i].quantity+"<br>";
                 unit +=grocery[i].unit+"<br>";
                 dept +=grocery[i].department+"<br>";
                 notes +=grocery[i].notes+"<br>";
                 document.getElementById("slno").innerHTML=slno;
                 document.getElementById("name").innerHTML=name;
                 document.getElementById("qty").innerHTML=quantity;
                 document.getElementById("unit").innerHTML=unit;
                 document.getElementById("dept").innerHTML=dept;
                 document.getElementById("notes").innerHTML=notes;
                 document.getElementById("slno").style.color="black";
                 document.getElementById("name").style.color="black";
                 document.getElementById("qty").style.color="black";
                 document.getElementById("unit").style.color="black";
                 document.getElementById("dept").style.color="black";
                 document.getElementById("notes").style.color="black";
                 document.getElementById("head").setAttribute("hidden",true);
                 document.getElementById("btn").setAttribute("hidden",true);
                 document.getElementById("header").innerHTML="Find the list of items to be brought below";
                   }
            console.log(slno);
          
        }
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();
}