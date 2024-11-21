import React from 'react'
import './styles.css'
import { log } from 'console';

interface Props{
   todo:string;
   setTodo:React.Dispatch<React.SetStateAction<string>>
   handleAdd:(e:React.FormEvent)=>void
}


const InputFeild:React.FC <Props>= ({todo,setTodo,handleAdd}) => {
  //  console.log(todo);
  return  <form action="" className="input"  onSubmit={(e)=>{handleAdd(e)}}>
    <input  className='input_box' type="input" placeholder='Enter a task'
       value={todo}  onChange={
          (e)=> setTodo(e.target.value)
       }/>
    <button className='input_submit' type='submit' >Go</button>
  </form>
}

export default InputFeild