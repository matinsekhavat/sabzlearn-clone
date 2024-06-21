import HeroLanding from "../ui/HeroLanding";
import CoursesList from "../features/courses/CoursesList";
import RoadmapList from "../ui/RoadmapList";
import HeadTitle from "../ui/HeadTitle";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { courses } from "../services/data";

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

      <RoadmapList />
      {/* sabzlearn suggestion */}
      <HeadTitle
        title="پیشنهاد سبزلرن"
        subTitle="جدید ترین دوره های تکمیل شده"
        color="green"
      />
      <CoursesList courses={courses} isCarousel={true} />

      {/* how we can help you */}
      <section>
        <HeadTitle
          color="#3b82f6"
          title="ما چه کمکی میتونیم بهت بکنیم"
          subTitle="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
        />
      </section>
    </>
  );
}

export default HomePage;
