import {useState} from 'react'
export default function Score ({question}) {
    const [score , setScore] = useState(0)
    function scoreUp() {
        setScore(score + question.value)
    }
    function scoreDown() {
        if (score - question.value <= 0){
          setScore(0)  
        } else {
            setScore(score - question.value)
            console.log(question.value)
        }
        
    }
    function scoreReset() {
        setScore(0)
    }
     return(
        <>
        <h1><span>Score:</span> {score} </h1>
        <div id='scorebuttons'>
            <button id='scoreup' onClick={scoreUp}>Increase</button>
            <button id='scoredown' onClick={scoreDown}>Decrease</button>
            <button id='resetscore' onClick={scoreReset}> Reset </button>
        </div>
        </>
    )
}