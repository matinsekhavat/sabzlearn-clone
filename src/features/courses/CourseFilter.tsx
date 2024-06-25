import { FaMagnifyingGlass } from "react-icons/fa6";
import CourseActionButton from "./CourseActionButton";
import { useFilter } from "../../context/FilterContext";

function CourseFilter() {
  const {
    isFilterVisible,
    isCourseVisible,
    closeCourseMenuHander,
    closeFilterMenuHander,
    courseMenuHandler,
    filterMenuHandler,
  } = useFilter();
  return (
    // mobile design
    <div>
      {/* searchBar */}
      <div className="max-w-full bg-white rounded-md text-stone-600 flex items-center gap-2 py-2">
        <input
          type="text"
          placeholder="جستجو بین دوره ها"
          className="w-full p-2 flex-1 rounded-md border-none outline-none"
        />
        <button className="flex items-center justify-center rounded-md ml-2">
          <FaMagnifyingGlass className="text-2xl size-full p-1" />
        </button>
      </div>
      {/* action buttons */}
      <div className="grid grid-cols-2 gap-4 my-2">
        <CourseActionButton
          openHandler={filterMenuHandler}
          isOpen={isFilterVisible}
          closeHandler={closeFilterMenuHander}
        >
          فیلتر
        </CourseActionButton>
        <CourseActionButton
          openHandler={courseMenuHandler}
          isOpen={isCourseVisible}
          closeHandler={closeCourseMenuHander}
        >
          همه دوره ها
        </CourseActionButton>
      </div>
    </div>
  );
}

export default CourseFilter;
