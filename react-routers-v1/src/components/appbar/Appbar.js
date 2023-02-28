import React from 'react'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <div className=" flex gap-4 justify-center w-full h-14   bg-slate-900 text-xl text-slate-50 font-light pt-2">
        <div className="hover:text-orange-400">
            <Link to="/">Home</Link>
        </div>
        <div className="hover:text-orange-400">
            <Link to="/product">Products</Link>
        </div>

    </div>
  )
}

export default Appbar