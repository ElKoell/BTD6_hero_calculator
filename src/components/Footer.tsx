import Image from "next/image";

const Footer = () => (
  <footer className="shadow bg-gray-900 mt-auto mb-0 fixed bottom-0 w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <div className="sm:flex sm:items-center sm:justify-between">
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
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024
        <a href="https://github.com/ElKoell" className="hover:underline">
          &nbsp;Koell Fan project™
        </a>
        . All Rights not reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
