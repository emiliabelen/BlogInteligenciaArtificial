// obtener los elementos de la lista de artículos
let arrayArticulos = Array.from(
  document.getElementsByClassName('card-container')
);
let form = document.querySelector('form');
let buscador = document.querySelector('#buscador');
let listadoArticulos = document.getElementById('listadoArticulos');

let sectionPrincipal = document.getElementById('sectionPrincipal');
let primerArticulo = document.getElementById('primerArticulo');
let segundoArticulo = document.getElementById('segundoArticulo');
let respaldoListadoArticulos = document.createDocumentFragment();

// agregar un evento para escuchar cuando se envía el formulario
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let inputBuscador = buscador.value.toLowerCase();
  let titulo, descripcion, filtrar;

  while (listadoArticulos.firstChild) {
    respaldoListadoArticulos.appendChild(listadoArticulos.firstChild);
  }

  if (inputBuscador !== '') {
    //recorre el array de articulos y lo filtra por titulo y por descripción
    filtrar = arrayArticulos.filter((articulo) => {
      titulo = articulo.querySelector('.card-title').innerHTML.toLowerCase();
      descripcion = articulo
        .querySelector('.card-text')
        .innerHTML.toLowerCase();
      return (
        titulo.includes(inputBuscador) || descripcion.includes(inputBuscador)
      );
    });

    mostrarArticulosPrincipales(false);

    //guardo los articulos que fueron filtrados
    filtrar.forEach((articulo) => {
      if (filtrar.includes(articulo)) {
        listadoArticulos.append(articulo);
      }
    });

    if (filtrar.length === 0) mostrarMensaje();
  } else {
    //función para traer todo el array de forma ordenada
    mostrarArrayArticulos();
    //vuelvo a mostrar los dos articulos principales
    mostrarArticulosPrincipales(true);
  }
});

function mostrarArticulosPrincipales(show) {
  if (show) {
    document.getElementById('sectionPrincipal').classList.remove('d-none');
    document.getElementById('textoTitulo').innerHTML = 'LO QUE DEBES SABER:';
  } else {
    document.getElementById('sectionPrincipal').classList.add('d-none');
    document.getElementById('textoTitulo').innerHTML =
      'Resultados de la Búsqueda:';
  }
}

function mostrarArrayArticulos() {
  arrayArticulos.forEach((articulo, index) => {
    if (index === 0) {
      primerArticulo.appendChild(articulo);
    } else if (index === 1) {
      segundoArticulo.appendChild(articulo);
    } else {
      listadoArticulos.appendChild(articulo);
    }
  });
}

// mostrar un mensaje cuando la búsqueda sea 0 articulos
function mostrarMensaje() {
  let div = document.createElement('div');

  div.innerHTML = `
            <div class="col">
                    <div class="text-bg-danger h-100">
                            <h3 class="card-title">
                            No se encontraron articulos según la búsqueda realizada.
                            </h3>
                    </div>
            </div>
    `;

  listadoArticulos.appendChild(div);
}
