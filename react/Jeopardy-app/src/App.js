import './App.css';
import {useState, useEffect} from 'react';

import Questions from './components/Questions';
import Score from './components/Score';

function App() {

  let [question, setQuestion] = useState('')
  let [answer , setAnswer] = useState('')
  

  const handleQuestion = async () => {
    const response = await fetch('http://jservice.io/api/random')
    const data = await response.json()

    setQuestion(data[0])
    setAnswer('')
  }

  useEffect(() => {
    fetch('http://jservice.io/api/random')
    .then(res => {
      return res.json()
    })
    .then( data => {
      setQuestion(data[0])
      console.log(data[0])
    })
  }, [])
 
  function handleAnswer () {
    setAnswer('Question: What is ' + question.answer +'?')
  }
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Score question={question}/>
      <h2>Let's Play!</h2>
      <button onClick={handleQuestion}>Get Question</button>
      <Questions question={question}/>
      <button onClick={handleAnswer}>Click to Reveal Answer</button>
      <h1> {answer} </h1>
    </div>
  );
}

export default App;





































//import './App.css';
//import Jeopardy from './Jeopardy';

//function App() {
  //return (
   //<div className="App">
    // <Jeopardy/>
    //</div>
  //);
//}

//export default App;
