// "Formas de contacto": un clic muestra el bloque y otro clic lo oculta.
document.addEventListener('DOMContentLoaded', function () {
  var boton = document.getElementById('btn-contacto');
  var panel = document.getElementById('panel-contacto');
  if (!boton || !panel) return;

  var icono = boton.querySelector('.icono');

  boton.addEventListener('click', function () {
    var estabaAbierto = boton.getAttribute('aria-expanded') === 'true';

    panel.hidden = estabaAbierto;                       // abierto -> oculta, cerrado -> muestra
    boton.setAttribute('aria-expanded', String(!estabaAbierto));
    if (icono) icono.textContent = estabaAbierto ? '+' : '−';
  });
});
