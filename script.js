// exercise 1
var currentSpecial = {
    name: "Fried Green Tomato BLT",
    description: "So good you'll cry",
    price: 9.99
  }

  var htmlString = `
    <h3 class="dish-name">${currentSpecial.name}</h3>
    <p class="dish-description">
      ${currentSpecial.description}
    </p>
    <h5 class= "dish-price">${currentSpecial.price}</h5>
  `
  document.querySelector("#daily-special").innerHTML = htmlString;


// exercise 2
  var menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]

  for(var i = 0; i < menuItemsArray.length; i++){

    document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`

  }

//   exercise 3
var choresArray = ["wash dog","wash cat","wash myself", "wash car","wash clothes","wash dishes"]


function printChores (){
    for(i=0; i<choresArray.length; i++){
        document.querySelector("#choresContainer").innerHTML += `<ul>${choresArray[i]}</ul>`
    }

}
printChores()

// exercise 4
var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }
  function printMovie(){
    document.querySelector("#title").innerHTML = movieObject.title
    document.querySelector("#genre").innerHTML = movieObject.genre
    document.querySelector("#release-date").innerHTML = movieObject.releaseDate
  }
  printMovie()

//   exercise 5
var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

function printRestaurants (){
    for (i=0; i<downtownRestaurants.length; i++){
        document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
    }
}
printRestaurants()

// exercise 6
var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

function printSandwichToppings (){
    for (i=0; i<sandwichToppings.length; i++){
        document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`
    }
}
printSandwichToppings()

// exercise 7
var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true

    },
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true

    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false

    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false

    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]

     for(i=0; i<movieSchedule.length; i++){
        //  console.log(movieSchedule[i])
        document.querySelector("#movie-schedule").innerHTML += `${movieSchedule[i].title}<br>`
         document.querySelector("#movie-schedule").innerHTML += `${movieSchedule[i].rating}<br>`
         document.querySelector("#movie-schedule").innerHTML += `${movieSchedule[i].currentlyPlaying}<br>`
      }

      


