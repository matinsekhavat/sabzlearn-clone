import { ReactNode } from "react";

type headTitleProps = {
  children?: ReactNode;
  color: string;
};
function HeadTitle({ children, color }: headTitleProps) {
  return (
    <div className="container my-2">
      <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between">
        {/* text for last courses */}
        <div className="text-center">
          <div className="flex  items-center  gap-2">
            <div
              style={{ backgroundColor: `${color}` }}
              className="size-6  rounded-md hidden sm:block"
            ></div>
            <h3 className="text-xl font-semibold  ">آخرین دوره های سبزلرن</h3>
          </div>
          <span className="text-gray-400 mt-2">
            سکوی پرتاپ شما به سمت موفقیت
          </span>
        </div>
        {/* Links */}
        <div className="flex items-center gap-2 text-lg text-green-500">
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeadTitle;
