document.getElementById("counter-up").addEventListener("click", counterUp);
document.getElementById("counter-down").addEventListener("click", counterDown);
document.getElementById("counter-reset").addEventListener("click", counterReset);
document.getElementById("counter-save").addEventListener("click", counterSave);
document.getElementById("counter-load").addEventListener("click", counterLoad);

let count = 0;

counterLoad();

function updateCounter(){
    document.getElementById("counter").textContent = count
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
    console.log(count)
}
function counterLoad(){
    count = localStorage.getItem("count");
    console.log(count)
    updateCounter()
}