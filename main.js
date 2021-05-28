let mole1 = document.querySelector(".mole1");
let mole2 = document.querySelector(".mole2");
let mole3 = document.querySelector(".mole3");
let mole4 = document.querySelector(".mole4");
let mole5 = document.querySelector(".mole5");
let mole6 = document.querySelector(".mole6");
let mole7 = document.querySelector(".mole7");
let mole8 = document.querySelector(".mole8");
let mole9 = document.querySelector(".mole9");
let good1 = document.querySelector(".good1");
let good2 = document.querySelector(".good2");
let good3 = document.querySelector(".good3");
let good4 = document.querySelector(".good4");
let good5 = document.querySelector(".good5");
let good6 = document.querySelector(".good6");
let good7 = document.querySelector(".good7");
let good8 = document.querySelector(".good8");
let good9 = document.querySelector(".good9");
let timer = document.querySelector(".timer");
let btn = document.querySelector(".btn");
let i = 0;
let begin;
let seconds = 60;

function brojac() {
    seconds -= 1;
    if (seconds == 0) {
        alert("Time is up! " + document.querySelector('.score').value);
        location.reload()
    }
    timer.innerText = "Time: " + seconds;
}

function start() {
    begin = setInterval(game, 1000);
}

function start2() {
    begin2 = setInterval(game2, 10000);
}

function game() {
    score = 0;
    brojac();
    start2();
    let random = Math.floor(Math.random() * 8);
    switch (random) {
        case 0:
            mole1.style.visibility = "visible";
            mole2.style.visibility = "hidden";
            mole3.style.visibility = "hidden";
            mole4.style.visibility = "hidden";
            mole5.style.visibility = "hidden";
            mole6.style.visibility = "hidden";
            mole7.style.visibility = "hidden";
            mole8.style.visibility = "hidden";
            mole9.style.visibility = "hidden";
            break;
        case 1:
            mole1.style.visibility = "hidden";
            mole2.style.visibility = "visible";
            mole3.style.visibility = "hidden";
            mole4.style.visibility = "hidden";
            mole5.style.visibility = "hidden";
            mole6.style.visibility = "hidden";
            mole7.style.visibility = "hidden";
            mole8.style.visibility = "hidden";
            mole9.style.visibility = "hidden";
            break;
        case 2:
            mole1.style.visibility = "hidden";
            mole2.style.visibility = "hidden";
            mole3.style.visibility = "visible";
            mole4.style.visibility = "hidden";
            mole5.style.visibility = "hidden";
            mole6.style.visibility = "hidden";
            mole7.style.visibility = "hidden";
            mole8.style.visibility = "hidden";
            mole9.style.visibility = "hidden";
            break;
        case 3:
            mole1.style.visibility = "hidden";
            mole2.style.visibility = "hidden";
            mole3.style.visibility = "hidden";
            mole4.style.visibility = "visible";
            mole5.style.visibility = "hidden";
            mole6.style.visibility = "hidden";
            mole7.style.visibility = "hidden";
            mole8.style.visibility = "hidden";
            mole9.style.visibility = "hidden";
            break;
        case 4:
            mole1.style.visibility = "hidden";
            mole2.style.visibility = "hidden";
            mole3.style.visibility = "hidden";
            mole4.style.visibility = "hidden";
            mole5.style.visibility = "visible";
            mole6.style.visibility = "hidden";
            mole7.style.visibility = "hidden";
            mole8.style.visibility = "hidden";
            mole9.style.visibility = "hidden";
            break;
        case 5:
            mole1.style.visibility = "hidden";
            mole2.style.visibility = "hidden";
            mole3.style.visibility = "hidden";
            mole4.style.visibility = "hidden";
            mole5.style.visibility = "hidden";
            mole6.style.visibility = "visible";
            mole7.style.visibility = "hidden";
            mole8.style.visibility = "hidden";
            mole9.style.visibility = "hidden";
            break;
        case 6:
            mole1.style.visibility = "hidden";
            mole2.style.visibility = "hidden";
            mole3.style.visibility = "hidden";
            mole4.style.visibility = "hidden";
            mole5.style.visibility = "hidden";
            mole6.style.visibility = "hidden";
            mole7.style.visibility = "visible";
            mole8.style.visibility = "hidden";
            mole9.style.visibility = "hidden";
            break;
        case 7:
            mole1.style.visibility = "hidden";
            mole2.style.visibility = "hidden";
            mole3.style.visibility = "hidden";
            mole4.style.visibility = "hidden";
            mole5.style.visibility = "hidden";
            mole6.style.visibility = "hidden";
            mole7.style.visibility = "hidden";
            mole8.style.visibility = "visible";
            mole9.style.visibility = "hidden";
            break;
        case 8:
            mole1.style.visibility = "hidden";
            mole2.style.visibility = "hidden";
            mole3.style.visibility = "hidden";
            mole4.style.visibility = "hidden";
            mole5.style.visibility = "hidden";
            mole6.style.visibility = "hidden";
            mole7.style.visibility = "hidden";
            mole8.style.visibility = "hidden";
            mole9.style.visibility = "visible";
            break;
    }
}

function game2() {
    let random2 = Math.floor(Math.random() * 8);
    switch (random2) {
        case 0:
            good1.style.visibility = "visible";
            good2.style.visibility = "hidden";
            good3.style.visibility = "hidden";
            good4.style.visibility = "hidden";
            good5.style.visibility = "hidden";
            good6.style.visibility = "hidden";
            good7.style.visibility = "hidden";
            good8.style.visibility = "hidden";
            good9.style.visibility = "hidden";
            break;
        case 1:
            good1.style.visibility = "hidden";
            good2.style.visibility = "visible";
            good3.style.visibility = "hidden";
            good4.style.visibility = "hidden";
            good5.style.visibility = "hidden";
            good6.style.visibility = "hidden";
            good7.style.visibility = "hidden";
            good8.style.visibility = "hidden";
            good9.style.visibility = "hidden";
            break;
        case 2:
            good1.style.visibility = "hidden";
            good2.style.visibility = "hidden";
            good3.style.visibility = "visible";
            good4.style.visibility = "hidden";
            good5.style.visibility = "hidden";
            good6.style.visibility = "hidden";
            good7.style.visibility = "hidden";
            good8.style.visibility = "hidden";
            good9.style.visibility = "hidden";
            break;
        case 3:
            good1.style.visibility = "hidden";
            good2.style.visibility = "hidden";
            good3.style.visibility = "hidden";
            good4.style.visibility = "visible";
            good5.style.visibility = "hidden";
            good6.style.visibility = "hidden";
            good7.style.visibility = "hidden";
            good8.style.visibility = "hidden";
            good9.style.visibility = "hidden";
            break;
        case 4:
            good1.style.visibility = "hidden";
            good2.style.visibility = "hidden";
            good3.style.visibility = "hidden";
            good4.style.visibility = "hidden";
            good5.style.visibility = "visible";
            good6.style.visibility = "hidden";
            good7.style.visibility = "hidden";
            good8.style.visibility = "hidden";
            good9.style.visibility = "hidden";
            break;
        case 5:
            good1.style.visibility = "hidden";
            good2.style.visibility = "hidden";
            good3.style.visibility = "hidden";
            good4.style.visibility = "hidden";
            good5.style.visibility = "hidden";
            good6.style.visibility = "visible";
            good7.style.visibility = "hidden";
            good8.style.visibility = "hidden";
            good9.style.visibility = "hidden";
            break;
        case 6:
            good1.style.visibility = "hidden";
            good2.style.visibility = "hidden";
            good3.style.visibility = "hidden";
            good4.style.visibility = "hidden";
            good5.style.visibility = "hidden";
            good6.style.visibility = "hidden";
            good7.style.visibility = "visible";
            good8.style.visibility = "hidden";
            good9.style.visibility = "hidden";
            break;
        case 7:
            good1.style.visibility = "hidden";
            good2.style.visibility = "hidden";
            good3.style.visibility = "hidden";
            good4.style.visibility = "hidden";
            good5.style.visibility = "hidden";
            good6.style.visibility = "hidden";
            good7.style.visibility = "hidden";
            good8.style.visibility = "visible";
            good9.style.visibility = "hidden";
            break;
        case 8:
            good1.style.visibility = "hidden";
            good2.style.visibility = "hidden";
            good3.style.visibility = "hidden";
            good4.style.visibility = "hidden";
            good5.style.visibility = "hidden";
            good6.style.visibility = "hidden";
            good7.style.visibility = "hidden";
            good8.style.visibility = "hidden";
            good9.style.visibility = "visible";
            break;
    }
}
mole1.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
mole2.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
mole3.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
mole4.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
mole5.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
mole6.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
mole7.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
mole8.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
mole9.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})

good1.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
good2.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
good3.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
good4.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
good5.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
good6.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
good7.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
good8.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
good9.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})