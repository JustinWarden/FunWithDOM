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

// exercise 8
var cohort1 = {
    name: "Cohort One",
    startDate: "January 15, 2018",
    endDate: "July 12, 2019",
    instructors: ["Kim", "Josh", "Jordan"],
    techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
  }

  var cohort2 = {
   name: "Cohort Two",
   startDate: "August 15, 2019",
   endDate: "Feb 10, 2020",
   instructors: ["Kim", "Josh", "Jordan"],
   techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
  }

  var cohort3 = {
   name: "Cohort Three",
   startDate: "Feb 20, 2020",
   endDate: "August 20, 2020",
   instructors: ["Kim", "Josh", "Jordan"],
   techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
  }

  function buildHtmlString(cohortObjectParameter){
      if(cohortObjectParameter === "cohort1"){
    document.querySelector("#cohort-one-container").innerHTML = `<h1>${cohort1.name}</h1><br>
    <h3>${cohort1.startDate}</h3><br>
    <h3>${cohort1.endDate}</h3><br>
    <li>${cohort1.instructors}<li>
    <li>${cohort1.techStack}<li>`

      } else if (cohortObjectParameter === "cohort2"){
        document.querySelector("#cohort-two-container").innerHTML = `<h1>${cohort2.name}</h1><br>
        <h3>${cohort2.startDate}</h3><br>
        <h3>${cohort2.endDate}</h3><br>
        <li>${cohort2.instructors}<li>
        <li>${cohort2.techStack}<li>`

      }else if (cohortObjectParameter === "cohort3"){
        document.querySelector("#cohort-three-container").innerHTML = `<h1>${cohort3.name}</h1><br>
        <h3>${cohort3.startDate}</h3><br>
        <h3>${cohort3.endDate}</h3><br>
        <li>${cohort3.instructors}<li>
        <li>${cohort3.techStack}<li>`
      }
  }
buildHtmlString("cohort3")