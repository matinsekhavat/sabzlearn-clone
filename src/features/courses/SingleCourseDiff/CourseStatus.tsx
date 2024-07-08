import CourseExtraInfo from "./CourseExtraInfo";
import { e2p } from "../../../utils/replaceNumber";
import { FaStar, FaUsers } from "react-icons/fa";
import ProgressBar from "../../../ui/ProgressBar";

function CourseStatus() {
  return (
    <div className="bg-white p-[1.4rem] rounded-xl  ">
      <div className="grid grid-cols-2 gap-2">
        <CourseExtraInfo
          title={`${e2p(1593)}`}
          description="دانشجو"
          icon={<FaUsers />}
          bgColor="#efefef"
        />
        <CourseExtraInfo
          title={e2p("5.0")}
          description="رضایت"
          icon={<FaStar style={{ color: "rgb(245 158 11)" }} />}
          bgColor="#efefef"
        />
      </div>
      <div className="flex items-center justify-between my-4 font-semibold">
        <p>درصد تکمیل دوره</p>
        <p>{e2p("100%")}</p>
      </div>
      {/* Progress Bar */}
      <ProgressBar progress={100} height={10} />
    </div>
  );
}

export default CourseStatus;
