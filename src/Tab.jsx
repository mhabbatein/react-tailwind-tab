import React, { useState } from "react"
import tabData from "./data"

const Tab = () => {
  const [activeNav, setActiveNav] = useState(0)

  // Handle the click event for category buttons

  return (
    <div className="h-[24rem] min-w-[24rem] overflow-hidden rounded-lg bg-[#090446] text-[#f0f0f0]">
      {/* tab header */}
      <div className="overflow-hidden bg-blue-900 p-4">Trending🔥</div>
      {/* tab category */}
      <div className="relative bg-blue-900">
        <button
          className={`relative z-10 w-[5rem] py-1 hover:text-blue-400`}
          onClick={() => setActiveNav(0)}
        >
          Games
        </button>
        <button
          className={`relative z-10 w-[5rem] py-1 hover:text-blue-400`}
          onClick={() => setActiveNav(1)}
        >
          Travel
        </button>
        <button
          className={`relative z-10 w-[5rem] py-1 hover:text-blue-400`}
          onClick={() => setActiveNav(2)}
        >
          Other
        </button>
        <div
          className={`duration-30 absolute top-0 z-0 h-full w-[5rem] rounded-t-lg bg-[#090446] transition-all ease-in-out ${
            activeNav === 0
              ? "left-0"
              : activeNav === 1
              ? "left-[5rem]"
              : activeNav === 2 && "left-[10rem]"
          }`}
        ></div>
      </div>
      {/* tab list */}
      <ul className="scroll flex max-h-[300px] flex-col gap-y-6 overflow-y-auto border-gray-700 pt-4 ">
        {tabData.map((data, index) =>
          data.map((list, index) => (
            <li
              key={index}
              className={`duration-300 transition-opacity cursor-default  items-center px-4 ${
                index === activeNav ? "flex fade-in" : "opacity-0 hidden"
              }`}
            >
              <div>
                <img
                  src={list.image}
                  alt=""
                  width={60}
                  className="aspect-square rounded-xl object-cover"
                />
              </div>
              <div className="ml-3">
                <h1>{list.title}</h1>
                <p className="text-sm opacity-70">{list.genre}</p>
              </div>
              <div className="ml-16">
                <button className="rounded-lg border px-2 py-1 duration-200 hover:border-blue-400 hover:text-blue-400">
                  Explore
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Tab
