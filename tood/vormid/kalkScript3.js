function kytuseArvutus(){
    let vastus3=document.getElementById("vastus3");
    let valik=document.getElementsByName("kytusevalik");
    let liitrid=document.getElementById("liitrid");
    let pilt=document.getElementById("vastusepilt3");
    let tekst=document.getElementById("kytusetekst");

    const bensiin = 1.62;
    const diisel = 1.54;
    const gaas = 0.89;

    for(let i=0; i<valik.length; i++){
        if(valik[i].checked){
            if(liitrid.value<=0){
                vastus3.innerHTML="Sisesta liitrite arv!";
                vastus3.style.color='red';
            } else if(valik[i].value==="bensiin"){
                vastus3.innerHTML=liitrid.value + ' l bensiini maksab ' + (liitrid.value*bensiin).toFixed(2) + '€';
                vastus3.style.color='green';
                vastus3.style.fontSize='20px';
                pilt.src="../images/bensiin.jpg";
                tekst.innerHTML="Bensiin sobib enamikule sõiduautodele.";
            } else if(valik[i].value==="diisel"){
                vastus3.innerHTML=liitrid.value + ' l diislit maksab ' + (liitrid.value*diisel).toFixed(2) + '€';
                vastus3.style.color='brown';
                vastus3.style.fontSize='20px';
                pilt.src="../images/diisel.jpg";
                tekst.innerHTML="Diisel on säästlik pikkadel sõitudel.";
            } else {
                vastus3.innerHTML=liitrid.value + ' l gaasi maksab ' + (liitrid.value*gaas).toFixed(2) + '€';
                vastus3.style.color='blue';
                vastus3.style.fontSize='20px';
                pilt.src="../images/gaas.jpg";
                tekst.innerHTML="Autogaas on kõige odavam, aga kulub rohkem.";
            }
        }
    }
}