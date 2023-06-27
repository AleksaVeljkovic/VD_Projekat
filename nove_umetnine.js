$(document).ready(function() {

let umetnik4 = new Umetnik("Debra", "Hurd", new Tekst("Debra Hurd je talentovana američka umetnica čiji rad se fokusira na živopisne uljane slike. Inspiraciju crpi iz urbanog okruženja, a njen stil karakterišu energični potezi četkicom, teksturalni efekti i igra svetla i senke. Sa svojim jedinstvenim pristupom i prepoznatljivim stilom, Hurd je postigla priznanje i uspeh na nacionalnom i međunarodnom nivou.", "biography english"), "slike/umetnik4.jpg", "lokacija pdf-a");
let umetnik5 = new Umetnik("Cindy", "Sherman", new Tekst("Cindy Sherman je američka umetnica rođena 1954. godine. Poznata je po svojim fotografijama u kojima se ona sama pojavljuje u različitim kostimima i ulogama, istražujući koncepte identiteta, roda i društvenih normi. Njen rad je često kritički usmeren prema medijskoj kulturi i stereotipima. Sherman je postala jedna od najuticajnijih figura u savremenoj fotografiji i njen rad je izlagan i priznat širom sveta.", "biography english"), "slike/umetnik5.jpg", "lokacija pdf-a");

lang = "srp";

let umetnina1 = new Umetnina("Noćna vožnja", umetnik4, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina("Noćni život", umetnik4, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina("Kišno jutro", umetnik5, "slika", 3000, 30, "slike/art3.jpg");

umetnina1.dodajUmetninuNaId("div1", lang);
umetnina2.dodajUmetninuNaId("div1", lang);
umetnina3.dodajUmetninuNaId("div2", lang);

});