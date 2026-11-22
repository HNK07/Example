const fondo = document.getElementById("fondo");
const contador = document.getElementById("contador");
const listaProductos = document.getElementById("lista-productos");
const totalCarrito = document.getElementById("total-carrito");
const totalPago = document.getElementById("total-pago");
const botonPagar = document.getElementById("boton-pagar");

let carrito = [];

function formatoDinero(valor) {
  return "$" + valor.toLocaleString("es-CO");
}

function calcularTotal() {
  let total = 0;
  carrito.forEach(function (producto) {
    total += producto.precio * producto.cantidad;
  });
  return total;
}

function contarUnidades() {
  let unidades = 0;
  carrito.forEach(function (producto) {
    unidades += producto.cantidad;
  });
  return unidades;
}

function agregarProducto(nombre, precio) {
  const existente = carrito.find(function (p) {
    return p.nombre === nombre;
  });

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
  }

  actualizarCarrito();
}

function cambiarCantidad(posicion, cambio) {
  carrito[posicion].cantidad += cambio;

  if (carrito[posicion].cantidad <= 0) {
    carrito.splice(posicion, 1);
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  contador.textContent = contarUnidades();
  totalCarrito.textContent = formatoDinero(calcularTotal());
  totalPago.textContent = formatoDinero(calcularTotal());

  if (carrito.length === 0) {
    listaProductos.innerHTML = "<p>Tu carrito está vacío.</p>";
    botonPagar.style.display = "none";
    return;
  }

  let html = "";
  carrito.forEach(function (producto, posicion) {
    html += `
      <div class="item">
        <span>${producto.nombre}<br>${formatoDinero(producto.precio)}</span>
        <span class="cantidad">
          <button data-posicion="${posicion}" data-cambio="-1">−</button>
          ${producto.cantidad}
          <button data-posicion="${posicion}" data-cambio="1">+</button>
        </span>
      </div>`;
  });

  listaProductos.innerHTML = html;
  botonPagar.style.display = "inline-block";
}

function mostrarPaso(numero) {
  for (let i = 1; i <= 3; i++) {
    const paso = document.getElementById("paso" + i);
    paso.classList.toggle("oculto", i !== numero);
  }
}

function abrirCarrito() {
  mostrarPaso(1);
  fondo.classList.add("abierto");
}

function cerrarCarrito() {
  fondo.classList.remove("abierto");
  limpiarFormulario();
}

document.querySelectorAll(".btn-agregar").forEach(function (boton) {
  boton.addEventListener("click", function () {
    agregarProducto(boton.dataset.nombre, Number(boton.dataset.precio));
  });
});

listaProductos.addEventListener("click", function (evento) {
  const boton = evento.target.closest("button");
  if (!boton) return;
  cambiarCantidad(Number(boton.dataset.posicion), Number(boton.dataset.cambio));
});

document.getElementById("boton-carrito").addEventListener("click", abrirCarrito);
document.getElementById("boton-seguir").addEventListener("click", cerrarCarrito);
document.getElementById("boton-pagar").addEventListener("click", function () { mostrarPaso(2); });
document.getElementById("boton-volver").addEventListener("click", function () { mostrarPaso(1); });

actualizarCarrito();
