
/* <!--Show Slideshow data here--> */

const slideData = [
    "https://bit.ly/36i1SQY",
    "https://bit.ly/3Eg1rmz",
    "https://bit.ly/3xrJ9gU",
    "https://bit.ly/36dLNeX",
    "https://bit.ly/3xxLbft"
];


/* Slide Show */

// console.log(slideData)

localStorage.setItem("sideImages" , JSON.stringify(slideData));

let images_div = document.getElementById("slide_img")
let i = 0;

function start() {
    let images_arr = JSON.parse(localStorage.getItem("sideImages"))
    var img = document.createElement("img")

    setInterval(function() {
        if(i === images_arr.length) {
            i = 0;
        }

        img.src = images_arr[i]
        
        images_div.append(img)
        i++;
    }, 2000)
}
start()

/* Movie block Show */

const movie_data = [
   {
       img_url:"https://bit.ly/3JPJzQY",
       imdb_rating: 9,
       name:"K.G.F Chapter 2",
    },
    {
        img_url:"https://bit.ly/3xxAHg6",
        imdb_rating: 7,
        name:"Dr Strenge",
     },
     {
        img_url:"https://bit.ly/3jCS8E3",
        imdb_rating: 5,
        name:"RRR",
     },
     {
        img_url:"https://bit.ly/3ObvxfG",
        imdb_rating: 1,
        name:"Beast",
     },
     {
        img_url:"https://bit.ly/3Eha3JC",
        imdb_rating: 6,
        name:"Funstastic Beast",
     },
     {
        img_url:"https://bit.ly/3rnGUYg",
        imdb_rating: 8,
        name:"Chichore",
     },
     {
        img_url:"https://bit.ly/3jT2q33",
        imdb_rating: 3,
        name:"Housfull 4",
     },
     {
        img_url:"https://bit.ly/3OkHQXg",
        imdb_rating: 9,
        name:"Tanaji",
     },
     {
        img_url:"https://bit.ly/3Ej1Xk0",
        imdb_rating: 5,
        name:"Hate Story 2",
     },
     {
        img_url:"https://bit.ly/38IdOfz",
        imdb_rating: 7,
        name:"Jungli",
     },
     {
        img_url:"https://bit.ly/3E9v5Kr",
        imdb_rating: 5,
        name:"Raid",
     },
     {
        img_url:"https://bit.ly/37cvS1c",
        imdb_rating: 4,
        name:"Baby",
     },
     {
        img_url:"https://bit.ly/3jDoX3q",
        imdb_rating: 3,
        name:"Bajarangi Bhaijan",
     },
     {
      img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6182/1116182-v-a4ff74b3d55b",
      imdb_rating: 4,
      name:"Trusday",
   },
   {
      img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/610/1160610-v-7ea34ec67657",
      imdb_rating: 3,
      name:"83",
   },
   {
      img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1/1130001-v-88663d1d21bc",
      imdb_rating: 1,
      name:"Mari",
   },
   {
      img_url:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1608/1161608-v-8fdb21cf9c1c",
      imdb_rating: 0,
      name:"Red",
   },
   {
      img_url:"https://bit.ly/3viYBt0",
      imdb_rating: 6,
      name:"Baagi",
   },
   {
      img_url:"https://bit.ly/3jT2q33",
      imdb_rating: 3,
      name:"Housfull 4",
   },
   {
      img_url:"https://bit.ly/3Ec4gVJ",
      imdb_rating: 7,
      name:"Super 30",
   },
   {
      img_url:"https://bit.ly/3uBsDJt",
      imdb_rating: 5,
      name:"Badshaho",
   },
   {
      img_url:"https://bit.ly/3KKs1qw",
      imdb_rating: 8,
      name:"Bhag Milkha Bhag",
   },

]

// var all = document.getElementById("sort-buttons").value

// if(all == "all") {
//   window.location.reload
// }


window.addEventListener("load", function() {
})

document.getElementById("nameSort").addEventListener("change", sortNames);
function sortNames() {
   var selected = document.getElementById("nameSort").value;
   if(selected == "asc") {
      movie_data.sort(function(a,b) {
         if(a.name > b.name) return 1
         if(a.name < b.name) return -1
         return 0
      })
      displayPage(movie_data);
   }
   else {
      movie_data.sort(function(a,b) {
         if(a.name > b.name) return -1
         if(a.name < b.name) return 1
         return 0
      })
      displayPage(movie_data);
   }
}

document.getElementById("numberSort").addEventListener("change", sortNumber);

function sortNumber() {
   var selected = document.getElementById("numberSort").value;
   if(selected == "lth") {
      movie_data.sort(function(a, b) {
        return a.imdb_rating - b.imdb_rating
      })
      displayPage(movie_data)
   }
   else {
      movie_data.sort(function(a, b) {
         return b.imdb_rating - a.imdb_rating
      })
      displayPage(movie_data)
   }
}


function displayPage(movie_data) {

   document.getElementById("movies").innerHTML = ""
 
   movie_data.map(function(ele) {

      var box = document.createElement("div")
      box.style.cursor = "pointer"
  
      var image = document.createElement("img")
      image.src = ele.img_url
  
     //  var imd_rating = document.createElement("p")
     //  imd_rating.innerText = ele.imd_rating
  
      var name = document.createElement("p")
      name.innerText = ele.name
  
      box.append(image, name)
  
      document.querySelector("#movies").append(box)
  })
}

displayPage(movie_data)

