import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white py-4 md:py-8">
      <div className="md:w-4/5 m-auto flex justify-center items-center">
        <div className="hidden md:block border-r-4 border-gray-800 px-16 space-y-8 py-8">
          <h1 className="text-3xl font-semibold">
            <a href="/" className="bg-white text-black rounded-md">
              1.0.<span className="bg-orange-400 rounded-md">oNe</span>
            </a>
          </h1>
          <div className="flex space-x-8">
            <BsFacebook size={28} />
            <AiFillTwitterCircle size={34} />
            <AiFillInstagram size={34} />
          </div>
        </div>
        <div className="md:px-8">
          <div className="grid grid-cols-3 gap-2 px-4 sm:px-0 sm:flex sm:space-x-4 md:py-8 py-4 md:border-b-2 md:border-gray-800">
            <Link href="/guides">Guides</Link>
            <Link href="/try_out">Try Out</Link>
            <Link href="/Challenge">Challenge</Link>
            <Link href="/about#contact">Contact</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="md:hidden px-4 sm:px-8 space-y-4 py-8">
            <h1 className="text-xl font-semibold">
              <Link href="/">
                <p className="bg-white text-black rounded-md">
                  1.0.<span className="bg-orange-400 rounded-md">oNe</span>
                </p>
              </Link>
            </h1>
            <div className="flex space-x-4">
              <BsFacebook size={20} />
              <AiFillTwitterCircle size={24} />
              <AiFillInstagram size={24} />
            </div>
          </div>
          <div className="md:mt-4 text-gray-400 text-sm md:text-base px-4 md:px-0 space-y-2">
            <p>101 copyright &copy;2022. All rights reserved</p>
            <div className="space-x-4">
              <Link href="/rules">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
