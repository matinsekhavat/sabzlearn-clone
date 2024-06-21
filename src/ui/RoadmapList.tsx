import { MdOutlineSecurity } from "react-icons/md";
import RoadmapItem from "./RoadmapItem";
import { FaLaptopCode, FaPuzzlePiece, FaPython } from "react-icons/fa";

export default function RoadmapList() {
  return (
    <div className="my-12 container">
      {/* Head */}
      <div className="text-center font-semibold ">
        <h3 className="text-slate-900 text-2xl "> نقشه راه ها</h3>
        <p className="text-stone-600 mt-4">
          نقشه های راه برای شروع اصولی یادگیری
        </p>
      </div>
      {/* List */}
      <div className="grid grid-cols-2 my-8 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <RoadmapItem
          title="فرانت اند"
          courseCount={28}
          gradientFrom="#FFB535"
          gradientTo="#F2295B"
          icon={<FaLaptopCode />}
        />{" "}
        <RoadmapItem
          title="امنیت"
          courseCount={9}
          gradientFrom="#30C5E4"
          gradientTo="#28E55D"
          icon={<MdOutlineSecurity />}
        />{" "}
        <RoadmapItem
          title="پایتون"
          courseCount={6}
          gradientFrom="#94acbb"
          gradientTo="#2c3e50"
          icon={<FaPython />}
        />
        <RoadmapItem
          title="مهارت های نرم"
          courseCount={6}
          gradientFrom="#000428
"
          gradientTo="#004e92"
          icon={<FaPuzzlePiece />}
        />
      </div>
    </div>
  );
}
