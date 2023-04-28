//leer en el localstorage si almacenamos un color de theme
let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
let iconoTema = document.querySelector('#iconoTema');
cambiarTema(temaConfigurado);

let btnThemeDark = document.querySelector('#btnThemeDark');
let btnThemeLight = document.querySelector('#btnThemeLight');

btnThemeDark.addEventListener('click', () => cambiarTema('dark'));
btnThemeLight.addEventListener('click', () => cambiarTema('light'));

function cambiarTema(color) {
  document.querySelector('html').setAttribute('data-bs-theme', color);
  //guardar en localstorage
  localStorage.setItem('tema', JSON.stringify(color));
  //actualizar el icono
  cambiarIcono(color);
}

function cambiarIcono(color) {
  if (color === 'dark') {
    iconoTema.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
  } else {
    iconoTema.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
  }
}
