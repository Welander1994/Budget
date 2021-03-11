

function add() {
    var indkomst,husleje,Budget,mad,udgifter;

    indkomst = Number(document.getElementById("indkomst").value);
    husleje = Number(document.getElementById("husleje").value);
    mad = Number(document.getElementById("mad").value);

    Budget = indkomst - husleje - mad;

    udgifter = husleje + mad;
    
    document.getElementById("Budget").innerHTML= Budget;
    document.getElementById("udgifter").innerHTML= udgifter;

    console.log("Indkomst = " + indkomst);
    console.log("husleje = " + husleje);
    console.log("mad = " + mad);
    console.log("Budget = " + Budget);
    console.log("udgifter = " + udgifter);
}