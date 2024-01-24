const nameInput = document.getElementById("inputName");
const descriptionInput = document.getElementById("inputDesc");
const brandInput = document.getElementById("inputBrand");
const urlInput = document.getElementById("InputUrl");
const priceInput = document.getElementById("inputPrice");
const submitBtn = document.getElementById("submitBtn");
const check = document.getElementById('exampleCheck1')

check.addEventListener("change", function() {
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
    };
  };


submitBtn.addEventListener("click", async function() {
    let newProduct = {
        name:nameInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        imageUrl: urlInput.value,
        price: priceInput.value
    };

    await functionPost(newProduct)
    window.location.assign("./index.html");
});
