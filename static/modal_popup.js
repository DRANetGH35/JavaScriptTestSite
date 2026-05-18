
const modal = document.getElementById('modal')
const modal_box = document.getElementById("modal-box")
const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')

const focusableEls = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
const firstFocusable = focusableEls[0];
const lastFocusable = focusableEls[focusableEls.length - 1];

openBtn.addEventListener('click', openModalPopup)
closeBtn.addEventListener('click', closeModalPopup)

modal.addEventListener('keydown', (e) => {
    if (e.key != "Tab") return;
    if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
        }
    } else {
        if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
        }
    }
});

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
    modal.classList.add('show');
    modal_box.focus();
    console.log(document.activeElement);
}

function closeModalPopup(){
    modal.classList.remove('show')
}