import React,{useEffect, useState} from 'react'
import axios from 'axios'

const PostAPI=()=>{

    const [userId,setUserId] = useState()
    const [id,setId] = useState()
    const [title,setTitle] = useState('')
    const [completed,setCompleted]=useState(false)
    const [todos,setTodos]=useState([])

    const baseUrl='https://jsonplaceholder.typicode.com/todos'
/**
        useEffect(()=>{
        console.log('get method')
        axios.get(baseUrl)
        .then(response=>setTodos(response.data))

    },[]);
 */
    const addTodo=(e)=>{
        e.preventDefault();
        console.log('add todo')
        const todo = {userId,id,title,completed}
        console.log('data submitted ',todo)
        axios.post(baseUrl,todo)
        .then((response) => {
            console.log("response data ",response.data)
          setTodos([...todos,response.data])
          console.log('todos updated ',todos);
        }); 

    }
    return(
        <>
        <div>
            <h1>Todos </h1>
            <h2>Number of Todos : {todos.length}</h2>
        </div>
        <div>
            <h1>Post todos</h1>
            <form onSubmit={addTodo}>
            <input value={userId} onChange={(e)=>setUserId(e.target.value)} placeholder="Enter User Id"></input><br/>
            <input value={id} onChange={(e)=>setId(e.target.value)} placeholder="Enter Id"></input><br/>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title"></input><br/>
            <input value={completed} onChange={(e)=>setCompleted(e.target.value)} placeholder="Enter Status"></input><br/>
          
           <button type="submit">Add Todo</button>
            </form>           
        </div>        
        </>
    )
}

export default PostAPI