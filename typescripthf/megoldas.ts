//1. feladat: Diák Infó
function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    let szoveg: string = nev;
    if (csoport < 10 && csoport > 0) {
        szoveg += " [Team0" + csoport + "]";
    } else if (csoport > 9) {
        szoveg += " [Team" + csoport + "]";
    } else {
        szoveg = "Hibás adatok!";
    }
    if (szoveg != "Hibás adatok!") {
        if (tipus == true) {
            szoveg += " Junior Frontend";
        } else {
            szoveg += " Webprogramozó";
        }
    }
    return szoveg;
}
document.write("<b>1. Feladat: Diák Infó</b> <br>");
document.write(`${DiakInfo("Minta Márton", 8, true)}<br>`);
document.write(`${DiakInfo("Minta Elek", 11, false)}<br>`);
document.write(`${DiakInfo("Minta Zsóka", -8, true)}<br><br>`);

//2. feladat: Magatartás - Szorgalom
let ot: [string, string];
ot = ["Pédás", "Példás"];
let negy: [string, string];
negy = ["Jó", "Jó"];
let harom: [string, string];
harom = ["Változó", "Változó"];
let ketto: [string, string];
ketto = ["Rossz", "Hanyag"];
function SzovegesErtekeles(jegy: number): [string, string] {
    let magatartas: string;
    let szorgalom: string;
    if (jegy == 5) {
        magatartas = ot[0];
        szorgalom = ot[1];
    } else if (jegy == 4) {
        magatartas = negy[0];
        szorgalom = negy[1];
    } else if (jegy == 3) {
        magatartas = harom[0];
        szorgalom = harom[1];
    } else if (jegy == 2) {
        magatartas = ketto[0];
        szorgalom = ketto[1];
    } else {
        magatartas = "Hibás bemeneti érték!";
        szorgalom = "Hibás bemeneti érték!"
    }
    return [magatartas, szorgalom];
}
document.write("<b>2. Feladat: Szöveges értékelés</b><br>");
let otos: [string, string] = SzovegesErtekeles(5);
document.write(`Ha a jegy 5, akkor a magatartás: <b>${otos[0]}</b> a szorgalom: <b>${otos[1]}</b><br>`);
let negyes: [string, string] = SzovegesErtekeles(4);
document.write(`Ha a jegy 4, akkor a magatartás: <b>${negyes[0]}</b> a szorgalom: <b>${negyes[1]}</b><br>`);
let harmas: [string, string] = SzovegesErtekeles(3);
document.write(`Ha a jegy 3, akkor a magatartás: <b>${harmas[0]}</b> a szorgalom: <b>${harmas[1]}</b><br>`);
let kettes: [string, string] = SzovegesErtekeles(2);
document.write(`Ha a jegy 2, akkor a magatartás: <b>${kettes[0]}</b> a szorgalom: <b>${kettes[1]}</b><br>`);
let teves: [string, string] = SzovegesErtekeles(1);
document.write(`Ha a jegy 1, akkor a magatartás: <b>${teves[0]}</b> a szorgalom: <b>${teves[1]}</b><br><br>`);

//3. feladat: Hárommal osztható számok száma a tömbben
function HarommalOszthatokSzama(tomb: number[]): number {
    let darab: number = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            darab++;
        }
    }
    return darab;
}
document.write("<b>3. Feladat: Hárommal osztható számok száma a tömbben</b><br>");
let szamtomb1: number[] = [10, 23, 12, 24, 31, 33, 42, 20];
let proba1: number = HarommalOszthatokSzama(szamtomb1);
document.write(`A tömb elemei: ${szamtomb1}<br>`);
document.write(`Hárommal osztható számok száma: <b>${proba1}</b><br>`);
function UniverzalisTombGenerator(alsoHatar: number, felsoHatar: number, tombMeret: number): number[] {
    let generaltTomb: number[] = [];
    for (let i = 0; i < tombMeret; i++) {
        let generaltSzam: number = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(generaltSzam);
    }
    return generaltTomb;
}
let szamtomb2: number[] = UniverzalisTombGenerator(1, 100, 20);
let proba2: number = HarommalOszthatokSzama(szamtomb2);
document.write(`A tömb elemei: ${szamtomb2}<br>`);
document.write(`Hárommal osztható számok száma: <b>${proba2}</b><br><br>`);

//4. feladat: Nyerőszám sorsoló
function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): number[] {
    let eremeny: number[] = [];
    let vanEgyezes: boolean = false;
    let szam:number=Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    document.write(`${szam}<br>`);
    eremeny.push(szam);
    for (let i=1;i<mennyiseg;i++){
        szam=Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        document.write(`${szam}<br>`);
        for (let j=0;j<eremeny.length;j++){
            if(szam==eremeny[j]){
                vanEgyezes=true;
                i=i-1;
            }
        }
        if(vanEgyezes==false){
            eremeny.push(szam);
        }
        vanEgyezes=false;
    }
    return eremeny;
}
document.write("<b>4. Feladat: Nyerőszám sorsoló</b><br>");
document.write(`Nyerő számok: ${Nyeroszamok(5,1,90)}<br>`);