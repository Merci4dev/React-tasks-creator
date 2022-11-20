// This component represents each row of the table

import React from 'react'

function Row({task, toggleTasks}) {
  return (
    <tr className='row__table'>
        {/*  clicking on checkbox adds the done property to the task object. the onChange executes the function that for this event*/}
        <td className='d-flex justify-content-between'>
            {task.name}
            <input 
                type='checkbox'
                checked={task.done}
                onChange={() => toggleTasks(task)}

                />
        </td>
    </tr>
    )
}

export default Row