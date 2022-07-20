import { Link } from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiMenu, HiSun } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
import useToggle from '../../hooks/useToggle';

const Header = ({ theme, toggleTheme, handleOpen }) => {
  const [openSubMenu, toggleSubMenu] = useToggle(false);
  const [openNotification, toggleNotification] = useToggle(false);

  return (
    <div className="flex flex-col flex-1 w-full">
      <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          <button
            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:focus:ring-purple-200 focus:ring"
            onClick={() => handleOpen()}
          >
            <HiMenu className="w-6 h-6" />
          </button>
          <div className="flex justify-center flex-1 lg:mr-32">
            <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
              <button className="absolute inset-y-0 flex items-center pl-2">
                <FaSearch className="w-4 h-4" />
              </button>
              <input
                className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:ring focus:focus:ring-purple-200 form-input"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            <li className="flex">
              <button
                className="rounded-md focus:outline-none focus:ring focus:focus:ring-purple-200 w-8 h-8 overflow-hidden"
                onClick={() => toggleTheme()}
              >
                <HiSun className={`w-6 h-6 ml-1 duration-200 ${theme === 'dark' ? 'visible mt-1' : 'invisible'}`} />
                <BsFillMoonFill className={`w-4 h-4 ml-2 duration-200 ${theme === 'dark' ? ' invisible' : 'visibl -mt-6'}`} />
              </button>
            </li>
            <li className="relative">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:ring focus:focus:ring-purple-200 p-1 w-8 h-8"
                onClick={() => toggleNotification()}
              >
                <IoNotifications className="w-5 h-5" />
                <span
                  className="absolute top-2 right-2.5 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
              </button>
              <ul
                className={`absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700 duration-150 ${openNotification ? 'visible mt-0 opacity-100' : 'invisible -mt-6 opacity-0'}`}
              >
                <li className="flex">
                  <Link
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    to="/messages"
                  >
                    <span>Messages</span>
                    <span
                      className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                    >
                      13
                    </span>
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    to="/sales"
                  >
                    <span>Sales</span>
                    <span
                      className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                    >
                      2
                    </span>
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    to="/alerts"
                  >
                    <span>Alerts</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <button
                className="align-middle rounded-full focus:focus:ring-purple-200 focus:outline-none focus:ring"
                onClick={() => toggleSubMenu()}
              >
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                  alt="ProfileImage"
                />
              </button>
              <ul
                className={`absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700 duration-150 ${openSubMenu ? 'visible mt-0 opacity-100' : 'invisible -mt-6 opacity-0'}`}
              >
                <li className="flex">
                  <Link
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    to="/profile"
                  >
                    <FaRegUser className="w-4 h-4 mr-3" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    to="/logout"
                  >
                    <FiLogOut className="w-4 h-4 mr-3" />
                    <span>Log out</span>
                  </Link>
                </li>
              </ul>
            </li >
          </ul >
        </div >
      </header >
    </div >
  )
}

export default Header;