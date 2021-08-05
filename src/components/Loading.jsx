import React from "react";
import Column from "./Column";

const Loading = () => {
  return (
    <Column c={12} m={12} l={12}>
      <div className="loading">
        <div className="snippet" data-title=".dot-flashing">
          <div className="stage">
            <div className="dot-flashing"></div>
          </div>
        </div>
      </div>
    </Column>
  );
};

export default Loading;
