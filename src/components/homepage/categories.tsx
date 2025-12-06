import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";

const Categories = () => {
  return (
    <div className="h-[400px] w-full flex flex-col items-center mt-30 ">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-greencolor">
          Shop by Categories
        </h1>
        <p className="text-[20px]">
          Explore our wide section of fresh product local specialties and
          everyday essentails
        </p>
      </div>
      {/* cards */}
      <div className="h-[280px] w-[1400px] mt-5">
        <div className="relative h-full w-[400px] rounded-2xl border-2 border-gray-400 hover:border-green-400 shadow-2xl shadow-gray-500  overflow-hidden">
          <div className="h-[300px]">
            <Image
              src="/images/cart-grocery.jpg"
              alt="/"
              width={600}
              height={200}
              className="h-full w-full bg-cover bg-center mr-5 transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 h-20 w-full flex items-center justify-between px-8  bg-white">
            <div className="flex items-center gap-2">
              <div className=" flex justify-center items-center  bg-green-200 h-9 w-9 rounded-full">
                <GiFarmer className=" text-greencolor text-2xl" />
              </div>
              <h3 className="text-[18px] font-bold">Categories</h3>
            </div>

            <FaArrowRight className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
