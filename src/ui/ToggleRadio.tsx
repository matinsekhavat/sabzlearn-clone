import { useSearchParams } from "react-router-dom";
import { filterByChoice, useFilter } from "../context/FilterContext";

type ToggleRadioProps = {
  value: keyof filterByChoice;
};

function ToggleRadio({ value }: ToggleRadioProps) {
  const { filterBy, setFilterBy } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleToggleFilter = () => {
    const newFilterBy: filterByChoice = {
      ...filterBy,
      [value]: !filterBy[value],
    };
    setFilterBy(newFilterBy);

    updateUrlParams(searchParams, setSearchParams, value, newFilterBy[value]);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={value}
        className="sr-only peer"
        checked={filterBy[value]}
        onChange={handleToggleFilter}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        <span className="ml-2"></span>
      </div>
    </label>
  );
}

const updateUrlParams = (
  searchParams: URLSearchParams,
  setSearchParams: (nextInit: URLSearchParams) => void,
  key: string,
  value: boolean
) => {
  if (!value) {
    searchParams.delete(key);
  } else {
    searchParams.set(key, String(value));
  }
  setSearchParams(searchParams);
};

export default ToggleRadio;
