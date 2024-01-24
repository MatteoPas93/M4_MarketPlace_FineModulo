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

    const detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("id", "details-container");
    document.body.appendChild(detailsContainer);

    detailsContainer.innerHTML = ` <div class="container-card">
         <img class="img-dettagli" src="${data.imageUrl}" alt="Product Image">
           <h1> ${data.name} </h1>
            <p> Descrizione prodotto: ${data.description} </p>
              <p> Prezzo: ${data.price} € </p>
              </div>
                    `;
  } catch (error) {
    alert(error);
  }
}

details();
