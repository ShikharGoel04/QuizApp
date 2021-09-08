import logo from './logo.svg';
import './App.css';
import Home from './components/HomePage';
import React, {useState,useEffect} from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import { Route } from 'react-router';
import Answers from './components/Answers';
function App() {
  const [questions,setQuestions] = useState([])
   const [correctAnswers,setCorrectAnswers] = useState([])
    
useEffect(() => {
    let obj = {  
        method: 'GET',
        headers: {
          'X-Api-Key': '7jP7P5eJtlVoQk5Xr4qQyt6Zv3KSK6OQz6xXnuVk',
        }
    }
   fetch('https://quizapi.io/api/v1/questions',obj)
    .then((response) => response.json())
    .then((res) => setQuestions(res)  )
},[])
let quizQuestions=questions.slice(0,10);
let correct= [];
quizQuestions.map((item) => {correct.push(item.correct_answer)} )
console.log("correctAnswers",correct)

  return (
    <div>
   <Header/>
   <Route exact path="/" component={Home}/>
   <Route exact path="/quiz" render={()=> <Quiz questions={quizQuestions} correct={correct} />} />
   <Route exact path="/answers" render={(props) => <Answers {...props}/>} />
    </div>
  );
}

export default App;
