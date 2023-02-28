import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../../data"
const Pdetail = () => {
    const {PID }= useParams()
    const detail  = data.filter(d=>d.name === PID)
  return (
    
    <div className="w-2/4 p-10 bg-slate-900 rounded-lg text-slate-50 mt-5 ml-32">
        <div>Catogory : {detail[0].category}</div>
        <div>Name : {detail[0].name}</div>
        <div>Price : ${detail[0].price}</div>
        <div>Sale Price : ${detail[0].sale_price}</div>
        <div>Description :  {detail[0].sentence}</div>
        <div>SubCatagory :  {detail[0].subcategory}</div>
    </div>
    
  )
}

export default Pdetail