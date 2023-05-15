import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLogginIn, setIsLogginIn] = useState(true)
  function submitHandler() {
    if (!email || !password) {
      setError('Please fill all the fields')
      setTimeout(() => {
        setError(null)
      }, 2000)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center flex-1 gap-2 sm:gap-4'>
      <h1 className='text-2xl font-extrabold sm:text-4xl'>{ isLogginIn ? 'LOGIN' : 'REGISTER' }</h1>
      {error && <div className="shadow-lg alert alert-error max-w-[300px]">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{error}</span>
        </div>
      </div>}
      <div>
        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 outline-none " placeholder="Email" value={email} onChange={(e) =>
          setEmail(e.target.value)
        } />
      </div>
      <div>
        <input type="password" id="first_name" class="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 outline-none " placeholder="Password" value={password} onChange={(e) =>
          setPassword(e.target.value)
        } />
      </div>
      <button className='relative w-[200px] py-2 overflow-hidden duration-300 border border-white border-solid after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full hover:after:translate-x-full after:duration-300 hover:text-slate-900 rounded-md'
        onClick={submitHandler}
      >
        <h2 className='relative z-20'>Submit</h2>
      </button>
      <h2 className='duration-300 cursor-pointer hover:scale-110' onClick={() => setIsLogginIn(!isLogginIn)} >{isLogginIn ? 'Login' : 'Register'}</h2>
    </div>
  )
}
