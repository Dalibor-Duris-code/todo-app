import React, {useState} from 'react'

export const Form = ({addTodo}) => {

    const [value, setValue] = useState("")
    const handleSumbit = (e: { preventDefault: () => void; }) => 
    {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
    <form className='todoForm' onSubmit={handleSumbit}>
        <input type="text" className='todoInput' placeholder='Task..' onChange=
        {(e) => setValue(e.target.value)} 
        />
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}
