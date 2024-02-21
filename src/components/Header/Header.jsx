import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-slate-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2020/04/13/20/42/potato-5039995_640.png"
              className="mr-3 h-12 hover:scale-125 transition duration-500 cursor-pointer"
              alt="Logo"
            />
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive ? "text-orange-700" : "text-purple-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/todo"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive ? "text-orange-700" : "text-purple-700"
                    }`
                  }
                >
                  Todo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/image"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive ? "text-orange-700" : "text-purple-700"
                    }`
                  }
                >
                  Image
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/password"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive ? "text-orange-700" : "text-purple-700"
                    }`
                  }
                >
                  Password
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/currency"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive ? "text-orange-700" : "text-purple-700"
                    }`
                  }
                >
                  Currency
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
