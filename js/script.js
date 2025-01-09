// Elementi del DOM
const cardElm = document.getElementById("card");

// Funzione per generare le card
function generateCard() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(function (resp) {
        const newCard = resp.data;
        newCard.forEach(card => {
            const title = card.title;
            const img = card.url;
            cardElm.innerHTML +=
                `<div class="col p-2">
                    <div class="bg-light p-3 mt-4 p-3" id="card">
                      <img src="${img}" alt="img">
                      <p class="mt-2">${title}</p>
                    </div>
                </div>
            `;
        });
    });
}

generateCard()