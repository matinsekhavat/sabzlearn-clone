import CoursesList from "../features/courses/CoursesList";
import CoursesLayout from "../ui/CoursesLayout";
import HeadTitle from "../ui/HeadTitle";
import { e2p } from "../utils/replaceNumber";

function Courses() {
  return (
    <div className="w-full px-8">
      <HeadTitle
        title="دوره ها"
        subTitle="همه دوره ها در یک نگاه"
        color="yellow"
      >
        {e2p("44")}عنوان اموزشی
      </HeadTitle>
      <CoursesLayout>
        <CoursesList courses={[]} isCarousel={false} isAside={true} />
      </CoursesLayout>
    </div>
  );
}

export default Courses;
