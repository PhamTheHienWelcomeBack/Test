function displayFinalResult(results) {
    results.forEach(function(result, index) {
        var imgSrc = "./Img/" + getRandomImage();
        result.src = imgSrc;
    });
}
function getRandomImage() {
    var images = ["bau.png", "cua.png", "tom.png", "ca.png", "huou.png", "ga.png"]
    var randomImg = Math.floor(Math.random() * images.length)
    return images[randomImg]
}
document.getElementById("start").addEventListener("click", function(event) {
    event.preventDefault()
    var resultImg = document.querySelectorAll(".part1 .result div img")
    let remaining = 100
    setTimeout(function() {
        var spinInterval = setInterval(function() {
            displayFinalResult(resultImg)
            remaining--
            if(remaining === 0) {
                clearInterval(spinInterval)
            }
        }, 10)
    }, 0)
})
const coinIndex = document.querySelector(".person .coin p")
let coin = 10
coinIndex.textContent = coin
const guessBauIndex = document.querySelector(".guess-bau p")
var guessBauImage = document.querySelector(".guess1 img")
let guessBau = 0
guessBauIndex.textContent = guessBau
const guessCuaIndex = document.querySelector(".guess-cua p")
var guessCuaImage = document.querySelector(".guess2 img")
let guessCua = 0
guessCuaIndex.textContent = guessCua
const guessTomIndex = document.querySelector(".guess-tom p")
var guessTomImage = document.querySelector(".guess3 img")
let guessTom = 0
guessTomIndex.textContent = guessTom
const guessCaIndex = document.querySelector(".guess-ca p")
var guessCaImage = document.querySelector(".guess4 img")
let guessCa = 0
guessCaIndex.textContent = guessCa
const guessHuouIndex = document.querySelector(".guess-huou p")
var guessHuouImage = document.querySelector(".guess5 img")
let guessHuou = 0
guessHuouIndex.textContent = guessHuou
const guessGaIndex = document.querySelector(".guess-ga p")
var guessGaImage = document.querySelector(".guess6 img")
let guessGa = 0
guessGaIndex.textContent = guessGa
var betAmounts = {
    "bau": 0,
    "cua": 0,
    "tom": 0,
    "ca": 0,
    "huou": 0,
    "ga": 0
}
guessBauImage.onclick = function() {
    if(coin > 0) {
        if(guessBau > 2) {
            alert("Không thể cược thêm")
        } else {
            coin = coin - 1
            coinIndex.textContent = coin
            guessBau = guessBau + 1
            guessBauIndex.textContent = guessBau
            betAmounts["bau"] = betAmounts["bau"] + 1
        }
    } else {
        alert("Hết tiền cược roài!")
    }
}
guessCuaImage.onclick = function() {
    if(coin > 0) {
        if(guessCua > 2) {
            alert("Không thể cược thêm")
        } else {
            coin = coin - 1
            coinIndex.textContent = coin
            guessCua = guessCua + 1
            guessCuaIndex.textContent = guessCua
            betAmounts["cua"] = betAmounts["cua"] + 1
        }
    } else {
        alert("Hết tiền cược roài!")
    }
}
guessTomImage.onclick = function() {
    if(coin > 0) {
        if(guessTom > 2) {
            alert("Không thể cược thêm")
        } else {
            coin = coin - 1
            coinIndex.textContent = coin
            guessTom = guessTom + 1
            guessTomIndex.textContent = guessTom
            betAmounts["tom"] = betAmounts["tom"] + 1
        }
    } else {
        alert("Hết tiền cược roài!")
    }
}
guessCaImage.onclick = function() {
    if(coin > 0) {
        if(guessCa > 2) {
            alert("Không thể cược thêm")
        } else {
            coin = coin - 1
            coinIndex.textContent = coin
            guessCa = guessCa + 1
            guessCaIndex.textContent = guessCa
            betAmounts["ca"] = betAmounts["ca"] + 1
        }
    } else {
        alert("Hết tiền cược roài!")
    }
}
guessHuouImage.onclick = function() {
    if(coin > 0) {
        if(guessHuou > 2) {
            alert("Không thể cược thêm")
        } else {
            coin = coin - 1
            coinIndex.textContent = coin
            guessHuou = guessHuou + 1
            guessHuouIndex.textContent = guessHuou
            betAmounts["huou"] = betAmounts["huou"] + 1
        }
    } else {
        alert("Hết tiền cược roài!")
    }
}
guessGaImage.onclick = function() {
    if(coin > 0) {
        if(guessGa > 2) {
            alert("Không thể cược thêm")
        } else {
            coin = coin - 1
            coinIndex.textContent = coin
            guessGa = guessGa + 1
            guessGaIndex.textContent = guessGa
            betAmounts["ga"] = betAmounts["ga"] + 1
        }
    } else {
        alert("Hết tiền cược roài!")
    }
}
document.getElementById("reset-guess").addEventListener("click", function(event) {
    event.preventDefault()
    const guessPoint = document.querySelectorAll(".guess p")
    guessPoint.forEach(function(guess) {
        guess.textContent = 0
        coin = coin + betAmounts["bau"] + betAmounts["cua"] + betAmounts["tom"] + betAmounts["ca"] + betAmounts["huou"] + betAmounts["ga"]
        coinIndex.textContent = coin
        for (const betType in betAmounts) {
            betAmounts[betType] = 0
        }
    })
})