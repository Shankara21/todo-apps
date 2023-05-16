import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useAuth } from '@/context/AuthContext'

export default function Modal(props) {
  const { setOpenModal } = props
  const [_document, set_document] = useState(null)
  const { logout } = useAuth()
  useEffect(() => {
    set_document(document)
  })
  if (!_document) return null
  return ReactDom.createPortal(

    <div className="fixed inset-0 flex flex-col bg-white text-slate-900">
      <div className="flex items-center justify-between p-4 border-b border-solid border-slate-900">
        <h1 className='text-2xl font-extrabold select-none sm:text-5xl'>MENU</h1>
        <svg onClick={() => setOpenModal(false)} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='duration-300 cursor-pointer hover:opacity-40'>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000" />
        </svg>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h2 onClick={() => {
          logout()
          setOpenModal(false)
        }} className='duration-300 cursor-pointer select-none hover:pl-1.5'>LogOut</h2>
      </div>
    </div >, _document.getElementById('portal')
  )
}
