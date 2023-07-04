class Tekst {
    constructor(tekstSrpski, tekstEngleski) {
        this.tekstSrpski = tekstSrpski;
        this.tekstEngleski = tekstEngleski;
    }
    dohvTekstSrpski() { return this.tekstSrpski; }
    dohvTekstEngleski() { return this.tekstEngleski; }
    dohvTekst(lang) { return (lang == "srp") ? this.tekstSrpski : this.tekstEngleski; }
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
                <div class="card" style="width: 700px; margin-left:70px; margin-bottom:50px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this.lokacijaSlikeUmetnika}" class="img-fluid w3-round"
                            style="width:100%; height: 300px; border: 7px solid;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.ime} ${this.prezime}</h5>
                                <p class="card-text">Biography: ${this.biografija.tekstEngleski}
                                <br/><br/>
                                <a href="Biografija i spisak dela.pdf" class="btn btn-dark">Works</a>
                            </div>
                        </div>
                    </div>
                </div>

            `;
        else if (lang == "srp")
            htmlContent = `
                <div class="card" style="width: 700px; margin-left:70px; margin-bottom:50px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this.lokacijaSlikeUmetnika}" class="img-fluid w3-round"
                            style="width:100%; height: 300px; border: 7px solid;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.ime} ${this.prezime}</h5>
                                <p class="card-text">Biografija: ${this.biografija.tekstSrpski}
                                <br/><br/>
                                <a href="Biografija i spisak dela.pdf" class="btn btn-dark">Dela</a>
                            </div>
                        </div>
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
                <div class="card" style="width: 700px; margin-left:70px; margin-bottom:50px">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <div onclick="let umetnik = new Umetnik('${this.autor.ime}', '${this.autor.prezime}',
                                new Tekst('${this.autor.biografija.tekstSrpski}', '${this.autor.biografija.tekstEngleski}'),
                                '${this.autor.lokacijaSlikeUmetnika}', '${this.autor.lokacijaPdfa}');
                            let umetnina = new Umetnina(new Tekst('${this.nazivUmetnine.tekstSrpski}', '${this.nazivUmetnine.tekstEngleski}'),
                            umetnik, '${this.tipUmetnine}', '${this.vrednost}', '${this.starostUmetnine}', '${this.lokacijaSlikeUmetnine}');
                            sessionStorage.setItem('umetnina', JSON.stringify(umetnina)); window.location.href = 'art_bid.html'">
                            <img src="${this.lokacijaSlikeUmetnine}" class="card-img-top w3-round w3-margin-bottom"
                            style="width:100%; height: 300px; border: 7px solid;">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.nazivUmetnine.tekstEngleski}</h5>
                                <p class="card-text">Biography: ${this.autor.biografija.tekstEngleski}
                                <br/>Estimated value: ${this.vrednost} RSD
                                <br/>Age: ${this.startosUmetnine} years
                                <br/>Autor: ${this.autor.ime} ${this.autor.prezime}</p>
                                <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                            </div>
                        </div>
                    </div>
                </div>
            `;
        else if (lang == "srp")
            htmlContent = `
                <div class="card" style="width: 700px; margin-left:70px; margin-bottom:50px">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <div onclick="let umetnik = new Umetnik('${this.autor.ime}', '${this.autor.prezime}',
                                new Tekst('${this.autor.biografija.tekstSrpski}', '${this.autor.biografija.tekstEngleski}'),
                                '${this.autor.lokacijaSlikeUmetnika}', '${this.autor.lokacijaPdfa}');
                            let umetnina = new Umetnina(new Tekst('${this.nazivUmetnine.tekstSrpski}', '${this.nazivUmetnine.tekstEngleski}'),
                            umetnik, '${this.tipUmetnine}', '${this.vrednost}', '${this.starostUmetnine}', '${this.lokacijaSlikeUmetnine}');
                            sessionStorage.setItem('umetnina', JSON.stringify(umetnina)); window.location.href = 'art_bid.html'">
                            <img src="${this.lokacijaSlikeUmetnine}" class="card-img-top w3-round w3-margin-bottom"
                            style="width:100%; height: 300px; border: 7px solid;">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.nazivUmetnine.tekstSrpski}</h5>
                                <p class="card-text">Biografija: ${this.autor.biografija.tekstSrpski}
                                <br/>Procenjena vrednost: ${this.vrednost} RSD
                                <br/>Starost: ${this.startosUmetnine} godina
                                <br/>Autor: ${this.autor.ime} ${this.autor.prezime}</p>
                                <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                            </div>
                        </div>
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
    toSessionStorage() {
        sessionStorage.setItem("umetnina", JSON.stringify(this));
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
            <div onclick="let umetnik = new Umetnik('${this.umetnina.autor.ime}', '${this.umetnina.autor.prezime}',
                new Tekst('${this.umetnina.autor.biografija.tekstSrpski}', '${this.umetnina.autor.biografija.tekstEngleski}'),
                '${this.umetnina.autor.lokacijaSlikeUmetnika}', '${this.umetnina.autor.lokacijaPdfa}');
            let umetnina = new Umetnina(new Tekst('${this.umetnina.nazivUmetnine.tekstSrpski}', '${this.umetnina.nazivUmetnine.tekstEngleski}'),
            umetnik, '${this.umetnina.tipUmetnine}', '${this.umetnina.vrednost}', '${this.umetnina.starostUmetnine}', '${this.umetnina.lokacijaSlikeUmetnine}');
            sessionStorage.setItem('umetnina', JSON.stringify(umetnina)); window.location.href = 'art_bid.html'">
            <img src="${this.umetnina.lokacijaSlikeUmetnine}" class="card-img-top w3-round w3-margin-bottom"
            style="width:100%; height: 300px; border: 7px solid;">
            </div>
            <div class="card-body">
                <h5 class="card-title">${this.umetnina.nazivUmetnine.tekstEngleski}</h5>
                <p class="card-text">Bid: ${this.novcanaVrednostPonude}RSD<br/>Bid made by: ${this.autorPonude}</p>
                <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
            </div>

            </div>
        `;
        else if (lang == "srp")
        htmlContent = `
            <div class="card">
            <div onclick="let umetnik = new Umetnik('${this.umetnina.autor.ime}', '${this.umetnina.autor.prezime}',
                new Tekst('${this.umetnina.autor.biografija.tekstSrpski}', '${this.umetnina.autor.biografija.tekstEngleski}'),
                '${this.umetnina.autor.lokacijaSlikeUmetnika}', '${this.umetnina.autor.lokacijaPdfa}');
            let umetnina = new Umetnina(new Tekst('${this.umetnina.nazivUmetnine.tekstSrpski}', '${this.umetnina.nazivUmetnine.tekstEngleski}'),
            umetnik, '${this.umetnina.tipUmetnine}', '${this.umetnina.vrednost}', '${this.umetnina.starostUmetnine}', '${this.umetnina.lokacijaSlikeUmetnine}');
            sessionStorage.setItem('umetnina', JSON.stringify(umetnina)); window.location.href = 'art_bid.html'">
            <img src="${this.umetnina.lokacijaSlikeUmetnine}" class="card-img-top w3-round w3-margin-bottom"
            style="width:100%; height: 300px; border: 7px solid;">
            </div>
            <div class="card-body">
                <h5 class="card-title">${this.umetnina.nazivUmetnine.tekstSrpski}</h5>
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


function MeniZaMaliEkran() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }