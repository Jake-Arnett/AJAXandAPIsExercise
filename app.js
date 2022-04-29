// AJAX and APIs Exercise

// 1

// 1a. Change the string of JSON into JavaScript (It will be a JS object) and set the new value to a const variable called jokeJS1 (HINT: Use JSON.parse())

// 1b. Access the value for the "setup" key in the jokeJS1 object and set it to the inner text for the p1 variable/element (If done correctly the setup for the joke should display on the webpage)

// 1c. Access the value for the "punchline" key in the jokeJS1 object and set it to the inner text for the p2 variable/element (If done correctly the punchline for the joke should display on the webpage)

const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"dad","setup":"Why shouldn't you wear glasses when you play football?","punchline":"Because it's a contact sport.."}`;

const jokeJS1 = JSON.parse(`{"id":18,"type":"dad","setup":"Why shouldn't you wear glasses when you play football?","punchline":"Because it's a contact sport.."}`);
console.log(`Question 1`);
console.log(jokeJS1);

console.log(jokeJS1.setup);
p1.innerText = jokeJS1.setup;

console.log(jokeJS1.punchline);
p2.innerText = jokeJS1.punchline;



// 2
// Use the Friends API for questions 2 & 3 (Link below)…
// https://friends-quotes-api.herokuapp.com/

// 2a. Use the "Returns a single random quote." endpoint/URL to GET a Random quote using axios

// 2b. Use .then to create a function that sets the value returned from the axios GET request to a const variable called friendsJS2 (NOTE: You will need to create a function with a parameter. The parameter will hold the "resolved" value returned from the axios GET request).

// 2c. Inside of the same function, access the value for the "character" key in the friendsJS2 object and set it to the inner text for the p3 variable/element. Also, access the value for the "quote" key in the friendsJS2 object and set it to the inner text for the p4 variable/element (If done correctly the character and quote for the quote should display on the webpage)

// 2d. Finally, use .catch to create a function that would display the "rejected" value/error returned from the axios GET request in the console (NOTE: You will need a console log for this. Also, you will need to create a function with a parameter. The parameter will hold the "rejected" value/error returned from the axios GET request).

const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

.then(res => {
    console.log(`Question 2`);
    console.log(res);
    const friendsJS2 = res;
    console.log(friendsJS2);

    
    p3.innerText = friendsJS2.data.character;
    p4.innerText = friendsJS2.data.quote;
})

.catch (err => {
    console.log(`Question 2 Failed`);
    console.log(err);
});



// 3

// 3a. Use the "Returns a single random quote." endpoint/URL again to GET another Random Quote using axios

// 3b. Create a function that uses async/await called quoteFunc which sets the value returned from the axios GET request to a const variable called quoteJS3

// 3c. Inside of the same quoteFunc function, access the value for the "character" key in the quoteJS3 object and set it to the inner text for the p5 variable/element. Also, access the value for the "quote" key in the quoteJS3 object and set it to the inner text for the p6 variable/element (If done correctly the character and quote for the quote should display on the webpage)(NOTE: Don't forget the run the quoteFunc function)

// 3d. Finally, include try and catch inside the quoteFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).

const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);


async function quoteFunc(){
    try{
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);

        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;

    } catch (err){
        console.log(err);
    }
}
quoteFunc();



// 4

// Use the TVMazeAPI for question 4 (Link below)…
// https://www.tvmaze.com/api

// 4a. Using Axios, Async/await, and the "Episode by Number" endpoint/URL display the name of the final episode in season two of "The Mandalorian" TV show as the inner text for the p7 variable/element. Also, use tvMazeFunc for the name of the async function you create. If done correctly the name of the episode should display on the webpage. (NOTE: Don't forget to run the tvMazeFunc function)(Hint: id is 38963).

// 4b. Finally, include try and catch inside the tvMazeFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).

const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

const id = 38963;
const season = 2;
const episode = 8;
const tvMazeURL = `https://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${episode}`;

async function tvMazeFunc(){
  try {
    const show = await axios.get(tvMazeURL);
    console.log(`Question 4`);
    console.log(show);
    p7.innerText = show.data.name;
    // 4b
  } catch (err) {
    console.log(err);
  }
}
tvMazeFunc();