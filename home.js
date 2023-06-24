
$(document).ready(function() {

class Tekst {
    constructor(tekstSrpski, tekstEngleski) {
        this.tekstSrpski = tekstSrpski;
        this.tekstEngleski = tekstEngleski;
    }
    tekstSrpski() { return this.tekstSrpski; }
    tekstEngleski() { return this.tekstEngleski; }
}

class Umetnik {
    constructor(ime, prezime, biografija, lokacijaPdfa) {
        this.ime = ime;
        this.prezime = prezime;
        if (!(biografija instanceof(Tekst)))
            throw "biografija mora biti tipa Tekst";
        this.biografija = biografija;
        this.lokacijaPdfa = lokacijaPdfa;
    }
    toString() {
        return "" + this.ime + " " + this.prezime + " " + this.biografja + " " + this.lokacijaPdfa;
    }
}

class Umetnina {
    constructor(nazivUmetnine, autor, tipUmetnine, vrednost, startosUmetnine, lokacijaSlikeUmetnine) {
        this.nazivUmetnine = nazivUmetnine;
        if (!(autor instanceof(Umetnik))) throw "autor mora biti tipa Autor";
        this.autor = autor;
        this.tipUmetnine = tipUmetnine;
        this.vrednost = vrednost;
        this.startosUmetnine = startosUmetnine;
        this.lokacijaSlikeUmetnine = lokacijaSlikeUmetnine;
    }
    toString() {
        return "" + nazivUmetnine + " " + autor + " " +
               this.tipUmetnine + " " + this.vrednost + " " +
               this.startosUmetnine + " " + this.lokacijaSlikeUmetnine;
    }
}

class Ponuda {
    constructor(umetnina, novcanaVrednostPonude, autorPonude) {
        if (!(umetnina instanceof(Umetnina))) throw "umetnina mora biti tipa Umetnina";
        this.umetnina = umetnina;
        this.novcanaVrednostPonude = novcanaVrednostPonude;
        this.autorPonude = autorPonude;
    }
    dodajPonuduNaId(id) {
        let htmlContent = `
            <div class="card">
            <img src="${this.umetnina.lokacijaSlikeUmetnine}" class="card-img-top w3-round w3-margin-bottom"
            style="width:100%; height: 300px; border: 7px solid;">

            <div class="card-body">
                <h5 class="card-title">${this.umetnina.nazivUmetnine}</h5>
                <p class="card-text">Ponuda: ${this.novcanaVrednostPonude}RSD<br/>Ponudu postavio: ${this.autorPonude}</p>
                <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
            </div>

            </div>
        `;
        $("#" + id)[0].innerHTML += htmlContent;

    }
    toString() {
        return "" + this.umetnina + " " + this.novcanaVrednostPonude + " " + this.autorPonude;
    }
}

let umetnik1 = new Umetnik("Umetnik1 ime", "Umetnik1 prezime", new Tekst("biografija srpski", "biography english"), "lokacija pdf-a");
let umetnik2 = new Umetnik("Umetnik2 ime", "Umetnik2 prezime", new Tekst("biografija srpski", "biography english"), "lokacija pdf-a");
let umetnik3 = new Umetnik("Umetnik3 ime", "Umetnik3 prezime", new Tekst("biografija srpski", "biography english"), "lokacija pdf-a");
let umetnina1 = new Umetnina("Umetnina1", umetnik1, "slika", 1000, 10, "art1.jpg");
let umetnina2 = new Umetnina("Umetnina2", umetnik2, "slika", 2000, 20, "art4.jpg");
let umetnina3 = new Umetnina("Umetnina3", umetnik3, "slika", 3000, 30, "art3.jpg");
let ponuda1 = new Ponuda(umetnina1, 1100, "Kupac1");
let ponuda2 = new Ponuda(umetnina2, 2100, "Kupac1");
let ponuda3 = new Ponuda(umetnina3, 3100, "Kupac1");
ponuda1.dodajPonuduNaId("div1");
ponuda2.dodajPonuduNaId("div2");
ponuda3.dodajPonuduNaId("div3");



});