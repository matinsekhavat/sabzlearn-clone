import ToggleRadio from "../../ui/ToggleRadio";

function FilterSelection() {
  return (
    <div className=" flex flex-col divide-y-2">
      <div className="bg-white flex items-center justify-between py-4 px-2 rounded-md">
        <p>دوره های رایگان</p>
        <ToggleRadio value="free" />
      </div>
      <div className="bg-white flex items-center justify-between py-4 px-2 rounded-md">
        <p>دوره های پیشفروش</p>
        <ToggleRadio value="presell" />
      </div>
    </div>
  );
}

export default FilterSelection;
