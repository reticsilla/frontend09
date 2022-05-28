function valtogatas(idDiv, idGomb) {
    let allapotDiv = idDiv.style.display;
    if (allapotDiv == "none") {
        idDiv.style.display = "block";
        idGomb.innerHTML = "Elrejtés";
    } else {
        idDiv.style.display = "none";
        idGomb.innerHTML = "Megjelenítés";
    }
}

function megjelenitesAnimacioval(idElem, idMegjelenito, idgomb, iddiv, lenyilas, bezarodas, felirat) {
    idElem.style.display = "block";
    if (idgomb == gomb0) {
        idgomb.innerHTML = "Megjelenítés";
    }
    let allapot = idElem.style.animationName;
    if (allapot != lenyilas) {
        idElem.style.animationName = lenyilas;
        idMegjelenito.innerHTML = "Bezárás";
        idgomb.style.display = "block";
        if (iddiv == div1 || iddiv == div2) {
            iddiv.style.display = "block";
        }
    } else {
        idElem.style.animationName = bezarodas;
        idMegjelenito.innerHTML = felirat;
        idgomb.style.display = "none";
        iddiv.style.display = "none";
    }
}

function megjelenitesAnimacioval1(idElem, idMegjelenito, iddiv, lenyilas, bezarodas, felirat) {
    idElem.style.display = "block";
    let allapot = idElem.style.animationName;
    if (allapot != lenyilas) {
        idElem.style.animationName = lenyilas;
        idMegjelenito.innerHTML = "Bezárás";
        if (iddiv == div1 || iddiv == div2 || iddiv == div3) {
            iddiv.style.display = "block";
        }
    } else {
        idElem.style.animationName = bezarodas;
        idMegjelenito.innerHTML = felirat;
        iddiv.style.display = "none";
    }
}

szinek.addEventListener("change", hatterSzinez)

function hatterSzinez() {
    let hatterSzin = document.getElementsByName("szin");
    for (let i = 0; i < 5; i++) {
        if (hatterSzin[i].checked == true) {
            panel.style.backgroundColor = hatterSzin[i].value;
            panel.style.borderColor = hatterSzin[i].value;
        }
    }
}