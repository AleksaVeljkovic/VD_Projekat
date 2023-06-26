$(document).ready(function() {
let umetnik1 = new Umetnik("Umetnik1 ime", "Umetnik1 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik1.jpg", "lokacija pdf-a");
let umetnik2 = new Umetnik("Umetnik2 ime", "Umetnik2 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik2.jpg", "lokacija pdf-a");
let umetnik3 = new Umetnik("Umetnik3 ime", "Umetnik3 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik3.jpg", "lokacija pdf-a");
let umetnina1 = new Umetnina("Umetnina1", umetnik1, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina("Umetnina2", umetnik2, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina("Umetnina3", umetnik3, "slika", 3000, 30, "slike/art3.jpg");
let umetnina4 = new Umetnina("Umetnina4", umetnik3, "slika", 3000, 30, "slike/slika1.jpg");
let ponuda1 = new Ponuda(umetnina1, 1100, "Kupac1");
let ponuda2 = new Ponuda(umetnina2, 2100, "Kupac1");
let ponuda3 = new Ponuda(umetnina3, 3100, "Kupac1");
let ponuda4 = new Ponuda(umetnina4, 4100, "Kupac1");
lang = "srp";
ponuda1.dodajPonuduNaId("div1", lang);
ponuda2.dodajPonuduNaId("div2", lang);
ponuda3.dodajPonuduNaId("div3", lang);
ponuda4.dodajPonuduNaId("div4", lang);

});

