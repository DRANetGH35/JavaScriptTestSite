
const modal = document.getElementById('modal')
const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')

openBtn.addEventListener('click', openModalPopup)
closeBtn.addEventListener('click', closeModalPopup)

function openModalPopup(){
    console.log('opening')
    modal.classList.add('show')
}

function closeModalPopup(){
    modal.classList.remove('show')
}