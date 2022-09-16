const products = [
    {
        id: 1,
        image: "https://drive.google.com/file/d/11uc-59GI0zaNrYU9JiZVh75HasVozs_Q/view?usp=sharing",
        name: "Osito",
        description: "Osito incluye un peluche en forma de oso más una caja de infución de hierbas de 10 unidades.",
        price: 159.99,
        stock: 10
    },
    {
        id: 2,
        image: "https://drive.google.com/file/d/14PfLaUF6BBMtua7yyEycN7xvpwQTNmqL/view?usp=sharing",
        name: "Yoon",
        description: "Yoon incluye un peluche en forma de gato más una caja de infución de manzanilla de 10 unidades.",
        price: 169.99,
        stock: 10
    },
    {
        id: 3,
        image: "https://drive.google.com/file/d/13qTTCcqRQl7Gz5HZ_tln3KzqZaAAqz8p/view?usp=sharing",
        name: "Chanito",
        description: "Chanito incluye un peluche en forma de lobo más una caja de infución de limón de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 4,
        image: "https://drive.google.com/file/d/142BcrojPC52ZiCC76rjSJhFWM-ZOe101/view?usp=sharing",
        name: "Subin",
        description: "Subin incluye un peluche en forma de foca más una caja de infución de cedrón de 10 unidades.",
        price: 169.99,
        stock: 10
    },
    {
        id: 5,
        image: "https://drive.google.com/file/d/14JkUqppjAOyJ9uVwWs1C7kfpWdBKkwNd/view?usp=sharing",
        name: "Binnie",
        description: "Binnie incluye un peluche en forma de cerdo más una caja de infución de petalos de rosa de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 6,
        image: "https://drive.google.com/file/d/13qwDFz7hVFJJtfp_O7zvzSZSQ9fVNF2_/view?usp=sharing",
        name: "Filix",
        description: "Filix incluye un peluche en forma de pato más una caja de infución de vainilla de 10 unidades.",
        price: 169.99,
        stock: 10
    },
    {
        id: 7,
        image: "https://drive.google.com/file/d/142XnBSC-pOWyjcF3WAhluEvEcJRjfdVc/view?usp=sharing",
        name: "Bubbu",
        description: "Bubbu incluye un peluche en forma de oso más una caja de infución de té negro de 10 unidades.",
        price: 169.99,
        stock: 10
    },
    {
        id: 8,
        image: "https://drive.google.com/file/d/13h12RLxbdAyOW3VJmXoaQ1xIE7FBNguD/view?usp=sharing",
        name: "Rulito",
        description: "Rulito incluye un peluche en forma de hamster más una caja de infución de frutilla de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 9,
        image: "https://drive.google.com/file/d/14EaysWp7n6iCnEvLT_JwNWiFKmW4kisM/view?usp=sharing",
        name: "Hanny",
        description: "Hanny incluye un peluche en forma de ardilla más una caja de infución de frutos rojos de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 10,
        image: "https://drive.google.com/file/d/14HZNabrY8DLSLkiiZIIHpI34D9uusIwo/view?usp=sharing",
        name: "Mimi",
        description: "Mimi incluye un peluche en forma de pollo más una caja de infución de arándanos de 10 unidades.",
        price: 199.99,
        stock: 10
    },
    {
        id: 11,
        image: "https://drive.google.com/file/d/13beDo6GZedh5rZU65e11OLM4_kPANsWy/view?usp=sharing",
        name: "Jumpy",
        description: "Jumpy incluye un peluche en forma de rana más una caja de influción de té verde de 10 unidades.",
        price: 169.99,
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