function mostrarCampos() {
    const figura = document.getElementById("figura").value;
    const campos = document.getElementById("campos");
    campos.innerHTML = ""; 

    switch (figura) {
        case "circulo":
            campos.innerHTML = `
                <label for="radio">Radio:</label>
                <input type="number" id="radio" value=""><br>
            `;
            break;
        case "rectangulo":
            campos.innerHTML = `
                <label for="base">Base:</label>
                <input type="number" id="base" value=""><br>
                <label for="altura">Altura:</label>
                <input type="number" id="altura" value=""><br>
            `;
            break;
        case "cuadrado":
            campos.innerHTML = `
                <label for="lado">Lado:</label>
                <input type="number" id="lado" value=""><br>
            `;
            break;
        case "triangulo":
            campos.innerHTML = `
                <label for="base">Base:</label>
                <input type="number" id="base" value=""><br>
                <label for="altura">Altura:</label>
                <input type="number" id="altura" value=""><br>
            `;
            break;
    }
}

function calcularArea() {
    const figura = document.getElementById("figura").value;
    let area; 
    let resultado = document.getElementById("resultado");
    let imagen = document.getElementById("imagenFigura");

    switch (figura) {
        case "circulo":
            const radio = parseFloat(document.getElementById("radio").value);
            if (isNumber(radio)) {
                area = Math.PI * Math.pow(radio, 2);
                imagen.innerHTML = `<img src="img/circulo.jpg" alt="Círculo" width="100">`;
            } else {
                alert("Por favor, ingresa un valor válido para el radio.");
                return;
            }
            break;
        case "rectangulo":
            const baseRect = parseFloat(document.getElementById("base").value);
            const alturaRect = parseFloat(document.getElementById("altura").value);
            if (isNumber(baseRect) && isNumber(alturaRect)) {
                area = baseRect * alturaRect;
                imagen.innerHTML = `<img src="img/rectangulo.jpg" alt="Rectángulo" width="100">`;
            } else {
                alert("Por favor, ingresa valores válidos para la base y altura.");
                return;
            }
            break;
        case "cuadrado":
            const lado = parseFloat(document.getElementById("lado").value);
            if (isNumber(lado)) {
                area = lado * lado;
                imagen.innerHTML = `<img src="img/cuadrado.jpg" alt="Cuadrado" width="100">`;
            } else {
                alert("Por favor, ingresa un valor válido para el lado.");
                return;
            }
            break;
        case "triangulo":
            const baseTri = parseFloat(document.getElementById("base").value);
            const alturaTri = parseFloat(document.getElementById("altura").value);
            if (isNumber(baseTri) && isNumber(alturaTri)) {
                area = (baseTri * alturaTri) / 2;
                imagen.innerHTML = `<img src="img/triangulo.jpg" alt="Triángulo" width="100">`;
            } else {
                alert("Por favor, ingresa valores válidos para la base y altura.");
                return;
            }
            break;
    }
    resultado.innerHTML = `<h2>El área del ${figura} es: ${area.toFixed(2)}</h2>`;
}

function isNumber(n) {
    return !isNaN(n) && isFinite(n);
}
