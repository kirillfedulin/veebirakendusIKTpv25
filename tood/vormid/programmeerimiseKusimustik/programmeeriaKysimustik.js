function checkboxValik(){
    let vastus7 = document.getElementById("vastus7");
    let csharp = document.getElementById("csharp");
    let python = document.getElementById("python");
    let cplus2 = document.getElementById("cplus2");
    let java = document.getElementById("java");

    let valik="";
    if(csharp.checked){
        valik+=csharp.value + ", ";
    }
    if(python.checked){
        valik+=python.value + ", ";
    }
    if(cplus2.checked){
        valik+=cplus2.value + ", ";
    }
    if(java.checked){
        valik+=java.value + ", ";
    }
    if(valik == ""){
        valik="Palun tee oma valik";
    }

    vastus7.innerHTML="Sinu lemmikud on: " + valik;
    vastus7.style.background = "linear-gradient(lightcyan, lightblue);";
    return valik;
}

function oppimisestKastist(){
    let vastus1 = document.getElementById("vastus1");
    let oppimisest = document.getElementById("oppimisest");

    vastus1.innerHTML="Sisestatud nimi on: " + oppimisest.value;
    vastus1.style.background = "linear-gradient(lightcyan, lightblue);"

    return oppimisest.value;
}

function rangeValik(){
    let vastus2 = document.getElementById("vastus2");
    let tund = document.getElementById("tund");

    vastus2.innerHTML="Sa kuuled muusikat: " + tund.value + "tund";

    vastus2.style.background = "linear-gradient(lightcyan, lightblue);";

    return tund.value
}

function radiovalik(){
    let vastus3 = document.getElementById("vastus3");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    if(jah.checked){
        valik3=jah.value;
        vastus3.innerHTML="Programmeerimine meeldib!😊";
    }
    else if(ei.checked){
        valik3=ei.value;
        vastus3.innerHTML="Programmeerimine ei meeldi😢";
    }
    else{
        valik3="Palun tee oma valik"
    }

    vastus3.style.background = "linear-gradient(lightcyan, lightblue);";

    return valik3;
}