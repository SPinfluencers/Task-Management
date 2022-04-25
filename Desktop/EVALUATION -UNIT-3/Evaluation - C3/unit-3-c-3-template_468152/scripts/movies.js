// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// https://www.omdbapi.com/?apikey=a279110f&s=om%20shanti%20om

// let movie = localStorage.getItem("amount")

 let movies_div = document.getElementById("movies")

 let id;

async function seachMovies() {

try{
    const search = document.getElementById("search").value

    const res = await fetch(`https://www.omdbapi.com/?apikey=a279110f&s=${search}`)

    const data = await res.json()

    const movies = data.Search
    console.log(movies)
    return movies
}
catch (error) {
    console.log(error)
}
}

function appendMovies(data) {
    movies_div.innerHTML = null;

    data.forEach(function(e) {
    
        let Details = document.createElement("div")

        let poster = document.createElement("img")
        poster.src = e.Poster

        let Title = document.createElement("h2")
        Title.innerText = e.Title

        Details.append(poster , Title)

        movies_div.append(Details)
    })

}

async function main() {
    let data = await seachMovies();

    if(data == undefined) {
        return false
    }
    appendMovies(data)
}


function debounce(func , delay) {
    if(id) {
        clearTimeout(id)
    }

    id = setTimeout(function() {
        func()
    }, delay)
}
