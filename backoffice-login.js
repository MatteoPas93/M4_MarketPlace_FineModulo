const nav = document.createElement("nav");
nav.setAttribute("class", "container-nav");
document.body.appendChild(nav);

const containerBody = document.createElement("div");
containerBody.setAttribute("class", "container-body");
document.body.appendChild(containerBody);

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
        <button class="home"> <a href="./index.html"> Home </a> </button>         </li>
    </ul>
  </div>
</div>
</nav>`

containerBody.innerHTML = `<div class="container-form">
                             <h2>Inserisci Password</h2>
                              <form id="login-form">
                               <label for="password">Password:</label>
                                 <input type="password" id="password" name="password" required>
                                  <button type="submit">Accedi</button>
                             </form>
                            </div>`;

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const passwordInput = document.getElementById("password");

    if (passwordInput.value === "NewAdmin") {
      window.location.href = "./backoffice.html";
    } else {
        alert("Password errata.");
        passwordInput.value = ""
    }
  });
