$(document).ready(function() {

let umetnik1 = new Umetnik("Colette", "Baumback", new Tekst("biografija srpski", "biography english"), "slike/umetnik1.jpg", "lokacija pdf-a");
let umetnik2 = new Umetnik("Debra", "Hurd", new Tekst("Debra Hurd je američka umetnica specijalizovana za živopisne uljane slike. Njen jedinstveni stil kombinuje tehniku noža za bojenje i gustu primenu boje, prikazujući prepoznatljive gradske pejzaže. Njen rad je priznat i cenjen, izlagan i prodavan širom sveta.", "biography english"), "slike/umetnik2.jpg", "lokacija pdf-a");
let umetnik3 = new Umetnik("Pavle", "Jovanović", new Tekst("biografija srpski", "biography english"), "slike/umetnik3.jpg", "lokacija pdf-a");
let umetnik4 = new Umetnik("Umetnik4 ime", "Umetnik4 prezime", new Tekst("biografija srpski", "biography english"), "slike/umetnik4.jpg", "lokacija pdf-a");

lang = "srp";

let umetnina1 = new Umetnina("Noćna voznja", umetnik1, "slika", 1000, 10, "slike/art1.jpg");
let umetnina2 = new Umetnina("Noćni život", umetnik2, "slika", 2000, 20, "slike/art4.jpg");
let umetnina3 = new Umetnina("Kišno jutro", umetnik2, "slika", 3000, 30, "slike/art3.jpg");
let umetnina4 = new Umetnina("Mona Liza", umetnik1, "slika", 1000, 10, "slike/slika1.jpg");
let umetnina5 = new Umetnina("Bašibozuci pred beg", umetnik3, "slika", 2000, 20, "slike/slika2.jpg");
let umetnina6 = new Umetnina("Dva bašibozuka pred kapijom", umetnik3, "slika", 3000, 30, "slike/slika3.jpg");
let umetnina7 = new Umetnina("Zvezdana noć", umetnik1, "slika", 1000, 10, "slike/slika4.jpg");

umetnina1.dodajUmetninuNaId("div1", lang);
umetnina2.dodajUmetninuNaId("div1", lang);
umetnina3.dodajUmetninuNaId("div2", lang);
umetnina4.dodajUmetninuNaId("div2", lang);
umetnina5.dodajUmetninuNaId("div2", lang);
umetnina6.dodajUmetninuNaId("div3", lang);
umetnina7.dodajUmetninuNaId("div3", lang);

});