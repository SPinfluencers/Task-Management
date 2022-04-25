// Store the wallet amount to your local storage with key "amount"

let s = localStorage.getItem("amount")

document.getElementById("wallet").innerText = s || 0

let money = document.getElementById("amount").value

function addToWallet() {

    window.location.reload()

    let x = document.getElementById("amount").value
    let money = +x

    let y = localStorage.getItem("amount") || 0
    let moneyWallet = +y

    let total = money + moneyWallet

    localStorage.setItem("amount", (total))

    document.getElementById("wallet").innerText = total
}