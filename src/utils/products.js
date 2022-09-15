const products = [
    {
        id: 1,
        image: "../img/osito.jpg",
        name: "Osito",
        description: "Osito incluye un peluche en forma de oso más una caja de infución de hierbas de 10 unidades.",
        price: 159.99,
        stock: 10
    },
    {
        id: 2,
        image: "../img/osito.jpg",
        name: "Yoon",
        description: "Yoon incluye un peluche en forma de gato más una caja de infución de manzanilla de 10 unidades.",
        price: 169.99,
        stock: 10
    },
    {
        id: 3,
        image: "../img/osito.jpg",
        name: "Chanito",
        description: "Chanito incluye un peluche en forma de lobo más una caja de infución de limón de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 4,
        image: "../img/osito.jpg",
        name: "Subin",
        description: "Subin incluye un peluche en forma de foca más una caja de infución de cedrón de 10 unidades.",
        price: 169.99,
        stock: 10
    },
    {
        id: 5,
        image: "../img/osito.jpg",
        name: "Binnie",
        description: "Binnie incluye un peluche en forma de cerdo más una caja de infución de petalos de rosa de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 6,
        image: "../img/osito.jpg",
        name: "Filix",
        description: "Filix incluye un peluche en forma de pato más una caja de infución de vainilla de 10 unidades.",
        price: 169.99,
        stock: 10
    },
    {
        id: 7,
        image: "../img/osito.jpg",
        name: "Bubbu",
        description: "Bubbu incluye un peluche en forma de rana más una caja de infución de té verde de 10 unidades.",
        price: 169.99,
        stock: 10
    },
    {
        id: 8,
        image: "../img/osito.jpg",
        name: "Rulito",
        description: "Rulito incluye un peluche en forma de hamster más una caja de infución de frutilla de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 9,
        image: "../img/osito.jpg",
        name: "Hanny",
        description: "Hanny incluye un peluche en forma de ardilla más una caja de infución de frutos rojos de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 10,
        image: "../img/osito.jpg",
        name: "Mimi",
        description: "Mimi incluye un peluche en forma de pollo más una caja de infución de arándanos de 10 unidades.",
        price: 199.99,
        stock: 10
    }
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    })
  }
  

export default getProducts;