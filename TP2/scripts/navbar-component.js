export function renderNavbarComponent() {
    fetch('./header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el HTML');
            }
            return response.text(); // Devuelve el contenido del HTML como texto
        })
        .then(data => {
            // Hay que crear el elemento HTML con este ID donde insertamos el componente.
            const headerElement = document.createElement('header'); // Crear el elemento <header>
            headerElement.classList.add('bg-dark-color', 'header'); // Añadir clases al header
            headerElement.id = 'header'; // Asignar el ID al header
            headerElement.innerHTML = data; // Insertar el contenido HTML dentro del header

            document.body.prepend(headerElement); // Añadir el header al inicio del body
            // SI quieren añadirlo en un lugar especifico ya creado, 
            // tienen que dejar un div o un elemento vacio con un id, despues buscarlo con getElementById("") y ahi modificar el innerHTML 
        })
        .catch(error => {
            console.error('Hubo un problema con la carga del archivo HTML:', error);
        });
}