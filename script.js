let container = document.getElementById("container")

let url = "https://hp-api.onrender.com/api/characters"

fetch(url)
  .then((res) => res.json())
  .then((data) => 
  {

    let cardsHTML = "";
    let imagen = "";
    let repuesto = " https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/640px-HP_-_Harry_Potter_wordmark.svg.png"
    for (let i = 0; i < data.length; i++)
    {
      // imagen = data[i].image;
      // imagen == "" ? imagen = repuesto : imagen = imagen
        cardsHTML += `
        <div class="card">
            <p>${data[i].name}</p>
            <img src="${data[i].image ? data[i].image : repuesto}" alt="imagen">
            <p>${data[i].house ? data[i].house : "dementor"}</p>
        </div>
        `
    }

    container.innerHTML = cardsHTML

  });

  
  

// function crearCard(data) {
//http://upload.wikimedia.org/wikipedia/commons/thumn/9/9b/HP_-_Harry_Potter_wordmark.svg/640px-HP_-_Harry_Potter_wordmark.svg.png
//   let cardsHTML = ""

//   for (let i = 0; i < data.length; i++) {
//     let pokemonName = data[i].name;
//     let capitalizedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

//     cardsHTML += `
//     <div class="card">
//       <p class="nombre_card">${capitalizedPokemonName}</p>
//       <a href="${data[i].url}">${data[i].url}</a>
//     </div>
//     `
//   }
//   container.innerHTML = cardsHTML
// }