// Variable para almacenar el nombre del usuario
let nombre = '';

// Controlar que el nombre no quede en blanco 
while (!nombre) {
    nombre = prompt('¡Buenos días cocinero!\n¿Cuál es tu nombre?');
    if (!nombre) {
        alert('Por favor, ingresa tu nombre.');
    }
}

// Mostramos un mensaje de bienvenida personalizado
alert('¡Hola, Chef ' + nombre + '!\nBienvenido al simulador de mise en place.');

// Variable para almacenar la última tarea generada
let ultimaTarea;

// Variable que cuenta las tareas generadas
let contadorTareas = 0;

// Función que genera una tarea X distinta a la última generada
function generarTarea() {
    let tarea;
    do {
        let numeroAleatorio = Math.floor(Math.random() * 5);
        if (numeroAleatorio === 0) {
            tarea = 'Cortar verduras';
        } else if (numeroAleatorio === 1) {
            tarea = 'Pesar ingredientes';
        } else if (numeroAleatorio === 2) {
            tarea = 'Organizar utensilios';
        } else if (numeroAleatorio === 3) {
            tarea = 'Limpiar la cocina';
        } else {
            tarea = 'Ordenar materia prima';
        }
    } while (tarea === ultimaTarea);
    ultimaTarea = tarea;
    contadorTareas++;
    return tarea;
}

// Programa
let seguir = true;
while (seguir) {
    let tarea = generarTarea();
    alert('Tu tarea es: ' + tarea);
    if (contadorTareas === 5) {
        alert('¡Terminaste con todas las tareas asignadas para el día de hoy!');
        seguir = false;
    } else {
        seguir = confirm(`¿Quieres continuar?`);
    }
}

alert('¡Gracias por colaborar ' + nombre + '!');