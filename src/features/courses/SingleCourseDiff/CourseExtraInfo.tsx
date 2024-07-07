import { FaClock } from "react-icons/fa";

function CourseExtraInfo() {
  return (
    <div className="flex flex-row items-center gap-4 bg-white rounded-xl p-3">
      <span className="text-green-500 text-3xl">
        <FaClock />
      </span>
      <div className="space-y-1">
        <p className="text-lg">وضعیت دوره</p>
        <p className="text-sm text-stone-400">99 ساعت</p>
      </div>
    </div>
  );
}

export default CourseExtraInfo;
