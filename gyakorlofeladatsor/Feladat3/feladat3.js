//Réti Istvánné
szinek.addEventListener("change", hatterSzinez);
function hatterSzinez() {
    let hatterSzin = document.getElementsByName("szin");
    for (let i = 0; i < 5; i++) {
        if (hatterSzin[i].checked == true) {
            panel.style.backgroundColor = hatterSzin[i].value;
        }
    }
}

