import { Menu } from "@headlessui/react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className="bg-black text-white justify-end border-b-4 border-gray-900 hidden sm:flex">
        <div className="flex items-center justify-between text-base md:text-lg md:w-11/12 ml-4 md:ml-0">
          <div className="flex space-x-8 md:space-x-16 items-center">
            <h1 className="text-2xl md:text-3xl font-semibold">
              <a href="/" className="bg-white text-black rounded-md">
                1.0.<span className="bg-orange-400 rounded-md">oNe</span>
              </a>
            </h1>
            <ul className="flex space-x-2 md:space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/guides">Guides</a>
              </li>
              <li>
                <a href="/try_out">Try Out</a>
              </li>
              <li>
                <a href="/challenge">Challenge</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
          <a href="/guides" className="bg-orange-400 py-4 px-4 ml-8 md:ml-0">
            Get Started
          </a>
        </div>
      </div>
      <div className="bg-black text-white flex justify-between items-center py-2 px-4 relative sm:hidden">
        <div className="flex-grow flex justify-center items-center">
          <h1 className="text-2xl font-semibold">
            <a href="/" className="bg-white text-black rounded-md">
              1.0.<span className="bg-orange-400 rounded-md">oNe</span>
            </a>
          </h1>
        </div>
        <div>
          <Menu>
            <Menu.Button>
              <HiOutlineMenuAlt1 size={24} />
            </Menu.Button>
            <Menu.Items className="absolute inset-x-2 text-center z-50 top-14 rounded-lg bg-black text-white flex flex-col">
              <Menu.Item>
                <a href="/" className="py-2 hover:bg-slate-400">
                  Home
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/guides" className="py-2 hover:bg-slate-400">
                  Guides
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/try_out" className="py-2 hover:bg-slate-400">
                  Try Out
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/challenge" className="py-2 hover:bg-slate-400">
                  Challenge
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/about" className="py-2 hover:bg-slate-400">
                  About
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="/guides" className="py-2 bg-orange-400 rounded-b-lg">
                  Get Started
                </a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default Navbar;
