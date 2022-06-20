import { Menu } from "@headlessui/react";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className="bg-black text-white justify-end border-b-4 border-gray-900 hidden sm:flex">
        <div className="flex items-center justify-between text-base md:text-lg md:w-11/12 ml-4 md:ml-0">
          <div className="flex space-x-8 md:space-x-16 items-center">
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-semibold bg-white text-black rounded-md">
                1.0.<span className="bg-orange-400 rounded-md">oNe</span>
              </h1>
            </Link>
            <ul className="flex space-x-2 md:space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/guides">Guides</Link>
              </li>
              <li>
                <Link href="/try_out">Try Out</Link>
              </li>
              <li>
                <Link href="/challenge">Challenge</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <Link href="/guides">
            <p className="bg-orange-400 py-4 px-4 ml-8 md:ml-0">Get Started</p>
          </Link>
        </div>
      </div>
      <div className="bg-black text-white flex justify-between items-center py-2 px-4 relative sm:hidden">
        <div className="flex-grow flex justify-center items-center">
          <Link href="/">
            <h1 className="text-2xl font-semibold bg-white text-black rounded-md">
              1.0.<span className="bg-orange-400 rounded-md">oNe</span>
            </h1>
          </Link>
        </div>
        <div>
          <Menu>
            <Menu.Button>
              <HiOutlineMenuAlt1 size={24} />
            </Menu.Button>
            <Menu.Items className="absolute inset-x-2 text-center z-50 top-14 rounded-lg bg-black text-white flex flex-col">
              <Menu.Item>
                <Link href="/" className="py-2 hover:bg-slate-400">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/guides" className="py-2 hover:bg-slate-400">
                  Guides
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/try_out" className="py-2 hover:bg-slate-400">
                  Try Out
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/challenge" className="py-2 hover:bg-slate-400">
                  Challenge
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/about" className="py-2 hover:bg-slate-400">
                  About
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="/guides"
                  className="py-2 bg-orange-400 rounded-b-lg"
                >
                  Get Started
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default Navbar;
