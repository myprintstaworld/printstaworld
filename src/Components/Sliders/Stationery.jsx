import React from 'react'
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        right:"20px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        left:"20px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer",
       }}
      onClick={onClick}
    />
  );
}

function Stationery() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
   <>
   <div className='text-center mt-10 mb-2 text-2xl font-semibold'>
    Stationery
    </div>
   <div className='w-full m-auto'>
    <div>
   <Slider {...settings}>
    {productData.map((item)=>(
      <div className='bg-white my-5 w-40 rounded-xl'>
        <div className='m-2 mb-0 flex justify-center items-center'>
        <img className='w-full h-52' src={item.url} alt="" />
        </div>
        <p className='text-center p-3'>{item.name}</p>
      </div>
    ))}
    </Slider>
    </div>
   </div>
   </>
  )
}

export default Stationery

export const productData = [
  {
    id:1,
    url:"./img/product/round-card.jpg",
    name:"Business Cards"
  },
  {
    id:2,
    url:"./img/product/stationary.jpg",
    name:"Stationary"
  },
  {
    id:3,
    url:"./img/product/gift.jpg",
    name:"Corporate Gifts"
  },
  {
    id:4,
    url:"./img/product/packing.jpg",
    name:"Packing"
  },
  {
    id:5,
    url:"./img/product/calender.jpg",
    name:"Calender"
  },
  {
    id:6,
    url:"./img/product/stande.png",
    name:"Markiting"
  },
  {
    id:7,
    url:"./img/product/stande.png",
    name:"Events Stand"
  },
  {
    id:8,
    url:"./img/product/gift.jpg",
    name:"Photo Gift"
  },
]