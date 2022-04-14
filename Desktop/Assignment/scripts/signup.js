
// let signupData = []

let dataArray = JSON.parse(localStorage.getItem("signupData")) || [];

// console.log(signupData)

function storedData(a, b, c, d) {
    this.name = a
    this.number = b
    this.email = c
    this.password = d
}

function myfunction(e) {

    e.preventDefault();

    var form = document.getElementById("add")

    var name = form.name.value

    var contact = form.number.value

    var email = form.email.value

    var password = form.password.value

    var x = new storedData(name, contact, email, password)

    dataArray.push(x)

    localStorage.setItem("signupData" , JSON.stringify(dataArray))

    window.location.href = "login.html"

    var name = form.name.value = null

    var contact = form.contact.value = null

    var email = form.email.value = null

    var password = form.password.value = null
}