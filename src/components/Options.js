import React from 'react'
import { Form } from 'react-bootstrap'
export default function Options({question,answer,selectAnswer})
{

return (<>
 <Form.Check onClick={() => selectAnswer(answer)} type="radio" id={answer} name={question} label={answer} />

</>)

}