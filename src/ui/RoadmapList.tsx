import RoadmapItem from "./RoadmapItem";

export default function RoadmapList() {
  return (
    <div className="my-12">
      {/* Head */}
      <div className="text-center font-semibold ">
        <h3 className="text-slate-900 text-2xl "> نقشه راه ها</h3>
        <p className="text-stone-600 mt-4">
          نقشه های راه برای شروع اصولی یادگیری
        </p>
      </div>
      {/* List */}
      <div className="grid grid-cols-2 my-8">
        <RoadmapItem />
      </div>
    </div>
  );
}
