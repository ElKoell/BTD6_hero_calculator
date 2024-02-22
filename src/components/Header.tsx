import Image from "next/image";

const Header = () => (
  <nav className="border-gray-200 bg-gray-900">
    <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex flex-col items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse mx-auto w-16">
        <Image
          src="/logo.webp"
          width={10}
          height={10}
          style={{
            width: "100%",
            height: "auto",
          }}
          className="h-8"
          alt="Koell"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Fan project</span>
      </a>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 borderrounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
          <li>
            <a
              href="https://github.com/ElKoell"
              className="block py-2 px-3 md:p-0 rounded text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
