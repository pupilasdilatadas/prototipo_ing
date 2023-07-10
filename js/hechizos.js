//ARRAY DE LOS HECHIZOS
const hechizos = [

    {
        id: "01",
        nombre: "Expelliarmus",
        descripcion: "Hechizo Desarmador",
        imagen: "img/hechizos/HM_Expelliarmus.webp",
        tipo: "ofensivo"
    },
    {
        id: "02",
        nombre: "Protego",
        descripcion: "Hechizo protector",
        imagen: "img/hechizos/HM_Protego.webp",
        tipo: "defensivo"
    },
    {
        id: "03",
        nombre: "Incendio",
        descripcion: "Hechizo de fuego",
        imagen: "img/hechizos/HM_Incendio.webp",
        tipo: "ofensivo"
    },
    {
        id: "04",
        nombre: "Reparo",
        descripcion: "Hechizo Curativo",
        imagen: "img/hechizos/HM_Reparo.webp",
        tipo: "curativo"
    },
    {
        id: "05",
        nombre: "Wingardium Leviosa",
        descripcion: "Hechizo levitatorio",
        imagen: "img/hechizos/HM_Wingardium_Leviosa.webp",
        tipo: "especial"
    },
    {
        id: "06",
        nombre: "Petrificus Totalus",
        descripcion: "Hechizo paralizador",
        imagen: "img/hechizos/HM_Petrificus_Totalus.webp",
        tipo: "ofensivo"
    },
    {
        id: "07",
        nombre: "Desmaius",
        descripcion: "Hechizo aturdidor",
        imagen: "img/hechizos/HM_Desmaius.webp",
        tipo: "furtivo"
    },
    {
        id: "08",
        nombre: "Lumos",
        descripcion: "Hechizo de iluminación",
        imagen: "img/hechizos/HM_Lumos.webp",
        tipo: "especial"
    },
]
//div donde irán los hechizos

function cargarHechizos() {
    const contenedorHechizos = document.querySelector("#contenedorHechizos");
    contenedorHechizos.innerHTML = '';


    hechizos.forEach(hechizo => {
        const div = document.createElement("div");
        div.classList.add("hechizo")
        //formula para insertar el HTML
        div.innerHTML = `
        <div class="row">
            <div
                    class="card mx-2 rounded-0 d-flex align-items-center"
                    style="width: 18rem"
                    id="${hechizo.id}"
                >
                    <img
                        src="${hechizo.imagen}"
                        class="card-img-top mt-4 mb-2"
                        style="width: 75%"
                        alt="..."
                    />
                    <div class="card-body row ">
                        <h5 class="card-title" style="font-weight: bold">
                            ${hechizo.nombre}
                        </h5>
                        <p class="card-text">${hechizo.descripcion}</p>
                        <a href="#" class="btn btn-primary mt-3 rounded-0 "
                            >Aprender</a
                        >
                    </div>
            </div>
        </div>
        `;

        contenedorHechizos.append(div);
    })
}

cargarHechizos();
cargarHechizos2();
function cargarHechizos2() {
    const contenedorHechizos = document.querySelector("#contenedorHechizos");


    if (localStorage.getItem('hechizos')) {
        // Obtener los cursos almacenados en el localStorage
        const cursosLocalStorage = JSON.parse(localStorage.getItem('hechizos'));

        cursosLocalStorage.forEach((hechizo) => {
            const div = document.createElement("div");
            div.classList.add("hechizo")
            //formula para insertar el HTML
            div.innerHTML = `
        <div class="row">
            <div
                    class="card mx-2 rounded-0 d-flex align-items-center"
                    style="width: 18rem"
                    id="${hechizo.id}"
                >
                    <img
                        src="${hechizo.imagen}"
                        class="card-img-top mt-4 mb-2"
                        style="width: 75%"
                        alt="..."
                    />
                    <div class="card-body row ">
                        <h5 class="card-title" style="font-weight: bold">
                            ${hechizo.nombre}
                        </h5>
                        <p class="card-text">${hechizo.descripcion}</p>
                        <a href="#" class="btn btn-primary mt-3 rounded-0 "
                            >Aprender</a
                        >
                    </div>
            </div>
        </div>
        `;

            contenedorHechizos.append(div);
        })
    }
}

// Formula de filtrar hechizos
//para los botones check
const defensivoFilter = document.getElementById("check1");
const ofensivoFilter = document.getElementById("check2");
const furtivoFilter = document.getElementById("check3");
const especialesFilter = document.getElementById("check4");
const curativoFilter = document.getElementById("check5");

defensivoFilter.addEventListener("click", filtrarHechizos);
ofensivoFilter.addEventListener("click", filtrarHechizos);
furtivoFilter.addEventListener("click", filtrarHechizos);
especialesFilter.addEventListener("click", filtrarHechizos);
curativoFilter.addEventListener("click", filtrarHechizos);

function filtrarHechizos() {
    const hechizosFiltrados = [];

    if (defensivoFilter.checked) {
        // Filtrar hechizos defensivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos defensivos */ hechizo.tipo === "defensivo"));
    }

    if (furtivoFilter.checked) {
        // Filtrar hechizos furtivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos furtivos */hechizo.tipo === "furtivo"));
    }
    if (ofensivoFilter.checked) {
        // Filtrar hechizos furtivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos furtivos */hechizo.tipo === "ofensivo"));
    }
    if (especialesFilter.checked) {
        // Filtrar hechizos furtivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos furtivos */hechizo.tipo === "especial"));
    }
    if (curativoFilter.checked) {
        // Filtrar hechizos furtivos
        hechizosFiltrados.push(...hechizos.filter(hechizo => /* Condición de filtro para hechizos furtivos */hechizo.tipo === "curativo"));
    }

    // Limpiar el contenedor de hechizos antes de mostrar los resultados filtrados
    contenedorHechizos.innerHTML = "";

    if (hechizosFiltrados.length > 0) {
        hechizosFiltrados.forEach(hechizo => {
            // Crear y agregar elementos de hechizos filtrados al contenedor, haremos la misma creacion de cards :3
            const div = document.createElement("div");
            // ... código para crear el elemento de hechizo filtrado
            div.innerHTML = `
        <div class="row">
            <div
                    class="card mx-2 rounded-0 d-flex align-items-center"
                    style="width: 18rem"
                    id="${hechizo.id}"
                >
                    <img
                        src="${hechizo.imagen}"
                        class="card-img-top mt-4 mb-2"
                        style="width: 75%"
                        alt="..."
                    />
                    <div class="card-body row ">
                        <h5 class="card-title" style="font-weight: bold">
                            ${hechizo.nombre}
                        </h5>
                        <p class="card-text">${hechizo.descripcion}</p>
                        <a href="#" class="btn btn-primary mt-3 rounded-0 "
                            >Aprender</a
                        >
                    </div>
            </div>
        </div>
        `;
            contenedorHechizos.appendChild(div);
        });
    } else {
        cargarHechizos();
    }
}
// ahora lo mismo pero con los botones de arriba, y asi se activa el filtro

const defensivoButton = document.getElementById("defensivo-button");
const ofensivoButton = document.getElementById("ofensivo-button");
const furtivoButton = document.getElementById("furtivo-button");
const especialesButton = document.getElementById("especial-button");
const curativoButton = document.getElementById("curativo-button");
//obtener elementos a base de los checkbox
defensivoButton.addEventListener("click", () => {
    defensivoFilter.checked = true;
    ofensivoFilter.checked = false;
    furtivoFilter.checked = false;
    especialesFilter.checked = false;
    curativoFilter.checked = false;
    filtrarHechizos();
});

ofensivoButton.addEventListener("click", () => {
    defensivoFilter.checked = false;
    ofensivoFilter.checked = true;
    furtivoFilter.checked = false;
    especialesFilter.checked = false;
    curativoFilter.checked = false;
    filtrarHechizos();
});

furtivoButton.addEventListener("click", () => {
    defensivoFilter.checked = false;
    ofensivoFilter.checked = false;
    furtivoFilter.checked = true;
    especialesFilter.checked = false;
    curativoFilter.checked = false;
    filtrarHechizos();
});

especialesButton.addEventListener("click", () => {
    defensivoFilter.checked = false;
    ofensivoFilter.checked = false;
    furtivoFilter.checked = false;
    especialesFilter.checked = true;
    curativoFilter.checked = false;
    filtrarHechizos();
});
curativoButton.addEventListener("click", () => {
    defensivoFilter.checked = false;
    ofensivoFilter.checked = false;
    furtivoFilter.checked = false;
    especialesFilter.checked = false;
    curativoFilter.checked = true;
    filtrarHechizos();
});

const agregarHechizoForm = document.getElementById('agregar-hechizo-form');

// Agrega un evento de escucha para el envío del formulario
agregarHechizoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtén los valores del formulario
    const hechizoId = document.getElementById('hechizo-id').value;
    const hechizoImagen = document.getElementById('hechizo-imagen').value;
    const hechizoNombre = document.getElementById('hechizo-nombre').value;
    const hechizoDescripcion = document.getElementById('hechizo-descripcion').value;
    const hechizoTipo = document.getElementById('hechizo-tipo').value;


    // Crea el objeto de hechizo
    const nuevoHechizo = {
        id: hechizoId,
        imagen: hechizoImagen,
        nombre: hechizoNombre,
        descripcion: hechizoDescripcion,
        tipo: hechizoTipo,
    };

    // Verificar si hay datos de cursos en el localStorage
    let hechizosLocalStorage = [];
    if (localStorage.getItem('hechizos')) {
        hechizosLocalStorage = JSON.parse(localStorage.getItem('hechizos'));
    }

    // Agrega el nuevo curso al array de cursos
    hechizosLocalStorage.push(nuevoHechizo);

    // Almacena los datos actualizados en el localStorage
    localStorage.setItem('hechizos', JSON.stringify(hechizosLocalStorage));

    // Genera nuevamente el contenido de los cursos para mostrar el nuevo curso en la página
    cargarHechizos();
    cargarHechizos2();

    // Restablece los valores del formulario
    agregarHechizoForm.reset();
});