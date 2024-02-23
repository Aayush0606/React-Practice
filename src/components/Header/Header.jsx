import { Link, NavLink } from "react-router-dom";
import useTheme from "../../context/Theme/ThemeContext";
export default function Header() {
  const { themeMode, toggleTheme } = useTheme();
  const availablePaths = [
    { name: "Home", to: "/" },
    { name: "Todo", to: "/todo" },
    { name: "Image", to: "/image" },
    { name: "Password", to: "/password" },
    { name: "Currency", to: "/currency" },
  ];
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
              {availablePaths.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive ? "text-orange-700" : "text-purple-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  className={`ml-4 sm:ml-0   
                  ${
                    themeMode === "dark"
                      ? "ring-0   shadow-highlight/4 group focus-visible:ring-2 focus-visible:ring-gray-400"
                      : "ring-1 ring-gray-900/5 shadow-sm  focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-sky-500"
                  }
                  `}
                  onClick={() => {
                    localStorage.setItem(
                      "theme",
                      themeMode === "dark" ? "light" : "dark"
                    );
                    toggleTheme(themeMode === "dark" ? "light" : "dark");
                  }}
                >
                  <span className="sr-only">
                    <span className={`${themeMode === "dark" ? "hidden" : ""}`}>
                      Switch to dark theme
                    </span>
                    <span
                      className={`hidden ${
                        themeMode === "dark" ? "inline" : ""
                      }`}
                    >
                      Switch to light theme
                    </span>
                  </span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="-6 -6 36 36"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`
                    ${
                      themeMode === "dark"
                        ? "stroke-gray-400 fill-gray-400/20 group-hover:stroke-gray-300"
                        : "stroke-sky-500 fill-sky-100 group-hover:stroke-sky-600 "
                    }
                    `}
                  >
                    <g className={`${themeMode === "dark" ? "opacity-0" : ""}`}>
                      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                      <path
                        d="M12 4v.01M17.66 6.345l-.007.007M20.005 12.005h-.01M17.66 17.665l-.007-.007M12 20.01V20M6.34 17.665l.007-.007M3.995 12.005h.01M6.34 6.344l.007.007"
                        fill="none"
                      ></path>
                    </g>
                    <g
                      className={`${
                        themeMode === "dark" ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                      <path
                        d="M12 3v1M18.66 5.345l-.828.828M21.005 12.005h-1M18.66 18.665l-.828-.828M12 21.01V20M5.34 18.666l.835-.836M2.995 12.005h1.01M5.34 5.344l.835.836"
                        fill="none"
                      ></path>
                    </g>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
