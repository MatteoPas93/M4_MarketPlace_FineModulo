const api = "https://striveschool-api.herokuapp.com/api/product/";

export const functionEdit = async (id, productEdit) => {
    try {
      const response = await fetch(api + id, {
        method: "PUT",
        body: JSON.stringify(productEdit),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE2OWYwM2RjZjZkNzAwMTgzODZmZDAiLCJpYXQiOjE3MDYxMDcxMDcsImV4cCI6MTcwNzMxNjcwN30.8b4I9XXkV9GritlMKOBybozeP41fVcTDVkXJIDOAMf4",
        },
      });
      if (response.ok) {
        alert("Prodotto aggiornato con successo!");
      };
    } catch (error) {
      console.error("error", error);
    };
  };