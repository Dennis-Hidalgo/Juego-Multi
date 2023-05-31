// Creamos el contenedor
let main = document.getElementsByTagName('main')[0];
main.classList.add('container');

// Agrego el numero de filas y de columnas que voy a utilizar
let nFilas = 12;
let nColumnas = 12;
let div, objetivo, j1, j2;
let filaObjetivo, filaj1, filaj2;
let columnaObjetivo, columnaj1, columnaj2;
let nombre1, nombre2;
let cuerpo = document.getElementsByTagName('body')[0];
document.addEventListener('load', inicio());

/**
 * funcion que asigna la posicion de cada jugador y de la casilla objetivo
 */
function asignarJugadores() {
    filaObjetivo = numAleatorio(0, nFilas);
    filaj1 = numAleatorio(0, nFilas);
    filaj2 = numAleatorio(0, nFilas);
    columnaObjetivo = numAleatorio(0, nColumnas);
    columnaj1 = numAleatorio(0, nColumnas);
    columnaj2 = numAleatorio(0, nColumnas);
    j1 = document.getElementById(`f${filaj1}c${columnaj1}`);
    j1.textContent = nombre1;
    j1.classList.add('j1');
    j2 = document.getElementById(`f${filaj2}c${columnaj2}`);
    j2.textContent = nombre2;
    j2.classList.add('j2');
    objetivo = document.getElementById(`f${filaObjetivo}c${columnaObjetivo}`);
    objetivo.classList.add('objetivo');
}

/**
 * Funcion que inicia el tablero
 */
function inicio() {
    // Pido el nombre a los jugadores
    nombre1 = prompt(' introduce el nombre del j1');
    nombre2 = prompt(' introduce el nombre del j2');
    // Creamos las filas y las columnas
    for (let i = 0; i < nFilas; i++) {
        for (let j = 0; j < nColumnas; j++) {
            div = document.createElement('div');
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);
            // para hcer el tablero mas dinamico, la distribucion se hace automaticamente en funcion de la dimension del tablero
            div.style.width = `${95 / nColumnas}%`;
            div.style.height = `${95 / nFilas}%`;
            div.style.fontSize = `${(95 / nFilas) - 2}vh`
            main.appendChild(div);
        }
    }
    asignarJugadores();
}

/**
 * Funcion que genera un numero aleatorio
 * @param {Number} min limite minimo en que el numero aleatorio puede convertirse
 * @param {Number} max limite maximo en que el numero aleatorio puede convertirse
 */
function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}
/**
 * Funcion que recoge el codigo de la tecla que se presiona para realizar el movimiento
 * @param {Event} event en funcion de la tecla que se presione, efectuara diferentes movimientos
 */
function mover(event) {
    let posAux1 = document.getElementsByClassName('j1')[0];
    let posAux2 = document.getElementsByClassName('j2')[0];
    switch (event.code) {
        case 'ArrowDown':
            console.log(event.code);
            filaj1++;
            console.log(filaj1)
            if (filaj1 == filaj2 && columnaj1 == columnaj2) {
                filaj1--;
            } else {
                LimitarFilaJ1(filaj1);
                posAux1.setAttribute('class', 'card');
                posAux1.textContent = '';
                j1 = document.getElementById(`f${filaj1}c${columnaj1}`);
                j1.classList.add('j1');
                j1.textContent = nombre1;
                console.log(j1);
            }
            break;
        case 'ArrowRight':
            console.log(event.code);
            columnaj1++;
            // Condicion para crear colisiones entre ambos jugadores
            if (filaj1 == filaj2 && columnaj1 == columnaj2) {
                columnaj1--;
            } else {
                LimitarColumnasJ1(columnaj1);
                posAux1.setAttribute('class', 'card');
                posAux1.textContent = '';
                j1 = document.getElementById(`f${filaj1}c${columnaj1}`);
                j1.classList.add('j1');
                j1.textContent = nombre1;
                console.log(j1);
            }
            break;
        case 'ArrowUp':
            console.log(event.code);
            filaj1--;
            console.log(filaj1)
            if (filaj1 == filaj2 && columnaj1 == columnaj2) {
                filaj1++;
            } else {
                LimitarFilaJ1(filaj1);
                posAux1.setAttribute('class', 'card');
                posAux1.textContent = '';
                j1 = document.getElementById(`f${filaj1}c${columnaj1}`);
                j1.classList.add('j1');
                j1.textContent = nombre1;
                console.log(j1);
            }
            break;
        case 'ArrowLeft':
            console.log(event.code);
            columnaj1--;
            if (filaj1 == filaj2 && columnaj1 == columnaj2) {
                columnaj1++;
            } else {

                LimitarColumnasJ1(columnaj1);
                posAux1.setAttribute('class', 'card');
                posAux1.textContent = '';
                j1 = document.getElementById(`f${filaj1}c${columnaj1}`);
                j1.classList.add('j1');
                j1.textContent = nombre1;
                console.log(j1);
            }
            break;
        case 'KeyS':
            console.log(event.code);
            filaj2++;
            if (filaj1 == filaj2 && columnaj1 == columnaj2) {
                filaj2--;
            } else {
                LimitarFilaJ2(filaj2);
                posAux2.setAttribute('class', 'card');
                posAux2.textContent = '';
                j2 = document.getElementById(`f${filaj2}c${columnaj2}`);
                console.log(filaj2);
                j2.classList.add('j2');
                j2.textContent = nombre2;
                console.log(j2);
            }
            break;
        case 'KeyA':
            console.log(event.code);
            columnaj2--;
            if (filaj1 == filaj2 && columnaj1 == columnaj2) {
                columnaj2++;
            } else {
                LimitarColumnasJ2(columnaj2);
                posAux2.setAttribute('class', 'card');
                posAux2.textContent = '';
                j2 = document.getElementById(`f${filaj2}c${columnaj2}`);
                j2.classList.add('j2');
                j2.textContent = nombre2;
                console.log(j2);
            }
            break;
        case 'KeyD':
            console.log(event.code);
            columnaj2++;
            if (filaj1 == filaj2 && columnaj1 == columnaj2) {
                columnaj2--;
            } else {
                LimitarColumnasJ2(columnaj2);
                posAux2.setAttribute('class', 'card');
                posAux2.textContent = '';
                j2 = document.getElementById(`f${filaj2}c${columnaj2}`);
                j2.classList.add('j2');
                j2.textContent = nombre2;
                console.log(j2);
            }
            break;
        case 'KeyW':
            console.log(event.code);
            filaj2--;
            if (filaj1 == filaj2 && columnaj1 == columnaj2) {
                filaj2++;
            } else {
                LimitarFilaJ2(filaj2);
                posAux2.setAttribute('class', 'card');
                posAux2.textContent = '';
                j2 = document.getElementById(`f${filaj2}c${columnaj2}`);
                console.log(filaj2);
                j2.classList.add('j2');
                j2.textContent = nombre2;
                console.log(j2);
            }
            break;
        default:
            break;

    }
    validarVicitoriaj1();
    validarVicitoriaj2();
}

/**
 * Funcion para el jugador 1 que hace que al salirse de la longitud del tablero, vuelva al lado contrario
 * @param {Number} posFila valor que se compara con la longitud de las filas 
 */
function LimitarFilaJ1(posFila) {
    if (posFila >= nFilas) {
        filaj1 = 0;
    } else if (posFila < 0) {
        filaj1 = nFilas - 1;
    }
}

/**
 * Funcion para el jugador 1 que hace que al salirse de la longitud del tablero, vuelva al lado contrario
 * @param {Number} posColumna valor que se compara con la longitud de las columnas 
 */
function LimitarColumnasJ1(posColumna) {
    if (posColumna >= nColumnas) {
        columnaj1 = 0;
    } else if (posColumna < 0) {
        columnaj1 = nColumnas - 1;
    }
}

/**
 * Funcion para el jugador 2 que hace que al salirse de la longitud del tablero, vuelva al lado contrario
 * @param {Number} posFila valor que se compara con la longitud de las filas 
 */
function LimitarFilaJ2(posFila) {
    if (posFila >= nFilas) {
        filaj2 = 0;
    } else if (posFila < 0) {
        filaj2 = nFilas - 1;
    }
}

/**
 * Funcion para el jugador 2 que hace que al salirse de la longitud del tablero, vuelva al lado contrario
 * @param {Number} posColumna valor que se compara con la longitud de las columnas 
 */
function LimitarColumnasJ2(posColumna) {
    if (posColumna >= nColumnas) {
        columnaj2 = 0;
    } else if (posColumna < 0) {
        columnaj2 = nColumnas - 1;
    }
}

/**
 * Funcion que comprueba si el jugador 1 ha ganado, se ejecuta tras cada movimiento
 */
function validarVicitoriaj1() {
    if (filaj1 == filaObjetivo && columnaj1 == columnaObjetivo) {
        cuerpo.removeAttribute('onkeydown');
        objetivo.style.backgroundColor = ('white')
        objetivo.style.boxShadow = ('0 0 40px blue');
    }
}

/**
 * Funcion que comprueba si el jugador 2 ha ganado, se ejecuta tras cada movimiento
 */
function validarVicitoriaj2() {
    if (filaj2 == filaObjetivo && columnaj2 == columnaObjetivo) {
        cuerpo.removeAttribute('onkeydown');
        objetivo.style.backgroundColor = ('white')
        objetivo.style.boxShadow = ('0 0 40px crimson');
    }
}
