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