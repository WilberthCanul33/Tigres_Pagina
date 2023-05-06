const estadio = document.querySelector('.estadio');
const inicio = document.querySelector('.inicio');
const leyenda = document.querySelector('.leyenda');
const logros = document.querySelector('.logros');


const row = document.querySelector('.row');
const row_dos = document.querySelector('.row-dos');
const row_tres = document.querySelector('.row-tres');
const row_cuatro = document.querySelector('.row-cuatro');




estadio.addEventListener('click', () => {
    document.querySelector('.row').style.display="none";
    document.querySelector('.row-dos').style.display="flex";
    document.querySelector('.row-cuatro').style.display="none";
    document.querySelector('.row-tres').style.display="none";


})

inicio.addEventListener('click', () => {
    document.querySelector('.row').style.display="flex";
    document.querySelector('.row-dos').style.display="none";
    document.querySelector('.row-tres').style.display="none";
    document.querySelector('.row-cuatro').style.display="none";


})

leyenda.addEventListener('click', () => {
    document.querySelector('.row-tres').style.display="flex";
    document.querySelector('.row-dos').style.display="none";
    document.querySelector('.row').style.display="none";
    document.querySelector('.row-cuatro').style.display="none";

})

logros.addEventListener('click', () => {
    document.querySelector('.row-cuatro').style.display="flex";
    document.querySelector('.row-dos').style.display="none";
    document.querySelector('.row').style.display="none";
    document.querySelector('.row-tres').style.display="none";


})
