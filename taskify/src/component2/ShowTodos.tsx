import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Todo from '../model/Model1'
import Single from '../singlelist/Single'
import "./style.css"
interface Props{
    todos:Array<Todo>,
    SetTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
    completed:Array<Todo>,
    setcompleted:React.Dispatch<React.SetStateAction<Todo[]>>

}

const ShowTodos:React.FC<Props> = ({todos,SetTodos,completed,setcompleted}) => {
  return (
    <div className='list'>
      <Droppable droppableId="todoslist">
      {
        (provided)=>(
          <div 
          className='todos' ref={provided.innerRef}
          {...provided.droppableProps}
          >
          <h2>Todos</h2>
            {
                todos.map((todo,index)=>(
                  <Single key={index}  index={index} todo={todo} todos={todos} SetTodos={SetTodos}/>
                ))
            }
    {provided.placeholder}
        </div>
        )
      }
      </Droppable>
   
   <Droppable droppableId='completedtodos'>
    {
      (provided)=>(
        <div className='completed' ref={provided.innerRef} {...provided.droppableProps}>
        <h2>Completed</h2>
          {
              completed.map((todo,index)=>(
                <Single key={index} index={index} todo={todo} todos={completed} SetTodos={setcompleted}/>
              ))
          }
  {provided.placeholder}
      </div>
      )
    }
   </Droppable>

    </div>
  )
}

export default ShowTodos