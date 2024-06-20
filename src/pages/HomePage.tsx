import { Link } from "react-router-dom";
import HeroLanding from "../ui/HeroLanding";
import { FaLongArrowAltLeft } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <HeroLanding />
      {/* Show Last courses
       */}
      <div className="container my-2">
        <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between">
          {/* text for last courses */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 ">
              آخرین دوره های سبزلرن
            </h3>
            <span className="text-gray-400">سکوی پرتاپ شما به سمت موفقیت</span>
          </div>
          {/* Links */}
          <div className="flex items-center gap-2 text-lg text-green-500">
            <Link to="/">مشاهده همه دوره ها</Link>
            <FaLongArrowAltLeft className="mt-1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
