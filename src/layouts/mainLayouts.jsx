import React from "react";
import { Outlet } from "react-router-dom";

function mainLayouts() {
  return (
    <div>
      <div className="container"></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default mainLayouts;
