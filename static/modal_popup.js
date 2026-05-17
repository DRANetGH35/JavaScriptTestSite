
const modal = document.getElementById('modal')
const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')

openBtn.addEventListener('click', openModalPopup)
closeBtn.addEventListener('click', closeModalPopup)

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModalPopup();
    }
})

document.addEventListener("keydown", function (event){
    if (event.key === "Escape") {
        closeModalPopup();
    }
})

function openModalPopup(){
    console.log('opening')
    modal.classList.add('show')
}

function closeModalPopup(){
    modal.classList.remove('show')
}