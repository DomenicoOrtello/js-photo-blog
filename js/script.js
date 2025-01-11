// Elementi del DOM
const cardElm = document.getElementById("card");
const overlayElm = document.getElementById("overlay");
const closeOverlayBtn = document.getElementById("btn-chiudi");

// Funzioni per generare le card e renderle responsive, aggiunzione evento click
function generateCard() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(function (resp) {
        const newCard = resp.data;
        newCard.forEach(card => {
            const title = card.title;
            const img = card.url;
            cardElm.innerHTML +=
            `<div class="col-lg-4 col-sm-6 col-12 p-3 mt-4 card_rot" id="card-container">
                    <div class="bg-light p-3 mt-4 p-3" ms-shadow">
                    <img src="./img/pin.svg" alt="pin" class="pin">  
                    <img src="${img}" alt="img" class="card-img">
                      <p class="mt-2">${title}</p>
                    </div>
                </div>`;
        });

        const cards = document.querySelectorAll('#card-container');
        cards.forEach((card) => {
            card.addEventListener('click', () => {
                const cardImgElm = card.querySelector('.card-img')
                
                const cardSrcElm = cardImgElm.src
                
                const imgOverlayElm = document.getElementById('img-overlay')
                imgOverlayElm.src = cardSrcElm
                
                overlayElm.classList.remove('hidden')
                console.log(overlayElm)
            })
        })
    });
}

generateCard()

//Eventi
closeOverlayBtn.addEventListener('click', () =>{
    overlayElm.classList.add('hidden')
})