import { FaMagnifyingGlass } from "react-icons/fa6";
import CourseActionButton from "./CourseActionButton";
import { useFilter } from "../../context/FilterContext";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

function CourseFilter() {
  const {
    isFilterVisible,
    isCourseVisible,
    closeCourseMenuHander,
    closeFilterMenuHander,
    courseMenuHandler,
    filterMenuHandler,
  } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  const inputRef = useRef<HTMLInputElement | null>(null);
  function handleSearchInputToUrl() {
    if (!inputRef.current?.value.trim()) {
      searchParams.delete("query");
    }

    searchParams.set("query", inputRef.current!.value);
    setSearchParams(searchParams);
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
          ref={inputRef}
        />
        <button
          className="flex items-center justify-center rounded-md ml-2"
          onClick={handleSearchInputToUrl}
        >
          <FaMagnifyingGlass className="text-2xl size-full p-1" />
        </button>
      </div>
      {/* action buttons */}
      <div className="grid grid-cols-1 gap-4 my-2">
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

