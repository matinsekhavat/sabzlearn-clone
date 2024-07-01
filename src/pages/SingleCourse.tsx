import { e2p } from "../utils/replaceNumber";

function SingleCourse() {
  return (
    // Course Detail Info  - UI Upperside
    <main className="container">
      <div className="grid grid-cols-1 bg-white">
        {/* Course info wrapper Banner */}
        <div>
          <img
            src="https://sabzlearn.ir/wp-content/uploads/2023/12/Com_react-1-768x432.webp"
            alt="React course"
          />
        </div>

        {/* Course Info Descriptions */}
        <div>
          <h1>
            آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام [منتورشیپ]
          </h1>
          <p className="line-clamp-3">
            حدود 40 ساعت آموزش جامع و تخصصی ری اکت! شما در دوره آموزش ری اکت
            ReactJS ، این کتابخانه قدرتمند و پر استفاده جاوا اسکریپت را به صورت
            کاملا پروژه محور و کاربردی یاد میگیرید! ری اکت گل سرسبد فرانت اند
            محسوب میشود،اگر دوره
          </p>
          {/* here must add CountDown Feature */}

          {/* Course shipment detail */}
          <div>
            <div>
              <div>
                <p>{e2p("2,400,000")}</p>
                <span>تومان</span>
              </div>
              <div className="line-through text-gray-400">
                {e2p("4,800,000")}
              </div>
            </div>
            <button></button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleCourse;
