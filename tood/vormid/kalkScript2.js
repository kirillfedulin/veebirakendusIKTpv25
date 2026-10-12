function jookideValik(){
    let vastus2 = document.getElementById('vastus2');
    let joogiValik = document.getElementById('joogiValik');
    let kogus = document.getElementById('kogus');
    const cocacola=2.20;
    const redbull = 2.50;
    const lean = 20;
    const jager = 5;

    if(joogiValik.selectedIndex===0){
        vastus2.innerHTML=kogus.value + "CocaCola hind on: " + kogus.value*cocacola;
        vastus2.style.color = 'green';
    }
    if(joogiValik.selectedIndex===1){
        vastus2.innerHTML=kogus.value + "RedBull hind on: " + kogus.value*redbull;
        vastus2.style.color = 'green';
    }
    if(joogiValik.selectedIndex===2){
        vastus2.innerHTML=kogus.value + "Lean hind on: " + kogus.value*lean;
        vastus2.style.color = 'green';
    }
    if(joogiValik.selectedIndex===3){
        vastus2.innerHTML=kogus.value + "Jägermeister hind on: " + kogus.value*jager;
        vastus2.style.color = 'green';
    } }