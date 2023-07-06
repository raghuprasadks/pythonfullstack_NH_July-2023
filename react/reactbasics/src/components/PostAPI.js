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
        clearData()

    }

    const clearData=()=>{
        setUserId('')
        setId('')
        setTitle('')
        setCompleted(false)
        
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
            <label>User Id</label><input value={userId} onChange={(e)=>setUserId(e.target.value)} placeholder="Enter User Id"></input><br/>
            <label>Id</label><input value={id} onChange={(e)=>setId(e.target.value)} placeholder="Enter Id"></input><br/>
            <label>Title</label><input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title"></input><br/>
            <label>Status</label><input value={completed} onChange={(e)=>setCompleted(e.target.value)} placeholder="Enter Status"></input><br/>
          
           <button type="submit">Add Todo</button>
            </form>           
        </div>
        <div className="covidcls">
            <table>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>

                {todos.map((todo)=><tr>

                    <td>{todo.UserId}</td>
                    <td>{todo.id}</td>
                    <th>{todo.title}</th>
                    <th>{todo.status}</th>
                </tr>)}
            
            
            </table>    
        </div>        
        </>
    )
}

export default PostAPI