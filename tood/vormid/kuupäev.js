const now=new Date();

const paev=now.getDate(); //tagastab päeva

console.log("Tänane päev " + paev + "päev");

const kuu = now.getMonth() + 1; //tagastab kuu 0-11
console.log("Kuu number on " + kuu);

const aasta = now.getFullYear();
console.log("Aasta on " + aasta);

const nadalapaev = now.getDay(); //0-6, kus 0 on pühapaev
console.log("Nadalapaeva number on: " + nadalapaev);

function tana(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML= "Täna on " +paev +"." + kuu + "." + aasta;
}
//lisa veel getHours() getMinutes ja lise veel funktsioon mis näitab aeg-kellaaeg

const tunnid = now.getHours();
const minutes = now.getMinutes();
console.log("Praegu on " + tunnid + "." + minutes);

function kellaAeg(){
    let vastus2=document.getElementById("vastus");
    vastus2.innerHTML= "Praegu on " + tunnid + "tunnid ja " + minutes + "min";
}

//mitu paeva konsultationi nädalani
const konsultatsioon = new Date(2026, 10, 2);
const vahe = konsultatsioon.getTime()- now.getTime()
const konspaev = vahe/(1000*60*60*24);

console.log("Konsultatiooni nädalani " + konspaev.toFixed(0) + "paeva");

//nupp - Päaeva konstultasiooni nädalani
//nupp - Päeva minu sünipäevani

function konspaevv(){
    let vastus3=document.getElementById("vastus3");
    vastus3.innerHTML= ("Konsultatioon " + konspaev.toFixed(0) + "paeva");
}

const suniipaev = new Date(2026, 3, 22);
const vahe2 = suniipaev.getTime()- now.getTime()
const suni = vahe2/(1000*60*60*24);

console.log("Sunnipaev " + suni.toFixed(0) + "paeva")

function sunipaev(){
    let vastus4=document.getElementById("vastus3");
    vastus4.innerHTML= ("Sunnipaev " + suni.toFixed(0) + "paeva");
}