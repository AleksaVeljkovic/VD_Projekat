
$(document).ready(function() {



let umetnik1 = new Umetnik("Umetnik1 ime", "Umetnik1 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik1.jpg", "lokacija pdf-a");
let umetnik2 = new Umetnik("Umetnik2 ime", "Umetnik2 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik2.jpg", "lokacija pdf-a");
let umetnik3 = new Umetnik("Umetnik3 ime", "Umetnik3 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik3.jpg", "lokacija pdf-a");
let umetnina1 = new Umetnina(new Tekst("Noćna vožnja", "Night ride"), umetnik1, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina(new Tekst("Noćni život", "Night life"), umetnik2, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina(new Tekst("Kišno jutro", "Rainy morning"), umetnik3, "slika", 3000, 30, "slike/art3.jpg");
let ponuda1 = new Ponuda(umetnina1, 1100, "Kupac1");
let ponuda2 = new Ponuda(umetnina2, 2100, "Kupac1");
let ponuda3 = new Ponuda(umetnina3, 3100, "Kupac1");

function prikaziHomeStranicu(lang) {
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
    $("#div1")[0].innerHTML = ""; ponuda1.dodajPonuduNaId("div1", lang);
    $("#div2")[0].innerHTML = ""; ponuda2.dodajPonuduNaId("div2", lang);
    $("#div3")[0].innerHTML = ""; ponuda3.dodajPonuduNaId("div3", lang);

    // tekst na stranici:
    $("#nPostavke")[0].innerHTML = new Tekst("Nove postavke", "New exibitions").dohvTekst(lang);
    $("#nUmetnici")[0].innerHTML = new Tekst("Novi umetnici", "New artists").dohvTekst(lang);
    $("#nUmetnine")[0].innerHTML = new Tekst("Nove umetnine", "New art").dohvTekst(lang);
    $("#tekstNajnovijePonude")[0].innerHTML = new Tekst("Najnovije ponude", "New bids").dohvTekst(lang);
}

if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "srp");
let lang = sessionStorage.getItem("lang"); prikaziHomeStranicu(lang);
$("#srpski").click(function() { lang = "srp"; sessionStorage.setItem("lang", lang); prikaziHomeStranicu(lang); });
$("#engleski").click(function() { lang = "eng"; sessionStorage.setItem("lang", lang); prikaziHomeStranicu(lang); });

});
