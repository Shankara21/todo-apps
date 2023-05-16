import { useAuth } from '@/context/AuthContext'
import React, { useState, useEffect } from 'react'

export default function UserDashboard() {
  const { userInfo } = useAuth
  const [addTodo, setAddTodo] = useState(false)
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    if (!userInfo || Object.keys(userInfo).length === 0) {
      setAddTodo(true)
    }
  }, [userInfo])

  async function addTodoList() { 
    
  }

  return (
    <div className="w-full max-w-[65ch] mx-auto flex flex-col gap-3 sm:gap-5">
      {addTodo && <div className="flex items-stretch">
        <input type="text" id="first_name" class="rounded-tl-lg rounded-bl-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none block w-full p-2.5 " placeholder="Todo" value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="px-4 py-2 text-base font-medium text-white rounded-tr-lg rounded-br-lg sm:py-3 w-fit sm:px-6 bg-amber-400 hover:opacity-40">Add</button>
      </div>}
      {userInfo && (
        <>
          HALO
        </>
      )}
      {!addTodo && <button onClick={() => setAddTodo(!addTodo)} className="py-2 text-center uppercase duration-300 border rounded-lg border-cyan-300 text-cyan-300 hover:opacity-30">
        Add todolist
      </button>}
    </div>
  )
}
