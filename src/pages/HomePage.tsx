import { Link } from "react-router-dom";
import HeroLanding from "../ui/HeroLanding";
import { FaLongArrowAltLeft } from "react-icons/fa";
import CoursesList from "../features/courses/CoursesList";
import { courses } from "../services/data";
import RoadmapList from "../ui/RoadmapList";
import HeadTitle from "../ui/HeadTitle";

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
      <CoursesList courses={courses} />

      {/* Roadmap */}
      <RoadmapList />
      {/* sabzlearn suggestion */}
      <HeadTitle
        title="پیشنهاد سبزلرن"
        subTitle="جدید ترین دوره های تکمیل شده"
        color="green"
      />
    </>
  );
}

export default HomePage;
