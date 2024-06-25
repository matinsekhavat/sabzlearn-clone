import React, { forwardRef } from "react";
import DropMenuskeleton from "./DropMenuskeleton";

const DropMenu = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  return (
    <div
      className="fixed bottom-0 left-0 overflow-hidden right-0 h-96 bg-white rounded-t-md p-x4 pb-2 z-50"
      ref={ref}
    >
      <DropMenuskeleton />
    </div>
  );
});

export default DropMenu;
