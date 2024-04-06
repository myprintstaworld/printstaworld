import React from 'react'

function Cards() {
  return (
    <>
    <div className='w-full flex'>
        <div className='w-1/2 h-auto'>
            <img className='p-10 rounded-lg w-full h-auto' src="./img/product/printedShirt.png" alt="" />
        </div>
        <div className='w-1/2'>
            <img className='p-10 rounded-lg w-full h-auto' src="./img/product/printedLogoProduct.png" alt="" />
        </div>
    </div>
    <div className='w-full'>
        <img src="./img/product/gallery.png" alt="" />
    </div>
    </>
  )
}

export default Cards