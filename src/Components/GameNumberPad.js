import React, { useState } from 'react'

export default function GameNumberPad({ handleOkButton }) {

  const [userNumberDisplay, setUserNumberDisplay] = useState('')


  const handleNumberButtonClick = (number) => {
    //Handles all numeric buttons and backspace (except OK button)
    let newNumberString = userNumberDisplay;
    if (number === 'B' && newNumberString !== ''){
      let editedNumber = newNumberString.slice(0, -1)
      setUserNumberDisplay(editedNumber)
      return
    } else if (number === 'B' && newNumberString === ''){
      return
    } 
    newNumberString = userNumberDisplay + number
    setUserNumberDisplay(newNumberString)
  }



  return (
    <div>
      <div> 
        <input className="number-display-input" onChange={()=>{}} value={userNumberDisplay}></input>
      </div>
      <div className="number-buttons">
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("1")}>1️</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("2")}>2</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("3")}>3</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("4")}>4</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("5")}>5</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("6")}>6</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("7")}>7</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("8")}>8</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("9")}>9</button>
        <button className="number-buttons__backspace" onClick={() => handleNumberButtonClick("B")}>⬅</button>
        <button className="number-buttons__" onClick={() => handleNumberButtonClick("0")}>0</button>
        <button className="number-buttons__ok" onClick={() => handleOkButton(userNumberDisplay)}>OK</button>
      </div>      
    </div>
  )
}
