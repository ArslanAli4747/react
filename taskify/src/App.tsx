
import React, {  useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';
import ShowTodos from './component2/ShowTodos';
import Inputbox from './components/Inputbox';
import Todo from './model/Model1';
function App() {
  const [todo,setTodo] = useState<string>("")
  const [todos,SetTodos] = useState<Array<Todo>>([]);
  const [completed,setcompleted] = useState<Array<Todo>>([]);
  // console.log(todo);
  
  function handleInput(e:React.FormEvent){
    e.preventDefault();
    if(todo){
      SetTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
    }

  }

  function ondragend(result: DropResult){

    const {
      destination, source
    } = result;
    // console.log(result);
    if(!destination){
      return;
    }
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){
      return;
    }

    let add;
    let active = todos;
    let complete = completed
    if(source.droppableId === "todoslist"){
      add = active[source.index];
      active.splice(source.index,1);
    }
    else{
      add = complete[source.index]
      complete.splice(source.index,1)
    }

    if (destination.droppableId === "todoslist") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setcompleted([...complete]);
    SetTodos([...active]);
    console.log(todos);
    console.log(completed);
  }





  return (
    <DragDropContext onDragEnd={ondragend}>
      <div className='con'>
        <h1>Taskify</h1>
      <Inputbox todo={todo} setTodo={setTodo} handleInput={handleInput} />
      <ShowTodos todos={todos} SetTodos={SetTodos}
      completed={completed} setcompleted={setcompleted}
      />
      </div>

    </DragDropContext>
  );
}

export default App;
