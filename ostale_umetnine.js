$(document).ready(function() {
    let umetnik4 = new Umetnik("Debra", "Hurd", new Tekst("Debra Hurd je talentovana američka umetnica čiji rad se fokusira na živopisne uljane slike. Inspiraciju crpi iz urbanog okruženja, a njen stil karakterišu energični potezi četkicom, teksturalni efekti i igra svetla i senke. Sa svojim jedinstvenim pristupom i prepoznatljivim stilom, Hurd je postigla priznanje i uspeh na nacionalnom i međunarodnom nivou.", "biography english"), "slike/umetnik4.jpg", "lokacija pdf-a");
    let umetnik5 = new Umetnik("Cindy", "Sherman", new Tekst("Cindy Sherman je američka umetnica rođena 1954. godine. Poznata je po svojim fotografijama u kojima se ona sama pojavljuje u različitim kostimima i ulogama, istražujući koncepte identiteta, roda i društvenih normi. Njen rad je često kritički usmeren prema medijskoj kulturi i stereotipima. Sherman je postala jedna od najuticajnijih figura u savremenoj fotografiji i njen rad je izlagan i priznat širom sveta.", "biography english"), "slike/umetnik5.jpg", "lokacija pdf-a");
    let umetnik6 = new Umetnik("Cecily", "Brown", new Tekst("Cecily Brown je engleska slikarka rođena 1969. godine. Njeno slikarstvo kombinuje elemente apstrakcije i figuralnog slikarstva, stvarajući ekspresivne i emotivne kompozicije. Inspiraciju pronalazi u radovima starih majstora, poput Fragonarda i Goye, ali dodaje sopstveni suvremeni pristup.Cecily Brown je jedna od najznačajnijih i najuticajnijih slikarki svoje generacije, koja je uspela osvojiti publiku svojom autentičnošću i umetničkom vizijom.", "biography english"), "slike/umetnik6.jpg", "lokacija pdf-a");
    let umetnik7 = new Umetnik("Takashi", "Murakami", new Tekst("Takashi Murakami je japanski umetnik rođen 1962. godine. Poznat je po svom inovativnom stilu koji kombinuje tradicionalne japanske umetničke motive sa elementima popularne kulture. Murakamijev rad obuhvata slikarstvo, skulpturu, animaciju i dizajn. On je postao jedan od najpriznatijih i najuticajnijih savremenih umetnika, čije su slike izlagane u renomiranim muzejima i galerijama širom sveta.", "biography english"), "slike/umetnik7.jpg", "lokacija pdf-a");

    lang = "srp";

    let umetnina1 = new Umetnina("Umetnina", umetnik4, "skulptura", 1000, 10, "slike/ostale_um1.jpg");
    let umetnina2 = new Umetnina("Umetnina", umetnik5, "skulptura", 2000, 20, "slike/ostale_um2.jpg");
    let umetnina3 = new Umetnina("San neolitske noći", umetnik6, "skulptura", 3000, 30, "slike/ostale_um3.jpg");

    umetnina1.dodajUmetninuNaId("div1", lang);
    umetnina2.dodajUmetninuNaId("div1", lang);
    umetnina3.dodajUmetninuNaId("div2", lang);
});