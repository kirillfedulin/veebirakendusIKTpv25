function juhuslikPilt() {
    //massiiv pildifailidest
    pildid=[
        'smile.png',
        'lill.png',
        'kurb.png',
        'netural.png',
    ];
    const randomPilt = document.getElementById('randomPilt');

    const pilt=pildid[Math.floor(Math.random()*pildid.length)];
    //Math.floor - ümerdab täisarvuni
    //Math.random - juhuslik arv

    randomPilt.src = pilt;
}

function selectValik(){
    let vastus = document.getElementById('vastus');
    let valik = document.getElementById('valik');
    let randomPilt = document.getElementById('randomPilt');

    if(randomPilt.getAttribute('src')==valik.value){
        vastus.innerHTML="ÕIGE!";
        vastus.style.color = 'green';
    }
    else{
        vastus.innerHTML="VALE!";
        vastus.style.color = 'red';
    }
}