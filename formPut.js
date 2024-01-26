import { functionEdit } from "./functionedit.js";

const api = "https://striveschool-api.herokuapp.com/api/product/";

const nav = document.querySelector(".navbar");
nav.innerHTML = `<div class="container-fluid">
<h2> TechOnlineShop </h2>
 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="navbarNavDropdown">
   <ul class="navbar-nav">
     <li class="nav-item dropdown">
       <button class="form-add"> <a href="./formAdd.html"> Aggiungi prodotti </a> </button>
       <button class="backoffice"> <a href="./backoffice.html"> BackOffice </a> </button>
       <button class="home"> <a href="./index.html"> Home </a> </button>       
       </li>
   </ul>
 </div>
</div>`;

const putNameInput = document.getElementById("inputName");
const putDescriptionInput = document.getElementById("inputDescription");
const putBrandInput = document.getElementById("inputBrand");
const putPriceInput = document.getElementById("inputPrice");
const check = document.getElementById("check1");
const submitBtn = document.getElementById("submitBtn");

const params = new URLSearchParams(location.search);
const id = params.get("id");

check.addEventListener("change", function () {
  submitBtn.classList.toggle("disabled");
});

const getEdit = async (id) => {
  try {
    const response = await fetch(api + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2OWYwM2RjZjZkNzAwMTgzODZmZDAiLCJpYXQiOjE3MDYxMDcxMDcsImV4cCI6MTcwNzMxNjcwN30.8b4I9XXkV9GritlMKOBybozeP41fVcTDVkXJIDOAMf4",
      },
    });
    const data = await response.json();

    putNameInput.value = data.name;
    putDescriptionInput.value = data.description;
    putBrandInput.value = data.brand;
    putPriceInput.value = data.price;
  } catch (error) {
    console.error(error);
  }
};
getEdit(id);

submitBtn.addEventListener("click", async function () {
  let productEdit = {
    name: putNameInput.value,
    description: putDescriptionInput.value,
    brand: putBrandInput.value,
    price: putPriceInput.value,
  };
  console.log("I prodotti sono:", productEdit);

  await functionEdit(id, productEdit);
  window.location.assign("./backoffice.html");
});
