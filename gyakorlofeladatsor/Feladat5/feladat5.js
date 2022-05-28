regGomb.addEventListener("click", validacio);

function datumValidacio(datum) {
    let d = new Date();
    let ujDatum = d.toLocaleDateString();
    datum = datum.replaceAll("-", ". ");
    if (datum < "1916-01-01" || datum > ujDatum) {
        return false;
    } else {
        return true;
    }
}

function nevValidacio(szoveg) {
    let n = szoveg.trim();
    let szokozVan = szoveg.includes(" ");
    if (n.length < 8 || n.length > 50 || szokozVan == false) {
        return false
    } else {
        return true
    }

}

function felhasznaloiNevValidacio(szoveg) {
    if (szoveg.length < 6 || szoveg.length > 28) {
        return false
    } else {
        return true
    }
}

function validacio() {
    let n = nev.value;
    let fn = felhasznaloiNev.value;
    let d = szuletesiDatum.value;
    uzenet.style.backgroundColor = "red";
    if (n == "" && fn == "" && d == "") {
        uzenet.innerHTML = "Nincs kitöltve egyik mező sem!";
    } else 
    if (n == "" && fn == "") {
        uzenet.innerHTML = "Nincs kitöltve a név és a felhasználói név mező!";
    } else if (fn == "" && d == "") {
        uzenet.innerHTML = "Nincs kitöltve a felhasználói név és a születési dátum mező!";
    } else if (d == "" && n == "") {
        uzenet.innerHTML = "Nincs kitöltve a név és a születési dátum mező!";
    } else if (n == "") {
        uzenet.innerHTML = "Nincs kitöltve a név mező!";
    } else if (fn == "") {
        uzenet.innerHTML = "Nincs kitöltve a felhasználói név mező!";
    } else if (d == "") {
        uzenet.innerHTML = "Nincs kitöltve a születési dátum mező!";
    } else if (!nevValidacio(n)) {
            uzenet.innerHTML = "A név nem megfelelő!";
    } else if (!felhasznaloiNevValidacio(fn)) {
            uzenet.innerHTML = "A felhasználói név minimum 6, maximum 28 karakter!";
    } else if (!datumValidacio(d)) {
        uzenet.innerHTML = "Nem megfelelő a születési dátum!";
    } else {
        uzenet.style.backgroundColor = "green";
        uzenet.innerHTML = "Sikeres regisztráció.";
    }
}