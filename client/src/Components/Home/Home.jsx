import React from "react";
import demo from "../../img/demo.png"
import './Home.css'

function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="w-full flex h-auto items-center justify-evenly border border-solid border-black px-10 py-4">
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
            <div className="flex border border-solid border-black p-3 w-full">
              <div className="w-40 h-auto rounded-lg shadow-lg shadow-gray-500/75">
                <img className="w-full" src={demo} alt="" />
                <p className="bg-[#832C82] text-center text-white p-2 font-bold rounded-b-lg">Bussiness Card</p>
              </div>
            </div>
              <a className="prev" onClick="plusSldes(-1)">&#10094;</a>
              <a className="next" onClick="plusSldes(1)">&#10095;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
