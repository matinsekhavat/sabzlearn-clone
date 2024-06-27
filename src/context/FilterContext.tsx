import { ReactNode, createContext, useContext, useState } from "react";

type FilterProviderProps = {
  children: ReactNode;
};

export type sortChoice = "all" | "expensive" | "cheap" | "popular"; // add more options as needed
export type filterByChoice = {
  free: boolean;
  presell: boolean;
};
type FilterContextType = {
  isFilterVisible: boolean;
  isCourseVisible: boolean;
  setIsFilterVisible: (value: boolean) => void;
  filterMenuHandler: () => void;
  courseMenuHandler: () => void;
  closeFilterMenuHander: () => void;
  closeCourseMenuHander: () => void;
  sortBy: sortChoice;
  setSortBy: (value: sortChoice) => void;
  sortByHandler: (value: sortChoice) => void;
  filterBy: filterByChoice;
  setFilterBy: (value: filterByChoice) => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

const FilterProvider = ({ children }: FilterProviderProps) => {
  // CourseFilter data
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [isCourseVisible, setIsCourseVisible] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<sortChoice>("all");
  const [filterBy, setFilterBy] = useState<filterByChoice>({
    free: false,
    presell: false,
  });
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
  function sortByHandler(value: sortChoice) {
    setSortBy(value);
  }

  return (
    <FilterContext.Provider
      value={{
        isFilterVisible,
        isCourseVisible,
        setIsFilterVisible,
        filterMenuHandler,
        courseMenuHandler,
        closeFilterMenuHander,
        closeCourseMenuHander,
        sortBy,
        setSortBy,
        sortByHandler,
        filterBy,
        setFilterBy,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) throw new Error("you can not access this data into this area");
  return context;
}

export default FilterProvider;
