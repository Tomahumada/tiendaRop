const ropa = [
    {
        nombre: 'remera Nike Entrenamiento',
        precio: 20000,
        id: 10,
        cantidad: 1,
        img: '../img/remera7.webp'
    },
    {
        nombre: 'short de entrenamiento',
        precio: 20000,
        id: 11,
        cantidad: 1,
        img: '../img/pantalon7.webp'
    }, {
        nombre: 'Remera nike ciclismo',
        precio: 20000,
        id: 12,
        cantidad: 1,
        img: '../img/remera8.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 13,
        cantidad: 1,
        img: '../img/pantalon8.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 14,
        cantidad: 1,
        img: '../img/pantalon2.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 15,
        cantidad: 1,
        img: '../img/remera3.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 16,
        cantidad: 1,
        img: '../img/pantalon.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 17,
        cantidad: 1,
        img: '../img/remera.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 18,
        cantidad: 1,
        img: '../img/pantalon1.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 19,
        cantidad: 1,
        img: '../img/remera2.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 20,
        cantidad: 1,
        img: '../img/pantalon4.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 21,
        cantidad: 1,
        img: '../img/remera4.webp'
    }, {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 22,
        cantidad: 1,
        img: '../img/remera5.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 23,
        cantidad: 1,
        img: '../img/pantalon6.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 24,
        cantidad: 1,
        img: '../img/pantalon5.webp'
    },
    {
        nombre: 'Calza nike ciclismo',
        precio: 20000,
        id: 25,
        cantidad: 1,
        img: '../img/remera6.webp'
    },
    {
        nombre: 'Nike Airforce One',
        precio: 25000,
        id: 1,
        cantidad: 1,
        img: '../img/zapatillas.webp'

    },
    {
        nombre: 'Nike Air Max 90 LTR',
        precio: 19000,
        id: 2,
        cantidad: 1,
        img: '../img/zapatillas1.webp'
    },
    {
        nombre: 'NIke Air max Intrik',
        precio: 18000,
        id: 3,
        cantidad: 1,
        img: '../img/zapatillas2.webp'
    },
    {
        nombre: 'Nike Quest Five',
        precio: 15000,
        id: 4,
        cantidad: 1,
        img: '../img/zapatillas3.webp'
    },
    {
        nombre: 'Nike W Air Max Up',
        precio: 34000,
        id: 5,
        cantidad: 1,
        img: '../img/zapatillas4.webp'
    },
    {
        nombre: 'Nike Reposto',
        precio: 25000,
        id: 6,
        cantidad: 1,
        img: '../img/zapatillas5.webp'
    },
    {
        nombre: 'Nike Air Zoom Winflo 8',
        precio: 29000,
        id: 7,
        cantidad: 1,
        img: '../img/zapatillas6.webp'
    },
    {
        nombre: 'Nike Stefan Janoski Max GS',
        precio: 22000,
        id: 8,
        cantidad: 1,
        img: '../img/zapatillas7.webp'
    }
]


const contenedorRopa = document.querySelector('#producto-container-ropa');
ropa.forEach(producto => {
    let cardProductoRopa = document.createElement('div');
    cardProductoRopa.classList.add("col-xl-3", "col-md-6", "col-sm-12");

    cardProductoRopa.innerHTML = `<div class="card cardProduct">
                                <div class="card-body">
                                <img src='${producto.img}' alt="" class='card-img-top'>
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">$${producto.precio}</p>
                                <button id="boton${producto.id}" class="button-add"> Agregar al Carrito </button>
                                </div>
                                </div>`


    contenedorRopa.appendChild(cardProductoRopa);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    });
});


const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = ropa.find((producto) => producto.id === id);
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
let url = 'link.mercadopago.com.ar/tiendaropaaff'
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
                icon:'success',
                title:'pago realizado',
                text:'Haz realizado el pago con exito'
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

