
var loginData = JSON.parse(localStorage.getItem("signupData"))

var count = 0
function myfunction(e) {
    e.preventDefault();

    loginData.map(function(el) {
        
        var form = document.getElementById("formLogin")

        var email = form.email.value

        var password = form.password.value

        var confm_Email = el.email
        var confm_pass = el.password

        // console.log(confmEmail)
        
       console.log(email)
       console.log(password)

        count = 0
        if(confm_Email == email && confm_pass == password) {
            count++
        }
    })

    if(count > 0) {
        alert("login Sucessful")
        window.location.href = "index.html"
        count = 0
    }
    else {
        alert ("Invalid Credential")
    }
}