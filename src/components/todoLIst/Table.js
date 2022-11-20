import React from 'react'
import Row from './Row'

function Table({tasks, toggleTasks, showCompleted = false}) {


    const tagkTableRow = (doneValue) =>{

        // por cada una de las tarea renderiza una fila con su id como kay
        return(
            tasks
            .filter(task => task.done === doneValue)
            .map(task => (
                <Row
                task={task}
                key={task.id}
                toggleTasks={toggleTasks}
                />
            ))
        )
    }

  return (
    
        <table className='table table-dark table-striped table-bordered border-secondary table__shadow'>
            <thead>
                <tr className='table-primary'>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                {
                    tagkTableRow(showCompleted)
                }
            </tbody>
        </table>
  )
}

export default Table