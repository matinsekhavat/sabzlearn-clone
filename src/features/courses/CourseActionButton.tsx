import { ReactNode, useRef } from "react";
import Overlay from "../../ui/Overlay";
import useDetectOutsideClick from "../../hooks/useOutsideClick";

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
      <button
        className="bg-white rounded-xl text-center py-4 block w-full text-sm sm:text-base "
        onClick={openHandler}
      >
        {children}
      </button>
      {isOpen ? (
        <div
          className="fixed bottom-0 left-0 right-0 h-96 bg-white rounded-t-md p-x4 py-2 z-50"
          ref={dropMenu}
        >
          dummy data
        </div>
      ) : (
        ""
      )}
      {<Overlay isShow={isOpen} />}
    </>
  );
}

export default CourseActionButton;
