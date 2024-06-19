import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function HeroLanding() {
  return (
    <div className="my-4 grid gap-y-8 lg:grid-cols-[.8fr_1fr] container   lg:items-center py-4">
      {/* Hero Image */}
      <div className="lg:order-2">
        <img src="./public/hero-dark.svg " className="size-full" />
      </div>
      {/* Hero Heading */}
      <div className="text-slate-950 text-center">
        <h1 className="text-center  text-3xl lg:text-[3rem] font-bold leading-normal lg:text-right ">
          آکادمی آموزش
          <br />
          برنامه نویسی سبزلرن
        </h1>
        <p className="my-4 sm:text-2xl mt-5 sm:mt-9 lg:max-w-[440px] xl:max-w-[470px] font-semibold text-[18px] lg:my-16">
          با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و
          پیشرفت کن
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="bg-blue-500 text-white font-semibold h-[52px] flex items-center rounded-2xl px-8 "
          >
            از این مسیر شروع کن
          </Link>
          <div className="size-14 bg-green-600 flex items-center justify-center text-white  text-3xl  rounded-full">
            <CiPlay1 className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLanding;
