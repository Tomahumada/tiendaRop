const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = zapatillas.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push(producto);
    }
    actualizarCarrito();
};


const contenedorCarrito = document.getElementById('contenedorCarrito');
const pagar = document.getElementById('pagar');

pagar.addEventListener('click', () => {
    window.Swal.fire({
        icon: 'success',
        title: 'Realizar pago',
        text: 'Haz click en siguente para efectuar el pago',
        confirmButtonText: 'siguente',
        cancelButtonText: 'cancelar',
        showCancelButton: true,
        showCloseButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({

            })
        }
    })
});

function actualizarCarrito() {
    let aux = '';
    carrito.forEach((producto) => {
        aux += `<div class="cardCarrito">
                <img src="${producto.img}" class="img-card">
                <div class="card-body-carrito">
                    <h3 class="card-title-carrito"> ${producto.nombre} </h3>
                    <p class="card-text-carrito"> $${producto.precio} </p>
                    <p class="card-text-carrito"> ${producto.cantidad} </p>
                    <button onClick = "eliminarDelCarrito(${producto.id})" class="button-add-carrito"> Eliminar del Carrito </button>
                </div>
            </div>`;
        Toastify({
            text: "Producto Agregado Correcamente",
            className: "info",
            duration: 1000,
            gravity: 'top',
            offset: {
                x: 0,
                y: 620
            },
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    });

    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
}


const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
};

const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
});

const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = '$' + total;
};

