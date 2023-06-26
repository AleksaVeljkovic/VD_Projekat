$(document).ready(function() {

let umetnik1 = new Umetnik("Umetnik1 ime", "Umetnik1 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik1.jpg", "lokacija pdf-a");
let umetnik2 = new Umetnik("Umetnik2 ime", "Umetnik2 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik2.jpg", "lokacija pdf-a");
let umetnik3 = new Umetnik("Umetnik3 ime", "Umetnik3 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik3.jpg", "lokacija pdf-a");

lang = "eng";

let umetnina1 = new Umetnina("Umetnina1", umetnik1, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina("Umetnina2", umetnik2, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina("Umetnina3", umetnik3, "slika", 3000, 30, "slike/art3.jpg");

umetnina1.dodajUmetninuNaId("div1", lang);
umetnina2.dodajUmetninuNaId("div2", lang);
umetnina3.dodajUmetninuNaId("div3", lang);

});