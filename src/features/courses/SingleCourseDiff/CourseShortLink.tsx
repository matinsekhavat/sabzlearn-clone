import { ReactNode, useRef } from "react";
import { BiClipboard } from "react-icons/bi";
import { copyToClipboard } from "../../../utils/CopyToClipboard";

type CourseShortLinkProps = {
  children: ReactNode;
};

function CourseShortLink({ children = "فاقد لینک" }: CourseShortLinkProps) {
  const linkRef = useRef<HTMLSpanElement | null>(null);

  return (
    <div className="bg-white rounded-xl p-4 text-center font-semibold">
      <p className="text-lg">لینک کوتاه دوره</p>
      <div className="rounded-xl border border-dashed border-blue-400 bg-sky-100 p-6 flex items-center justify-between my-4 text-xl text-blue-600">
        <span
          className="cursor-pointer text-2xl"
          onClick={() => copyToClipboard(linkRef.current!.innerHTML)}
        >
          <BiClipboard />
        </span>
        <span ref={linkRef}>{children}</span>
      </div>
    </div>
  );
}

export default CourseShortLink;
