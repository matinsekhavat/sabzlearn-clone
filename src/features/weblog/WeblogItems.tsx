import { BiArrowToLeft, BiCalendar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { e2p } from "../../utils/replaceNumber";

type WeblogProps = {
  title: string;
  description: string;
  author: string;
  date: string;
};

function WeblogItems({ author, date, description, title }: WeblogProps) {
  return (
    <div className="p-4 bg-white rounded-xl flex flex-col gap-8 justify-between">
      <div className="relative h-[182px]">
        <img
          src="https://sabzlearn.ir/wp-content/uploads/2024/05/1.1-1-768x427.webp"
          alt="sabzlearn webloag banner"
          className="h-full object-cover"
        />
        <div className="banner__opacity"></div>
      </div>
      {/* middle section */}
      <div>
        <h2 className="line-clamp-2 text-slate-800">{title}</h2>
        <p className="line-clamp-4 text-sm text-stone-500 my-4">
          {description}
        </p>
        {/* Author and Date - group */}
        <div className="flex items-center justify-between flex-wrap text-stone-500 text-sm">
          <div className="flex items-center gap-1">
            <FaUser />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="text-base">
              <BiCalendar />
            </span>
            <span>{e2p(date)}</span>
          </div>
        </div>
      </div>
      {/* weblog footer */}
      <div className="border-t border-stone-300 text-green-700 ">
        <div className="text-center flex items-center justify-center pt-4 gap-2">
          <span>مطالعه مقاله</span>
          <span>
            {" "}
            <BiArrowToLeft />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeblogItems;
