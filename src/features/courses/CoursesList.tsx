import { BiUser } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import CourseItem from "./CourseItem";

export type courseProps = {
  background_url: string;
  title: string;
  description: string;
  courseRate: string;
  teacher: string;
  price: string;
  discount: number;
  discountPrice: number;
};
type courseListProps = {
  courses: courseProps[];
};

function CoursesList({ courses }: courseListProps) {
  return (
    <div className="container my-8 grid grid-cols-1 sm:grid-cols-2 gap-7">
      <CourseItem />
      <CourseItem />
    </div>
  );
}

export default CoursesList;
