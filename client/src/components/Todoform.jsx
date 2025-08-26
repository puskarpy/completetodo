import { useState } from 'react';
import useAddTodo from '../hooks/AddTodo';

export default function Todoform() {

  const [todo, setTodo] = useState('')
  const addTodo = useAddTodo()

  return (
    <div className='p-4 flex gap-4'>
        <input type="text" name='todo' value={todo} onChange={(e) => setTodo(e.target.value)} className='border-1 p-2 border-gray-200 rounded-lg' />
        <button onClick={() => {
          addTodo.mutate(todo)
          setTodo('')
        }} className='cursor-pointer bg-blue-400 text-white px-4 py-2 rounded-lg'>Add</button>
    </div>
  )
}
