import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-[250px] w-full py-6 md:py-10 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col bg-greencolor text-background">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6">
        <div>
          <h1 className="text-base md:text-[18px] mb-3 md:mb-4 font-bold">Store Locator</h1>
          <div className="flex flex-col gap-2">
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Find a Store</p>
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Opening Hours</p>
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Store Services</p>
          </div>
        </div>
        <div>
          <h1 className="text-base md:text-[18px] mb-3 md:mb-4 font-bold">Customer Service</h1>
          <div className="flex flex-col gap-2">
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Contact Us</p>
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">FAQ</p>
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Help Center</p>
          </div>
        </div>
        <div>
          <h1 className="text-base md:text-[18px] mb-3 md:mb-4 font-bold">Policies</h1>
          <div className="flex flex-col gap-2">
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Return Policy</p>
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Privacy Policy</p>
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Team of Service</p>
          </div>
        </div>
        <div>
          <h1 className="text-base md:text-[18px] mb-3 md:mb-4 font-bold">Cactus Card</h1>
          <div className="flex flex-col gap-2">
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Loyalty Program</p>
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Benefits</p>
            <p className="text-xs md:text-[14px] hover:underline cursor-pointer">Register Card</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-green-100 opacity-40 my-4 md:my-5"></div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <h2 className="text-sm md:text-base mr-1">Follow us: </h2>
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500 opacity-100 hover:opacity-80 transition-opacity cursor-pointer">
            <FaFacebookF className="text-sm" />
          </div>
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500 opacity-100 hover:opacity-80 transition-opacity cursor-pointer">
            <IoLogoInstagram className="text-sm" />
          </div>
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500 opacity-100 hover:opacity-80 transition-opacity cursor-pointer">
            <AiOutlineTikTok className="text-sm" />
          </div>
        </div>
        <div className="text-xs md:text-sm text-center sm:text-right">
          <p>&copy; {new Date().getFullYear()} Cactus. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
