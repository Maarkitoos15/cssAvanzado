// Variables para almacenar los contenedores y los minidivs
const contenedores = document.querySelectorAll('.contenedor1');
const minidivs = document.querySelectorAll('.minidiv');
const mensaje = document.getElementById('mensaje');

// Hacer que los minidivs sean arrastrables
minidivs.forEach(minidiv => {
    minidiv.addEventListener('dragstart', (e) => {
        // Guardamos el id del minidiv que estamos arrastrando
        e.dataTransfer.setData('text', e.target.id);
    });
});

// Permitir que los contenedores acepten los elementos arrastrados
contenedores.forEach(contenedor => {
    contenedor.addEventListener('dragover', (e) => {
        e.preventDefault(); // Permite el "drop"
        contenedor.style.backgroundColor = '#f0f0f0'; // Cambiar el color cuando se arrastra sobre él
    });

    contenedor.addEventListener('dragleave', () => {
        contenedor.style.backgroundColor = 'lightgray'; // Restaurar color cuando no se está arrastrando
    });

    contenedor.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text'); // Obtener el id del minidiv arrastrado
        const minidiv = document.getElementById(id);

        // Asegurarse de que el minidiv no está ya en el contenedor
        if (!contenedor.contains(minidiv)) {
            contenedor.appendChild(minidiv); // Añadir el minidiv al contenedor
        }

        contenedor.style.backgroundColor = 'lightgray'; // Restaurar el color del contenedor
    });
});

// Función para validar las respuestas
function validarRespuestas() {
    let respuestasCorrectas = 0;

    // Recorremos cada contenedor y comprobamos si el minidiv está en la categoría correcta
    contenedores.forEach(contenedor => {
        const categoriaCorrecta = contenedor.querySelector('h1').textContent;
        const minidivsDentro = contenedor.querySelectorAll('.minidiv');

        minidivsDentro.forEach(minidiv => {
            if (minidiv.dataset.category === categoriaCorrecta) {
                respuestasCorrectas++;
                minidiv.style.backgroundColor = 'green';
            } else { minidiv.style.backgroundColor = 'red';

            }
        });
    });

    
}
