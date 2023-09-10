import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

export const Todo = ({task, toggleComplete}) => {
  return (
    <div className='todo'>
      <p onClick={() => {
        toggleComplete(task.id);
        console.log(task.completed);
        }}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}
