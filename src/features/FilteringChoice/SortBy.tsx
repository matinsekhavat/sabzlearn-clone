import { FaCheck } from "react-icons/fa";
import { sortChoice } from "../../context/FilterContext";
type SortByProps = {
  sortBy: string;
  value: sortChoice;
  onSortClick: (value: sortChoice) => void;
  currValue: sortChoice;
  useFor: "mobile" | "desktop";
};

function SortBy({
  sortBy,
  value,
  onSortClick,
  currValue,
  useFor,
}: SortByProps) {
  if (useFor === "mobile") {
    return (
      <div
        className="px-2 py-4 flex items-center justify-between cursor-pointer "
        onClick={() => onSortClick(value)}
        style={{ color: value === currValue ? "green" : "" }}
      >
        <span>{sortBy}</span>
        {currValue === value && (
          <span className="text-xs =">
            <FaCheck />
          </span>
        )}
      </div>
    );
  }
  if (useFor === "desktop") {
    return (
      <div className="">
        <button
          onClick={() => onSortClick(value)}
          style={{ color: value === currValue ? "green" : "" }}
        >
          {sortBy}
        </button>
      </div>
    );
  }
}

export default SortBy;
