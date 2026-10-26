// Loon objekt raamat, millel on vähemalt kolm omadust: pealkiri, autor, aasta.
let raamat = {
    pealkiri: "Harry Potter ja tarkade kivi",
    autor: "J. K. Rowling",
    aasta: 1997,

    // Lisan meetod, mis kuvab raamatu kirjelduse.
    kirjeldus() {
        return this.pealkiri + " - " + this.autor + " (" + this.aasta + ")";
    },
    // Lisan meetod, mis muudab väljaandmise aastat ja prindi tulemused konsooli.
    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
        console.log("Uus aasta on: " + this.aasta);
        return "Uus aasta on: " + this.aasta;
    }
};

console.log(raamat.kirjeldus());
raamat.muudaAastat(1998);


// Loon objekt raamatukogu, mille omaduseks on raamatud (massiiv raamatutest).
let raamatukogu = {
    raamatud: [
        { pealkiri: "Sõrmuste isand", autor: "J. R. R. Tolkien", aasta: 1954 },
        { pealkiri: "1984", autor: "George Orwell", aasta: 1949 },
        { pealkiri: "Väike prints", autor: "Antoine de Saint-Exupéry", aasta: 1943 },
        { pealkiri: "Da Vinci kood", autor: "Dan Brown", aasta: 2003 },
        { pealkiri: "Nälgimismängud", autor: "Suzanne Collins", aasta: 2008 }
    ],
    // Lisa meetod, mis kuvab kõik raamatud kenasti.
    kuvaKõik() {
        let tulemus = "";
        this.raamatud.forEach(r => {
            tulemus += r.pealkiri + ", " + r.autor + ", " + r.aasta + "<br>";
        });
        return tulemus;
    },

    // Lisa meetod, mis lisab uue raamatu.
    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
    },

    // Lisa meetod, mis kuvab raamatukogu raamatute koguarvu.
    koguarv() {
        return this.raamatud.length;
    },

    // Lisa meetod, mis arvutab, mitu raamatut on ilmunud pärast 2000. aastat.
    pärast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    // Oma meetod: kõigeUuem
    // Tähendus: meetod käib forEach abil kõik raamatud läbi ja
    // tagastab selle raamatu, millel on kõige suurem aasta (kõige uuem).
    kõigeUuem() {
        let uueim = this.raamatud[0];
        this.raamatud.forEach(r => {
            if (r.aasta > uueim.aasta) {
                uueim = r;
            }
        });
        return uueim;
    }
};


// Funktsioonid HTML-nuppude jaoks (tulemus konsooli ja HTML-i lehele)
function kuvaRaamat() {
    let tekst = raamat.kirjeldus();
    console.log(tekst);
    document.getElementById("vastus0").innerHTML = tekst;
}

function muudaRaamatuAastat() {
    let uusAasta = Number(document.getElementById("uusAasta").value);
    let tekst = raamat.muudaAastat(uusAasta);
    document.getElementById("vastus0").innerHTML = tekst;
}

function lisaRaamat() {
    let p = document.getElementById("pealkiri").value;
    let a = document.getElementById("autor").value;
    let aa = Number(document.getElementById("aasta").value);

    raamatukogu.lisaRaamat(p, a, aa);
    console.log("Raamat lisatud: " + p);
    document.getElementById("lisaTeade").innerHTML = "Raamat lisatud!";
}

function kuvaKõikRaamatud() {
    console.log(raamatukogu.raamatud);
    let vastus1 = document.getElementById("vastus1");
    vastus1.innerHTML = raamatukogu.kuvaKõik();
}

function kuvaKoguarv() {
    let tekst = "Kokku raamatuid: " + raamatukogu.koguarv();
    console.log(tekst);
    let vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = tekst;
}

function kuvaParast2000() {
    let tekst = "Pärast 2000. aastat ilmunud: " + raamatukogu.pärast2000();
    console.log(tekst);
    let vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = tekst;
}

function kuvaUuem() {
    let uueim = raamatukogu.kõigeUuem();
    let tekst = "Kõige uuem raamat: " + uueim.pealkiri + " " + uueim.autor + ", " + uueim.aasta;
    console.log(tekst);
    let vastus4 = document.getElementById("vastus4");
    vastus4.innerHTML = tekst;
}
