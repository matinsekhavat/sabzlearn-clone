import { ReactNode, useRef } from "react";
import Overlay from "../../ui/Overlay";
import useDetectOutsideClick from "../../hooks/useOutsideClick";
import DropMenu from "./DropMenu";

type CourseActionButtonProps = {
  children: ReactNode;
  openHandler: () => void;
  isOpen: boolean;
  closeHandler: () => void;
};

function CourseActionButton({
  children,
  isOpen,
  openHandler,
  closeHandler,
}: CourseActionButtonProps) {
  const dropMenu = useRef<HTMLDivElement>(null);
  useDetectOutsideClick(dropMenu, closeHandler, true);
  return (
    <>
      {/* mobile show */}
      <button
        className="bg-white rounded-xl text-center py-4 block w-full text-sm sm:text-base sm:hidden "
        onClick={openHandler}
      >
        {children}
      </button>
      {isOpen ? <DropMenu ref={dropMenu} /> : ""}
      {<Overlay isShow={isOpen} />}
    </>
  );
}

export default CourseActionButton;
