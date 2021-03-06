import React, { useState, useEffect, useRef } from 'react';
import GameNumberDisplay from './GameNumberDisplay';
import GameNumberPad from './GameNumberPad';

export default function Game() {
  const [showNumbers, setShowNumbers] = useState(false);
  const [startButtonShow, setStartButtonShow] = useState(true)
  const [showNumberPad, setShowNumberPad] = useState(false)
  let [score, setScore] = useState(0)
  let [rounds, setRounds] = useState(0)

  let amountOfNumbersToDisplay = useRef(3)
  let randomNumberArray = useRef([])
  
  useEffect(() => {
    randomNumberArray.current = randomizeArray(amountOfNumbersToDisplay.current)
    console.log("use effect game", randomNumberArray.current)
    return () => {
      // clearInterval(interval);
      // clearTimeout(timeout);
    };
  },[])


console.log("Amount of numbers to display", amountOfNumbersToDisplay.current)
const increaseRoundsCounter = () => {
  setRounds(rounds = rounds + 1)
}

const handleStartButton = () => {
  //randomNumberArray = randomizeArray(4)
  increaseRoundsCounter()
  setShowNumbers(true)
  setStartButtonShow(false)
  //console.log("In gamee",randomNumberArray)
}

const hideNumbersAndDisplayPad = () => {
  setShowNumbers(false)
  setShowNumberPad(true)
}

// const showNumbersAndHideNumberPad = () => {
//   setShowNumbers(true)
//   setShowNumberPad(false)
// }

  const randomizeArray = (arrayLength) => {
    //Generates an random number array of length arrayLength 
    let randomNumber = ''
    let numberArray = []
    while (arrayLength > 0) {
      randomNumber = getRandomNumber(0,9)
      numberArray.push(getRandomNumber(0,9)) 
      arrayLength--;
    }
    console.log("inside generating randomize array function",numberArray)
    return numberArray
  }

  const getRandomNumber = (min, max) => {
    //Returns a random integer between min (inclusive) and max (inclusive).
    min = Math.ceil(min); 
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }


  const handleOkButton = (userInputNumber) => {
    //The OK button will assert right or wrong answer and will start a new round
    console.log("userInputNumber from component", userInputNumber)
    let answerArrayString = userInputNumber.split('')
    let answerArrayInt = []
    console.log("string answerArray", answerArrayString)
    for (let i = 0; i < answerArrayString.length; i++) {
      answerArrayInt.push(parseInt(answerArrayString[i]))
    }
    console.log("int array", answerArrayInt)
    console.log("originalArray", randomNumberArray.current)

    if (JSON.stringify(answerArrayInt)==JSON.stringify(randomNumberArray.current)) {
      console.log("Correct!")
      setScore(score = score + 1)
    };
    amountOfNumbersToDisplay.current++;
    randomNumberArray.current = randomizeArray(amountOfNumbersToDisplay.current);
    setRounds(rounds = rounds + 1);
    setShowNumbers(true)
    setShowNumberPad(false)

  }

  const restartGame = () => {
    window.location.reload();
  }

  return (
    <>
      <div className="score-info ">
      <div className="total-score ">Total Score: { score }</div>
      <div className="restart-button">
        <button className="restart-button" onClick={restartGame}>???</button>  
      </div> 
      <div className = "total-rounds">Total Rounds: { rounds }</div>
      </div>
      <div className="start-button-container">
        {startButtonShow && <button className="show-numbers-btn" onClick={()=> handleStartButton()}>Show Numbers</button>}
      </div>
      <div className="number-display-and-number-pad-container">
        {showNumbers && <GameNumberDisplay randomNumberArray={randomNumberArray.current} hideNumbersAndDisplayPad={hideNumbersAndDisplayPad}/>}
      {showNumberPad && <GameNumberPad handleOkButton={handleOkButton}/>}
      </div>
    </>
  )
}



 // let timer = setInterval(displayNumberWithTimer(),1000)
  
  // const displayNumberWithTimer = (index) => {
  //   //Wait 2 seconds between number displays  https://medium.com/swlh/using-timers-in-react-apps-a5f8c93241bf
  //   //const timeId = setTimeout(() => {console.log("waiting")}, 3000)
  //   setNumberDisplay(numberArray[index])
  // }