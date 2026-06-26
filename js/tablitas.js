const urlUsuarios = 'https://jsonplaceholder.typicode.com/users';
const urlPublicaciones = 'https://jsonplaceholder.typicode.com/posts';
const urlComentarios = 'https://jsonplaceholder.typicode.com/comments';
const urlTareas = 'https://jsonplaceholder.typicode.com/todos';

// Diccionario para controlar qué tablas ya se inicializaron
const tablasInstanciadas = {};

window.onload = function () {
    // Ocultar todo al cargar la página por primera vez
    seleccionarData();
};

function ocultarTodasLasTablas() {
    $('#divTablaUsuarios').hide();
    $('#divTablaPublicaciones').hide();
    $('#divTablaComentarios').hide();
    $('#divTablaTareas').hide();
}

function seleccionarData() {
    const select = $('#selectDatos');
    const opcionSeleccionada = select.val();

    // Primero ocultamos todas las vistas
    ocultarTodasLasTablas();

    switch (opcionSeleccionada) {
        case '1':
            if (!tablasInstanciadas['usuarios']) {
                tablasInstanciadas['usuarios'] = new DataTable('#tablaUsuarios', {
                    ajax: { url: urlUsuarios, dataSrc: '' },
                    pageLength: 5,        // Hace que la tabla parta mostrando 5 filas (así se divide en 2 páginas)
                    lengthChange: true,   // Mantén el menú activo...
                    lengthMenu: [5, 10],  //Pero solo permite elegir entre 5 y 10
                    columns: [
                        { data: 'id' },
                        { data: 'name' },
                        { data: 'username' },
                        { data: 'email' },
                        { data: 'phone' },
                        { data: 'website' }
                    ],
                    language: window.lenguaje
                });
            }
            $('#divTablaUsuarios').show();
            break;

        case '2':
            if (!tablasInstanciadas['publicaciones']) {
                tablasInstanciadas['publicaciones'] = new DataTable('#tablaPublicaciones', {
                    ajax: { url: urlPublicaciones, dataSrc: '' },
                    columns: [
                        { data: 'id' },
                        { data: 'userId' }, // Corregido: La API usa userId
                        { data: 'title' },
                        { data: 'body' }
                    ],
                    language: window.lenguaje
                });
            }
            $('#divTablaPublicaciones').show();
            break;

        case '3':
            if (!tablasInstanciadas['comentarios']) {
                tablasInstanciadas['comentarios'] = new DataTable('#tablaComentarios', {
                    ajax: { url: urlComentarios, dataSrc: '' },
                    columns: [
                        { data: 'id' },
                        { data: 'postId' }, // Corregido: Atributos reales de la API /comments
                        { data: 'name' },
                        { data: 'email' },
                        { data: 'body' }
                    ],
                    language: window.lenguaje
                });
            }
            $('#divTablaComentarios').show();
            break;

        case '4':
            if (!tablasInstanciadas['tareas']) {
                tablasInstanciadas['tareas'] = new DataTable('#tablaTareas', {
                    ajax: { url: urlTareas, dataSrc: '' },
                    columns: [
                        { data: 'id' },
                        { data: 'userId' },
                        { data: 'title' },
                        { data: 'completed' }
                    ],
                    language: window.lenguaje
                });
            }
            $('#divTablaTareas').show();
            break;
    }
}