import React from "react";
import demo from "../../img/demo.png"
import './Home.css'

function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="w-full flex h-auto items-center justify-evenly px-10 py-4">
          <div className="border-2 border-solid border-[#832C82] rounded-tr-3xl rounded-bl-3xl px-8 py-2 text-center w-64 h-28">
            <h2 className="font-bold p-2 text-orange-500 text-5xl">1M+</h2>
            <p className="text-2xl text-[#832C82]">Happy Client</p>
          </div>
          <div className=" border-2 border-solid border-[#832C82] rounded-tr-3xl rounded-bl-3xl px-8 py-2 text-center w-64 h-28">
            <h2 className="font-bold text-orange-500 text-5xl">15000+</h2>
            <p className="text-md text-[#832C82]">
              Personalized Print Products
            </p>
          </div>
          <div className=" border-2 border-solid border-[#832C82] rounded-tr-3xl rounded-bl-3xl px-8 py-2 text-center w-64 h-28">
            <h2 className="font-bold text-orange-500 text-5xl">15 Years</h2>
            <p className="text-xl text-[#832C82]">of Service Excellence</p>
          </div>
          <div className=" border-2 border-solid border-[#832C82] rounded-tr-3xl rounded-bl-3xl px-8 py-2 text-center w-64 h-28">
            <h2 className="font-bold p-2 text-orange-500 text-5xl">50+</h2>
            <p className="text-2xl text-[#832C82]">Employee</p>
          </div>
        </div>
        {/* main */}
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Browser all Categories
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
        <div className="w-4/5 h-[40rem] shadow-lg shadowgray-500/50 rounded-md">
          <img className="w-full h-full" src={demo} alt="" />
        </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Bussiness Cards
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Photos Gifts
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Stationery
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Corporate Gifts
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Packing
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Decorate
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Markiting
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="flex h-auto items-center justify-center ">
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
              <h2 className="text-center p-5 text-2xl">
                Events Stands
              </h2>
              <div className="border-b-2 border-solid border-gray-400 w-[32rem]"></div>
            </div>
            <div className="slideshow-container w-full">
            <div className="flex p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Calenders</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Photo Gifts</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Stationery</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold  rounded-b-lg">Corporate Gift</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Packing</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Decorate</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Markiting</p>
              </div>
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75 mx-2">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Events Stands</p>
              </div>
            </div>
              {/* <a className="prev" onClick="plusSldes(-1)">&#10094;</a> */}
              {/* <a className="next" onClick="plusSldes(1)">&#10095;</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
