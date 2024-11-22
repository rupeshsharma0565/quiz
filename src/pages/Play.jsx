import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './Context'

export default function Play() {
    const { quizs } = useContext(MainContext);
    const [current,setCurrent] = useState(0)
//    console.log(quizs)
    //   console.log(current)

   
  return (
    <div className='shadow-lg w-[400px] mt-20 mx-auto py-10'>
      <Box quiz={quizs[current]} current= {current} />   
      <button disabled={quizs.length == current + 1 &&  true}  onClick={()=>{setCurrent(current + 1 )}} className={`bg-blue-500 rounded-md my-4 p-2 disabled:bg-orange-800`} >Next</button>
    </div>
  )
}

// function Box ({quiz}){
 const Box = ({quiz,current})=>{
    // console.log(quiz)
    const [ans,setAns] = useState(null)
    const answer = () => {
        setAns(quiz.correctanswer)
    }

    //jab jab quiz chle tab tab change kar dena

    useEffect(
        ()=>{
            setAns(null)
        },[quiz]   //jab jab quiz chle tab tab change kar dena
    )

    return ( 
        <div>
        <h1 className='text-3xl py-4 text-[red]'> { current + 1}) { quiz?.question } </h1>
        <div className='text-xl flex flex-col gap-2'>
            <div  onClick={answer}  className={`shadow py-1 cursor-pointer ${ans == 1 && "bg-red-800"}  `}>A) { quiz?.option1 }</div>
            <div  onClick={answer}  className={`shadow py-1 cursor-pointer ${ans == 2 && "bg-red-800"}  `}>B) { quiz?.option2 }</div>
            <div  onClick={answer}  className={`shadow py-1 cursor-pointer ${ans == 3 && "bg-red-800"}  `}>C) { quiz?.option3 }</div>
            <div  onClick={answer}  className={`shadow py-1 cursor-pointer ${ans == 4 && "bg-red-800"}  `}>D) { quiz?.option4 }</div>
        </div>

    </div>

    )
   
}
