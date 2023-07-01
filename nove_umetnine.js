$(document).ready(function() {



});

$(document).ready(function() {


let umetnik4 = new Umetnik("Debra", "Hurd", new Tekst("Debra Hurd je talentovana američka umetnica čiji rad se fokusira na živopisne uljane slike. Inspiraciju crpi iz urbanog okruženja, a njen stil karakterišu energični potezi četkicom, teksturalni efekti i igra svetla i senke. Sa svojim jedinstvenim pristupom i prepoznatljivim stilom, Hurd je postigla priznanje i uspeh na nacionalnom i međunarodnom nivou.", "biography english"), "slike/umetnik4.jpg", "lokacija pdf-a");
let umetnik5 = new Umetnik("Cindy", "Sherman", new Tekst("Cindy Sherman je američka umetnica rođena 1954. godine. Poznata je po svojim fotografijama u kojima se ona sama pojavljuje u različitim kostimima i ulogama, istražujući koncepte identiteta, roda i društvenih normi. Njen rad je često kritički usmeren prema medijskoj kulturi i stereotipima. Sherman je postala jedna od najuticajnijih figura u savremenoj fotografiji i njen rad je izlagan i priznat širom sveta.", "biography english"), "slike/umetnik5.jpg", "lokacija pdf-a");
let umetnina1 = new Umetnina(new Tekst("Noćna vožnja", "Night ride"), umetnik4, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina(new Tekst("Noćni život", "Night life"), umetnik4, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina(new Tekst("Kišno jutro", "Rainy morning"), umetnik5, "slika", 3000, 30, "slike/art3.jpg");

function prikaziNoveUmetnineStranicu(lang) {
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


    // sadrzaj stranice:
    $("#div1")[0].innerHTML = ""; umetnina1.dodajUmetninuNaId("div1", lang);
    $("#div2")[0].innerHTML = ""; umetnina2.dodajUmetninuNaId("div1", lang);
                                  umetnina3.dodajUmetninuNaId("div2", lang);
}

if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "srp");
let lang = sessionStorage.getItem("lang"); prikaziNoveUmetnineStranicu(lang);
$("#srpski").click(function() { lang = "srp"; sessionStorage.setItem("lang", lang); prikaziNoveUmetnineStranicu(lang); });
$("#engleski").click(function() { lang = "eng"; sessionStorage.setItem("lang", lang); prikaziNoveUmetnineStranicu(lang); });
});