$(document).ready(function() {

let umetnik1 = new Umetnik("Umetnik1 ime", "Umetnik1 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik1.jpg", "lokacija pdf-a");
let umetnik2 = new Umetnik("Umetnik2 ime", "Umetnik2 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik2.jpg", "lokacija pdf-a");
let umetnik3 = new Umetnik("Umetnik3 ime", "Umetnik3 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik3.jpg", "lokacija pdf-a");
let umetnik4 = new Umetnik("Umetnik4 ime", "Umetnik4 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik4.jpg", "lokacija pdf-a");
let umetnik5 = new Umetnik("Umetnik5 ime", "Umetnik5 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik5.jpg", "lokacija pdf-a");
let umetnik6 = new Umetnik("Umetnik6 ime", "Umetnik6 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik6.jpg", "lokacija pdf-a");
let umetnik7 = new Umetnik("Umetnik7 ime", "Umetnik7 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik7.jpg", "lokacija pdf-a");

lang = "eng";


let umetnina1 = new Umetnina("Umetnina1", umetnik1, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina("Umetnina2", umetnik2, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina("Umetnina3", umetnik3, "slika", 3000, 30, "slike/art3.jpg");
let umetnina4 = new Umetnina("Umetnina4", umetnik1, "slika", 1000, 10, "slike/slika1.jpg");
let umetnina5 = new Umetnina("Umetnina5", umetnik2, "slika", 2000, 20, "slike/slika2.jpg");
let umetnina6 = new Umetnina("Umetnina6", umetnik3, "slika", 3000, 30, "slike/slika3.jpg");
let umetnina7 = new Umetnina("Umetnina7", umetnik1, "slika", 1000, 10, "slike/slika4.jpg");

umetnina1.dodajUmetninuNaId("div1", lang);
umetnina2.dodajUmetninuNaId("div1", lang);
umetnina3.dodajUmetninuNaId("div1", lang);
umetnina4.dodajUmetninuNaId("div2", lang);
umetnina5.dodajUmetninuNaId("div2", lang);
umetnina6.dodajUmetninuNaId("div3", lang);
umetnina7.dodajUmetninuNaId("div3", lang);

});