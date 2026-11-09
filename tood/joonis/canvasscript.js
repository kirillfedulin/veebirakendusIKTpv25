

function joon() {
    //joon - линия
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.beginPath();
        tx.strokeStyle="black";
        tx.lineWidth = 1;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.stroke();
    }
}

function puhasta() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext) {
        let tx = canvas.getContext("2d")//2d tasand
        tx.clearRect(0,0,400,400);
    }
}

function kolmnurk() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.beginPath();
        tx.strokeStyle="black";
        tx.lineWidth = 1;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280);
        tx.lineTo(30,350)
        tx.lineTo(50,50)//lõpppunkt
        tx.stroke(); //taust
    }
}

function ristkylik() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    let l = document.getElementById('laius');
    let k = document.getElementById('kyrgus');
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.fillStyle="white";
        tx.fillRect(100,150,l.value,k.value);
    }
}

function ring() {
    const canvas = document.getElementById('canvas');
    const r = document.getElementById("raadius")//määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.strokeStyle = "black";
        tx.fillStyle="yellow";
        tx.arc(100,100, r.value, 0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.fill();
    }
}

function pilt() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext) {
        let tx = canvas.getContext("2d")//2d tasand
        const fail = new Image();
        fail.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.fSSjHBHrJVIu3MChR8fn8AHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=b878433ae1596de03983458579623a90fb46e16919d407613615c66ba69a6fe8&ipo=images";
        fail.onload=()=>{
            tx.drawImage(fail, 50, 50, 100, 100);
        }
    }
}