/* output screen */
let outputscreen = document.getElementById("output-screen")

/* display screen */
function display(num) {
    outputscreen.value += num
}

/* calculator */
function calculator() {
    try {
        outputscreen.value = eval(outputscreen.value)
    }
    /* muncul invalid jika memasukan operator lebih dari 1 dan klik tombol = */
    catch (err) {
        alert("invalid")
    }
}

/* clr screen */
function bersihkan() {
    outputscreen.value = ""
}

/* del 1 angka */
function del() {
    outputscreen.value = outputscreen.value.slice(0, -1)
}
