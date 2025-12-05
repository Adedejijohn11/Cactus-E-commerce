import Categories from "@/components/homepage/categories";
import FarmerlabelSection from "@/components/homepage/FarmerlabelSection";
import Herosection from "@/components/homepage/Herosection";
import Promosection from "@/components/homepage/Promosection";

export default function Home() {
  return (
    <div className="h-full w-full mt-2.5 ">
      <Herosection />
      <Categories />
      <Promosection />
      <FarmerlabelSection />
    </div>
  );
}
