import HeroLanding from "../ui/HeroLanding";
import { FaLongArrowAltLeft } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <HeroLanding />
      <div className="container my-2">
        <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 ">
              آخرین دوره های سبزلرن
            </h3>
            <span className="text-gray-400">سکوی پرتاپ شما به سمت موفقیت</span>
          </div>
          <div className="flex items-center gap-2 text-lg text-green-500">
            <p>مشاهده همه دوره ها</p>
            <FaLongArrowAltLeft className="mt-1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
