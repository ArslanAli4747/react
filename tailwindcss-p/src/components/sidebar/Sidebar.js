import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='side'>
        <Link to="/typography">
        typography
        </Link>
    </div>
  )
}

export default Sidebar