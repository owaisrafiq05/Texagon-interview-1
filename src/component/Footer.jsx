import React from "react";
import Logo from "../assets/icon1.svg";
import Image1 from "../assets/pic1.png";
import Image2 from "../assets/pic2.png";
import Image3 from "../assets/pic3.png";
import Image4 from "../assets/pic4.png";
import Image5 from "../assets/pic5.png";
import "./Footer.css";



const Footer = () => {
  return (
    <div className="w-100 p-0 m-0">
      <div className="w-100 p-0 m-0 bg-[white]">
        <div className="rounded-3xl mx-auto w-full  px-4 py-8 lg:py-8 bg-[#090808]">
          {/* Footer Part 1 */}
          <div className="mx-auto sm:inline-block sm:mx-auto lg:flex lg:justify-evenly lg:align-center mb-8">
            <div className="lg:w-2/5 lg:text-left lg:flex lg:flex-col lg:ml-8">
              <div className="flex justify-center lg:justify-start">
                <img src={Image1} alt="" />
              </div>
              <div className="my-9">
                <h1 className="text-6xl text-white lg:text-white">
                  Keep up with the latest
                </h1>
              </div>
              <div>
                <p className="text-2xl text-white lg:text-white">
                  Join our newsletter to stay up to date on features and
                  releases.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 lg:text-center lg:mt-4 lg:mt-28 md:mt-16">
              <div>
                <p className="text-3xl mt-8 lg:mt-0 font-semibold text-white mb-8 lg:text-white">
                  Stay up to date
                </p>
              </div>
              <div className="flex justify-evenly align-center mb-8">
                <input
                  className="input"
                  placeholder="Enter Your email"
                  type="email"
                  required
                />
                <button className="btn px-8 py-3">
                  <p className="text-2xl">Subscribe</p>
                </button>
              </div>
              <div>
                <p className="text-lg text-white lg:text-white">
                  By subscribing you agree with our Privacy Policy
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#fff00]/[0.2] h-0.3 rounded-lg mt-8 mb-3"></div>
          {/* Footer Part 2 */}
          <footer className="">
            <div className="inline-block lg:flex lg:justify-between lg:align-center">
              <div className="flex justify-center flex-col lg:w-1/5 w-100">
                <div className="mt-8 flex justify-center align-end">
                  <img src={Logo} alt="" />
                  <p className="text-white text-3xl ml-4">IQTEST.ai</p>
                </div>
                <p className="text-white mt-4">
                  Test your IQ in a very easy and simple step not
                  complex
                </p>
              </div>
              <div className="lg:w-100 mx-auto lg:mx-0 flex justify-center lg:justify-start align-center lg:mx-0">
    <div className="flex align-center justify-around w-100 mx-auto lg:flex-nowrap">
        <div className="grid grid-cols-4 gap-6 sm:gap-6 sm:grid-cols-3 mt-9 lg:grid-cols-2">
            <div>
                <h2 className="mb-6 text-lg font-bold text-black uppercase text-white">
                    IQTEST
                </h2>
                <ul className="text-gray-400 font-medium text-lg">
                    <li className="mb-4 ">
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Quiz
                        </a>
                    </li>
                    <li className="mb-4">
                        <a
                            href="https://tailwindcss.com/"
                            className="hover:underline"
                        >
                            Results
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://tailwindcss.com/"
                            className="hover:underline"
                        >
                            Pricing
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-3 mt-9 lg:grid-cols-2">
            <div>
                <h2 className="mb-6 text-lg font-bold text-black uppercase text-white">
                    Support
                </h2>
                <ul className="text-gray-400 font-medium text-lg">
                    <li className="mb-4 ">
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Help
                        </a>
                    </li>
                    <li className="mb-4">
                        <a
                            href="https://tailwindcss.com/"
                            className="hover:underline"
                        >
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://tailwindcss.com/"
                            className="hover:underline"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-3 mt-9 lg:grid-cols-2">
            <div>
                <h2 className="mb-6 text-lg font-bold text-black uppercase text-white">
                    Legal
                </h2>
                <ul className="text-gray-400 font-medium text-lg">
                    <li className="mb-4 ">
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li className="mb-4">
                        <a
                            href="https://tailwindcss.com/"
                            className="hover:underline"
                        >
                            Terms of Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://tailwindcss.com/"
                            className="hover:underline"
                        >
                            Cookies Policy
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

            </div>
          </footer>
        </div>

        {/* 3rd footer part */}
        <div className="inline-block mx-auto lg:mx-0 lg:flex lg:justify-around lg:align-center mt-8">
          <div className="mb-4 lg:mb-0 text-center lg:text-left">
            <p className="text-lg text-black font-semibold">
              &#169; 2023 IQTEST.AI
            </p>
          </div>
          <div className="flex justify-evenly align-center  gap-x-4">
            <a href="/">
              <img src={Image2} alt="" />
            </a>
            <a href="/">
              <img src={Image3} alt="" />
            </a>
            <a href="/">
              <img src={Image4} alt="" />
            </a>
            <a href="/">
              <img src={Image5} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
