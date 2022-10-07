import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  RiHome6Line,
  RiFolder2Line,
  RiBook3Line,
  RiCalendar2Line,
  RiChat1Line,
  RiMenu3Fill,
  RiCloseLine,
  RiSearch2Line,
  RiNotification3Line,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
  RiThumbUpLine,
  RiUser3Line,
  RiLogoutCircleRLine,
  RiSettings4Line,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 w-3/4 xl:left-0 md:w-96 h-full bg-gray-100 p-8 flex flex-col justify-between z-50 transition-all ${
          showMenu ? "left-0" : "-left-full"
        } `}
      >
        <div>
          <h1 className="text-2xl uppercase font-bold mb-10">Tu logo</h1>
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg"
              >
                <RiHome6Line /> Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg"
              >
                <RiFolder2Line /> Classes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg"
              >
                <RiBook3Line /> Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg"
              >
                <RiCalendar2Line /> Learning plane
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg"
              >
                <RiChat1Line /> Chat
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
            className="w-8 h-8 object-cover rounded-full ring-4 ring-white"
          />
          <div>
            <h5 className="font-medium">Jorge Luis Trejo</h5>
            <p className="text-gray-500 text-sm">Ing. Software</p>
          </div>
        </div>
      </div>
      {/* Btn menu movil */}
      <button
        onClick={toggleMenu}
        className="xl:hidden fixed bottom-6 right-6 bg-gray-100 p-4 rounded-full"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/* Header */}
      <header className="fixed bg-gray-100 w-full xl:w-[calc(100%-384px)] xl:ml-96 flex flex-col md:flex-row items-center justify-between gap-4 p-4">
        <form className="order-1 md:order-none">
          <div className="relative">
            <RiSearch2Line className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="bg-white outline-none py-1 pl-10 pr-4 rounded-full"
              placeholder="Search"
            />
          </div>
        </form>
        <nav className="flex items-center gap-2 text-lg">
          <Menu as="div">
            <Menu.Button className="hover:bg-gray-200 p-2 rounded-lg transition-colors relative">
              <RiChat1Line />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="section"
                className="absolute top-6 left-0 md:right-0 bg-gray-100 w-72 rounded-lg shadow-lg p-4"
              >
                <div>
                  <h1 className="font-medium text-center mb-4">Messages</h1>
                  <hr className="my-2" />
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <img
                        src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                        className="w-8 h-8 object-cover rounded-full"
                      />
                      <div>
                        <h5 className="text-base">Jorge Luis Trejo</h5>
                        <p className="text-gray-400 text-sm">Mensaje aquí...</p>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <img
                        src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                        className="w-8 h-8 object-cover rounded-full"
                      />
                      <div>
                        <h5 className="text-base">Jorge Luis Trejo</h5>
                        <p className="text-gray-400 text-sm">Mensaje aquí...</p>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <img
                        src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                        className="w-8 h-8 object-cover rounded-full"
                      />
                      <div>
                        <h5 className="text-base">Jorge Luis Trejo</h5>
                        <p className="text-gray-400 text-sm">Mensaje aquí...</p>
                      </div>
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div">
            <Menu.Button className="hover:bg-gray-200 p-2 rounded-lg transition-colors relative">
              <RiNotification3Line />
              <RiCheckboxBlankCircleFill className="absolute top-1 right-2 text-[10px] text-orange-500" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="section"
                className="absolute top-6 left-0 md:right-0 bg-gray-100 w-72 rounded-lg shadow-lg p-4"
              >
                <div>
                  <h1 className="font-medium text-center mb-4">
                    Notifications
                  </h1>
                  <hr className="my-2" />
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <RiThumbUpLine className="bg-blue-100 text-blue-900 p-2 box-content rounded-full" />
                      <div>
                        <h5 className="text-sm">
                          A Jorge Trejo le gusta tu{" "}
                          <span className="font-bold">foto.</span>
                        </h5>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <RiChat1Line className="bg-purple-100 text-purple-900 py-2 px-3 box-content rounded-full text-2xl" />
                      <div>
                        <h5 className="text-sm">
                          Jorge Trejo ha comentado tu{" "}
                          <span className="font-bold">publicación.</span>
                        </h5>
                      </div>
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div">
            <Menu.Button className="flex items-center gap-4 hover:bg-gray-200 py-2 px-4 rounded-lg transition-colors relative">
              <img
                src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Jorge Luis Trejo</span>
              <RiArrowDownSLine />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="section"
                className="absolute top-6 right-0 bg-gray-100 w-72 rounded-lg shadow-lg p-4"
              >
                <div>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <img
                        src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                        className="w-8 h-8 object-cover rounded-full"
                      />
                      <div>
                        <h5 className="text-base">Jorge Luis Trejo</h5>
                        <p className="text-gray-400 text-xs">
                          jorge.trejo@gmail.com
                        </p>
                      </div>
                    </a>
                  </Menu.Item>
                  <hr className="my-2" />
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors text-base"
                    >
                      <RiUser3Line /> Profile
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors text-base"
                    >
                      <RiSettings4Line /> Settings
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-white transition-colors text-base"
                    >
                      <RiLogoutCircleRLine /> Logout
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className="flex items-center gap-4 hover:bg-gray-200 py-2 px-4 rounded-lg transition-colors"></button>
        </nav>
      </header>
      {/* Main */}
      <main className="xl:pl-[400px] p-4 pt-36 md:pt-24 xl:pt-28">
        <h3>Content</h3>
      </main>
    </div>
  );
}

export default App;
