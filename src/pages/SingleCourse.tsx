import { IoIosInformationCircleOutline } from "react-icons/io";
import CourseExtraInfo from "../features/courses/SingleCourseDiff/CourseExtraInfo";
import { e2p } from "../utils/replaceNumber";
import { IoTimeOutline } from "react-icons/io5";
import { ImCalendar } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import { BsCameraVideo } from "react-icons/bs";

function SingleCourse() {
  return (
    // Course Detail Info  - UI Upperside
    <main className="container my-16">
      <div className="grid grid-cols-1 bg-white  lg:bg-inherit p-4 rounded-xl lg:grid-cols-2 gap-4 ">
        {/* Course info wrapper Banner */}
        <div className="rounded-xl overflow-hidden lg:order-2">
          <img
            src="https://sabzlearn.ir/wp-content/uploads/2023/12/Com_react-1-768x432.webp"
            alt="React course"
            className="overflow-hidden size-full object-cover"
          />
        </div>

        {/* Course Info Descriptions */}
        <div className="md:space-y-8">
          <h1 className="my-4 text-2xl md:text-3xl ">
            آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام [منتورشیپ]
          </h1>
          <p className="line-clamp-3 text-[15px] text-stone-700 md:text-base">
            حدود 40 ساعت آموزش جامع و تخصصی ری اکت! شما در دوره آموزش ری اکت
            ReactJS ، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت
            کاملا پروژه محور و کاربردی یاد میگیرید! ری اکت گل سرسبد فرانت اند
            محسوب میشود،اگر دوره
          </p>
          {/* here must add CountDown Feature */}

          {/* Course shipment detail */}
          <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-4 md:justify-between md:text-lg">
            <div className="flex justify-center my-8">
              <div className="flex items-center gap-2">
                <div className="line-through text-gray-400">
                  {e2p("4,800,000")}
                </div>
                <p>{e2p("2,400,000")}</p>
                <span>تومان</span>
              </div>
            </div>

            <button className=" bg-green-500 w-full py-2 px-4 rounded-md text-white sm:w-auto md:px-8 md:my-4  ">
              {" "}
              ثبت نام در دوره
            </button>
          </div>
        </div>
      </div>
      {/* Grid system */}
      <div className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
        {/* CourseExtraInfo List */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-3 gap-4">
            <CourseExtraInfo
              title="وضعیت دوره"
              description="تکمیل شده"
              icon={<IoIosInformationCircleOutline />}
            />
            <CourseExtraInfo
              title="مدت زمان دوره"
              description={`${e2p(56)} ساعت
`}
              icon={<IoTimeOutline />}
            />
            <CourseExtraInfo
              title="آخرین بروزرسانی"
              description={`${e2p("1402/12/21")}`}
              icon={<ImCalendar />}
            />
            <CourseExtraInfo
              title="روش پشتیبانی"
              description="آنلاین"
              icon={<FaUserFriends />}
            />
            <CourseExtraInfo
              title="پیش نیاز"
              description="React.js"
              icon={<TiShoppingBag />}
            />
            <CourseExtraInfo
              title="نوع مشاهده"
              description="به صورت آنلاین"
              icon={<BsCameraVideo />}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 space-y-8">Aside</div>
      </div>
    </main>
  );
}

export default SingleCourse;
