import React, { useState } from 'react'
import './accordian.css'
import {questions} from './api'
import MyAccordian from './MyAccordian'

const Accordian = () => {
  const [data,setdata]= useState(questions)
  
  
  
  return (
    <>
    <section className='main_div'>
    <h1>React Interview Question</h1>
      {
        data.map((curEle) => {
        return <MyAccordian key={curEle.id}{...curEle}/>  
        })
      }
     </section>
    </>
  );
}


export default Accordian;