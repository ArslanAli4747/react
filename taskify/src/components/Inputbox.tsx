import React from 'react'
import "./style.css";

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleInput:(e:React.FormEvent)=>void;
}

const Inputbox:React.FC<Props> = ({todo,setTodo,handleInput}) => {
  return (
    <div className='input_con'>
        <input type="text" value={todo} onChange={(e)=>{
            setTodo(e.target.value)
            
        }}
        onKeyDown={(e=>{
            // console.log(e.code);
            if (e.code==="Enter"){
                handleInput(e)
                setTodo("") 
            }
            
        })}
        />
        <button onClick={(e)=>{
            handleInput(e)
            setTodo("")

        }}>GO</button>
    </div>
  )
}

export default Inputbox