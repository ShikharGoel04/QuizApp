import React,{useState} from 'react'
import { Row,Col,Container } from 'react-bootstrap'
export default function Answers(props)
{ 
    console.log("answers",props.location.state.answers)
    console.log("correct",props.location.state.correct)
    console.log("questions",props.location.state.questions)
    let correctAnswers=[];
    let answers=props.location.state.answers
    let correct=props.location.state.correct
    let questions=props.location.state.questions
    let marks=0;
    questions.map((item,index) => {
        
        switch(correct[index])
        {
            case "answer_a":
                correctAnswers.push(item.answers.answer_a)
                break;
            case "answer_b":
                correctAnswers.push(item.answers.answer_b)
                break;
            case "answer_c":
                correctAnswers.push(item.answers.answer_c)
                break;
            case "answer_d":
                correctAnswers.push(item.answers.answer_d)
                break;
            default:
                correctAnswers.push(item.answers.answer_a)
        }
    
})
    answers.map((item,index) => {
        return (
            
                item===correctAnswers[index]?(marks=marks+10):'')
    })
    return (<>
    <h1>Answers</h1>
    {}
     {}
  <Container>
       <div className="d-flex flex-nowrap">
       <div className="p-2">
          
           <h3>Marks Obtained : {marks}</h3>
           <h2>Your Answers</h2>
          
           {answers.map((item,index) => {
                // if(item===correctAnswers[index])
                // setMarks(m=> m+10)
               return (
                 
             <h4>{item}</h4>
             )
           })}
           </div>
           <div className="p-2">
           <h2>Correct Answers</h2>
           
            {correctAnswers.map((item) => {
                return (<h4>{item}</h4>)
            }) }
            </div>
            </div>
       </Container>
            {console.log(marks)}
    {console.log("correctAnswers",correctAnswers)}
    </>
)
}