const api = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(location.search);
const productsId = params.get("id");

async function details() {
  try {
    let response = await fetch(api + productsId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2OWYwM2RjZjZkNzAwMTgzODZmZDAiLCJpYXQiOjE3MDYxMDcxMDcsImV4cCI6MTcwNzMxNjcwN30.8b4I9XXkV9GritlMKOBybozeP41fVcTDVkXJIDOAMf4",
      },
    });
    const data = await response.json();

    let nav = document.createElement("nav");
    nav.setAttribute("class", "container-nav");
    document.body.appendChild(nav);

    const detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("id", "details-container");
    document.body.appendChild(detailsContainer);

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
            <button class="home"> <a href="./index.html"> Home </a> </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;

    detailsContainer.innerHTML = ` <div class="container-card">
         <img class="img-dettagli" src="${data.imageUrl}" alt="Product Image">
           <div class="info">
              <h1> ${data.name} </h1>
               <p> Descrizione prodotto: ${data.description} </p>
                <p> Prezzo: ${data.price} € </p>
              </div>
              </div>
                    `;
  } catch (error) {
    alert(error);
  }
}

details();
