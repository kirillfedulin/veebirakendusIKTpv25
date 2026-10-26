// Loon objekt raamat, millel on vähemalt kolm omadust: pealkiri, autor, aasta.
let raamat = {
    pealkiri: "Harry Potter ja tarkade kivi",
    autor: "J. K. Rowling",
    aasta: 1997,

    // Lisan meetod, mis kuvab raamatu kirjelduse.
    kirjeldus() {
        let tekst = this.pealkiri + " - " + this.autor + " (" + this.aasta + ")";
        console.log(tekst);
        document.getElementById("vastus0").innerHTML = tekst;
    },

    // Lisan meetod, mis muudab väljaandmise aastat ja prindi tulemused konsooli.
    muudaAastat() {
        this.aasta = Number(document.getElementById("uusAasta").value);
        let tekst = "Uus aasta on: " + this.aasta;
        console.log(tekst);
        document.getElementById("vastus0").innerHTML = tekst;
    }
};


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
        let tekst = "";
        this.raamatud.forEach(r => {
            tekst += r.pealkiri + ", " + r.autor + ", " + r.aasta + "<br>";
        });
        console.log(this.raamatud);
        document.getElementById("vastus1").innerHTML = tekst;
    },

    // Lisa meetod, mis lisab uue raamatu (võtab andmed vormi väljadelt).
    lisaRaamat() {
        let p = document.getElementById("pealkiri").value;
        let a = document.getElementById("autor").value;
        let aa = Number(document.getElementById("aasta").value);

        this.raamatud.push({ pealkiri: p, autor: a, aasta: aa });
        console.log("Raamat lisatud: " + p);
        document.getElementById("lisaTeade").innerHTML = "Raamat lisatud: " + p;
    },

    // Lisa meetod, mis kuvab raamatukogu raamatute koguarvu.
    koguarv() {
        let tekst = "Kokku raamatuid: " + this.raamatud.length;
        console.log(tekst);
        document.getElementById("vastus2").innerHTML = tekst;
    },

    // Lisa meetod, mis arvutab, mitu raamatut on ilmunud pärast 2000. aastat.
    pärast2000() {
        let tekst = "Pärast 2000. aastat ilmunud: " + this.raamatud.filter(r => r.aasta > 2000).length;
        console.log(tekst);
        document.getElementById("vastus3").innerHTML = tekst;
    },

    // Oma meetod: kõigeUuem
    // Tähendus: meetod käib forEach abil kõik raamatud läbi ja
    // kuvab selle raamatu, millel on kõige suurem aasta (kõige uuem).
    kõigeUuem() {
        let uueim = this.raamatud[0];
        this.raamatud.forEach(r => {
            if (r.aasta > uueim.aasta) {
                uueim = r;
            }
        });
        let tekst = "Kõige uuem raamat: " + uueim.pealkiri + " " + uueim.autor + ", " + uueim.aasta;
        console.log(tekst);
        document.getElementById("vastus4").innerHTML = tekst;
    }
};


// Üks funktsioon, mis kuvab kõik tulemused (kutsub kõik meetodid)
function kuvaTulemused() {
    raamat.kirjeldus();
    raamatukogu.kuvaKõik();
    raamatukogu.koguarv();
    raamatukogu.pärast2000();
    raamatukogu.kõigeUuem();
}
