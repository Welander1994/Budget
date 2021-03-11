console.log("Dette er din budget regner")

function add() {
    var indkomst,
    su,
    job,
    fasteudgifter,
    VariableUdgifter,
    husleje,Budget,
    mad,
    transport,
    fagforening,
    forsikringer,
    mobil,
    internet,
    licens,
    streaming,
    tøj,
    cafe,
    uforudset,
    opsparing;

    /*indkomst */
    job = Number(document.getElementById("job").value);
    su = Number(document.getElementById("su").value);

    /*faste udgifter*/
    husleje = Number(document.getElementById("husleje").value);
    transport = Number(document.getElementById("transport").value);
    fagforening = Number(document.getElementById("fagforening").value);
    forsikringer = Number(document.getElementById("forsikringer").value);
    mobil = Number(document.getElementById("mobil").value);
    internet = Number(document.getElementById("internet").value);
    licens = Number(document.getElementById("licens").value);
    streaming = Number(document.getElementById("streaming").value);


    /*Variable udgifter*/
    mad = Number(document.getElementById("mad").value);
    tøj = Number(document.getElementById("tøj").value);
    cafe = Number(document.getElementById("cafe").value);
    uforudset = Number(document.getElementById("uforudset").value);
    opsparing = Number(document.getElementById("opsparing").value);

    /*Variable udgifter*/
    indkomst = su + job;

    /*ændre senere*/
    fasteudgifter = husleje + transport + fagforening + forsikringer + mobil + internet + licens + streaming;

    /*Variable udgifter*/
    VariableUdgifter = mad + tøj + cafe + uforudset + opsparing;

     /*ændre senere*/
    Budget = indkomst - fasteudgifter - VariableUdgifter;
    
    document.getElementById("indkomst").innerHTML=  indkomst;
    document.getElementById("budget").innerHTML=  Budget;
    document.getElementById("fasteudgifter").innerHTML= "-" + fasteudgifter;
    document.getElementById("variableUdgifter").innerHTML= "-" + VariableUdgifter;

    /*indkomst*/
    console.log("Indkomst = " + indkomst);
    console.log("SU = " + su);
    console.log("Job = " + job);

    /*faste udgifter*/
    console.log("husleje = " + husleje);
    console.log("transport = " + transport);
    console.log("fagforening = " + fagforening);
    console.log("forsikringer = " + forsikringer);
    console.log("mobil = " + mobil);
    console.log("internet = " + internet);
    console.log("licens = " + licens);
    console.log("streaming = " + streaming);
    

    /*Variable udgifter*/
    console.log("mad = " + mad);
    console.log("tøj = " + tøj);
    console.log("cafe = " + cafe);
    console.log("uforudset udgifter = " + uforudset);
    console.log("opsparing = " + opsparing);
  

    /*samlet udregninger*/
    console.log("Budget = " + Budget);
    console.log("Faste udgifter = " + fasteudgifter);
    console.log("Variable udgifter = " + VariableUdgifter);


    /*
    if(0 > Budget ) {
        document.getElementById("budget").style.color = "red";
    }
    else {
        document.getElementById("budget").style.color = "green";
        
    }
    */
}

