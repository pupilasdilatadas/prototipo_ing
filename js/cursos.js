
// Función para generar el contenido de los cursos
function generarCursos() {
    const cursosContainer = document.getElementById('cursos-container');


    cursosContainer.innerHTML = '';

    // Verificar si hay datos de cursos en el localStorage
    if (localStorage.getItem('cursos')) {
        // Obtener los cursos almacenados en el localStorage
        const cursosLocalStorage = JSON.parse(localStorage.getItem('cursos'));

        cursosLocalStorage.forEach((curso) => {
            const cursoCard = document.createElement('div');
            cursoCard.className = 'col-md-4';

            const cursoContent = `
          <div class="card h-100" data-bs-toggle="modal" data-bs-target="#curso-modal" onclick="mostrarCurso('${curso.id}')">
            <img src="${curso.imagen}" class="card-img-top w-100" style="object-fit: cover; height: 200px;" alt="${curso.titulo}">
            <div class="card-body">
              <span style="color: #666666;">${curso.id}</span>
              <h5 class="card-title fw-bold">${curso.titulo}</h5>
              <p class="card-text">${curso.instructor}</p>
            </div>
          </div>
        `;

            cursoCard.innerHTML = cursoContent;
            cursosContainer.appendChild(cursoCard);
        });
    }else{
        console.log("no hay niun storage");
    }
}

// Función para mostrar el contenido completo del curso en el modal
function mostrarCurso(cursoId) {
    // Verificar si hay datos de cursos en el localStorage
    if (localStorage.getItem('cursos')) {
        const cursosLocalStorage = JSON.parse(localStorage.getItem('cursos'));
        const curso = cursosLocalStorage.find((curso) => curso.id === cursoId);

        const modalTitle = document.getElementById('vistaRapidaModalLabel');
        const modalContent = document.getElementById('curso-modal-content');

        modalTitle.textContent = curso.titulo;

        modalContent.innerHTML = `
        <img src="${curso.imagen}" class="card-img-top w-100" style="object-fit: cover; height: 300px;" alt="${curso.titulo}">
        <h6>Descripción del curso:</h6>
        <p>${curso.descripcion}</p>
        <h6>Contenido del curso:</h6>
        ${generarUnidades(curso.unidades)}
        <h6>Información adicional:</h6>      
        <p>Aquí puedes agregar cualquier información adicional que desees mostrar sobre el curso.</p>
      `;

        // Mostrar el modal
        const cursoModal = new bootstrap.Modal(document.getElementById('curso-modal'));
        cursoModal.show();
    }
}

// Función para generar las unidades del curso
function generarUnidades(unidades) {
    let unidadesContent = '';

    unidades.forEach((unidad) => {
        const detallesContent = generarDetalles(unidad.detalles);

        const unidadContent = `
        <div class="unidad">
          <div class="unidad-titulo" onclick="mostrarContenido('unidad-${unidad.titulo}')">${unidad.titulo}</div>
          <div class="unidad-contenido" id="unidad-${unidad.titulo}" style="display: none;">
            ${detallesContent}
          </div>
        </div>
      `;

        unidadesContent += unidadContent;
    });

    return unidadesContent;
}

// Función para generar los detalles de una unidad
function generarDetalles(detalles) {
    let detallesContent = '';

    detalles.forEach((detalle) => {
        const detalleContent = `
        <div class="subcontenido" data-detalle-id="detalle-${detalle}" onclick="mostrarOcultarDetalle('${detalle}')">${detalle}</div>
      `;

        detallesContent += detalleContent;
    });

    return detallesContent;
}

// Función para mostrar u ocultar el detalle del curso
function mostrarOcultarDetalle(event) {
    const detalleId = event.target.getAttribute('data-detalle-id');
    const detalleElement = document.getElementById(detalleId);
    detalleElement.style.display = detalleElement.style.display === 'block' ? 'none' : 'block';
}

// Generar los cursos
generarCursos();

function mostrarContenido(idContenido) {
    var contenido = document.getElementById(idContenido);

    // Cambia la visibilidad del contenido
    if (contenido.style.display === 'none') {
        contenido.style.display = 'block';
    } else {
        contenido.style.display = 'none';
    }
}

function mostrarDetalle(idDetalle) {
    // Aquí puedes implementar la lógica para mostrar los detalles del contenido
    alert('Has hecho clic en el detalle ' + idDetalle);
}

const agregarCursoForm = document.getElementById('agregar-curso-form');

// Agrega un evento de escucha para el envío del formulario
agregarCursoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtén los valores del formulario
    const cursoId = document.getElementById('curso-id').value;
    const cursoImagen = document.getElementById('curso-imagen').value;
    const cursoTitulo = document.getElementById('curso-titulo').value;
    const cursoInstructor = document.getElementById('curso-instructor').value;
    const cursoDescripcion = document.getElementById('curso-descripcion').value;
    const unidadTitulo = document.getElementById('unidad-titulo').value;
    const detalle1 = document.getElementById('detalle1').value;
    const detalle2 = document.getElementById('detalle2').value;

    // Crea el objeto de curso
    const nuevoCurso = {
        id: cursoId,
        imagen: cursoImagen,
        titulo: cursoTitulo,
        instructor: cursoInstructor,
        descripcion: cursoDescripcion,
        unidades: [
            {
                titulo: unidadTitulo,
                detalles: [detalle1, detalle2]
            }
        ]
    };

    // Verificar si hay datos de cursos en el localStorage
    let cursosLocalStorage = [];
    if (localStorage.getItem('cursos')) {
        cursosLocalStorage = JSON.parse(localStorage.getItem('cursos'));
    }

    // Agrega el nuevo curso al array de cursos
    cursosLocalStorage.push(nuevoCurso);

    // Almacena los datos actualizados en el localStorage
    localStorage.setItem('cursos', JSON.stringify(cursosLocalStorage));

    // Genera nuevamente el contenido de los cursos para mostrar el nuevo curso en la página
    generarCursos();

    // Restablece los valores del formulario
    agregarCursoForm.reset();
});



//funcion eliminar
function eliminarCurso(cursoId) {
    // Verificar si hay datos de cursos en el localStorage
    if (localStorage.getItem('')) {
      let cursosLocalStorage = JSON.parse(localStorage.getItem('cursos'));
      
      // Filtrar los cursos para eliminar el curso con el ID proporcionado
      cursosLocalStorage = cursosLocalStorage.filter((curso) => curso.id !== cursoId);
      
      // Actualizar los datos en el localStorage
      localStorage.setItem('cursos', JSON.stringify(cursosLocalStorage));
      
      // Generar nuevamente el contenido de los cursos para reflejar los cambios
      generarCursos();
    }
  }
  