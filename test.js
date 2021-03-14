function addIndtægt() {
    newIndtægt = document.getElementById("addIndtægt").value;

    
    var input = document.createElement("input"); 
    input.setAttribute("type", "text");
    input.setAttribute("name", newIndtægt);
    input.setAttribute("id", newIndtægt);
    input.setAttribute("placeholder", newIndtægt);
  
    var p = document.createElement("p"); 

    document.getElementById("indtægt").appendChild(input);  
    document.getElementById("indtægt").appendChild(p);   
}

function addudgifter() {
    newUdgifter = document.getElementById("addudgifter").value;

    var input = document.createElement("input"); 
    input.setAttribute("type", "text");
    input.setAttribute("name", newUdgifter);
    input.setAttribute("id", newUdgifter);
    input.setAttribute("class", newUdgifter);
    input.setAttribute("placeholder", newUdgifter);

    var p = document.createElement("p"); 

    var button = document.createElement("button"); 
    button.setAttribute("id", newUdgifter);
    button.setAttribute("class", newUdgifter);
    button.textContent = "delete"
    button.setAttribute("onclick", 'delete1(' + newUdgifter + ')'+'');

    document.getElementById("udgifter").appendChild(input);  
    document.getElementById("udgifter").appendChild(button);   
    document.getElementById("udgifter").appendChild(p);   
}

function cal() {
    var samletindtægt = 0;
    var indtægt = document.getElementById("indtægt").getElementsByTagName("input");
    for (var i = 0; i < indtægt.length; i++) {
    
        console.log(indtægt[i].name, "+", indtægt[i].value);
        samletindtægt += parseInt(indtægt[i].value);
        
}
    var samletudgift = 0;
    var udgifter = document.getElementById("udgifter").getElementsByTagName("input");
    for (var i = 0; i < udgifter.length; i++) {

        
        console.log(udgifter[i].name, "+", udgifter[i].value);
        samletudgift += parseInt(udgifter[i].value);
        
}
    console.log("samletindtægt " + samletindtægt);
    console.log("samletudgift " + samletudgift);
    var budget = samletindtægt - samletudgift;
    var årligomkostninger = samletudgift * 12;
    
    console.log("budget " + budget);
    document.getElementById("samletindtægt").innerHTML = samletindtægt;
    document.getElementById("samletudgift").innerHTML = samletudgift;
    document.getElementById("budget").innerHTML = budget;
    document.getElementById("årligomkostninger").innerHTML = årligomkostninger;
}

/*
function delete1(qwe) {
    var myobj = document.getElementsByClassName("qwe");
    console.log(myobj);
}

*/