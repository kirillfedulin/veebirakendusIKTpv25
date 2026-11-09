

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
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.fillStyle="white";
        tx.fillRect(100,150,200,250);
    }
}

function ring() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if(canvas.getContext){
        let tx = canvas.getContext("2d")//2d tasand
        tx.beginPath();
        tx.strokeStyle = "black";
        tx.fillStyle="yellow";
        tx.arc(100,100,50,0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.fill();
        tx.stroke();
    }
}