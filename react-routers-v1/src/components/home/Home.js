import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="flex justify-center">
    <button onClick={()=>{
        navigate("/product")
    }} className="bg-slate-900 mt-32 p-3 text-slate-50 rounded-lg hover:bg-white hover:text-slate-900 hover:outline-2 hover:outline-slate-900 outline text-center ">
        Go To Products
    </button>
        
    </div>
  )
}

export default Home