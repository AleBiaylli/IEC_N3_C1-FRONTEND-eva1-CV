Este repositorio contiene el desarrollo de una página web estática para un Currículum Vitae profesional.

* Nombre de creador: Alexander Lagos Allilef
* Sección: IEC-N3-C1
* Profesor: Erick Bailey Rebolledo 

Este proyecto presenta un CV interactivo diseñado con una estética orientada al mundo de la ciberseguridad

## Tecnologías Utilizadas
* **HTML5**: Estructura semántica del documento.
* **CSS3**: Diseño personalizado con temática "Dark Mode" y estilo de terminal.
* **Bootstrap**: Framework para la base estructural y responsividad.
* **Git/GitHub**: Control de versiones y despliegue.

## Estructura del Proyecto
El repositorio se organiza de la siguiente manera:
* `/html`: Archivo principal que contiene la estructura y el contenido del Currículum Vitae.
* `/index`: Archivo de acceso (actualmente vacío debido a error de interpretación humana)
* `/css`: Carpeta que aloja la hoja de estilos personalizada (`css_cv.css`).
* `/assets`: Directorio para archivos auxiliares.
    * `/img`: Imágenes de perfil e iconos de contacto (Email, Teléfono, GitHub).
* `/js`: Directorio para scripts (incluye la librería de Bootstrap).

## Botón Funcional en el CV que dirige al repositorio


## Formulario de Registro con Validaciones (Bootstrap 5 & JavaScript)

Un módulo de formulario web diseñado con **Bootstrap 5** y programado con **JavaScript**. El sistema captura información de registro y aplica un sistema de validación estricto en tiempo real (al cambiar de campo) y al momento de enviar los datos.

## Características y Campos del Formulario

El formulario recopila los siguientes datos, aplicando estilos visuales dinámicos de Bootstrap (`is-valid` en verde y `is-invalid` en rojo):

1. **Nombre Completo:** Campo obligatorio.
2. **RUT Chileno:** Obligatorio. Valida tanto el formato básico (sin puntos ni guion) como la autenticidad matemática mediante el algoritmo del **Módulo 11**.
3. **Fecha de Nacimiento:** Campo opcional. Sin embargo, si se ingresa una fecha, la lógica de negocio **restringe y exige que el usuario sea mayor de 18 años** calculando la edad exacta en tiempo real respecto al día actual. El calendario muestra todos los años previos de forma normal.
4. **Años de Carrera:** Campo opcional. Si se ingresa, valida que sea un número entero mayor o igual a 0.
5. **Email:** Obligatorio. Valida que cumpla con la estructura de un correo electrónico estándar mediante expresiones regulares (RegEx).
6. **Género:** Menú desplegable con opciones de selección.
7. **Currículum Vitae (CV):** Campo de tipo archivo, opcional. Permite y restringe la subida únicamente a documentos en formato **PDF** o **DOCX** (Word).
8. **Contraseña:** Obligatoria. Requiere un formato seguro de entre 8 y 12 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial.
9. **Repetir Contraseña:** Obligatoria. Verifica estrictamente que coincida carácter por carácter con la contraseña ingresada previamente.

## Tecnologías Utilizadas

* **HTML5** - Estructura semántica del formulario.
* **Bootstrap** - Diseño responsivo, grillas (`row` y `col`) y componentes de validación visual (`invalid-feedback`).
* **JavaScript** - Lógica de control de eventos (`onchange`), cálculo de fechas y expresiones regulares.

## Integración página general API DataTable

Esto consiste en una página web general que consume datos asíncronos desde la API pública **JSONPlaceholder**, renderizándolos dinámicamente mediante el plugin **DataTables**.

## Características y Correcciones Aplicadas

* **Carga Inicial Automatizada:** Al ingresar, la página ejecuta automáticamente la consulta e inicializa la tabla de usuarios sin necesidad de una acción previa del usuario.
* **Control de Instancias de DataTables:** Se implementó un diccionario de control (`tablasInstanciadas`) para registrar las tablas ya creadas. Esto evita el error crítico de reinicialización de DataTables en la consola del navegador al alternar entre las opciones del menú desplegable.
* **Paginación Personalizada:** * En la tabla **Usuarios** (que solo cuenta con 10 registros), se limitó el menú de visualización (`lengthMenu`) para ofrecer únicamente las opciones de **5 y 10 registros**.
  * En las tablas extensas (Publicaciones, Comentarios, Tareas), se mantienen las opciones estándar de paginado.
* **Internacionalización:** Archivo de traducción completa de la interfaz de DataTables al español (estaba agregado desde antes).

## Tecnologías Utilizadas

* **HTML5 & CSS3** (Estilos personalizados y estructura semántica).
* **Bootstrap 5 (Tema Flatly):** Para la barra de navegación, contenedores y diseño responsivo.
* **jQuery v4.0.0:** Manipulación del DOM y gestión de eventos.
* **DataTables v2.3.8:** Renderizado dinámico de cuadrículas de datos, paginación y búsqueda integrada.
* **JSONPlaceholder API:** Fuente de datos remota para Usuarios, Posts, Comentarios y Todos.



```text
# Estructura Formulario

├── eval_2.html        # Estructura del formulario y maquetación Bootstrap
├── js/
│   └── eval_2.js      # Scripts de validación y lógica del Módulo 11
└── css/
    └── form.css       # Estilos personalizados adicionales

## Estructura Página general API DataTables

```text
├── css/
│   ├── flatly.css          # Tema Bootstrap
│   └── form.css            # Estilos personalizados del formulario
├── js/
│   ├── jQuery v4.0.0.js    # Librería jQuery
│   ├── dt_language.js      # Objeto de traducción al español para DataTables
│   └── tablitas.js         # Lógica principal de la aplicación y llamadas AJAX
├── tablitas.html           # Vista principal de la aplicación
