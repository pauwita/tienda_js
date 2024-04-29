// Base de datos de productos en formato JSON
const baseDatosProductos = [
    {
        "id": 1,
        "nombre": "Blusa Whip Neko",
        "precio": 30,
        "imagen": "img/articulos/miwako/ropa/ACDC-Rag-Blusa.jpg"
    },
    {
        "id": 2,
        "nombre": "Feudal Fantasy",
        "precio": 75,
        "imagen": "img/articulos/yukari/zapatos/Koi-Terciopelo.jpg"
    },
    {
        "id": 3,
        "nombre": "Medias Bows Negro",
        "precio": 8,
        "imagen": "img/articulos/yukari/accesorios/Medias.jpg"
    },
    {
        "id": 4,
        "nombre": "White Swan",
        "precio": 30,
        "imagen": "img/articulos/miwako/maquillaje/01-WhiteSwan-Paleta.jpg"
    }
];

// Función para mostrar todos los productos en la base de datos
function mostrarProductos() {
    console.log("Productos disponibles:");
    baseDatosProductos.forEach(producto => {
        console.log(`ID: ${producto.id}`);
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Precio: $${producto.precio}`);
        console.log(`Imagen: ${producto.imagen}`);
        console.log();
    });
}

// Función para buscar un producto por su ID
function buscarProductoPorId(id) {
    const productoEncontrado = baseDatosProductos.find(producto => producto.id === id);
    if (productoEncontrado) {
        console.log(`ID: ${productoEncontrado.id}`);
        console.log(`Nombre: ${productoEncontrado.nombre}`);
        console.log(`Precio: $${productoEncontrado.precio}`);
        console.log(`Imagen: ${productoEncontrado.imagen}`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Mostrar todos los productos en la base de datos
mostrarProductos();

// Buscar un producto por su ID
const idBuscar = 2;
console.log(`\nBuscando producto con ID ${idBuscar}:`);
buscarProductoPorId(idBuscar);

    document.addEventListener('DOMContentLoaded', function () {
        // Obtener todos los botones de compra
        const botonesCompra = document.querySelectorAll('.comprar-btn');

        // Agregar un listener de eventos a cada botón de compra
        botonesCompra.forEach(btn => {
            btn.addEventListener('click', agregarAlCarrito);
        });

        // Función para agregar un artículo al carrito
        function agregarAlCarrito(event) {
            const boton = event.target; // Botón que se ha pulsado
            const idArticulo = boton.dataset.id; // ID del artículo asociado al botón

            // Aquí podrías implementar la lógica para agregar el artículo al carrito,
            // por ejemplo, actualizar un objeto JavaScript que representa el carrito
            // y luego actualizar la vista del carrito en el aside.

            // Ejemplo de cómo obtener la información del artículo
            const articulo = document.getElementById(idArticulo);
            const nombreArticulo = articulo.querySelector('.descripcion p:first-child').textContent;
            const precioArticulo = articulo.querySelector('.descripcion strong:last-child p').textContent;

            // Ejemplo de cómo imprimir la información en la consola
            console.log(`Se ha añadido "${nombreArticulo}" al carrito por ${precioArticulo}`);

            // Aquí puedes implementar la lógica para actualizar la vista del carrito en el aside
        }
    });


