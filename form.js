const nav = document.createElement("nav");
nav.setAttribute("class", "navbar navbar-expand-lg bg-body-tertiary");
document.body.appendChild(nav);
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

const form = document.createElement("div");
form.setAttribute("class", "container-form");
document.body.appendChild(form);
form.innerHTML = `<form class="m-3 form">
                     <div class="mb-3">
                       <label for="nameInput" class="form-label">Name</label>
                       <input type="text" class="form-control" id="inputName" />
                     </div>
                     <div class="mb-3">
                        <label for="descriptionInput" class="form-label">Description</label>
                        <input type="text" class="form-control" id="inputDescription" />
                     </div>
                     <div class="mb-3">
                        <label for="brandInput" class="form-label">Brand</label>
                        <input type="text" class="form-control" id="inputBrand" />
                     </div>
                     <div class="mb-3">
                        <label for="urlInput" class="form-label">Image Url</label>
                        <input type="url" class="form-control" id="InputUrl" />
                     </div>
                     <div class="mb-3">
                        <label for="priceInput" class="form-label">Price</label>
                        <input type="number" class="form-control" id="inputPrice" />
                     </div>
                     <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="check1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                     </div>
                        <button id="submitBtn" type="button" class="disabled btn btn-primary">
                            Submit
                        </button>
                   </form>`;

const nameInput = document.getElementById("inputName");
const descriptionInput = document.getElementById("inputDescription");
const brandInput = document.getElementById("inputBrand");
const urlInput = document.getElementById("InputUrl");
const priceInput = document.getElementById("inputPrice");
const submitBtn = document.getElementById("submitBtn");
const check = document.getElementById("check1");

check.addEventListener("change", function () {
  submitBtn.classList.toggle("disabled");
});

const functionPost = async (prodotto) => {
  try {
    await fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: "POST",
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
  let newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: urlInput.value,
    price: priceInput.value,
  };

  await functionPost(newProduct);
  alert(nameInput.value + " Aggiunto con successo");
  window.location.assign("./index.html");
});
