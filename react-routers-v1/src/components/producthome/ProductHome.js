import React from 'react'
import { Link } from 'react-router-dom'
import data from "../../data"
const ProductHome = () => {
  return (
    <div className="w-full justify-center mt-0 flex-wrap gap-10 flex h bg-slate-400">
        {
            data.map((d)=>(
              <Link className=" mt-4 text-center p-2 h-40 bg-white rounded-lg w-2/5 text-red-500" to={d.name}>
                <div >
                    <div>{d.category} </div>
                    <div>{d.name} </div>
                    <div>{d.price} </div>
                </div>
              </Link>
            ))
        }
    </div>
  )
}

export default ProductHome