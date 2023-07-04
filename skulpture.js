$(document).ready(function() {

let umetnik4 = new Umetnik("Debra", "Hurd", new Tekst("Debra Hurd je talentovana američka umetnica čiji rad se fokusira na živopisne uljane slike. Inspiraciju crpi iz urbanog okruženja, a njen stil karakterišu energični potezi četkicom, teksturalni efekti i igra svetla i senke. Sa svojim jedinstvenim pristupom i prepoznatljivim stilom, Hurd je postigla priznanje i uspeh na nacionalnom i međunarodnom nivou.",
" Debra Hurd is a talented American artist whose work focuses on vibrant oil paintings. Drawing inspiration from the urban environment, her style is characterized by energetic brushstrokes, textural effects and the play of light and shadow. With her unique approach and distinctive style, Hurd has achieved national and international recognition and success."), "slike/umetnik4.jpg", "lokacija pdf-a");
let umetnik5 = new Umetnik("Cindy", "Sherman", new Tekst("Cindy Sherman je američka umetnica rođena 1954. godine. Poznata je po svojim fotografijama u kojima se ona sama pojavljuje u različitim kostimima i ulogama, istražujući koncepte identiteta, roda i društvenih normi. Njen rad je često kritički usmeren prema medijskoj kulturi i stereotipima. Sherman je postala jedna od najuticajnijih figura u savremenoj fotografiji i njen rad je izlagan i priznat širom sveta.",
"Cindy Sherman is an American artist born in 1954. She is known for her photographs of herself in various costumes and roles, exploring the concepts of identity, gender and social norms. Her work is often critically directed towards media culture and stereotypes. Sherman has become one of the most influential figures in contemporary photography and her work has been exhibited and recognized worldwide."), "slike/umetnik5.jpg", "lokacija pdf-a");
let umetnik6 = new Umetnik("Cecily", "Brown", new Tekst("Cecily Brown je engleska slikarka rođena 1969. godine. Njeno slikarstvo kombinuje elemente apstrakcije i figuralnog slikarstva, stvarajući ekspresivne i emotivne kompozicije. Inspiraciju pronalazi u radovima starih majstora, poput Fragonarda i Goye, ali dodaje sopstveni suvremeni pristup.Cecily Brown je jedna od najznačajnijih i najuticajnijih slikarki svoje generacije, koja je uspela osvojiti publiku svojom autentičnošću i umetničkom vizijom.",
"Cecily Brown is an English painter born in 1969. Her painting combines elements of abstraction and figurative painting, creating expressive and emotional compositions. She finds inspiration in the works of old masters, such as Fragonard and Goya, but adds her own contemporary approach. Cecily Brown is one of the most important and influential painters of her generation, who managed to win over the audience with her authenticity and artistic vision."), "slike/umetnik6.jpg", "lokacija pdf-a");
let umetnik7 = new Umetnik("Takashi", "Murakami", new Tekst("Takashi Murakami je japanski umetnik rođen 1962. godine. Poznat je po svom inovativnom stilu koji kombinuje tradicionalne japanske umetničke motive sa elementima popularne kulture. Murakamijev rad obuhvata slikarstvo, skulpturu, animaciju i dizajn. On je postao jedan od najpriznatijih i najuticajnijih savremenih umetnika, čije su slike izlagane u renomiranim muzejima i galerijama širom sveta.",
"Takashi Murakami is a Japanese artist born in 1962. He is known for his innovative style that combines traditional Japanese artistic motifs with elements of popular culture. Murakamis work includes painting, sculpture, animation and design. He has become one of the most recognized and influential contemporary artists, whose paintings have been exhibited in renowned museums and galleries around the world."), "slike/umetnik7.jpg", "lokacija pdf-a");


let umetnina1 = new Umetnina(new Tekst("Apolon Belvedere", "Apolon Belvedere"), umetnik4, "skulptura", 1000, 10, "slike/skulptura1.jpg");
let umetnina2 = new Umetnina(new Tekst("Bacač diska", "Disk thrower"), umetnik5, "skulptura", 2000, 20, "slike/skulptura2.jpg");
let umetnina3 = new Umetnina(new Tekst("Aleksandar Veliki", "Alexander the gread"), umetnik6, "skulptura", 3000, 30, "slike/skulptura3.jpg");
let umetnina4 = new Umetnina(new Tekst("Bokser u odmoru", "Boxer in the rest"), umetnik7, "skulptura", 1000, 500, "slike/skulptura4.jpg");

var NizUmetnina = [umetnina1, umetnina2, umetnina3, umetnina4];

if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "srp");
let lang = sessionStorage.getItem("lang");
if (lang == "srp") $("#dugmePretraga")[0].innerHTML="pretraga";
else $("#dugmePretraga")[0].innerHTML="search";

function sortirajA_Z(){
    for (let a = 0; a < NizUmetnina.length; a++) {
        for (let b = a + 1; b < NizUmetnina.length; b++) {
            if (NizUmetnina[a].nazivUmetnine.dohvTekst(lang) > NizUmetnina[b].nazivUmetnine.dohvTekst(lang)) {
            let tempString = NizUmetnina[a];
            NizUmetnina[a] = NizUmetnina[b];
            NizUmetnina[b] = tempString;
           }
        }
     }
}

function sortirajZ_A(){
    for (let a = 0; a < NizUmetnina.length; a++) {
        for (let b = a + 1; b < NizUmetnina.length; b++) {
            if (NizUmetnina[a].nazivUmetnine.dohvTekst(lang) < NizUmetnina[b].nazivUmetnine.dohvTekst(lang)) {
            let tempString = NizUmetnina[a];
            NizUmetnina[a] = NizUmetnina[b];
            NizUmetnina[b] = tempString;
           }
        }
     }
}

function sortiraj_Umetnik_A_Z(){
    for (let a = 0; a < NizUmetnina.length; a++) {
        for (let b = a + 1; b < NizUmetnina.length; b++) {
            if (NizUmetnina[a].autor.ime > NizUmetnina[b].autor.ime) {
            let tempString = NizUmetnina[a];
            NizUmetnina[a] = NizUmetnina[b];
            NizUmetnina[b] = tempString;
           }
        }
     }
}

function sortiraj_Umetnik_Z_A(){
    for (let a = 0; a < NizUmetnina.length; a++) {
        for (let b = a + 1; b < NizUmetnina.length; b++) {
            if (NizUmetnina[a].autor.ime < NizUmetnina[b].autor.ime) {
            let tempString = NizUmetnina[a];
            NizUmetnina[a] = NizUmetnina[b];
            NizUmetnina[b] = tempString;
           }
        }
     }
}


function prikaziSkulptureStranicu(lang) {
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
    $("#div1")[0].innerHTML = ""; $("#div2")[0].innerHTML = "";

    for(var i = 0; i < NizUmetnina.length; i++){
        if(i % 2 == 0){
            NizUmetnina[i].dodajUmetninuNaId("div1", lang);
        }
        else{
            NizUmetnina[i].dodajUmetninuNaId("div2", lang);
        }
    }

    $("#naslov")[0].innerHTML = new Tekst("Skulpture", "Skulptures").dohvTekst(lang);
    $("#slike")[0].innerHTML = new Tekst("Slike", "Paintings").dohvTekst(lang);
    $("#skulpture")[0].innerHTML = new Tekst("Skulpture", "Skulptures").dohvTekst(lang);
    $("#ostale_umetnine")[0].innerHTML = new Tekst("Ostale umetnine", "Other art").dohvTekst(lang);
    //$("#dugme3")[0].innerHTML = new Tekst("Umetniku(A - Z)", "Artists(A - Z)").dohvTekst(lang);
    //$("#dugme4")[0].innerHTML = new Tekst("Umetniku(Z - A)", "Artists(Z - A)").dohvTekst(lang);
    $("#sort")[0].innerHTML = new Tekst("Sortiraj po:", "Sort by:").dohvTekst(lang);
}

prikaziSkulptureStranicu(lang);
$("#srpski").click(function() { lang = "srp"; $("#dugmePretraga")[0].innerHTML="pretraga"; sessionStorage.setItem("lang", lang); prikaziSkulptureStranicu(lang); });
$("#engleski").click(function() { lang = "eng"; $("#dugmePretraga")[0].innerHTML="search"; sessionStorage.setItem("lang", lang); prikaziSkulptureStranicu(lang); });
$("#dugme1").click(function() { sortirajA_Z(); prikaziSkulptureStranicu(lang); });
$("#dugme2").click(function() { sortirajZ_A(); prikaziSkulptureStranicu(lang); });
$("#dugme3").click(function() { sortiraj_Umetnik_A_Z(); prikaziSkulptureStranicu(lang); });
$("#dugme4").click(function() { sortiraj_Umetnik_Z_A(); prikaziSkulptureStranicu(lang); });
$("#dugmePretraga").click(function() {
    let pretraziNa = $("#pretragaInput").val();
    for (let i = 0; i < NizUmetnina.length; ++i) {
        if (NizUmetnina[i].nazivUmetnine.dohvTekst(lang).includes(pretraziNa)) {
            sessionStorage.setItem('umetnina', JSON.stringify(NizUmetnina[i]));
            window.location.href = 'art_bid.html'
        }
    }
});
});