import { Swiper, SwiperSlide } from "swiper/react";
import CourseItem from "./CourseItem";
import { Pagination } from "swiper/modules";
import "swiper/css";
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
  courses: courseProps[] | [];
  isCarousel: boolean;
  isAside: boolean;
};

function CoursesList({
  courses,
  isCarousel,
  isAside = false,
}: courseListProps) {
  if (isCarousel) {
    return (
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
  if (isAside) {
    return (
      <div className="container  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-7">
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    );
  }
  return (
    <div className="container my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </div>
  );
}

export default CoursesList;
