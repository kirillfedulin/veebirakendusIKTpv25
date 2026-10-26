let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Kuidas elad, Ann?", autor: "Aidi Vallik", aasta: 2001 },
        { pealkiri: "Nullpunkt", autor: "Margus Karu", aasta: 2010 }
    ],
    kuvaKik: function() {
        this.raamatud.forEach(r => {
            console.log(r.pealkiri + ", " + r.autor + " (" + r.aasta + ")");
        });
    },
    lisaRaamat: function(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
    },
    koguarv: function() {
        return this.raamatud.length;
    },
    pärast2000: function() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },
    kõigeUuem: function() {
        let uueim = this.raamatud[0];
        this.raamatud.forEach(r => {
            if (r.aasta > uueim.aasta) {
                uueim = r;
            }
        });
        return uueim;
    }
};

raamatukogu.kuvaKik();
console.log("Kokku raamatuid:", raamatukogu.koguarv());
console.log("Pärast 2000. aastat ilmunud:", raamatukogu.pärast2000());