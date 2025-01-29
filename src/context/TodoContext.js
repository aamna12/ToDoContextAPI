import React,{createContext,useState} from "react";

export const TodoContext=createContext();

export const TodoContextProvider=({children})=>{

    const [todos,setTodos]=useState([]);

    const addTodo=(task)=>{
        setTodos((prev)=>[...prev,{id: Date.now(), task, completed: false}])
    }

    const deleteTodo=(i)=>{
        setTodos((prev)=>prev.filter((task) => task.id !== i))
    }

    const editTask=(id,updatedTask)=>{
        setTodos(todos.map((todo)=>
        todo.id===id ? {...todo,task:updatedTask} : todo))
    }

    return(
        <TodoContext.Provider value={{todos, addTodo, deleteTodo, editTask}}>
            {children}
        </TodoContext.Provider>
    )
}