const cube = document.getElementById('cube');
const button = document.getElementById('button');

const getRandomInt = (min, max) =>
    min + Math.floor(Math.random() * max);

const lanzar = () =>
    cube.innerHTML = getRandomInt(1, 6);

button.addEventListener('click', lanzar);