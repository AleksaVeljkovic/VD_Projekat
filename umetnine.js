$(document).ready(function() {

let umetnik4 = new Umetnik("Debra", "Hurd", new Tekst("Debra Hurd je talentovana američka umetnica čiji rad se fokusira na živopisne uljane slike. Inspiraciju crpi iz urbanog okruženja, a njen stil karakterišu energični potezi četkicom, teksturalni efekti i igra svetla i senke. Sa svojim jedinstvenim pristupom i prepoznatljivim stilom, Hurd je postigla priznanje i uspeh na nacionalnom i međunarodnom nivou.",
" Debra Hurd is a talented American artist whose work focuses on vibrant oil paintings. Drawing inspiration from the urban environment, her style is characterized by energetic brushstrokes, textural effects and the play of light and shadow. With her unique approach and distinctive style, Hurd has achieved national and international recognition and success."), "slike/umetnik4.jpg", "lokacija pdf-a");
let umetnik5 = new Umetnik("Cindy", "Sherman", new Tekst("Cindy Sherman je američka umetnica rođena 1954. godine. Poznata je po svojim fotografijama u kojima se ona sama pojavljuje u različitim kostimima i ulogama, istražujući koncepte identiteta, roda i društvenih normi. Njen rad je često kritički usmeren prema medijskoj kulturi i stereotipima. Sherman je postala jedna od najuticajnijih figura u savremenoj fotografiji i njen rad je izlagan i priznat širom sveta.",
"Cindy Sherman is an American artist born in 1954. She is known for her photographs of herself in various costumes and roles, exploring the concepts of identity, gender and social norms. Her work is often critically directed towards media culture and stereotypes. Sherman has become one of the most influential figures in contemporary photography and her work has been exhibited and recognized worldwide."), "slike/umetnik5.jpg", "lokacija pdf-a");
let umetnik6 = new Umetnik("Cecily", "Brown", new Tekst("Cecily Brown je engleska slikarka rođena 1969. godine. Njeno slikarstvo kombinuje elemente apstrakcije i figuralnog slikarstva, stvarajući ekspresivne i emotivne kompozicije. Inspiraciju pronalazi u radovima starih majstora, poput Fragonarda i Goye, ali dodaje sopstveni suvremeni pristup.Cecily Brown je jedna od najznačajnijih i najuticajnijih slikarki svoje generacije, koja je uspela osvojiti publiku svojom autentičnošću i umetničkom vizijom.",
"Cecily Brown is an English painter born in 1969. Her painting combines elements of abstraction and figurative painting, creating expressive and emotional compositions. She finds inspiration in the works of old masters, such as Fragonard and Goya, but adds her own contemporary approach. Cecily Brown is one of the most important and influential painters of her generation, who managed to win over the audience with her authenticity and artistic vision."), "slike/umetnik6.jpg", "lokacija pdf-a");
let umetnik7 = new Umetnik("Takashi", "Murakami", new Tekst("Takashi Murakami je japanski umetnik rođen 1962. godine. Poznat je po svom inovativnom stilu koji kombinuje tradicionalne japanske umetničke motive sa elementima popularne kulture. Murakamijev rad obuhvata slikarstvo, skulpturu, animaciju i dizajn. On je postao jedan od najpriznatijih i najuticajnijih savremenih umetnika, čije su slike izlagane u renomiranim muzejima i galerijama širom sveta.",
"Takashi Murakami is a Japanese artist born in 1962. He is known for his innovative style that combines traditional Japanese artistic motifs with elements of popular culture. Murakamis work includes painting, sculpture, animation and design. He has become one of the most recognized and influential contemporary artists, whose paintings have been exhibited in renowned museums and galleries around the world."), "slike/umetnik7.jpg", "lokacija pdf-a");
let umetnik1 = new Umetnik("Leonardo", "da Vinci", new Tekst("Leonardo da Vinci (1452-1519) bio je italijanski renesansni umetnik, pronalazač i naučnik. On je najpoznatiji po svojim remek-delima kao što su Mona Liza i Poslednja večera. Da Vinci je bio multitalentovan i izvanredno radoznao, istražujući različite discipline kao što su slikarstvo, anatomija, inženjering i arhitektura.",
"Leonardo da Vinci (1452-1519) was an Italian Renaissance artist, inventor and scientist. He is best known for his masterpieces such as Mona Lisa and The Last Supper. Da Vinci was multi-talented and extraordinarily curious, exploring various disciplines such as painting, anatomy, engineering and architecture."), "slike/umetnik1.jpg", "lokacija pdf-a");
let umetnik2 = new Umetnik("Pavle", "Jovanović", new Tekst("Pavle Paja Jovanović (1859-1957) bio je istaknuti srpski slikar, poznat po svom realizmu i impresionizmu. Njegova umetnička karijera obuhvatala je portrete, istorijske slike i pejzaže, a njegova dela su se isticala bogatom paletom boja i detaljnom izradom.Paja Jovanović je ostavio neizbrisiv trag u srpskoj i evropskoj umetnosti. Njegove slike se danas nalaze u mnogim muzejima i galerijama, a on ostaje jedan od najznačajnijih slikara svog vremena.",
"Pavle Paja Jovanović (1859-1957) was a prominent Serbian painter, known for his realism and impressionism. His artistic career included portraits, historical paintings and landscapes, and his works stood out for their rich palette of colors and detailed workmanship. Paja Jovanović left an indelible mark on Serbian and European art. His paintings can be found in many museums and galleries today, and he remains one of the most important painters of his time."), "slike/umetnik2.jpg", "lokacija pdf-a");
let umetnik3 = new Umetnik("Vincent", "van Gogh", new Tekst("Vincent van Gogh (1853-1890) bio je ikonični holandski slikar postimpresionizma. Njegove slike se ističu po svojoj ekspresivnoj upotrebi boje i karakterističnim potezima četkicom. Van Gogh je tokom svog života stvorio veliki broj dela koja prikazuju pejzaže, portrete i scene svakodnevnog života. Iako nije doživeo veliki uspeh za života, danas se smatra jednim od najvažnijih i najuticajnijih slikara u istoriji umetnosti.",
"Vincent van Gogh (1853-1890) was an iconic Dutch Post-Impressionist painter. His paintings stand out for their expressive use of color and characteristic brush strokes. During his lifetime, Van Gogh created a large number of works depicting landscapes, portraits and scenes of everyday life. Although he did not experience great success during his lifetime, today he is considered one of the most important and influential painters in the history of art.  "), "slike/umetnik3.jpg", "lokacija pdf-a");

let umetnina1 = new Umetnina(new Tekst("Noćna vožnja", "Night ride"), umetnik4, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina(new Tekst("Noćni život", "Night life"), umetnik4, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina(new Tekst("Kišno jutro", "Rainy morning"), umetnik5, "slika", 3000, 30, "slike/art3.jpg");
let umetnina4 = new Umetnina(new Tekst("Mona Liza", "Mona Liza"), umetnik1, "slika", 1000, 500, "slike/slika1.jpg");
let umetnina5 = new Umetnina(new Tekst("Bašibozuci pred beg", "Basibozuci before fleeing"), umetnik2, "slika", 2000, 120, "slike/slika2.jpg");
let umetnina6 = new Umetnina(new Tekst("Dva bašibozuka pred kapijom", "Two basibozuka before a gate"), umetnik2, "slika", 3000, 110, "slike/slika3.jpg");
let umetnina7 = new Umetnina(new Tekst("Zvezdana noć", "The Starry Night"), umetnik3, "slika", 5000, 150, "slike/slika4.jpg");
let umetnina8 = new Umetnina(new Tekst("Pšenično polje sa čempresima", "Wheat Field with Cypresses"), umetnik3, "slika", 2000, 150, "slike/slika5.jpg");





function prikaziUmetnineStranicu(lang) {
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


    umetnina1.dodajUmetninuNaId("div1", lang);
    umetnina2.dodajUmetninuNaId("div1", lang);
    umetnina3.dodajUmetninuNaId("div2", lang);
    umetnina4.dodajUmetninuNaId("div2", lang);
    umetnina5.dodajUmetninuNaId("div2", lang);
    umetnina6.dodajUmetninuNaId("div1", lang);
    umetnina7.dodajUmetninuNaId("div2", lang);
    umetnina8.dodajUmetninuNaId("div1", lang);

    $("#naslov")[0].innerHTML = new Tekst("Umetnine", "Paintings").dohvTekst(lang);
    $("#slike")[0].innerHTML = new Tekst("Slike", "Paintings").dohvTekst(lang);
    $("#skulpture")[0].innerHTML = new Tekst("Skulpture", "Skulptures").dohvTekst(lang);
    $("#ostale_umetnine")[0].innerHTML = new Tekst("Ostale umetnine", "Other art").dohvTekst(lang);
}

if (sessionStorage.getItem("lang") == null)
    sessionStorage.setItem("lang", "srp");
let lang = sessionStorage.getItem("lang"); prikaziUmetnineStranicu(lang);
$("#srpski").click(function() { lang = "srp"; sessionStorage.setItem("lang", lang); prikaziUmetnineStranicu(lang); });
$("#engleski").click(function() { lang = "eng"; sessionStorage.setItem("lang", lang); prikaziUmetnineStranicu(lang); });

});