let botaoEnviar = document.getElementById("botao");

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    operador();
})


function operador() {
    select = document.getElementById("select");
    
    if (select.value == 1) {
        resultado = somar();
        mostrarResultado(resultado);

    } else if (select.value == 2) {
        resultado = subtrair();
        mostrarResultado(resultado);

    } else if (select.value == 3) {
        resultado = multiplicar();
        mostrarResultado(resultado);

    } else {
        resultado = dividir();
        mostrarResultado(resultado);

    }
}

function somar() {
    inputUm = document.getElementById("inputUm").value;
    inputDois = document.getElementById("inputDois").value;

    return parseInt(inputUm) + parseInt(inputDois);
}

function subtrair() {
    inputUm = document.getElementById("inputUm").value;
    inputDois = document.getElementById("inputDois").value;

    return parseInt(inputUm) - parseInt(inputDois);
}

function multiplicar() {
    inputUm = document.getElementById("inputUm").value;
    inputDois = document.getElementById("inputDois").value;

    return parseInt(inputUm) * parseInt(inputDois);
}

function dividir() {
    inputUm = document.getElementById("inputUm").value;
    inputDois = document.getElementById("inputDois").value;

    return parseInt(inputUm) / parseInt(inputDois);
}

function mostrarResultado(resultado) {
    console.log(resultado);
}