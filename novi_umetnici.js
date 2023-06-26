$(document).ready(function() {

let umetnik1 = new Umetnik("Umetnik1 ime", "Umetnik1 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik1.jpg", "lokacija pdf-a");
let umetnik2 = new Umetnik("Umetnik2 ime", "Umetnik2 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik2.jpg", "lokacija pdf-a");
let umetnik3 = new Umetnik("Umetnik3 ime", "Umetnik3 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik3.jpg", "lokacija pdf-a");

lang = "eng";
umetnik1.dodajUmetnikaNaId("div1", lang);
umetnik2.dodajUmetnikaNaId("div2", lang);
umetnik3.dodajUmetnikaNaId("div3", lang);

});