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
</div>`


const putNameInput = document.getElementById("inputName");
const putDescriptionInput = document.getElementById("inputDescription");
const putBrandInput = document.getElementById("inputBrand");
const putImageUrlInput = document.getElementById("inputImageUrl");
const putPriceInput = document.getElementById("inputPrice");
const check = document.getElementById("check1")
const submitBtn = document.getElementById("submitBtn")

check.addEventListener("change", function () {
    submitBtn.classList.toggle("disabled");
  });


const functionEdit = async (prodotto) => {
  try {
    await fetch(api, {
      method: "PUT",
      body: JSON.stringify(prodotto),
      headers: {
        "Content-Type": "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2OWYwM2RjZjZkNzAwMTgzODZmZDAiLCJpYXQiOjE3MDYxMDcxMDcsImV4cCI6MTcwNzMxNjcwN30.8b4I9XXkV9GritlMKOBybozeP41fVcTDVkXJIDOAMf4",
      },
    });
  } catch (error) {
    console.error("error", error);
  }
};


submitBtn.addEventListener("click", async function () {
    let productEdit = {
             name: putNameInput.value,
             description: putDescriptionInput.value,
             brand: putBrandInput.value,
             price: putPriceInput.value,
            };
            console.log("I prodotti sono:" , productEdit);


await functionEdit(productEdit);
// window.location.assign("./backoffice.html");
});


