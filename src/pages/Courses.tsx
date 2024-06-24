import CourseFilter from "../features/courses/CourseFilter";
import HeadTitle from "../ui/HeadTitle";
import { e2p } from "../utils/replaceNumber";

function Courses() {
  return (
    <div className="container">
      <HeadTitle
        title="دوره ها"
        subTitle="همه دوره ها در یک نگاه"
        color="yellow"
      >
        {e2p("44")}عنوان اموزشی
      </HeadTitle>
      <CourseFilter />
    </div>
  );
}

export default Courses;
