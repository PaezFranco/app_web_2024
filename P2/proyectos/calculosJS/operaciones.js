function operacion() {
    let n1, n2, tipoOpe, ope, resultado;
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);
    tipoOpe = document.getElementById("tipo").value;
    resultado = document.getElementById("resultado");

    if (isNumber(n1) && isNumber(n2)) {
        switch (tipoOpe) {
            case "+":
                ope = n1 + n2;
                break;
            case "-":
                ope = n1 - n2;
                break;
            case "*":
                ope = n1 * n2;
                break;
            case "/":
                ope = n1 / n2;
                break;
        }
        resultado.innerHTML = `<h2>${n1} ${tipoOpe} ${n2} = ${ope}</h2>`;
    } else {
        alert("Por favor, ingresa solo números válidos");
    }
}

function isNumber(n) {
    return !isNaN(n) && isFinite(n);
}
