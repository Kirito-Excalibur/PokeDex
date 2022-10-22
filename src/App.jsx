import React from 'react'
import {Link} from "react-router-dom"

function App() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl'>Life is wierd</h1>
   <Link to="pokemon">Here</Link>
    </div>
  )
}

export default App