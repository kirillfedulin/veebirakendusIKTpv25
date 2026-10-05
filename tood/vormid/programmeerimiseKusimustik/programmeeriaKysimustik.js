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
    return valik;
}

function oppimisestKastist(){
    let vastus1 = document.getElementById("vastus1");
    let oppimisest = document.getElementById("oppimisest");

    vastus1.innerHTML="Sisestatud arvamus: " + oppimisest.value;

    return oppimisest.value;
}

function rangeValik(){
    let vastus2 = document.getElementById("vastus2");
    let tund = document.getElementById("tund");

    vastus2.innerHTML="tundi nädalas tegeled programmeerimisega: " + tund.value + "tundi";

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

    return valik3;
}

function tooriistuKastist(){
    let vastus4 = document.getElementById("vastus4");
    let tooriistu = document.getElementById("tooriistu");

    vastus4.innerHTML="Sisestatud oksad nimeta: " + tooriistu.value;

    return tooriistu.value;
}

function radiovalik2(){
    let vastus5 = document.getElementById("vastus5");
    let csharpkeel = document.getElementById("csharpkeel");
    let pythonkeel = document.getElementById("pythonkeel");
    let cplus2keel = document.getElementById("cplus2keel");
    let javakeel = document.getElementById("javakeel");
    let javascript = document.getElementById("javascript");
    let rust = document.getElementById("rust");

    if(csharpkeel.checked){
        valik4=csharpkeel.value;
    }
    else if(pythonkeel.checked){
        valik4=pythonkeel.value;
    }
    else if(cplus2keel.checked){
        valik4=cplus2keel.value;
    }
    else if(javakeel.checked){
        valik4=javakeel.value;
    }
    else if(javascript.checked){
        valik4=javascript.value;
    }
    else if(rust.checked){
        valik4=rust.value;
    }
    else{
        valik4="Palun tee oma valik"
    }

    vastus5.innerHTML="Sa valitsid: " + valik4;

    return valik4;
}

function naitaKoike(){
    let vastusKoik = document.getElementById("vastusKoik");
    let valik = checkboxValik()
    let oppimisest = oppimisestKastist()
    let tund = rangeValik()
    let valik3 = radiovalik()
    let tooriistu = tooriistuKastist()
    let valik4 = radiovalik2()


    vastusKoik.innerHTML = "Sinu lemmikud on: " + valik +
        "<br>" + "Sisestatud arvamus: " + oppimisest +
        "<br>" + "tundi nädalas tegeled programmeerimisega: " + tund + "<br>" +
        "Kas meeldi või ei meeldi: " + valik3 +
        "<br>" + "Sisestatud oksad nimeta: " + tooriistu + "<br>" + "Sa valitsid: " + valik4;
}

function puhasta() {
    vastus7.innerHTML="";
    vastusKoik.innerHTML="";
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
}
