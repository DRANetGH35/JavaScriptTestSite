let count = 0;

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
function saveCount(){
    localStorage.setItem("count", count);
    console.log(count)
}
function loadCount(){
    count = localStorage.getItem("count");
    console.log(count)
    updateCounter()
}