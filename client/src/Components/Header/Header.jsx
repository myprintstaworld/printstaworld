import React from "react";
import "./Header.css";
import logo from "../../img/printstaworld-logo.png";
import search from "../../img/search.png";
import chat from "../../img/chat.png";
import user from "../../img/user.png";
import cart from "../../img/cart.png";
import hamburger from "../../img/hamburger.png";

function Header() {
  return (
    <>
    {/* <header className="w-[85vw] border border-solid border-black"> */}
      <header className="w-full px-10 max-sm:bg-[#832C82] xl:px-52">
        <div className="flex justify-between bg-[#F8F9FA] items-center w-full">
          <p className="max-sm:hidden">
            FREE SHIPPING FOR ALL ORDERS OF <span>&#x20b9;</span>999
          </p>
          <button className="bg-[#832C82] py-2 px-3 text-white max-sm:w-screen">
            BUSINESS SOLUTION
          </button>
        </div>
      </header>
      <header className="md:block max-md:hidden ">
        <div className="flex h-16 justify-between px-5 xl:px-52">
          <div className="flex items-center">
            <img className="w-14 h-14 mr-4" src={logo} alt="" />
            <div className="flex h-10 p-2 rounded-[0.2rem] items-center border border-solid border-gray-300">
              <input
                className="outline-none ml-4"
                type="text"
                placeholder="Search"
              />
              <img className="w-4 h-4 " src={search} alt="" />
            </div>
          </div>
          <div className="flex items-center">
            <button className="flex items-center m-4">
              <img className="w-6 h-6 m-2" src={chat} alt="" />
              <p>Help Center</p>
            </button>
            <button className="flex items-center m-4">
              <img className="w-6 h-6 m-2" src={user} alt="" />
              <p>Login/Signup</p>
            </button>
            <button className="flex m-4">
              <img className="w-6 h-6" src={cart} alt="" />
            </button>
          </div>
        </div>
        <div className="flex h-10 justify-between w-full">
          <nav className="flex w-full xl:px-40 bg-[#F8F9FA]">
            <ul className="flex w-full justify-between items-center">
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Calendars
              </li>
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Packaging
              </li>
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Photo Gifts
              </li>
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Same Day Delivery
              </li>
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Rewards
              </li>
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Decorate
              </li>
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Stationery
              </li>
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Sign & Markiting
              </li>
              <li className="hover:border-b-2 hover:border-orange-500 border-[#F8F9FA] border-b-2 hover:text-orange-500 cursor-pointer md:px-5 px-2 max-md:text-sm">
                Corporate Gifts
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* for small device */}
      <header className="max-sm:block md:hidden">
        <div className="flex justify-between p-4 w-full">
          <img className="w-8 h-8" src={hamburger} alt="" />
          <img className="w-8 h-8" src={logo} alt="" />
          <img className="w-8 h-8" src={cart} alt="" />
        </div>
    </header>
      {/* </header> */}
    </>
  );
}

export default Header;
