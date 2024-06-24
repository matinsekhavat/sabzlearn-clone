import { FaMagnifyingGlass } from "react-icons/fa6";
import CourseActionButton from "./CourseActionButton";
import { useState } from "react";

function CourseFilter() {
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [isCourseVisible, setIsCourseVisible] = useState<boolean>(false);

  function filterMenuHandler() {
    setIsFilterVisible(true);
  }
  function courseMenuHandler() {
    setIsCourseVisible(true);
  }
  function closeFilterMenuHander() {
    setIsFilterVisible(false);
  }
  function closeCourseMenuHander() {
    setIsCourseVisible(false);
  }
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
        <button className="size-8 flex items-center justify-center rounded-md">
          <FaMagnifyingGlass />
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
