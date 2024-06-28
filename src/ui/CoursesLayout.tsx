import { ReactNode } from "react";
import CourseFilter from "../features/courses/CourseFilter";
import SortBy from "../features/FilteringChoice/SortBy";
import { TbArrowsSort } from "react-icons/tb";
import { useFilter } from "../context/FilterContext";
import FilterSelection from "../features/FilteringChoice/FilterSelection";
type CoursesLayoutProps = {
  children?: ReactNode;
};
function CoursesLayout({ children }: CoursesLayoutProps) {
  const { sortByHandler, sortBy } = useFilter();
  return (
    <div className="grid grid-cols-1 gap-4  md:grid-cols-[300px_1fr] md:my-8 items-start">
      <div>
        <CourseFilter />
        {/* filtering in desktop  */}
        <FilterSelection />
      </div>
      <div>
        <div className="hidden md:flex md:items-center gap-4 bg-white h-16 px-2 rounded-xl mb-2">
          <div className="flex items-center gap-2 text-lg text-slate-900">
            <span>
              <TbArrowsSort />
            </span>
            <p>مرتب سازی بر اساس:</p>
          </div>
          {/* DESKTOP SORT BY section */}
          <div className="flex items-center  gap-4 h-full">
            <SortBy
              useFor="desktop"
              value="all"
              onSortClick={sortByHandler}
              currValue={sortBy}
              sortBy="همه دوره ها"
            />
            <SortBy
              useFor="desktop"
              value="cheap"
              onSortClick={sortByHandler}
              sortBy="ارزان ترین"
              currValue={sortBy}
            />
            <SortBy
              useFor="desktop"
              value="expensive"
              onSortClick={sortByHandler}
              sortBy="گران ترین"
              currValue={sortBy}
            />{" "}
            <SortBy
              useFor="desktop"
              value="popular"
              onSortClick={sortByHandler}
              sortBy="پرمخاطب ها"
              currValue={sortBy}
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default CoursesLayout;
