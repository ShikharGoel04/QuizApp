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
               
                    setAnswers(a=> [...a,"Not Answered"])
                    setIndex(i => i+1)
                    setCount(15)
                
                
            }
            else
            setCount(c => c-1)

        },1000
    )

    return () => clearInterval(timer)
},[count])
//  useEffect(() => 
//  {
//      console.log("answer updated")
//     setIndex(i => i+1)
//  },[answers])

const selectAnswer = (e) => {

setAnswers(a => [...a, e.target.value])  
setIndex(i => i+1)
setCount(15)


}
console.log("questions",questions)

return (
    <div className="heading">
    <p> Timer {count} </p>
   <p>Q {index+1} {questions[index].question}</p>
   {Object.values(questions[index].answers).map((item,ind) => {
     return ( item? <><p> <label key={index}><input type="radio" name={questions[index].question} key={ind} value={item}   onChange={(e) => selectAnswer(e)}/>{item}</label></p> </>:'')
    })}
   {index===10? <Redirect to ={{pathname:"/answers",state:{questions:questions,answers:answers,correct:correct}}}/> : ''}
 
  </div>
)
}