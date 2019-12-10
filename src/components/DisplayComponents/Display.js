import React from "react";

const styles = {
  gridColumn: "1 / 3",
  gridRow: "1 / 1"
};

export const Display = ({ value }) => {
  return (
    <div style={styles} className="display">
      {value}
    </div>
  );
};
