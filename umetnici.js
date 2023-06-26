$(document).ready(function() {

let umetnik1 = new Umetnik("Umetnik1 ime", "Umetnik1 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik1.jpg", "lokacija pdf-a");
let umetnik2 = new Umetnik("Umetnik2 ime", "Umetnik2 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik2.jpg", "lokacija pdf-a");
let umetnik3 = new Umetnik("Umetnik3 ime", "Umetnik3 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik3.jpg", "lokacija pdf-a");
let umetnik4 = new Umetnik("Umetnik4 ime", "Umetnik4 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik4.jpg", "lokacija pdf-a");
let umetnik5 = new Umetnik("Umetnik5 ime", "Umetnik5 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik5.jpg", "lokacija pdf-a");
let umetnik6 = new Umetnik("Umetnik6 ime", "Umetnik6 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik6.jpg", "lokacija pdf-a");
let umetnik7 = new Umetnik("Umetnik7 ime", "Umetnik7 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik7.jpg", "lokacija pdf-a");

lang = "eng";
umetnik1.dodajUmetnikaNaId("div1", lang);
umetnik2.dodajUmetnikaNaId("div1", lang);
umetnik3.dodajUmetnikaNaId("div1", lang);
umetnik4.dodajUmetnikaNaId("div2", lang);
umetnik5.dodajUmetnikaNaId("div2", lang);
umetnik6.dodajUmetnikaNaId("div3", lang);
umetnik7.dodajUmetnikaNaId("div3", lang);

});