function addIndtægt() {
    newIndtægt = document.getElementById("addIndtægt").value;

    
    var input = document.createElement("input"); 
    input.type = "text"
    input.name = newIndtægt;
    input.id = newIndtægt;
    input.placeholder = newIndtægt;   

    var p = document.createElement("p"); 

    document.getElementById("indtægt").appendChild(input);  
    document.getElementById("indtægt").appendChild(p);   
}

function addudgifter() {
    newUdgifter = document.getElementById("addudgifter").value;

    
    var input = document.createElement("input"); 
    input.type = "text"
    input.name = newUdgifter;
    input.id = newUdgifter;
    input.placeholder = newUdgifter;   

    var p = document.createElement("p"); 

    document.getElementById("udgifter").appendChild(input);  
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

