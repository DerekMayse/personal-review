// In your JavaScript file, instantiate and assign the following variables with information about yourself:
// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// Log each variable to the console.


// const firstName = "Derek"
// const lastName = "mayse"
// const age = 27
// const likesTravel = true

// console.log (firstName, lastName, age, likesTravel)

// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.

// const movieArray = ["donnie darko", "scott pilgrim"]

// console.log (movieArray[0], movieArray[1])

// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

// const me ={
//     firstName:"Derek",
//     lastName:"Mayse",
//     age:27,
//     likesToTravel:true,
//     favoriteMovies:["Donnie Darko","Scott Pilgrim"]
// }

// console.log (me.firstName, me.lastName, me.age, me.likesToTravel, me.favoriteMovies[0], me.favoriteMovies[1])

// In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

// const temperature = 52
// const conditions = "sunny"
// const sunriseTime = "7:00am"
// const sunsetTime = "8:00pm"

// console.log (`its curently ${temperature} degrees and ${conditions}. The sun rose this morning at ${sunriseTime} and will set at ${sunsetTime}.`)


// Print the first high temperature to the console.
// Print the last low temperature to the console.
// What is the average high temperature from the data set?
// What is the average low temperature from the data set?

// var highTemperatures = [55, 57, 53, 47, 56, 50];
// var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

// console.log(highTemperatures[0], lowTemperatures[5],)


// In your JavaScript file, create an object that represents the current weather. Your can reuse your data from the first exercise. Your object should have the following properties:

// temperature
// conditions
// Log the current temperature to the console.

// Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")

// const weatherOject ={
//     conditions: "sunny",
//     temperature: 55
// }


// console.log (`its ${weatherOject.temperature} degrees and ${weatherOject.conditions}.`)



// var todaysWeather = {
//     temperature: {
//       high: 55,
//       low: 32
//     },
//     conditions: "sunny",
//     astronomy: {
//       sunrise: "7:43 AM",
//       sunset: "5:09 PM"
//     }
//   }

//   Log today's high temperature to the console.
// Log today's low temperature to the console.
// Log today's conditions to the console.
// Log today's sunrise time to the console.
// Use string template literals to create a more detailed description of today's weather.

// console.log (todaysWeather.temperature.high, todaysWeather.temperature.low, todaysWeather.conditions, todaysWeather.astronomy.sunrise)
// console.log (`Today will be ${todaysWeather.conditions}. The high will be ${todaysWeather.temperature.high} and the low will be ${todaysWeather.temperature.low}. Sunrise will be at ${todaysWeather.astronomy.sunrise} and the sun will set at ${todaysWeather.astronomy.sunset}`)

// Log today's weather conditions to the console.
// Log Saturday's high temperature to the console.
// Log Saturday's sunrise time to the console.
// Log Sunday's conditions to the console.
// Log Sunday's sunset time to the console.
// Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")

// var weatherForecast = [
//     {
//      day: "Today",
//      temperature: {
//        high: 55,
//        low: 32
//      },
//      conditions: "sunny",
//      astronomy: {
//        sunrise: "7:43 AM",
//        sunset: "5:09 PM"
//      }
//     },
//     {
//      day: "Saturday",
//      temperature: {
//        high: 50,
//        low: 29
//       },
//      conditions: "cloudy",
//      astronomy: {
//        sunrise: "7:44 AM",
//        sunset: "5:08 PM"
//      }
//     },
//     {
//      day: "Sunday",
//      temperature: {
//        high: 47,
//        low: 35
//       },
//      conditions: "chance of rain",
//      astronomy: {
//        sunrise: "7:45 AM",
//        sunset: "5:07 PM"
//      }
//     }
//    ]

//    console.log (`${weatherForecast[2].day} will have a high temperature of ${weatherForecast[2].temperature.high} and a low of ${weatherForecast[2].temperature.low} with a ${weatherForecast[2].conditions}. Sunrise will be at ${weatherForecast[2].astronomy.sunrise} and the sun will set at ${weatherForecast[2].astronomy.sunset}.`)



// Print the first grade in the array to the console.
// Print the last grade in the array to the console.
// Use JavaScript to find William's average grade.


// var williamGrades = [62, 97, 99, 85, 73, 97];

// console.log (williamGrades[0], williamGrades[5])



// var williamGrades = 0;
// for(var i in nums) {
//     williamGrades += nums[i]

//     var numsCnt = williamGrades.length;

//     var average = totalSum / numsCnt;
//     console.log('Average is: ' + average)


// In your JavaScript file, create an object that represents a famous movie star. Your object should have the following properties:

// firstName
// lastName
// age
// favoriteFood
// Log the movie star's favorite food to the console.

// Use string template literals to log their full name to the console.

// Use string template literals to log a sentence or two about your movie star to the console. (Example: "Dwayne The Rock Johnson is 46 years old. His favorite food is raw meat.")


// const starObject{
//     firstName: "Dwayne", 

   
// }


// var weatherData = {
//     "query": {
//      "count": 1,
//      "created": "2018-12-06T20:52:22Z",
//      "lang": "en-US",
//      "results": {
//       "channel": {
//        "units": {
//         "distance": "mi",
//         "pressure": "in",
//         "speed": "mph",
//         "temperature": "F"
//        },
//        "title": "Yahoo! Weather - Nome, AK, US",
//        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
//        "description": "Yahoo! Weather for Nome, AK, US",
//        "language": "en-us",
//        "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
//        "ttl": "60",
//        "location": {
//         "city": "Nome",
//         "country": "United States",
//         "region": " AK"
//        },
//        "wind": {
//         "chill": "14",
//         "direction": "68",
//         "speed": "36"
//        },
//        "atmosphere": {
//         "humidity": "90",
//         "pressure": "989.0",
//         "rising": "0",
//         "visibility": "11.0"
//        },
//        "astronomy": {
//         "sunrise": "11:38 am",
//         "sunset": "4:7 pm"
//        },
//        "image": {
//         "title": "Yahoo! Weather",
//         "width": "142",
//         "height": "18",
//         "link": "http://weather.yahoo.com",
//         "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
//        },
//        "item": {
//         "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
//         "lat": "64.499474",
//         "long": "-165.405792",
//         "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
//         "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
//         "condition": {
//          "code": "15",
//          "date": "Thu, 06 Dec 2018 11:00 AM AKST",
//          "temp": "28",
//          "text": "Blowing Snow"
//         },
//         "forecast": [
//          {
//           "code": "16",
//           "date": "06 Dec 2018",
//           "day": "Thu",
//           "high": "29",
//           "low": "25",
//           "text": "Snow"
//          },
//          {
//           "code": "26",
//           "date": "07 Dec 2018",
//           "day": "Fri",
//           "high": "27",
//           "low": "22",
//           "text": "Cloudy"
//          },
//          {
//           "code": "28",
//           "date": "08 Dec 2018",
//           "day": "Sat",
//           "high": "22",
//           "low": "8",
//           "text": "Mostly Cloudy"
//          },
//          {
//           "code": "34",
//           "date": "09 Dec 2018",
//           "day": "Sun",
//           "high": "7",
//           "low": "-11",
//           "text": "Mostly Sunny"
//          },
//          {
//           "code": "28",
//           "date": "10 Dec 2018",
//           "day": "Mon",
//           "high": "3",
//           "low": "-11",
//           "text": "Mostly Cloudy"
//          },
//          {
//           "code": "28",
//           "date": "11 Dec 2018",
//           "day": "Tue",
//           "high": "10",
//           "low": "2",
//           "text": "Mostly Cloudy"
//          },
//          {
//           "code": "26",
//           "date": "12 Dec 2018",
//           "day": "Wed",
//           "high": "9",
//           "low": "5",
//           "text": "Cloudy"
//          },
//          {
//           "code": "28",
//           "date": "13 Dec 2018",
//           "day": "Thu",
//           "high": "14",
//           "low": "8",
//           "text": "Mostly Cloudy"
//          },
//          {
//           "code": "30",
//           "date": "14 Dec 2018",
//           "day": "Fri",
//           "high": "13",
//           "low": "-3",
//           "text": "Partly Cloudy"
//          },
//          {
//           "code": "30",
//           "date": "15 Dec 2018",
//           "day": "Sat",
//           "high": "7",
//           "low": "-3",
//           "text": "Partly Cloudy"
//          }
//         ],
//         "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
//         "guid": {
//          "isPermaLink": "false"
//         }
//        }
//       }
//      }
//     }
//    }


//    You'll need to use bracket notation to mine into this object because the keys are strings.

// Use JavaScript to answer the following questions and log your answers to the console.

// What time was sunrise this morning in Nome, AK?
// What was the wind chill in Nome, AK when this data was generated?
// What was the visibility?
// What will be the high on Saturday the 8th?
// Use string template literals to build a sentence about the weather forecast for Saturday, Dec 15. (Example: "Saturday, December 15 will be Partly Cloudy with a high of 7 and a low of -3".)
// In the data, "Partly Cloudy" is capitalized, but in our sentence that doesn't really make sense. Look up the method to convert a string to lowercase.
// What is the average forecasted high temperature for the next seven days?


// console.log (weatherData["query"]["results"]["channel"]["astronomy"]["sunrise"], weatherData["query"]["results"]["channel"]["wind"]["chill"], weatherData["query"]["results"]["channel"]["item"]["forecast"][2]["high"])

// console.log (`${weatherData["query"]["results"]["channel"]["item"]["forecast"][9]["day"]}urday the ${weatherData["query"]["results"]["channel"]["item"]["forecast"][9]["date"]} will be ${weatherData["query"]["results"]["channel"]["item"]["forecast"][9]["text"]}. The high will be ${weatherData["query"]["results"]["channel"]["item"]["forecast"][9] ["high"]}degrees and the low will be ${weatherData["query"]["results"]["channel"]["item"]["forecast"][9]["low"]} degrees.`)

// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?
 
if (1 + 1 > 5){
    console.log ("true fact")
} else console.log ("lies")

if (4 * 5 <= 20){
    console.log ("true fact")
} else console.log ("lies")

if (6 - 2 >= 0){
    console.log ("true fact")
} else console.log ("lies")


// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.


const likesDogs = true
if (likesDogs === true ){
    console.log ("you are a dog person")
}else console.log ("you are a cat person")

// Declare a variable called birthYear and set it equal to your birth year.
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
// Try changing the value of birthYear and see what happens.

const birthYear = 1992

if (birthYear === 1992){
    console.log ("millennial")
} else console.log ("not a millennial")

console.log (`if you were born in ${birthYear} you are a millennial.`)

// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.

// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

// const me ={
//     name:("Derek"),
//     language:("English")
// }

// if (me.language === "English"){
//     console.log (`hello ${me.name}`)
// } else if (me.language === "spanish"){
//     console.log (`hola ${me.name}`)
// } else if (me.language === "french"){
//     console.log (`bonjour ${me.name}`)
// }

// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
// A variable called isHungry that stores a boolean representing whether or not you're hungry
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.

// const time = "5:00"
// const isHungry = false

// if (time === "7:30 am" || isHungry === true){
//     console.log ("its time for breakfast")
// } else if (time === "12:00 pm" || isHungry === true){
// console.log ("time for lunch")
// } else if (time === "7:00 pm" || isHungry === true){
//     console.log("time for dinner")
// } else if (isHungry === true){
//     console.log("time for a snack")
// }else console.log ("have a cookie anyways")




