import { useRef } from "react";

import { dockApps } from "#constants";
import useWindowStore from "#store/window";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef(null);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const window = windows[app.id];

    if (!window) {
      console.error(`Window not found for app:, ${app.id}`);
      return;
    }

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="group relative flex justify-center">
            {/* Tooltip */}
            <span className="dock-tooltip">{name}</span>
            <button
              type="button"
              className="dock-icon"
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-50"}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dock;
