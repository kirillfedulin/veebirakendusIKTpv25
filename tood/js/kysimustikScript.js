function nimiLugemineKastist(){
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");

    vastus1.innerHTML="Sisestatud nimi on: " + nimi.value;
    vastus1.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)"

    return nimi.value;
}
//radio valikud

function radiovalik(){
    let vastus2 = document.getElementById("vastus2");
    let spotify = document.getElementById("spotify");
    let applemusic = document.getElementById("applemusic");
    let soundcloud = document.getElementById("soundcloud");

    let valik="";
    if(spotify.checked){
        valik=spotify.value;
    }
    else if(applemusic.checked){
        valik=applemusic.value;
    }
    else if(soundcloud.checked){
        valik=soundcloud.value;
    }
    else{
        valik="Palun tee oma valik"
    }

    vastus2.innerHTML="valik: " + valik;
    vastus2.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";

    return valik;
}

//checkbox valik
function checkboxValik(){
    let vastus3 = document.getElementById("vastus3");
    let limpbizkit = document.getElementById("limpbizkit");
    let linkinpark = document.getElementById("linkinpark");
    let korn = document.getElementById("korn");
    let nirvana = document.getElementById("nirvana");

    let valik2="";
    if(limpbizkit.checked){
        valik2+=limpbizkit.value + ", ";
    }
    if(linkinpark.checked){
        valik2+=linkinpark.value + ", ";
    }
    if(korn.checked){
        valik2+=korn.value + ", ";
    }
    if(nirvana.checked){
        valik2+=nirvana.value + ", ";
    }
    if(valik2 == ""){
        valik2="Palun tee oma valik";
    }

    vastus3.innerHTML="Sinu lemmikud on: " + valik2;
    vastus3.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";

    return valik2;
}

function rangeValik(){
    let vastus4 = document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML="Sa kuuled muusikat: " + tund.value + "tundi";

    vastus4.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";

    return tund.value
}

//select valik

function selectValik(){
    let vastus5 = document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");

    if(stiil.selectedIndex !== 0){ //0-1 esimene loetelus
        vastus5.innerHTML="Sa valisid " + stiil.value;
    }
    else{
        vastus5.innerHTML="Palun tee oma valik";
    }

    vastus5.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";

    return stiil.value;
}

//kasutab teisi funktsioone
function naitaKoike(){
    let vastusKoik = document.getElementById("vastusKoik");
    let nimi = nimiLugemineKastist();
    let valik = radiovalik();
    let valik2 = checkboxValik();
    let tund = rangeValik();
    let stiil = selectValik("stiil");

    vastusKoik.innerHTML = "Sinu nimi on: " + nimi +
        "<br>" + "Sinu lemmikud on:" + valik2 +
        "<br>" + "Sa kasutad " + valik + "<br>" + "Sa kuuled " + tund + "tundi" +
    "<br>" + "Sa valisid " + stiil;

    vastusKoik.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
}

function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastusKoik.innerHTML="";
}