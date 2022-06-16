//1. feladat: Diák Infó
function DiakInfo(nev, csoport, tipus) {
    var szoveg = nev;
    if (csoport < 10 && csoport > 0) {
        szoveg += " [Team0" + csoport + "]";
    }
    else if (csoport > 9) {
        szoveg += " [Team" + csoport + "]";
    }
    else {
        szoveg = "Hibás adatok!";
    }
    if (szoveg != "Hibás adatok!") {
        if (tipus == true) {
            szoveg += " Junior Frontend";
        }
        else {
            szoveg += " Webprogramozó";
        }
    }
    return szoveg;
}
document.write("<b>1. Feladat: Diák Infó</b> <br>");
document.write("".concat(DiakInfo("Minta Márton", 8, true), "<br>"));
document.write("".concat(DiakInfo("Minta Elek", 11, false), "<br>"));
document.write("".concat(DiakInfo("Minta Zsóka", -8, true), "<br><br>"));
//2. feladat: Magatartás - Szorgalom
var ot;
ot = ["Pédás", "Példás"];
var negy;
negy = ["Jó", "Jó"];
var harom;
harom = ["Változó", "Változó"];
var ketto;
ketto = ["Rossz", "Hanyag"];
function SzovegesErtekeles(jegy) {
    var magatartas;
    var szorgalom;
    if (jegy == 5) {
        magatartas = ot[0];
        szorgalom = ot[1];
    }
    else if (jegy == 4) {
        magatartas = negy[0];
        szorgalom = negy[1];
    }
    else if (jegy == 3) {
        magatartas = harom[0];
        szorgalom = harom[1];
    }
    else if (jegy == 2) {
        magatartas = ketto[0];
        szorgalom = ketto[1];
    }
    else {
        magatartas = "Hibás bemeneti érték!";
        szorgalom = "Hibás bemeneti érték!";
    }
    return [magatartas, szorgalom];
}
document.write("<b>2. Feladat: Szöveges értékelés</b><br>");
var otos = SzovegesErtekeles(5);
document.write("Ha a jegy 5, akkor a magatart\u00E1s: <b>".concat(otos[0], "</b> a szorgalom: <b>").concat(otos[1], "</b><br>"));
var negyes = SzovegesErtekeles(4);
document.write("Ha a jegy 4, akkor a magatart\u00E1s: <b>".concat(negyes[0], "</b> a szorgalom: <b>").concat(negyes[1], "</b><br>"));
var harmas = SzovegesErtekeles(3);
document.write("Ha a jegy 3, akkor a magatart\u00E1s: <b>".concat(harmas[0], "</b> a szorgalom: <b>").concat(harmas[1], "</b><br>"));
var kettes = SzovegesErtekeles(2);
document.write("Ha a jegy 2, akkor a magatart\u00E1s: <b>".concat(kettes[0], "</b> a szorgalom: <b>").concat(kettes[1], "</b><br>"));
var teves = SzovegesErtekeles(1);
document.write("Ha a jegy 1, akkor a magatart\u00E1s: <b>".concat(teves[0], "</b> a szorgalom: <b>").concat(teves[1], "</b><br><br>"));
//3. feladat: Hárommal osztható számok száma a tömbben
function HarommalOszthatokSzama(tomb) {
    var darab = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            darab++;
        }
    }
    return darab;
}
document.write("<b>3. Feladat: Hárommal osztható számok száma a tömbben</b><br>");
var szamtomb1 = [10, 23, 12, 24, 31, 33, 42, 20];
var proba1 = HarommalOszthatokSzama(szamtomb1);
document.write("A t\u00F6mb elemei: ".concat(szamtomb1, "<br>"));
document.write("H\u00E1rommal oszthat\u00F3 sz\u00E1mok sz\u00E1ma: <b>".concat(proba1, "</b><br>"));
function UniverzalisTombGenerator(alsoHatar, felsoHatar, tombMeret) {
    var generaltTomb = [];
    for (var i = 0; i < tombMeret; i++) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
var szamtomb2 = UniverzalisTombGenerator(1, 100, 20);
var proba2 = HarommalOszthatokSzama(szamtomb2);
document.write("A t\u00F6mb elemei: ".concat(szamtomb2, "<br>"));
document.write("H\u00E1rommal oszthat\u00F3 sz\u00E1mok sz\u00E1ma: <b>".concat(proba2, "</b><br><br>"));
//4. feladat: Nyerőszám sorsoló
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var eremeny = [];
    var vanEgyezes = false;
    var szam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    document.write("".concat(szam, "<br>"));
    eremeny.push(szam);
    for (var i = 1; i < mennyiseg; i++) {
        szam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        document.write("".concat(szam, "<br>"));
        for (var j = 0; j < eremeny.length; j++) {
            if (szam == eremeny[j]) {
                vanEgyezes = true;
                i = i - 1;
            }
        }
        if (vanEgyezes == false) {
            eremeny.push(szam);
        }
        vanEgyezes = false;
    }
    return eremeny;
}
document.write("<b>4. Feladat: Nyerőszám sorsoló</b><br>");
document.write("Nyer\u0151 sz\u00E1mok: ".concat(Nyeroszamok(5, 1, 90), "<br>"));
