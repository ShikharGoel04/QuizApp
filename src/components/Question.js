import React from 'react';
export default function Question({options,index})
{
console.log(options)
return (<>
 
{
   
    Object.values(options).map((item) => {
        return (
            <>
            <input type="radio" name={index} value={item}/> {item}
            </>
        )
    })
}


</>)

}