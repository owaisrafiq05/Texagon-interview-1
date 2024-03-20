import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import logo from "../assets/icon1.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      setBgColor("#fff"); // Change to your desired color when scrolled
    } else {
      setBgColor("transparent");
    }

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed text-black w-full flex justify-between items-center h-16 mx-auto px-6 md:px-12 z-50 transition-all duration-300 ${
        showNavbar ? "top-0" : "-top-20"
      }`}
      style={{ backgroundColor: bgColor, color: "#000" }} // Set text color to black
    >
      <a href="/" className="flex justify-center align-center">
        <div className="flex justify-center align-end">
          <img src={logo} alt="" />
          <p className="text-black font-lightbold text-xl ml-4 my-auto">
            IQTEST.ai
          </p>
        </div>
      </a>

      <div className="hidden md:flex md:justify-evenly md:align-center lg:flex lg:justify-evenly lg:align-center lg:gap-x-8 md:gap-x-4">
        <ul className="mt-2 flex flex-row justify-evenly w-100 lg:gap-x-8 md:gap-x-4">
          <a href="./">
            <li className="font-semibold text-blue-600 cursor-pointer">Home</li>
          </a>
          <a href="./test">
            <li className="font-semibold cursor-pointer">Start Text</li>
          </a>
          <a href="./certificate">
            <li className="font-semibold cursor-pointer">Check Certificate</li>
          </a>
          <a href="./pricing">
            <li className="font-semibold cursor-pointer">Pro Pricing</li>
          </a>
        </ul>
        <div>
          <button
            id="dropdownDefaultButton"
            onClick={handleDropdown}
            data-dropdown-toggle="dropdown"
            class="text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            English{" "}
            <svg
              className={`w-2.5 h-2.5 ms-3 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    German
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    French
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Russian
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-white dark:focus:ring-blue-800"
        >
          Login
        </button>
      </div>

      <div className="block md:hidden z-10">
        <motion.button
          initial="hide"
          animate={nav ? "show" : "hide"}
          onClick={handleNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 9,
              },
            }}
            className="w-8 bg-black h-1 block rounded-full" // Set symbol color to black
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-8 bg-black h-1 block rounded-full" // Set symbol color to black
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -6,
              },
            }}
            className="w-8 bg-black h-1 block rounded-full" // Set symbol color to black
          ></motion.span>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {nav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.2,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: "100%",
                  transition: {
                    type: "spring",
                    bounce: 0.2,
                    when: "afterChildren",
                    staggerChildren: 0.1, // Reduced stagger delay
                  },
                },
                show: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.2,
                    when: "beforeChildren",
                    staggerChildren: 0.1, // Reduced stagger delay
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed inset-0 bg-[#0445558] backdrop-blur-xl p-6 flex flex-col justify-center space-y-10 lg:hidden"
            >
              <motion.ul
                variants={{
                  hide: {
                    y: "25%",
                    opacity: 0,
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="list-none space-y-6"
                style={{ color: "#000" }}
              >
                <motion.li
                  variants={{
                    hide: { opacity: 0, y: -20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                >
                  <a href="/" className="text-5xl font-semibold text-white">
                    Home
                  </a>
                </motion.li>
                <motion.li
                  variants={{
                    hide: { opacity: 0, y: -20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                >
                  <a
                    href="/start-test"
                    className="text-5xl font-semibold text-white"
                  >
                    Start Test
                  </a>
                </motion.li>
                <motion.li
                  variants={{
                    hide: { opacity: 0, y: -20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                >
                  <a
                    href="/check-certificate"
                    className="text-5xl font-semibold text-white"
                  >
                    Check Certificate
                  </a>
                </motion.li>
                <motion.li
                  variants={{
                    hide: { opacity: 0, y: -20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                >
                  <a
                    href="/pro-pricing"
                    className="text-5xl font-semibold text-white"
                  >
                    Pro Pricing
                  </a>
                </motion.li>
                <motion.li
                  variants={{
                    hide: { opacity: 0, y: -20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                >
                  <div>
                    <button
                      id="dropdownDefaultButton"
                      onClick={handleDropdown}
                      data-dropdown-toggle="dropdown"
                      class="text-black bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      English{" "}
                      <svg
                        className={`w-2.5 h-2.5 ms-3 ${
                          dropdownOpen ? "transform rotate-180" : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div
                        id="dropdown"
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          class="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              English
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              German
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              French
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Russian
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.li>

                <motion.li
                  variants={{
                    hide: { opacity: 0, y: -20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                >
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-8 text-center text-5xl me-2 mb-2 dark:bg-blue-600 dark:hover:bg-white dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
