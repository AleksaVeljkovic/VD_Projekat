class Tekst {
    constructor(tekstSrpski, tekstEngleski) {
        this.tekstSrpski = tekstSrpski;
        this.tekstEngleski = tekstEngleski;
    }
}

class Umetnik {
    constructor(ime, prezime, biografija, lokacijaSlikeUmetnika, lokacijaPdfa) {
        this.ime = ime;
        this.prezime = prezime;
        if (!(biografija instanceof(Tekst)))
            throw "biografija mora biti tipa Tekst";
        this.biografija = biografija;
        this.lokacijaSlikeUmetnika = lokacijaSlikeUmetnika;
        this.lokacijaPdfa = lokacijaPdfa;
    }
    dodajUmetnikaNaId(id, lang) {
        let htmlContent = null;
        if (lang == "eng")
            htmlContent = `
                <div class="card">
                <img src="${this.lokacijaSlikeUmetnika}" class="card-img-top w3-round w3-margin-bottom"
                style="width:100%; height: 300px; border: 7px solid;">

                <div class="card-body">
                    <h5 class="card-title">${this.ime} ${this.prezime}</h5>
                    <p class="card-text">Biography: ${this.biografija.tekstEngleski}
                    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>

                </div>
            `;
        else if (lang == "srp")
            htmlContent = `
                <div class="card">
                <img src="${this.lokacijaSlikeUmetnika}" class="card-img-top w3-round w3-margin-bottom"
                style="width:100%; height: 300px; border: 7px solid;">

                <div class="card-body">
                    <h5 class="card-title">${this.ime} ${this.prezime}</h5>
                    <p class="card-text">Biografija: ${this.biografija.tekstEngleski}
                    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>

                </div>
            `;
        else throw "language must be srp or eng";
        $("#" + id)[0].innerHTML += htmlContent;
    }
    toString() {
        return "" + nazivUmetnine + " " + autor + " " +
               this.tipUmetnine + " " + this.vrednost + " " +
               this.startosUmetnine + " " + this.lokacijaSlikeUmetnine;
    }
    toString() {
        return "" + this.ime + " " + this.prezime + " " +  " " + this.lokacijaPdfa;
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
    dodajUmetninuNaId(id, lang) {
        let htmlContent = null;
        if (lang == "eng")
            htmlContent = `
                <div class="card">
                <img src="${this.lokacijaSlikeUmetnine}" class="card-img-top w3-round w3-margin-bottom"
                style="width:100%; height: 300px; border: 7px solid;">

                <div class="card-body">
                    <h5 class="card-title">${this.nazivUmetnine}</h5>
                    <p class="card-text">Biography: ${this.autor.biografija.tekstEngleski}
                    <br/>Estimated value: ${this.vrednost}
                    <br/>Age: ${this.startosUmetnine}
                    <br/>Author: ${this.autor.ime} ${this.autor.prezime}</p>
                    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>

                </div>
            `;
        else if (lang == "srp")
            htmlContent = `
                <div class="card">
                <img src="${this.lokacijaSlikeUmetnine}" class="card-img-top w3-round w3-margin-bottom"
                style="width:100%; height: 300px; border: 7px solid;">

                <div class="card-body">
                    <h5 class="card-title">${this.nazivUmetnine}</h5>
                    <p class="card-text">Biografija: ${this.autor.biografija.tekstSrpski}
                    <br/>Procenjena vrednost: ${this.vrednost}
                    <br/>Starost: ${this.startosUmetnine}
                    <br/>Autor: ${this.autor.ime} ${this.autor.prezime}</p>
                    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>

                </div>
            `;
        else throw "language must be srp or eng";
        $("#" + id)[0].innerHTML += htmlContent;
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
    dodajPonuduNaId(id, lang) {
        let htmlContent = null;
        if (lang == "eng")
        htmlContent = `
            <div class="card">
            <img src="${this.umetnina.lokacijaSlikeUmetnine}" class="card-img-top w3-round w3-margin-bottom"
            style="width:100%; height: 300px; border: 7px solid;">

            <div class="card-body">
                <h5 class="card-title">${this.umetnina.nazivUmetnine}</h5>
                <p class="card-text">Bid: ${this.novcanaVrednostPonude}RSD<br/>Bid made by: ${this.autorPonude}</p>
                <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
            </div>

            </div>
        `;
        else if (lang == "srp")
        htmlContent = `
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
        else throw "language must be srp or eng";
        $("#" + id)[0].innerHTML += htmlContent;

    }
    toString() {
        return "" + this.umetnina + " " + this.novcanaVrednostPonude + " " + this.autorPonude;
    }
}