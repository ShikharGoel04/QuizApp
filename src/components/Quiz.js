import React,{useState,useEffect} from 'react';
import { Redirect } from 'react-router';

export default function Quiz({questions,correct}){
const [count,setCount] =useState(15);
const [index,setIndex] =useState(0);
const [answers,setAnswers] =useState([]);



useEffect(() => {
    const timer= setTimeout(
        () => {
            if(count===1)
            {
                
                    setIndex(i => i+1)
                    setCount(15)
                
                
            }
            else
            setCount(c => c-1)

        },1000
    )

    return () => clearInterval(timer)
},[count])


const selectAnswer = (e) => {
setAnswers(a => [...a, e.target.value])
setIndex(i => i+1)
setCount(15)
}


return (
    <><h1>Quiz Begins</h1>
    <p> Counter {count} </p>
   <p>{questions[index].question}</p>
   {Object.values(questions[index].answers).map((item,ind) => {
     return (  <><p> <input type="radio" name={index} key={ind} value={item}  onChange={(e) => selectAnswer(e)}/>{item}</p> </>)
    })}
   {index===9? <Redirect to ={{pathname:"/answers",state:{questions:questions,answers:answers,correct:correct}}}/> : ''}
    </>
)

}