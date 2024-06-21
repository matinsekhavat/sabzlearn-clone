import { FaLaptopCode } from "react-icons/fa";

function RoadmapItem() {
  return (
    <div className="py-5 bg-gradient-to-r from-[#FFB535] to-[#F2295B] overflow-hidden rounded-2xl">
      <div className="flex flex-col items-center gap-2 text-white ">
        <FaLaptopCode className="text-[3]" />
        <p>فرانت اند</p>
        <span>28 دوره</span>
      </div>
    </div>
  );
}

export default RoadmapItem;
