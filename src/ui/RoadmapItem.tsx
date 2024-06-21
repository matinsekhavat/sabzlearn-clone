type roadmapProps = {
  title: string;
  courseCount: number;
  icon: JSX.Element;
  gradientFrom: string;
  gradientTo: string;
};

function RoadmapItem({
  icon,
  title,
  courseCount,
  gradientFrom,
  gradientTo,
}: roadmapProps) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      }}
      className="py-5 overflow-hidden rounded-2xl"
    >
      <div className="flex flex-col items-center gap-2 text-white">
        <span className="text-[2.5rem]">{icon}</span>
        <p>{title}</p>
        <span>{courseCount} دوره</span>
      </div>
    </div>
  );
}

export default RoadmapItem;
