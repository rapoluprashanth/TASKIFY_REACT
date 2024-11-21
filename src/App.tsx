import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import Todo from './model';
import { log } from 'console';


// let num:number=5
// let n:number | string    // union that holds both values
// n="hello"  
// n=25
// let name:string="peru"

// let printName:(name:string)=>void=(name:string)=>{
//      console.log(name)
// }
// printName("prashanth")

// // function printName(name:string){
// //    console.log(name)
// // }
// // printName("prashanth")
// let isTrue:Boolean=true
// let arr:number[]=[1,2,3]
// let role:[number,string]=[5,"xyz"]  // a tuple 

// // type Person={             // object by type 
// //   name:string
// //   age?:number
// // }

// interface Person{
//   name:string
//   age?:number
// }

// let person:Person={
//      name:"jin"
// }

// let lotsOfPerson:Person[]=[
//   {
//     name:"jin"
//   },
//   {
//      name:"jin"
//   },
//   {
//     name:"jin"
//   }
  
// ]

// let add:(num:number)=>number=(num:number)=>{
//   return num;
// }

// // alias as 2 types one is type & interface

// // type
// type X={
//   a:string
//   b:number
// }

// type Y=X & {    // union 
//   c:string
//   d:number
// }

// let y:Y={      
//    a:"x",
//    b:5,
//    c:"y",
//    d:10
// }

// // interface
// interface A{
//   a:string
//   b:number
// }

// interface B extends A{    // union 
//   c:string
//   d:number
// }

// let b:B={      
//    a:"x",
//    b:5,
//    c:"y",
//    d:10
// }


// // special cases
// type arr={
//   ar:number[]
// }
  
// interface arr1 extends arr{  
//   n1:number
// }

// interface cricket{
//   bat:string
// }

// type T20= cricket & {
//   match:number
// }

// let q:T20={
//     bat:"M",
//     match:5
// }








// console.log(add(5))

const App:React.FC=()=> {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  console.log(todos)
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()

     if(todo){
         setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
         setTodo("")
     }
  }
  console.log(todos)
   return <>
        <div className='App'>
                <span className="heading">Taskify</span>
                 <InputFeild  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
                {/* <TodoList /> */}
                {
                  todos.map((t)=>(
                    <li>{t.todo}</li>
                  ))
                }
                
        </div>
   
        </>
}

export default App;
