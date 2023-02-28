import React, { useState } from 'react'
import "./style.css"
type USER={
    question:string;
    answer:string;
    qnumber:number;
    correct_answer:string;
  }
type props={
    qnumber:number;
    userAnswer:USER | undefined;
    callback:(radio:string)=>void;
    total:number;
    answers:string[];
    score:number;
    question:string;
};

const Questions:React.FC<props> = ({qnumber,question,userAnswer,callback,total,answers,score}) => {
  const [radio,setRadio] = useState<string>('');
    
    return (
    <>
    <div className="main2 flex gap-4 flex-col  p-6 w-96 bg-white m-auto">

        <p className="mb-4">
            {question}
        </p>
        {
            answers.map((answ,index)=>(
                <div className="ans" key={index}>
                <div><input disabled = {userAnswer ? true : false}  name='answer' value={answ} className="input" type="radio" onChange={(e)=>{setRadio(e.target.value)}}></input></div>
                <span className="text-lg font-sans font-semibold">{answ}</span>
                </div>
            ))
        }
    
        <button disabled ={userAnswer ? true : false} className='btn bg-stone-900 p-2 text-slate-50 block w-24 active:shadow-xl disabled:opacity-25' onClick={()=>{callback(radio)}}>Save</button>

    </div>
    
    </>
  )
}

export default Questions