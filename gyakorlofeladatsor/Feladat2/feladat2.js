//Réti Istvánné
szamitas.addEventListener("click", hengerSzamitas);

function hengerSzamitas() {
    let r = Number(sugar.value);
    let m = Number(magassag.value);
    let V = r * r * Math.PI * m;
    let A = 2 * r * Math.PI*(r + m);
    terfogat.innerHTML = V.toFixed(2);
    felszin.innerHTML = A.toFixed(2);
}