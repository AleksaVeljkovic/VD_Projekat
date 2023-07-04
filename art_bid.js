$(document).ready(function() {

function prikaziNovePostavkeStranicu(lang) {
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
    console.log("here1");
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
    umetnina.dodajUmetninuNaId("centerImage", lang);
}

if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "srp");
let lang = sessionStorage.getItem("lang"); prikaziNovePostavkeStranicu(lang);
$("#srpski").click(function() { lang = "srp"; sessionStorage.setItem("lang", lang); prikaziNovePostavkeStranicu(lang); });
$("#engleski").click(function() { lang = "eng"; sessionStorage.setItem("lang", lang); prikaziNovePostavkeStranicu(lang); });

});