import React,{useContext, useState} from 'react';
import { TodoContext } from '../context/TodoContext';


function AddField() {

    const [task,setTask]=useState("");

    const {addTodo}=useContext(TodoContext);

    const handleAddField=(e)=>{
        e.preventDefault();
        if (task.trim()){
            addTodo(task);
            setTask("");
        }
    }

  return (
    <div className='mt-5 flex justify-center'>
      <input type="text" placeholder="add task..." className='p-2 rounded-lg w-[500px] bg-white
      border-[1px] border-black text-indigo-900' value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button className='mx-5 p-2 border-[2px] bg-indigo-900 border-white text-white rounded-xl
      text-[18px] hover:bg-green-800 hover:scale-110' onClick={handleAddField}>Add Task</button>
    </div>
  )
}

export default AddField
