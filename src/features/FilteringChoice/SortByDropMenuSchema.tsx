import { useFilter } from "../../context/FilterContext";
import SortBy from "./SortBy";
import { IoCloseOutline } from "react-icons/io5";

function SortByDropMenuSchema() {
  const { sortBy, sortByHandler } = useFilter();

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-stone-200 ">
        <p>مرتب سازی بر اساس</p>
        <span>
          <IoCloseOutline />
        </span>
      </div>
      <div className="flex flex-col gap-2 divide-y-2">
        <SortBy
          sortBy="همه دوره ها"
          value="all"
          onSortClick={sortByHandler}
          currValue={sortBy}
          useFor="mobile"
        />
        <SortBy
          sortBy="ارزان ترین"
          value="cheap"
          onSortClick={sortByHandler}
          currValue={sortBy}
          useFor="mobile"
        />
        <SortBy
          sortBy="گران ترین"
          value="expensive"
          onSortClick={sortByHandler}
          currValue={sortBy}
          useFor="mobile"
        />
        <SortBy
          sortBy="پرمخاطب ها"
          value="popular"
          onSortClick={sortByHandler}
          currValue={sortBy}
          useFor="mobile"
        />
      </div>
    </>
  );
}

export default SortByDropMenuSchema;
