import React from "react";
// import {Link} from "react-router-dom";
import "./realgame.css";
import Diecom from "./diecom.js"
import {nanoid} from "nanoid"
import Confetti from "react-confetti";
import Timer from "./Timer"


function RealGame() {

  const [timerReset, setTimerReset] = React.useState(false);


  const [randomNums, SetrandomNums] = React.useState(allnewdice)
  const [tenzies, Settenzies] = React.useState(false)

    React.useEffect(()=>{
        document.body.classList.add("try-body");
  
        return () =>{
          document.body.classList.remove("try-body")
        }
      },[])

      React.useEffect(() => {
        // console.log("dice array changed")
        const val = randomNums[0].value;
        const  sameValue = randomNums.every(obj => obj.value === val);
        const isheldtrue = randomNums.every(obj => obj.isHeld === true);
        if(sameValue && isheldtrue) {
          Settenzies(true)
        }


      },[randomNums])

      
      function allnewdice() {
        var newArr = [];
        for(let i = 1; i<=10; i++){
            const num = Math.ceil(Math.random() * 6); 
            newArr.push({value: num, isHeld: false, id:nanoid() });
        }
        return newArr
      }

      const Dies = randomNums.map(randomObj => <Diecom value = {randomObj.value} key = {randomObj.id} ID={randomObj.id} isheld = {randomObj.isHeld} tohold={Hold} /> )

      function RollDice() {
        // SetrandomNums(allnewdice)
        const Arrayagain = allnewdice();
        const arr= [];
        randomNums.map((obj,index) => (
           obj.isHeld === false ? arr.push(Arrayagain[index]) : arr.push(obj)
        ))

        SetrandomNums(arr);
      }

      function NewGame() {
        SetrandomNums(allnewdice)
        Settenzies(false)
        setTimerReset(true)

      }
     
      function Hold(id) {
        // console.log(id);
        const againarr = [];
        randomNums.map((obj) => (
          obj.id === id ? againarr.push({...obj, isHeld: !obj.isHeld}) : againarr.push(obj)  ))

        SetrandomNums(againarr)

      }

      React.useEffect(() => {
        if (timerReset) {
          setTimerReset(false);
        }
      }, [timerReset]);
      
    return (
      <>
        <Timer won={tenzies} reset={timerReset}/>
        <main>
          <h1 className="tenName">Tenzies</h1>
         <div className="diedad">
          {Dies}
         </div>
         <button className="roll-btn" onClick={!tenzies ? RollDice :  NewGame}>{!tenzies ? "Roll": "New Game"}</button>
         
        </main>
        {tenzies ? <Confetti className="confetti" /> : null}
     </>
    )


}

export default RealGame;