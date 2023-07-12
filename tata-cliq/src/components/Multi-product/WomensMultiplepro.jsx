import React from 'react'
import  womenproduct from '../Multi-product/WomensMultipro.json'

const WomensMultiplepro = () => {
  return (

    <div id='parent'>
        {womenproduct.map((WomensMultipro)=>(
            <div>


             <h1> product: {WomensMultipro.name}</h1></div>

        ))}


    </div>
  )
}

export default WomensMultiplepro