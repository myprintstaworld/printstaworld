import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-[#842C83] flex justify-around'>
      <div className='flex items-center py-5'>
        <div className='p-3'>
          <img src="./img/icons/shipping.svg" alt="" />
        </div>
        <div className='text-white p-3'>
          <h3 className='font-bold uppercase'>Free Shipping</h3>
          <p>Upto Order &#x20b9;999</p>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='p-3'>
          <img src="./img/icons/return.svg" alt="" />
        </div>
        <div className='text-white p-3'>
          <h3 className='font-bold uppercase'>Free Returns</h3>
          <p>For Some Condition</p>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='p-3'>
          <img src="./img/icons/support.svg" alt="" />
        </div>
        <div className='text-white p-3'>
          <h3 className='font-bold uppercase'>Support 24/7</h3>
          <p>Call & Whats'app</p>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='p-3'>
          <img src="./img/icons/safeSure.svg" alt="" />
        </div>
        <div className='text-white p-3'>
          <h3 className='font-bold uppercase'>100% Safe & secure</h3>
          <p>For Health</p>
        </div>
      </div>
    </div>
    <div className='flex bg-black h-auto p-5 text-white justify-evenly border-b-[1px] border-solid border-gray-500'>
      <div className='text-white w-1/4'>
        <h3 className='font-bold'>PRINTSTAWORLD</h3>
        <p className='w-80'>Our printing-related business is dynamic and innovative, specializing in various printing services.</p>
        <div>
        <ul>
          <li className='flex'>
            <Link to="/" className='flex'>
              <img className='pr-2' src="./img/icons/phone.svg" alt="" />
              <span className='p-2'>+91 8860455556</span>
            </Link>
          </li>
          <li className='flex'>
            <Link to="/" className='flex'>
              <img className='pr-2' src="./img/icons/email.svg" alt="" />
              <span className='p-2'>printstaworld@gmail.com</span>
            </Link>
          </li>
          <li className='flex'>
            <Link to="/" className='flex'>
              <img className='pr-2' src="./img/icons/location.svg" alt="" />
              <span className='p-2'>WZ-1255E/2, Nangal Rai, Delhi -110046</span>
            </Link>
          </li>
        </ul>
        </div>
      </div>
      <div className='w-1/4'>
        <h3 className='font-bold'>OUR SERVICES</h3>
        <ul>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Accessories</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Invitations</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Photo Frames</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Greeting Cards</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Wedding Invitations</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Office Supplies</Link></li>
        </ul>
      </div>
      <div className='w-1/4'>
        <h3 className='font-bold'>USEFUL LINKS</h3>
        <ul>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">About us</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Contact Us</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Privacy Policy</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Terms and Conditions</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Replacement Policy</Link></li>
        <li className='py-1 text-gray-300 hover:text-white'><Link to="/">Refund and Returns Policy</Link></li>
        </ul>
      </div>
    </div>
    <div className='flex bg-black text-white justify-center h-20 items-center'>
      <div className='flex text-white items-center'> 
        <img className='size-5' src="./img/icons/copyright.png" alt="" />
        <Link to="/" className='font-bold'>PRINTSTAWORLD</Link>
      </div>
      <div className='px-2'>All Rights Reserved.</div>
    </div>
    </>
  )
}

export default Footer