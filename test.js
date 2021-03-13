function add() {
    newInput = document.getElementById("newInput").value;

    
    var input = document.createElement("input"); 
    input.type = "text"
    input.name = newInput;
    input.id = newInput;
    input.placeholder = newInput;   



    var p = document.createElement("p"); 

    document.getElementById("test").appendChild(input);  
    document.getElementById("test").appendChild(p);  
    console.log(newInput); 
}

function myFunction() {
var x = document.getElementById("test").getElementsByTagName("input");
for (var i = 0; i < x.length; i++) {
   x[i] = Number(document.getElementById("job").value);
   console.log(x[i].name, "+", x[i].value);
}

}
