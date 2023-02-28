import React, { useEffect, useRef, useState } from 'react'
import Todo from '../model/Model1'
import './style.css'
import { MdDone} from 'react-icons/md';
import { MdDelete} from 'react-icons/md';
import { MdModeEdit} from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';



interface Props{
    todo:Todo
    todos:Array<Todo>,
    SetTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
    index:number
}
const Single:React.FC<Props> = ({todo,todos,SetTodos,index}) => {
const [editMode,setEditMode] = useState<boolean>(false)
const [editTodo,setEditTodo] = useState<string>(todo.todo)
const inputref = useRef<HTMLInputElement>(null)
// const id = Math.random()*5+index

function handleDone(id:number){
    
    SetTodos(
        todos.map(todo=>
            todo.id === id ? {...todo,isDone:!todo.isDone}:todo
            
        )
    )
}

function handleDelete(id:number){
    SetTodos(
        todos.filter(todo=>
            todo.id!==id)
    )
}

function handleEdit(e:React.FormEvent,id:number){
    
    e.preventDefault();
    SetTodos(todos.map(todo=>(
        todo.id===id?{...todo,todo:editTodo}:todo
    )))
    setEditMode(false)

    // return(
    //     // <input type="text" value={editTodo} onChange={setEditTodo(e.target.value)} />
    // )

}
useEffect(()=>{
    inputref.current?.focus()
},[editMode])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
        {
        (provider)=>(
                
    <div className='single' {...provider.draggableProps}
    {...provider.dragHandleProps}
    ref={provider.innerRef}
    >
    <div className="text">
    {
    editMode ? (
        <input ref={inputref} type="text" className='edittodo' value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}}
        onKeyDown={(e)=>{
            if(e.code==="Enter"){
                handleEdit(e,todo.id)
            }
        }} 
    />
    ):
        !todo.isDone ?(
            <span>{todo.todo}</span>
        ):(
            <s>{todo.todo}</s>
        )
    

    }
    </div>
    <div className="icon">
        <span onClick={()=>{handleDone(todo.id)}}>
        <MdDone className='ion'/>
        </span>
        <span>
        <MdDelete className='ion' onClick={()=>{handleDelete(todo.id)}}/>
        </span>
        <span>
        <MdModeEdit className='ion'  onClick={()=>{
           if(!editMode && !todo.isDone){
            setEditMode(!editMode)
           }
        }}/>
        </span>
    </div>
</div>
)
}
    </Draggable>
  )
}

export default Single