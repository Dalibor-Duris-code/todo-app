import React, { useState, useEffect } from 'react';
import { Form } from './Form';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const FormWrapper = () => {
  
  const [todos, setTodos] = useState<{ id: string; task: string; completed: boolean; isEditing: boolean }[]>([]);
  
  console.log(todos);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || "") ;
    setTodos(savedTodos);
  }, [])
  

  const addTodo = (todo: string) => {
    const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id : string) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };


  return (
    <div className='todoWrapper'>
      <Form addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

