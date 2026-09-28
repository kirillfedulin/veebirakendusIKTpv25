function nimiLugemineKastist(){
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");

    vastus1.innerHTML="Sisestatud nimi on: " + nimi.value;
    vastus1.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
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
}
