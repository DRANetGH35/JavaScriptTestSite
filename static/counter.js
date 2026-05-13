document.addEventListener("DOMContentLoaded", function(){

    const CountEl = document.getElementById("counter")
    const btnUp = document.getElementById("counter-up")
    const btnDown = document.getElementById("counter-down")
    const btnReset = document.getElementById("counter-reset")
    const btnSave = document.getElementById("counter-save")
    const btnLoad = document.getElementById("counter-load")
    const MsgEl = document.getElementById("message");

    btnUp.addEventListener("click", counterUp);
    btnDown.addEventListener("click", counterDown);
    btnReset.addEventListener("click", counterReset);
    btnSave.addEventListener("click", counterSave);
    btnLoad.addEventListener("click", counterLoad);

    let count = 0;

    counterLoad();
    console.log(count)

    function showMessage(text) {
        MsgEl.innerHTML = text;
        setTimeout(function () {
            MsgEl.innerHTML = "";}, 3000);
        }


    function updateCounter(){
        CountEl.textContent = count
    }
    function counterUp(){
        count++
        updateCounter()
    }
    function counterDown(){
        if (parseInt(count) == 0){
        }
        else {
            count--
        }
        updateCounter()
    }
    function counterReset(){
        count = 0;
        updateCounter()
    }
    function counterSave(){
        localStorage.setItem("count", count);
        showMessage("Saved!")
    }
    function counterLoad(){
        saved = localStorage.getItem("count");
        if (saved == null){
            count = 0
        }
        else{
        count = saved
        }
        updateCounter()
    }
});