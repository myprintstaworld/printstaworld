import React from "react";

function Header() {
  return (
    <>
      <header className="w-auto ml-auto mr-auto">
        <div
          className="
      flex bg-[#E1E1E1]
      justify-between
      items-center
      uppercase
      "
        >
          <div
            className="
        ml-10
        "
          >
            <p>Free Shipping for all orders of &#x20b9;999</p>
          </div>
          <div
            className="
        mr-10
        "
          >
            <button
              className="
          bg-[#842C83] p-3 
          text-white
          uppercase
          "
            >
              Business solution
            </button>
          </div>
        </div>
        <div className="flex h-16 justify-between px-5 w-[1390px] ml-auto mr-auto">
          <div className="flex items-center">
            <img
              className="w-14 h-14 mr-4"
              src="./img/icons/printstaworld-logo.png"
              alt=""
            />
            <div className="flex h-10 m-10 p-2 rounded-[0.2rem] items-center border border-solid border-gray-300">
              <input
                className="outline-none ml-4"
                type="text"
                placeholder="Search"
              />
              <img className="w-4 h-4 " src="./img/icons/search.png" alt="" />
            </div>
          </div>
          <div className="flex items-center">
            <button className="flex items-center m-4">
              <img className="w-6 h-6 m-2" src="./img/icons/chat.png" alt="" />
              <p>Help Center</p>
            </button>
            <button className="flex items-center m-4">
              <img className="w-6 h-6 m-2" src="./img/icons/user.png" alt="" />
              <p>Login/Signup</p>
            </button>
            <button className="flex m-4">
              <img className="w-6 h-6" src="./img/icons/cart.png" alt="" />
            </button>
          </div>
        </div>
        <div className="flex h-10 justify-center w-full bg-[#842C83]">
          <nav className="flex text-white w-[1500px]">
            <ul className="flex w-full justify-evenly items-center">
              <li className="hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Calendars
              </li>
              <li className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Packaging
              </li>
              <li className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Photo Gifts
              </li>
              <li className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Same Day Delivery
              </li>
              <li className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Rewards
              </li>
              <li className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Decorate
              </li>
              <li className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Stationery
              </li>
              <li className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Sign & Markiting
              </li>
              <li className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Corporate Gifts
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
