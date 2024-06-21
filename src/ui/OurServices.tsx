import { BiBook } from "react-icons/bi";

type OurServicesProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  iconColor: string;
  iconBgInstance: string;
};

function OurServices({
  title,
  description,
  icon,
  iconColor,
  iconBgInstance,
}: OurServicesProps) {
  return (
    <div className="p-4 rounded-2xl flex flex-col gap-2 items-center bg-white lg:flex-row lg:py-8 ">
      <div className="flex flex-col items-center lg:flex-row">
        <div
          style={{ backgroundColor: `${iconBgInstance}` }}
          className="h-12 bg-slate-200 w-20 rounded-2xl lg:w-12 lg:h-20"
        ></div>
        {icon}
      </div>
      <div className="text-center mt-2">
        <h1 className="text-slate-800 font-semibold lg:text-xl">{title}</h1>
        <p className="text-sm mt-2 text-stone-500 lg:text-sm">{description}</p>
      </div>
    </div>
  );
}

export default OurServices;
