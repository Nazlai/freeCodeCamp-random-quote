"use strict";

const arr = [];

const url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10";
fetch(url,{
    headers: {
        "X-Mashape-Key": "BSr8VAMGVsmshMrjvIatMKuvCuXlp1pjvtYjsn64qCyr0JAw4O"
    }
})
  .then((res) => res.json())
  .then(function(data){
    Array.from(data).forEach(function(e){
        arr.push(e);
      })
    })
  .catch((err) => console.log(err));


const myFunction = (function(){
    const main = document.querySelector(".main");
    const inner = main.querySelector(".outer-border").querySelector(".inner-border");
    let author = inner.querySelector(".author").querySelector("p");
    let quote = inner.querySelector(".quote").querySelector("p");
    const windowFeature = `height = 500px, width = 450px, 
                          menubar = yes, toolbar = yes, resizable = yes, 
                          location = yes, titlebar = yes, status = yes`;

    function randomQuote(){
        let num = randomInt(arr.length);
        author.textContent = arr[num].author;
        quote.textContent = arr[num].quote;
    }

    function randomInt(e){
        return Math.floor(Math.random() * e);
    }

    function tweet(){
        let url = "https://twitter.com/intent/tweet?&text=";
        let text = quote.innerText;
        let authorTweet = author.innerText; 
        let tweetUrl = url + text + " -" + authorTweet;
        window.open(tweetUrl,"tweet", windowFeature);

    }

    return {
        randomQuote: randomQuote,
        tweet: tweet
      }
})();

const getQuote = document.getElementById("getQuote");
getQuote.addEventListener("click", myFunction.randomQuote);

const tweet = document.getElementById("tweet");
tweet.addEventListener("click", myFunction.tweet);
