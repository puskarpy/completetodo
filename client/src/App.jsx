import { useQuery } from '@tanstack/react-query'
import useDeleteTodo from './hooks/DeleteTodo';
import useUpdateTodo from './hooks/UpdateTodo';
import axios from 'axios'
import Todoform from './components/Todoform';
import {SquarePen, Trash, Save} from 'lucide-react'
import { useState } from 'react';

function App() {
  
  const deleteTodo = useDeleteTodo()
  const updateTodo = useUpdateTodo()

  const [editingId, setEditingId] = useState(null)
  
  const {data : todos, isLoading, isError} = useQuery({
    queryKey:['todos'],
    queryFn: async() => {
      const res = await axios.get("http://localhost:8000/todo");
      return res.data
    }
  })
  const [updatedTodo, setUpdatedTodo] = useState('')
  const [completed, setCompleted] = useState({})
  
  if(isLoading) return (<h1>Loading...</h1>)
  if(isError) return (<h1>Error</h1>)



  return (
    <div className='flex flex-col gap-6 p-4 mt-2'>
      <h1 className='text-3xl font-bold ml-8 bg-clip-text text-transparent bg-radial from-blue-500 to-cyan-400 '>Todo App</h1>
      <Todoform/>
      {
        todos.map((todo) => (
          <div key={todo._id} className='flex gap-4 justify-between items-center max-w-3xl border-[1px] border-gray-300/50 rounded-lg bg-white p-2'>
            <div className='flex gap-4 flex-1'>
              <input type="checkbox" checked={!!completed[todo._id]} onChange={() => setCompleted(prev => ({
                ...prev, [todo._id] : !prev[todo._id]
              }))} name="" id="" />
              {
               editingId === todo._id ?(
                 <input onChange={(e) => setUpdatedTodo(e.target.value)} className='text-lg outline-1 p-2 rounded-lg outline-blue-300' value={updatedTodo} />
                ): (
                  <p className={`${completed[todo._id]? "line-through text-gray-500": "text-black"} text-lg`}>{todo.todo}</p>
                )
              }
            </div>
            <div className='flex gap-4'>
              {
                editingId === todo._id? (
                  <button onClick={() => {
                    updateTodo.mutate({id : todo._id, todo: updatedTodo})
                    setEditingId(null)
                    setUpdatedTodo('')
                    }}  className='p-2 cursor-pointer rounded-lg  '><Save/></button>
                ) : (
                  <button onClick={() => {
                    setEditingId(todo._id)
                    setUpdatedTodo(todo.todo)
                    }}  className='p-2 cursor-pointer rounded-lg  '><SquarePen/></button>
                )
              }
              <button  onClick={() => deleteTodo.mutate(todo._id)}  className='p-2 cursor-pointer rounded-lg'><Trash/></button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default App
