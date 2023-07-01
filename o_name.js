$(document).ready(function() {
    
function prikaziNoviUmetniciStranicu(lang) {
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
    // tekst na stranici:
    $("#naslov")[0].innerHTML = new Tekst("O nama", "About us").dohvTekst(lang);
    $("#tekst1")[0].innerHTML = new Tekst(`
        U nasoj galeriji se ponosno predstavlja raznovrsnost umetničkih dela. 
        Bez obzira na preferencije posetilaca, nasa galerija pruža širok spektar umetnosti koja zadovoljava različite ukuse i interese. 
        Naša stalna izložba obuhvata različite stilove, epohe i tehnike umetnosti, pružajući bogato iskustvo posetiocima.
        U galeriji koju vodimo, posvećujemo pažnju visokom kvalitetu umetničkih dela. 
        Naš tim stručnjaka pažljivo bira i procenjuje svako izloženo umetničko delo.
        Galerija koju vodimo aktivno sarađuje sa umetnicima iz različitih delova sveta.
        Organizujemo izložbe i rezidencijalne programe koji omogućavaju umetnicima da stvaraju i izlažu svoja dela u našem prostoru. 
        Ova saradnja pruža jedinstvene perspektive i sveže ideje koje obogaćuju našu kolekciju i iskustvo posetilaca.
    `, `
        Our gallery proudly presents a variety of works of art.
        Regardless of visitors' preferences, our gallery offers a wide range of art that caters to different tastes and interests.
        Our permanent exhibition covers different styles, eras and techniques of art, providing a rich experience for visitors.
        In the gallery we run, we pay attention to the high quality of works of art.
        Our team of experts carefully selects and evaluates each piece of art on display.
        The gallery we run actively collaborates with artists from different parts of the world.
        We organize exhibitions and residency programs that allow artists to create and exhibit their works in our space.
        This collaboration provides unique perspectives and fresh ideas that enrich our collection and visitor experience.
    `).dohvTekst(lang);
    $("#tekst2")[0].innerHTML = new Tekst(`
        Naš web sajt je sa ponosom osvojio prestižne nagrade CSS Design Awards i D&AD Awards, što je priznanje za izuzetnost u dizajnu i kreativnosti.
        Ovi uspesi u osvajanju nagrada potvrđuju našu stručnost, kreativnost i predanost u dizajnu web sajtova. 
        Timski rad, istraživanje i konstantno usavršavanje omogućili su nam da se izdvojimo među konkurencijom. 
        Osvojene nagrade su inspiracija za dalji napredak i podsticaj za kreiranje još boljih digitalnih iskustava za naše posetioce. 
        Nastavićemo da težimo izvrsnosti u dizajnu i nastavljamo da stvaramo inovativne i inspirativne web sajtove.
    `, `
        Our website has proudly won the prestigious CSS Design Awards and D&AD Awards, which is a recognition of excellence in design and creativity.
        These award-winning successes confirm our expertise, creativity and dedication in website design.
        Teamwork, research and constant improvement have allowed us to stand out from the competition.
        The awards won are an inspiration for further progress and an incentive to create even better digital experiences for our visitors.
        We will continue to strive for excellence in design and continue to create innovative and inspiring websites.
    `).dohvTekst(lang);
    $("#tekst3")[0].innerHTML = new Tekst("Kontakt telefon : 011/123-456 &emsp;&emsp;&emsp; Nasa adresa : Durmitorska 19 ",
                                          "Contact number : 011/123-456 &emsp;&emsp;&emsp; Our address : Durmitorska 19 ").dohvTekst(lang);

}

if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "srp");
let lang = sessionStorage.getItem("lang"); prikaziNoviUmetniciStranicu(lang);
$("#srpski").click(function() { lang = "srp"; sessionStorage.setItem("lang", lang); prikaziNoviUmetniciStranicu(lang); });
$("#engleski").click(function() { lang = "eng"; sessionStorage.setItem("lang", lang); prikaziNoviUmetniciStranicu(lang); });
});