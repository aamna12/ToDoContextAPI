import React,{useContext, useState} from 'react';
import { TodoContext } from '../context/TodoContext';

function List() {

    const {todos,deleteTodo,editTask}=useContext(TodoContext);
    const [isEditing,setIsEditing]=useState(null);
    const [updatedTask,setUpdatedTask]=useState("");

    const handleEditTask=(id,task)=>{
        setIsEditing(id);
        setUpdatedTask(task);
    }

    const handleEditSave = (taskId) => {
        editTask(taskId, updatedTask);
        setIsEditing(null);
      };

  return (
    <>
    {
        todos ? 
        todos.map((t)=>(
            <div className='flex justify-between items-center bg-cyan-100 p-2 rounded-xl w-[700px]'
             key={t.id}>
                {
                    isEditing === t.id ?
                    <input type="text" className="w-full p-2 border-[1px] border-black
                     rounded-md mx-3" value={updatedTask}
                    onChange={(e) => setUpdatedTask(e.target.value)} />
                    :
                    <p className='text-[20px] font-bold mx-3'>{t.task}</p>
                }
                {
                    isEditing === t.id ?
                        <button onClick={() => handleEditSave(t.id)}
                          className="bg-green-800 text-white text-[20px] px-2 py-1 rounded-md">Save</button>
                          :
                          <div className='flex justify-center items-center' >
                            <i className="fa-regular fa-pen-to-square mx-2 text-[20px] text-yellow-700
                             cursor-pointer bg-white p-2 rounded-xl font-bold border-[1px]
                           border-black" onClick={()=>handleEditTask(t.id,t.task)}></i>
                            <i className="fa-regular fa-circle-xmark mx-2 text-[20px] text-red-700
                                cursor-pointer bg-white p-2 rounded-xl font-bold border-[1px]
                              border-black" onClick={() => deleteTodo(t.id)}></i>
                          </div>
                }
               
            </div>
        )) 
        : ""
    }
    </>
  )
}

export default List
