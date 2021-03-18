import styled from "styled-components";

import dynamic from "next/dynamic";
import { useState,useEffect } from "react";
import Alert from "../../scripts/alert/alert";

const Head = dynamic(() => import("../../components/Head"));
const Subtitle = dynamic(() => import("../../components/Subtitle"));
const Back = dynamic(() => import("../../components/Back"));

const CalculatorContainer = styled.section`
  div:first-child {
    background-color: #f5f5f5;
    width: 100%;
    min-height: 220px;
    display:flex;
    align-items: flex-end;
    justify-content: flex-end;

    .lastNumber{
      color: #7c7c7c;
      font-size: 30px;
      align-self: flex-end;
      margin-right: 10px;
    }

    .currentNumber {
      margin: 10px;
      font-size: 50px;
      color:#282f3b;
    }
  }
  div:last-child {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    button {
      color:#555;
      border: 1px solid #e5e5e5;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 90px;
      min-height: 100px;
      flex: 2;
      font-size: 24px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const buttons = [
  "AC",
  "DEL",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "%",
  "/",
  "*",
  "-",
  "+",
  ".",
  "+/-",
  "=",
];

export default function Calendar() {
  const [currentNumber,setCurrentNumber] = useState("");
  const [lastNumber,setLastNumber] = useState("");
  
  useEffect(() => {
    if(Number(lastNumber) !== NaN) return;
    
    setLastNumber(lastNumber.replace(/\D/gim, '') || "0")
  },[])

  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const [ firstNumberStr,operator,secondNumberStr ] = splitNumbers
    const firstNumber = parseFloat(firstNumberStr)
    const secondNumber = parseFloat(secondNumberStr)
    
    switch(operator){
      case '+':
        setCurrentNumber((firstNumber + secondNumber).toString())
        return;
      case '-':
        setCurrentNumber((firstNumber - secondNumber).toString())
        return;
      case '*':
        setCurrentNumber((firstNumber * secondNumber).toString())
        return;
      case '/':
        setCurrentNumber((firstNumber / secondNumber).toString())
        return;
    }
  }

  const actionsOfDiferentButtons = {
    DEL:() => {
      setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
      return;
    },
    AC:() => {
      setCurrentNumber('')
      setLastNumber('')
      return
    },
    '=':() => {
      setLastNumber(currentNumber + ' = ')
      calculator();
      return;
    },
    '+/-':() => {
      // const copyOfCurrentNumber = currentNumber;
      // copyOfCurrentNumber.replace('+','P').replace('-','M')
      // setCurrentNumber(copyOfCurrentNumber.replace('P','-').replace('M','+'))
      // console.log(currentNumber)
      // return;
      return Alert({title:"This doesn't work yet",footer:""});
    }
  }

  function handleInput(button:string | number) {
    if(button == "+" || button == "-" || button == "*" || button == "/"){
      return setCurrentNumber(`${currentNumber} ${button} `);
    }
    if(actionsOfDiferentButtons[button] != undefined) return actionsOfDiferentButtons[button]()
    return setCurrentNumber(currentNumber + button)
  }

  return (
    <>
      <Head>
        <title>Calculator | Davidlpc1</title>
      </Head>
      <Back href="/" />
      <Subtitle>Calculator</Subtitle>
      <CalculatorContainer>
        <div>
          <p className="lastNumber">{lastNumber}</p>
          <p className="currentNumber">{currentNumber}</p>
        </div>
        <div>
          {buttons.map((button) => (
            <button key={button} onClick={() => handleInput(button)}style={
              button === "=" ? { backgroundColor:'#9DBC7B',color:'#000' } : {}
            }>{button}</button>
          ))}
        </div>
      </CalculatorContainer>
    </>
  );
}
