import { useRef } from "react";

import { dockApps } from "#constants";

const Dock = () => {
  const dockRef = useRef(null);

  const toggleApp = () => {};

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
                className={canOpen ? "" : "opacity-80"}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dock;
