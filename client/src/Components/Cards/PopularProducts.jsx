import React from 'react'

function PopularProducts() {
  return (
    <>
    <div className='flex flex-wrap'>
        {data.map((item)=>(
        <div className='w-60 my-10 ml-2'>
            <img src="./img/product/round-card.jpg" alt="" />
            <p className='text-center my-2'>{item.title}</p>
        </div>
        ))}
    </div>
    </>
  )
}

export const data = [
    {
        img:"",
        title:"Bussiness Cards"
    },
    {
        img:"",
        title:"Apparel"
    },
    {
        img:"",
        title:"Corporate Gifts"
    },
    {
        img:"",
        title:"Drinkware"
    },
    {
        img:"",
        title:"Mailer Box"
    },
    {
        img:"",
        title:"Awards"
    },
    {
        img:"",
        title:"Stickers"
    },
    {
        img:"",
        title:"Name Plates"
    },
    {
        img:"",
        title:"Bagpacks"
    },
    {
        img:"",
        title:"Labels"
    },
    {
        img:"",
        title:"Courier Poly Bag"
    },
    {
        img:"",
        title:"Posters"
    },
]

export default PopularProducts