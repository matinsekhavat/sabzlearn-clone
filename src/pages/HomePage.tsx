import HeroLanding from "../ui/HeroLanding";
import CoursesList from "../features/courses/CoursesList";
import RoadmapList from "../ui/RoadmapList";
import HeadTitle from "../ui/HeadTitle";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { courses } from "../services/data";
import OurServices from "../ui/OurServices";

function HomePage() {
  return (
    <>
      <HeroLanding />
      {/* Show Last courses
       */}
      <HeadTitle
        color="rgb(251 191 36)"
        title="آخرین دوره های سبزلرن"
        subTitle="سکوی پرتاپ شما به سمت موفقیت"
      >
        <Link to="/">مشاهده همه دوره ها</Link>
        <FaLongArrowAltLeft className="mt-1" />
      </HeadTitle>
      {/* Courses */}
      <CoursesList courses={courses} isCarousel={false} />

      {/* Roadmap */}
      <section>
        <RoadmapList />
        {/* sabzlearn suggestion */}
        <HeadTitle
          title="پیشنهاد سبزلرن"
          subTitle="جدید ترین دوره های تکمیل شده"
          color="green"
        />
        <CoursesList courses={courses} isCarousel={true} />
      </section>

      {/* how we can help you */}
      <section className="my-4">
        <HeadTitle
          color="#3b82f6"
          title="ما چه کمکی میتونیم بهت بکنیم"
          subTitle="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
        />

        <div className="grid grid-cols-1 gap-4 container md:grid-cols-2 ">
          <OurServices />
          <OurServices />
          <OurServices />
          <OurServices />
        </div>
      </section>
    </>
  );
}

export default HomePage;
