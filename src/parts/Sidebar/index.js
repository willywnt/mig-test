import { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";

import { menus } from '../../data/constants';

const Sidebar = ({ open, handleOpen, isMobile }) => {
  const [active, setActive] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    setActive(path === '' ? 'dashboard' : path);
  }, [location.pathname]);

  return (
    <div className={`${isMobile ? 'fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 duration-150 ease-in-out' : 'z-30'} ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={() => handleOpen()}
    >
      <aside className={` flex-shrink-0 w-64 h-full overflow-y-auto bg-white dark:bg-gray-800 duration-150 ease-in-out ${isMobile ? 'fixed inset-y-0 mt-16' : ''} ${open ? 'left-0' : '-left-64'}`}>
        <div className="py-4 text-gray-500 dark:text-gray-400 text-center">
          <Link
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            to="/"
          >
            MIG test
          </Link>
          <ul className="mt-6">
            {menus.map((menu, index) => (
              <li className="relative px-6 py-3" key={index}>
                {active === `${menu.title.toLowerCase()}` && <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>}
                <Link
                  className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${active === `${menu.title.toLowerCase()}` && 'dark:text-gray-100 text-gray-800'}`}
                  to={menu.to}
                >
                  {active === `${menu.title.toLowerCase()}` ? menu.iconActive : menu.icon}
                  <span className="ml-4">{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar;