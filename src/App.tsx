import React, { useState } from 'react';
import InputField from './Components/InputField'
import './App.css';
import { Todo } from './model';
import TodoList  from './Components/TodoList'


const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todoArr, setTodoArr] = useState<Todo[]>([])

  const handleAdd = (e : React.FormEvent<EventTarget>) : void => {
    e.preventDefault();
    if(todo) {
      setTodoArr([...todoArr, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoArr={todoArr} setTodoArr={setTodoArr} />
    </div>
  );
}

export default App;
