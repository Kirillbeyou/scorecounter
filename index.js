let scoreEl = document.getElementById("scorell")
let scoreEl2 = document.getElementById("scorell2")
let count = 0
let count2 = 0

function incr1(){
    count += 1
    scoreEl.innerText = count
}

function incr2(){
    count += 2
    scoreEl.innerText = count
}

function incr3(){
    count += 3
    scoreEl.innerText = count
}

function incr12(){
    count2 += 1
    scoreEl2.innerText = count
}

function incr22(){
    count2 += 2
    scoreEl2.innerText = count
}

function incr32(){
    count2 += 3
    scoreEl2.innerText = count
}