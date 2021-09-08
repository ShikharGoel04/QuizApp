import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
export default function Home(){
  
return(
    <>
    <h1>Instructions</h1>
    <p>You will be given 15 seconds for each answer</p>
    <p>When you answer the question, it will automatically move to next question</p>
   <Link to="/quiz"> <input type="button" value="Start Quiz"/></Link> 
    </>
);
}