const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')



for(let card of cards) {

    card.addEventListener("click", function() {
        const siteId = card.getAttribute("id")//pegando o atributo id do card para usar como endereco do video
        modalOverlay.classList.add('active')//adicionando classe active para o modal poder ser aberto
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${siteId}`//iframe//to adicionando o endereco do video de forma dinamica

    })

}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')//Removendo a classe active para sumir com o modal quando eu fechar
    modalOverlay.querySelector("iframe").src = ""//Aqui eu estou fazendo com q o video pare na hora que eu fechar
})

