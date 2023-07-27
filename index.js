const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const result = document.querySelector(".container p")
const imgElement = document.querySelector('.guess-container img');

let valuesArray;
let keysArray;
let winnerButton;
let counter = 0;

button1.addEventListener("click", function() {
    checkChoise(1);
  });
  
  button2.addEventListener("click", function() {
    checkChoise(2);
  });
  
  button3.addEventListener("click", function() {
    checkChoise(3);
  });
  
  button4.addEventListener("click", function() {
    checkChoise(4);
  });



function checkChoise(button){
    if(button == winnerButton)
    {
      counter++;
      document.querySelector(".counter").innerHTML = counter;
      result.innerText = ""
    }
    else
    {
      counter = 0;
      document.querySelector(".counter").innerHTML = counter;
      result.innerText = "TRY AGAIN!"
    }
    onPageLoad();
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onPageLoad() {

    /* create array */
    valuesArray = Object.values(CountryList);
    keysArray = Object.keys(CountryList);
  
    const uniqueRandomArray = [];
    const uniqueRandomArray2 = [];
    
    /* random buttons */
    while (uniqueRandomArray.length < 4) {
        const randomNumber = getRandomInteger(1, 4);
        if (!uniqueRandomArray.includes(randomNumber)) {
          uniqueRandomArray.push(randomNumber);
        }
    }

    /* randoms flags */
    while (uniqueRandomArray2.length < 249) {
      const randomNumber2 = getRandomInteger(0, 249);
      if (!uniqueRandomArray2.includes(randomNumber2)) {
        uniqueRandomArray2.push(randomNumber2);
      }
   }

    

    if(uniqueRandomArray[0] == 1){
        imgElement.src = `https://flagsapi.com/${keysArray[uniqueRandomArray2[0]]}/flat/64.png`;
        winnerButton = 1;          
    }
    else if(uniqueRandomArray[1] == 2){
        imgElement.src = `https://flagsapi.com/${keysArray[uniqueRandomArray2[1]]}/flat/64.png`;
        winnerButton = 2; 
    }
    else if(uniqueRandomArray[2] == 3){
        imgElement.src = `https://flagsapi.com/${keysArray[uniqueRandomArray2[2]]}/flat/64.png`;
        winnerButton = 3; 
    }
    else{
        imgElement.src = `https://flagsapi.com/${keysArray[uniqueRandomArray2[3]]}/flat/64.png`;
        winnerButton = 4; 
    }

    button1.innerText = valuesArray[uniqueRandomArray2[0]];
    button2.innerText = valuesArray[uniqueRandomArray2[1]];
    button3.innerText = valuesArray[uniqueRandomArray2[2]];
    button4.innerText = valuesArray[uniqueRandomArray2[3]];


}