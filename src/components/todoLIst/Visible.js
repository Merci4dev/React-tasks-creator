
// this component make posible to hide or display the table. the button delete all the done checked taskd
import React from 'react'


function Visible({setShowCompleted, clearTasks, isChecked}) {

    // function to delete the tasks
    const hadleDelete = () =>{
        
        if(isChecked){

            if(window.confirm('Quiers eliminar la tarea?')){
                clearTasks();
            }
        }else{
            return;
        }
    }

    {/* button that makes a table appear and disappear */}
  return (
    
        <div className='d-flex justify-content-between bg-secondary text-white text-center p-2'>
            <input
                type='checkbox'
                onChange={e => setShowCompleted(e.target.checked)}
                checked={isChecked}
            />
            <label>Mostrar Task Done</label>
            <button className='btn btn-danger btn-sm' onClick={hadleDelete}>Clear</button>
        </div>

  )
}

export default Visible