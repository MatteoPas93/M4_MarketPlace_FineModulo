const api = "https://striveschool-api.herokuapp.com/api/product/";
const products = [
  {
    name: "iPhone 14 Pro Max",
    description:
      "Il nuovissimo iPhone, con display Super Retina XDR da 6,7 pollici, processore A16 Bionic e sistema di fotocamere Pro di nuova generazione.",
    brand: "Apple",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.bLwuFUU7fWu-lEvMrxMPUQHaJI&pid=Api&P=0&h=180",
    price: 1.299,
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Il nuovo top di gamma di Samsung, con display AMOLED da 6,8 pollici, processore Snapdragon 8 Gen 2 e sistema di fotocamere quad con sensore principale da 200 MP.",
    brand: "Samsung",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.HyrRMJZ55kqXbtxKMzN8vQHaHm&pid=Api&P=0&h=180",
    price: 1.299,
  },
  {
    name: "MacBook Pro M2 Pro",
    description:
      "Il nuovo MacBook Pro da 14 pollici, con processore M2 Pro, display Liquid Retina XDR e fino a 24 ore di autonomia.",
    brand: "Apple",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.TkCj9J7zJCWYkkFyYwd_pgHaEK&pid=Api&P=0&h=180",
    price: 2.499,
  },
  {
    name: "Dell XPS 13 Plus",
    description:
      "Il nuovissimo XPS 13 di Dell, con display InfinityEdge da 13,4 pollici, processore Intel Core i7 di 12a generazione e tastiera a sfioramento.",
    brand: "Dell",
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.0jhL2o_M2IP5-M9DowQT5wHaFj&pid=Api&P=0&h=180",
    price: 1.999,
  },
  {
    name: "Asus ROG Zephyrus G15",
    description:
      "Il portatile da gaming di Asus, con display IPS da 15,6 pollici, processore AMD Ryzen 9 6900HS e scheda grafica Nvidia GeForce RTX 3080 Ti.",
    brand: "Asus",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.vkDguJgY1XthH-0sJhvbFAHaFj&pid=Api&P=0&h=180",
    price: 3.999,
  },
  {
    name: "Oculus Quest 2",
    description:
      "Il visore VR di punta di Meta, con display OLED da 1280 x 1920 pixel per occhio, processore Qualcomm Snapdragon XR2 e tracciamento oculare.",
    brand: "Meta",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.d0N6O4m_B0dyZoEbiuftjwHaEK&pid=Api&P=0&h=180",
    price: 399,
  },
  {
    name: "PlayStation 5",
    description:
      "La console di nuova generazione di Sony, con processore AMD Zen 2, GPU AMD RDNA 2 e SSD NVMe.",
    brand: "Sony",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.TYAlvjVTG8DtH9Wr5leqmAHaF2&pid=Api&P=0&h=180",
    price: 499,
  },
  {
    name: "Xbox Series X",
    description:
      "La console di nuova generazione di Microsoft, con processore AMD Zen 2, GPU AMD RDNA 2 e SSD NVMe.",
    brand: "Microsoft",
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.ffc9A_ZPTJPNtDUJTmdJOAAAAA&pid=Api&P=0&h=180",
    price: 499,
  },
];

let nav = document.createElement("nav");
nav.setAttribute("class", "container-nav");

let container = document.createElement("div");
container.setAttribute("class", "container-products");

const addFetch = () => {
  products.map(async (product) => {
    try {
      let response = await fetch(api, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2OWYwM2RjZjZkNzAwMTgzODZmZDAiLCJpYXQiOjE3MDYxMDcxMDcsImV4cCI6MTcwNzMxNjcwN30.8b4I9XXkV9GritlMKOBybozeP41fVcTDVkXJIDOAMf4",
        },
      });
      const data = await response.json();
    } catch (error) {
      console.error("error", error);
    }
  });
};
// addFetch();

const getFetch = async () => {
  try {
    const response = await fetch(api, {
      headers: {
        method: "GET",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2OWYwM2RjZjZkNzAwMTgzODZmZDAiLCJpYXQiOjE3MDYxMDcxMDcsImV4cCI6MTcwNzMxNjcwN30.8b4I9XXkV9GritlMKOBybozeP41fVcTDVkXJIDOAMf4",
        Accept: "application/json",
      },
    });
    const productsApi = await response.json();
    console.log("prodotti:", productsApi);

    document.body.appendChild(nav);
    document.body.appendChild(container);

    nav.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
    <h2> TechOnlineShop </h2>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNavDropdown">
       <ul class="navbar-nav">
         <li class="nav-item dropdown">
           <button class="form-add"> <a href="./formAdd.html"> Aggiungi prodotti </a> </button>
           <button class="backoffice"> <a href="./backoffice.html"> BackOffice </a> </button>
</a>         </li>
       </ul>
     </div>
   </div>
 </nav>`;

    productsApi.map((allProducts) => {
      container.innerHTML += `<div class="card col-4">
                <img class="img-product" src="${allProducts.imageUrl}"/>
            <div class="description-products">
               <h5 class="name-product"> ${allProducts.name} </h5>
               <h5 class="brand-product"> ${allProducts.brand} </h5>
               <p class="description-product"> ${allProducts.description} </p>
               <h4> ${allProducts.price} €</h4>
            </div>
              <div class="button-details">
                 <button class="details"> <a href="./productDetail.html?id=${allProducts._id}"> Dettagli </a> </button>
              </div>
      </div>`;
    });
  } catch (error) {
    console.error("error", error);
  }
};
getFetch();


