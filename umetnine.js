$(document).ready(function() {

    let umetnik1 = new Umetnik("Leonardo", "da Vinci", new Tekst("Leonardo da Vinci (1452-1519) bio je italijanski renesansni umetnik, pronalazač i naučnik. On je najpoznatiji po svojim remek-delima kao što su 'Mona Liza' i 'Poslednja večera'. Da Vinci je bio multitalentovan i izvanredno radoznao, istražujući različite discipline kao što su slikarstvo, anatomija, inženjering i arhitektura.", "biography english"), "slike/umetnik1.jpg", "lokacija pdf-a");
    let umetnik2 = new Umetnik("Pavle", "Jovanović", new Tekst("Pavle 'Paja' Jovanović (1859-1957) bio je istaknuti srpski slikar, poznat po svom realizmu i impresionizmu. Njegova umetnička karijera obuhvatala je portrete, istorijske slike i pejzaže, a njegova dela su se isticala bogatom paletom boja i detaljnom izradom.Paja Jovanović je ostavio neizbrisiv trag u srpskoj i evropskoj umetnosti. Njegove slike se danas nalaze u mnogim muzejima i galerijama, a on ostaje jedan od najznačajnijih slikara svog vremena.", "biography english"), "slike/umetnik2.jpg", "lokacija pdf-a");
    let umetnik3 = new Umetnik("Vincent", "van Gogh", new Tekst("Vincent van Gogh (1853-1890) bio je ikonični holandski slikar postimpresionizma. Njegove slike se ističu po svojoj ekspresivnoj upotrebi boje i karakterističnim potezima četkicom. Van Gogh je tokom svog života stvorio veliki broj dela koja prikazuju pejzaže, portrete i scene svakodnevnog života. Iako nije doživeo veliki uspeh za života, danas se smatra jednim od najvažnijih i najuticajnijih slikara u istoriji umetnosti.", "biography english"), "slike/umetnik3.jpg", "lokacija pdf-a");
    let umetnik4 = new Umetnik("Debra", "Hurd", new Tekst("Debra Hurd je talentovana američka umetnica čiji rad se fokusira na živopisne uljane slike. Inspiraciju crpi iz urbanog okruženja, a njen stil karakterišu energični potezi četkicom, teksturalni efekti i igra svetla i senke. Sa svojim jedinstvenim pristupom i prepoznatljivim stilom, Hurd je postigla priznanje i uspeh na nacionalnom i međunarodnom nivou.", "biography english"), "slike/umetnik4.jpg", "lokacija pdf-a");
    let umetnik5 = new Umetnik("Cindy", "Sherman", new Tekst("Cindy Sherman je američka umetnica rođena 1954. godine. Poznata je po svojim fotografijama u kojima se ona sama pojavljuje u različitim kostimima i ulogama, istražujući koncepte identiteta, roda i društvenih normi. Njen rad je često kritički usmeren prema medijskoj kulturi i stereotipima. Sherman je postala jedna od najuticajnijih figura u savremenoj fotografiji i njen rad je izlagan i priznat širom sveta.", "biography english"), "slike/umetnik5.jpg", "lokacija pdf-a");
    let umetnik6 = new Umetnik("Cecily", "Brown", new Tekst("Cecily Brown je engleska slikarka rođena 1969. godine. Njeno slikarstvo kombinuje elemente apstrakcije i figuralnog slikarstva, stvarajući ekspresivne i emotivne kompozicije. Inspiraciju pronalazi u radovima starih majstora, poput Fragonarda i Goye, ali dodaje sopstveni suvremeni pristup.Cecily Brown je jedna od najznačajnijih i najuticajnijih slikarki svoje generacije, koja je uspela osvojiti publiku svojom autentičnošću i umetničkom vizijom.", "biography english"), "slike/umetnik6.jpg", "lokacija pdf-a");
    let umetnik7 = new Umetnik("Takashi", "Murakami", new Tekst("Takashi Murakami je japanski umetnik rođen 1962. godine. Poznat je po svom inovativnom stilu koji kombinuje tradicionalne japanske umetničke motive sa elementima popularne kulture. Murakamijev rad obuhvata slikarstvo, skulpturu, animaciju i dizajn. On je postao jedan od najpriznatijih i najuticajnijih savremenih umetnika, čije su slike izlagane u renomiranim muzejima i galerijama širom sveta.", "biography english"), "slike/umetnik7.jpg", "lokacija pdf-a");
    let umetnik8 = new Umetnik("Miquel", "Barcelo", new Tekst("Miquel Barcelo je španski slikar i keramičar rođen 1957. godine. Njegov rad obuhvata širok spektar medija, uključujući slikarstvo, skulpturu, keramiku i crteže. Barcelo je poznat po svom eksperimentalnom pristupu materijalima i teksturama, stvarajući slojevite i organske kompozicije.Njegov najpoznatiji rad je možda dekoracija skupštinske dvorane Ujedinjenih nacija u Ženevi, koja prikazuje podvodni svet i simbolizuje globalnu povezanost.", "biography english"), "slike/umetnik8.jpg", "lokacija pdf-a");
    
lang = "srp";

let umetnina1 = new Umetnina("Noćna vožnja", umetnik4, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina("Noćni život", umetnik4, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina("Kišno jutro", umetnik5, "slika", 3000, 30, "slike/art3.jpg");
let umetnina4 = new Umetnina("Mona Liza", umetnik1, "slika", 1000, 500, "slike/slika1.jpg");
let umetnina5 = new Umetnina("Bašibozuci pred beg", umetnik2, "slika", 2000, 120, "slike/slika2.jpg");
let umetnina6 = new Umetnina("Dva bašibozuka pred kapijom", umetnik2, "slika", 3000, 110, "slike/slika3.jpg");
let umetnina7 = new Umetnina("Zvezdana noć", umetnik3, "slika", 5000, 150, "slike/slika4.jpg");
let umetnina8 = new Umetnina("Pšenično polje sa čempresima", umetnik3, "slika", 2000, 150, "slike/slika5.jpg");

umetnina1.dodajUmetninuNaId("div1", lang);
umetnina2.dodajUmetninuNaId("div1", lang);
umetnina3.dodajUmetninuNaId("div2", lang);
umetnina4.dodajUmetninuNaId("div2", lang);
umetnina5.dodajUmetninuNaId("div2", lang);
umetnina6.dodajUmetninuNaId("div1", lang);
umetnina7.dodajUmetninuNaId("div2", lang);
umetnina8.dodajUmetninuNaId("div1", lang);
});