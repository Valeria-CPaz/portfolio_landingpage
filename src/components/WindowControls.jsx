import { X } from "lucide-react";

import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls" className="flex gap-2 order-2">
      <div
        className="close flex items-center justify-center"
        onClick={() => closeWindow(target)}
      >
        <X size={12} strokeWidth={3} />
      </div>
    </div>
  );
};

export default WindowControls;
