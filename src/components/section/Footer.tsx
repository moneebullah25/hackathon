import Image from "next/image";
import facebook from "public/facebook.svg";
import instagram from "public/instagram.svg";
import linkedin from "public/linkedin.svg";
import logo from "public/Logo.webp";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="flex flex-col text-left lg:items-center lg:justify-between mx-[3rem] lg:mx-[6rem] my-6 space-y-8 md:flex-row">
        <div className="flex-shrink-0 w-64 text-center md:text-left space-y-7 md:pt-7 lg:pt-0">
          <a className="flex font-medium text-gray-900">
            <Image src={logo} alt="website logo" />
          </a>
          <p className="text-sm text-gray-500 text-left">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex flex-row space-x-4">
            <div className="bg-gray-200 p-2 rounded-lg ">
              <Image src={linkedin} alt="linkedin" />
            </div>
            <div className="bg-gray-200 p-2 rounded-lg ">
              <Image src={facebook} alt="facebook" />
            </div>
            <div className="bg-gray-200 p-2 rounded-lg ">
              <Image src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:space-x-16">
          <div className="md:pl-4 pr-4">
            <h2 className="mb-3 text-lg font-bold tracking-widest text-gray-900 title-font">
              Company
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  How it works
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  Contact Us
                </a>
              </li>
            </nav>
          </div>
          <div className="pr-4">
            <h2 className="mb-3 text-lg font-bold tracking-widest text-gray-900 title-font ">
              Support
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  Support Carrier
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  24h Service
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  Quick Chat
                </a>
              </li>
            </nav>
          </div>
          <div className="pr-4">
            <h2 className="mb-3 text-lg font-bold tracking-widest text-gray-900 title-font">
              Contact
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  Whatsapp
                </a>
              </li>
              <li>
                <a className="text-gray-600 cursor-pointer hover:text-gray-800">
                  Support 24h
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mx-[3rem] lg:mx-[6rem] my-6">
        <p className="text-gray-500 text-sm text-center py-8">
          Copyright © 2022 Dine Market
        </p>
        <p className="text-gray-500 text-sm text-center py-8">
          Design by. <span className="font-extrabold">Weird Design Studio</span>
        </p>
        <p className="text-gray-500 text-sm text-center py-8">
          Code by. <span className="font-extrabold">moneebullah25</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
