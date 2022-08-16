var text = document.getElementById("islem")
var text2 = document.getElementById("sayı")

var textuzunluk = document.getElementById("islem").textContent.length

var renk = "gri"

var islem



function m() {



    if (renk == "gri") {
        document.body.style.backgroundColor = "white"
        text.style.color = "black"
        renk = "beyaz"
    }
    else {

        document.body.style.backgroundColor = "rgb(26,26,26)"
        text.style.color = "white"

        renk = "gri"
    }

}

function c() {

    text.innerHTML = ""
    islem = ""

}
function sayı(num) {


    text.style.fontFamily = "Chakra Petch, sans-serif"

    if (text.innerHTML == "Error") { text.innerHTML = "" }
    else {

        if (num == "artı") {
            text.innerHTML = (text.innerHTML) + ("+")
        }
        else if (num == "eksi") {
            text.innerHTML = (text.innerHTML) + ("-")
        }
        else if (num == "carpma") {
            text.innerHTML = (text.innerHTML) + ("*")
        }
        else if (num == "bolme") {
            text.innerHTML = (text.innerHTML) + ("/")
        }
        else if (num == "nokta") {
            text.innerHTML = (text.innerHTML) + (".")
        }
        else { text.innerHTML = (text.innerHTML) + (num) }

    }


}


function esittir() {

    if (eval(text.innerHTML) == "Infinity") {

        text.style.fontFamily = "Eater, cursive"
        text.innerHTML = "Error"


    }
    else {
        text.style.fontFamily = "Chakra Petch, sans-serif"
        text.innerHTML = eval(text.innerHTML)
    }

}
