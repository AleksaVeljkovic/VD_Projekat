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
}

if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "srp");
let lang = sessionStorage.getItem("lang"); prikaziNovePostavkeStranicu(lang);
$("#srpski").click(function() { lang = "srp"; sessionStorage.setItem("lang", lang); prikaziNovePostavkeStranicu(lang); });
$("#engleski").click(function() { lang = "eng"; sessionStorage.setItem("lang", lang); prikaziNovePostavkeStranicu(lang); });

});