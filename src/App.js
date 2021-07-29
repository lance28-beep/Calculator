import React, { useState } from 'react'
import './App.css'
import Button from './Button'
import { buttonsOne, buttonsTwo } from './ButtonsList'
function App() {
  ///data button list
  const [buttons, setbuttons] = useState(buttonsOne)
  const [specialButtons, setSpecialButtons] = useState(buttonsTwo)
  ////DOM display
  const [currentDisplay, setcurrentDisplay] = useState('')
  const [prevDisplay, setprevDisplay] = useState('')
  ///logic
  const [operation, setoperation] = useState('')
  const [result, setresult] = useState(0)
  const [tem_result, setTem_result] = useState('')
  ////boolean statement
  const [haveDot, sethaveDot] = useState(false)
  const [errorInput, seterrorInput] = useState(false)

  ///////////////////////////
  // (main input handler)
  const inputHandler = (input) => {
    ///evaluate if dot exist.
    if (!specialButtons.includes(input)) {
      appendNumber(input)
    } else if (input === 'clear') {
      deleteNum()
    } else if (input === 'C A') {
      clear()
    } else if (input === '=') {
      equal()
    } else {
      chooseOperation(input)
    }
  }

  const equal = () => {
    if (!currentDisplay || !prevDisplay) {
      return
    }
    sethaveDot(false)
    compute()
    clearVar()
    setcurrentDisplay(result)
    setprevDisplay('')
    setTem_result('')
  }

  const deleteNum = () => {
    if (!currentDisplay) return
    // if (currentDisplay.endsWith('.')) {
    //   sethaveDot(false)
    // }
    setcurrentDisplay(currentDisplay.toString().slice(0, -1))
    seterrorInput(false)
  }

  const clear = () => {
    setcurrentDisplay('')
    setprevDisplay('')
    setoperation(undefined)
    seterrorInput(false)
    sethaveDot(false)
    setTem_result('')
  }

  const appendNumber = (input) => {
    if (input === '.' && !haveDot) {
      sethaveDot(true)
    } else if (input === '.' && haveDot) {
      return
    }
    ///evaluate if numbers exceeded
    if (currentDisplay.length >= 8) {
      seterrorInput(true)
      return
    }
    setcurrentDisplay(currentDisplay + input)
  }

  const chooseOperation = (input) => {
    if (!currentDisplay) {
      return
    }
    sethaveDot(false)
    const operationName = input
    if (prevDisplay && currentDisplay && operation) {
      compute()
    } else {
      setresult(parseFloat(currentDisplay))
    }
    clearVar(operationName)
    setoperation(operationName)
    console.log(result)
    // setprevDisplay(currentDisplay)
    // setcurrentDisplay('')
    // setoperation(input)
    // console.log(`${prevDisplay} ${operation} ${currentDisplay}`)
    // if (prevDisplay && operation && currentDisplay) {
    //   compute()
    // }
    //evaluate 3 input
    // lastInput result operation
  }

  const clearVar = (name = '') => {
    setprevDisplay(prevDisplay + currentDisplay + ' ' + name + ' ')
    setcurrentDisplay('')
    setTem_result(result)
  }

  const compute = () => {
    let lastInput = parseFloat(currentDisplay)
    let currentResult = parseFloat(result)
    console.log(isNaN(lastInput))
    console.log(`${prevDisplay} ${'-'} ${operation} ${'-'} ${currentDisplay}`)

    switch (operation) {
      case '+':
        setresult(currentResult + lastInput)
        break
      case '-':
        setresult(currentResult - lastInput)
        break
      case '*':
        setresult(currentResult * lastInput)
        break
      case '/':
        setresult(currentResult / lastInput)
        break
      // case '=':
      //   setresult(result)
      //   break
      default:
    }
    // console.log(result)
    // setcurrentDisplay(result)
    // setoperation(null)
    // setprevDisplay('')
  }

  return (
    <div className='App'>
      <div className='container___calculator'>
        <div className='display___input'>
          <span>{prevDisplay}</span>
          <span id='display'>
            {!errorInput ? currentDisplay : 'maximum input exceeded'}
          </span>
          <span>{tem_result}</span>
        </div>
        <div className='container___buttons'>
          {buttons.map((button) => (
            <Button {...button} inputHandler={inputHandler} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
