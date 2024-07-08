import { FaClock } from "react-icons/fa";

interface CourseExtraInfoProps {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor?: string;
}

function CourseExtraInfo({
  icon = <FaClock />,
  title,
  description,
  bgColor = "white",
}: CourseExtraInfoProps) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col sm:flex-row items-center gap-4 text-sm sm:text-base justify-center  text-center rounded-xl p-3 md:p-4 lg:p-5 "
    >
      <span className="text-green-500 text-[42px]  ">{icon}</span>
      <div className="space-y-1 md:space-y-2 lg:space-y-3">
        <p className="text-base font-semibold ">{title}</p>
        <p className="text-sm text-stone-500 ">{description}</p>
      </div>
    </div>
  );
}

export default CourseExtraInfo;
