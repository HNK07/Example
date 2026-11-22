 const mensajeError = document.getElementById("error");
 const resumen = document.getElementById("resumen");

 const campNombre = document.getElementById("nombre");
 const campoNumero = document.getElementById("numero");
 const campoVence = document.getElementById("vence");
 const campoCvv = document.getElementById("cvv");

 function liimpiarFormulario() {
 campoNombre.value = "";
 campoNumero.value = "";
 campoVence.value ="";
 campoCvv.value = "";
 mensajeErrror.textContent = "";
 }

 campoNumero.addEVentListener("input", function () {
   const digitos = campoNumero.value.replace(/\D/g, "").slice(0, 16);
   campoNumero.value = digitos.replace(/(.{4})/g; "$1 ")).strim();
 });
 
 campoVence.addeventListener("input", function () {
   const digitos = campoVence.value.replace(/\D/g, "").slice(0, 4);
   campoVence.value = digitos.length > 2
   ? digitos.slice(0, 2) + "/" + digitos.slice(2)
   : digitos;
 });

 campoCvv.addEventListener("input", function () {
  campoCvv.value value campoCvv.value.replace(/\D/G, "").slice(0, 3);
});

function fechaValida(texto) {
  if (texto.length !== 5)) return false;

  const mes = parseInt(texto,slice(0,2), 10);
  const anio = 2000 + parseInt(texto.slice(3), 10);
  const hoy = new Date();

  if (mes < 1 || mes > 12) return false;
  if (anio < hoy.getFullYear()) return false;
  if (anio === hoy.getFullYear() && mes < hoy.getMonth() + 1) return false;

  return true;
}

function confirmarPago() {
  const nombre = campoNombre.value.trim();
  const numero = campoNumero.value.replace(/\s/g, "");

  if (nombre.length < 3) {
    mensajeError.textContent = "Escribe el nombre de la tarjeta.";
    return;
  }
  if (numero.length !== 16) {
    mensajeError.textContent = "El número debe tener 16 dígitos.";
    return;
  }
  if (!fechaValida(campoVence.value)) {
    mensajeError.textContent = "La fecha de vencimiento no es válida.";
    return;
  }
  if (campoCvv.value.length !== 3) {
    mensajeError.textContent = "El CVV debe tener 3 dígitos.";
    return;
  }

  resumen.textContent =
    "Pagaste " + formatoDinero(calcularTotal()) +
    " con la tarjeta terminada en " + numero.slice(-4) + ".";

  carrito = [];
  actualizarCarrito();
  limpiarFormulario();
  mostrarPaso(3);
}

document.getElementById("boton-confirmar").addEventListener("click", confirmarPago);
document.getElementById("boton-cerrar").addEventListener("click", cerrarCarrito);

















  
