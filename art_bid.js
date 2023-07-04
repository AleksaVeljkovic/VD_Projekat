$(document).ready(function() {

function prikaziStranicu(lang) {
    let tekstMenija = [
        new Tekst("Pocetna", "Home"),
        new Tekst("Umetnine", "Art"),
        new Tekst("Umetnici", "Artists"),
        new Tekst("Moj nalog", "My account"),
        new Tekst("O nama", "About"),
    ];
    for (let i = 1; i < 6; ++i) $("#meni" + i)[0].innerHTML = tekstMenija[i - 1].dohvTekst(lang);
    let futer = new Tekst("Autorska prava zadrzavaju 2023, Aleksa Veljkovic 2020/0562, Marko Rabat 2020/0196, Odsek za softversko inzenjerstvo Elektrotehnickog fakulteta Univerziteta u Beogradu",
                          "Copyright 2023, Aleksa Veljkovic 2020/0562, Marko Rabat 2020/0196, Department of Software School of Electrical Engineering University of Belgrade");
    $("#footterr")[0].innerHTML = futer.dohvTekst(lang);
    $("#centerImage")[0].innerHTML = ""; umetnina.dodajUmetninuNaId("centerImage", lang);
    showing = null; $("#show_area")[0].innerHTML = "";
}

if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "srp");
let lang = sessionStorage.getItem("lang");
if (sessionStorage.getItem("umetnina") == null) {
    let umetnik = new Umetnik("Debra", "Hurd", new Tekst("Debra Hurd je talentovana američka umetnica čiji rad se fokusira na živopisne uljane slike. Inspiraciju crpi iz urbanog okruženja, a njen stil karakterišu energični potezi četkicom, teksturalni efekti i igra svetla i senke. Sa svojim jedinstvenim pristupom i prepoznatljivim stilom, Hurd je postigla priznanje i uspeh na nacionalnom i međunarodnom nivou.",
    " Debra Hurd is a talented American artist whose work focuses on vibrant oil paintings. Drawing inspiration from the urban environment, her style is characterized by energetic brushstrokes, textural effects and the play of light and shadow. With her unique approach and distinctive style, Hurd has achieved national and international recognition and success."), "slike/umetnik4.jpg", "lokacija pdf-a");
    let umetnina = new Umetnina(new Tekst("Noćna vožnja", "Night ride"), umetnik, "slika", 1000, 10, "slike/art1.jpg");
    sessionStorage.setItem("umetnina", JSON.stringify(umetnina));
}
let umetninaData = JSON.parse(sessionStorage.getItem("umetnina"));
let autorData = umetninaData.autor;
let umetnik = new Umetnik(autorData.ime, autorData.prezime, new Tekst(autorData.biografija.tekstSrpski, autorData.biografija.tekstEngleski), autorData.lokacijaSlikeUmetnika, autorData.lokacijaPdfa);
let umetnina = new Umetnina(new Tekst(umetninaData.nazivUmetnine.tekstSrpski, umetninaData.nazivUmetnine.tekstEngleski),
umetnik, umetninaData.tipUmetnine, umetninaData.vrednost, umetninaData.starostUmetnine, umetninaData.lokacijaSlikeUmetnine);
let showing = null;
prikaziStranicu(lang);
$("#srpski").click(function() { lang = "srp"; sessionStorage.setItem("lang", lang); prikaziStranicu(lang); });
$("#engleski").click(function() { lang = "eng"; sessionStorage.setItem("lang", lang); prikaziStranicu(lang); });

let ponudeCounter = 0;
$("#ponude").click(function() {
    if (showing == "ponude") { $("#show_area")[0].innerHTML = ""; showing = null; }
    else {
        showing = "ponude";
        if (lang == "srp") {
            $("#show_area")[0].innerHTML = `
            <form>
            <div class="form-group">
                <label for="ponuda">Ponuda:</label>
                <input type="number" class="form-control" id="Vrednost ponude" value="0" placeholder="0" style="text-align:center;">
                <br/> <label id="submitButton" class="btn btn-danger">Dodaj ponudu</button>
            </div>
            </form>
            <div id="prikazPonuda1" class="w3-third w3-center"> </div>
            <div id="prikazPonuda2" class="w3-third w3-center"> </div>
            <div id="prikazPonuda3" class="w3-third w3-center"> </div>
            `;
        }
        else {
            $("#show_area")[0].innerHTML = `
            <form>
            <div class="form-group">
                <label for="ponuda">Bid value:</label>
                <input type="number" class="form-control" id="ponuda" value="0" placeholder="0" style="text-align:center;">
                <br/> <label id="submitButton" class="btn btn-danger">Add bid</button>
            </div>
            </form>
            <div id="prikazPonuda1" class="w3-third w3-center"> </div>
            <div id="prikazPonuda2" class="w3-third w3-center"> </div>
            <div id="prikazPonuda3" class="w3-third w3-center"> </div>
            `;
        }

        $("#submitButton").click(function() {
            let number = $("#ponuda").val();
            let novaPonuda = new Ponuda(umetnina, number, "korisnik1");
            if (sessionStorage.getItem("mojePonude") == null)
                sessionStorage.setItem("mojePonude", JSON.stringify([]));
            nizPonuda = JSON.parse(sessionStorage.getItem("mojePonude"));
            nizPonuda.push(novaPonuda);
            sessionStorage.setItem("mojePonude", JSON.stringify(nizPonuda));
            showing = null; $("#show_area")[0].innerHTML = "";
        });
        
        nizPonuda = JSON.parse(sessionStorage.getItem("mojePonude"));
        if (nizPonuda == null) return;
        for (let i = 0; i < nizPonuda.length; ++i) {
            let ponudaData = nizPonuda[i];
            if (ponudaData.umetnina.nazivUmetnine.tekstSrpski == umetnina.nazivUmetnine.tekstSrpski) {
                let tekucaPonuda = new Ponuda(umetnina, ponudaData.novcanaVrednostPonude, ponudaData.autorPonude);
                tekucaPonuda.dodajPonuduNaId("prikazPonuda" + (ponudeCounter % 3 + 1) , lang); ++ponudeCounter;
            }
        }
    }
});
$("#komentari").click(function() {
    if (showing == "komentari") { $("#show_area")[0].innerHTML = ""; showing = null; }
    else {
        showing = "komentari";
        if (lang == "srp") {
            $("#show_area")[0].innerHTML = "KOMENTARI";
        }
        else {
            $("#show_area")[0].innerHTML = "COMMENTS";
        }
    }

});

});