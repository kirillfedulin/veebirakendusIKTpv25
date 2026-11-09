

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

//iseseisevtöö

function ratas1() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.fillStyle = "black";
        tx.beginPath();
        tx.arc(110, 285, 35, 0, 2*Math.PI, true);
        tx.fill();
        tx.beginPath();
        tx.arc(270, 285, 35, 0, 2*Math.PI, true);
        tx.fill();
    }
}

function ratas2() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.fillStyle = "gray";
        tx.beginPath();
        tx.arc(110, 285, 15, 0, 2*Math.PI, true);
        tx.fill();
        tx.beginPath();
        tx.arc(270, 285, 15, 0, 2*Math.PI, true);
        tx.fill();
    }
}

function kere() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.fillStyle = "blue";
        tx.fillRect(60, 190, 260, 80);
        tx.fillStyle = "lightblue";
        tx.fillRect(110, 130, 150, 60);
    }
}

function tuled() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.strokeStyle = "yellow";
        tx.lineWidth = 3;
        tx.beginPath();
        tx.moveTo(320, 205); //alguspunkt
        tx.lineTo(390, 180); //lõpppunkt
        tx.moveTo(320, 220);
        tx.lineTo(395, 220);
        tx.moveTo(320, 235);
        tx.lineTo(390, 260);
        tx.stroke();
    }
}

function oma() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.fillStyle = "orange";
        tx.beginPath();
        tx.arc(60, 60, 30, 0, 2*Math.PI, true);
        tx.fill();
    }
}

function koik() {
    puhasta()
    joon()
    kolmnurk()
    ristkylik()
    ring()
    pilt()
    ratas1()
    ratas2()
    kere()
    tuled()
    oma()
}
