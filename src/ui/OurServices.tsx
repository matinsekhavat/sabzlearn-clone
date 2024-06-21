import { BiBook } from "react-icons/bi";

function OurServices() {
  return (
    <div className="p-4 rounded-2xl flex flex-col gap-2 items-center bg-white lg:flex-row lg:py-8">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="h-12 bg-slate-200 w-20 rounded-2xl lg:w-12 lg:h-20"></div>
        <BiBook className="text-[2.5rem] text-blue-600 -mt-4 lg:mt-0 lg:-mr-6" />
      </div>
      <div className="text-center mt-2">
        <h1 className="text-slate-800 font-semibold lg:text-xl">
          تضمین کاملترین محتوا
        </h1>
        <p className="text-sm mt-2 text-stone-500 lg:text-base">
          بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز
          دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری
        </p>
      </div>
    </div>
  );
}

export default OurServices;
