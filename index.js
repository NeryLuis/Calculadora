const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botoesNumeros = document.querySelectorAll('.numero');
const botoesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botoesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
botoesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});