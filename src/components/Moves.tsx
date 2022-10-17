import React from 'react'

function Moves({arr}) {

     
       
  

  return (
    <div className="bg-red-700 m-4 rounded-2xl pb-4">
    <h1 className="text-center text-4xl">Moves</h1>
    <div className="grid grid-flow-col row-span-2">
      <div>
        <ul className="flex text-3xl gap-3 flex-col items-center">
       
     {
        arr.map((item,key)=>{
            return <li key={key}>{item.move.name}</li>
        })
     }
              
         
        </ul>
      </div>
      <div>
        <ul className="text-3xl flex gap-3 flex-col items-center">
          <li>Normal</li>
          <li>Normal</li>
          <li>Normal</li>
          <li>Electric</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Moves