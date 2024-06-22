import { BiUser } from "react-icons/bi";
import { FaStar, FaUsers } from "react-icons/fa";
import { e2p, sp } from "../../utils/replaceNumber";

function CourseItem() {
  return (
    <div className="rounded-3xl bg-white overflow-hidden">
      {/* banner */}
      <div className="relative ">
        <img
          src="https://sabzlearn.ir/wp-content/uploads/2023/12/Com_react-1-768x432.webp"
          alt=""
          className="rounded-3xl "
        />
        {/* discount */}
        <div className="bg-green-600 text-white px-4 py-1 absolute top-4 right-4 rounded-full text-sm">
          {e2p("60")}%
        </div>
      </div>
      {/* downside */}
      <div className="p-4">
        <h3 className="text-slate-950  line-clamp-2 font-semibold">
          آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام [منتورشیپ]
        </h3>
        <p className="text-stone-500 my-4 line-clamp-2">
          حدود 40 ساعت آموزش جامع و تخصصی ری اکت! شما در دوره آموزش ری اکت
          ReactJS ، این کتابخانه قدرتمند…
        </p>
        {/* teacher & rate */}
        <div className="flex items-center justify-between border-b border-slate-300 pb-4 ">
          <div className="flex items-center gap-2 text-stone-500">
            <BiUser />
            <span>محمد امین سعیدی راد</span>
          </div>
          <div className="text-yellow-500 flex items-center gap-2">
            <span>{e2p("5.0")}</span>
            <FaStar className="fill-yellow-500" />
          </div>
          {/* price box */}
        </div>
        <div className="flex items-end justify-between">
          {/* student count */}
          <div className="text-stone-500 flex items-center gap-2">
            <FaUsers />
            <span>1918</span>
          </div>
          <div>
            <span className="line-through text-gray-500">{sp(4800000)}</span>
            <div className="text-green-600 font-semibold">
              <span className="">{sp(1920000)}</span>
              <span className="mr-2">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
