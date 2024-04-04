import { useMemo } from "react";
import "./Stateunchecked.css";

const Stateunchecked = ({ stateuncheckedPosition }) => {
  const stateuncheckedStyle = useMemo(() => {
    return {
      position: stateuncheckedPosition,
    };
  }, [stateuncheckedPosition]);

  return (
    <div className="stateunchecked" style={stateuncheckedStyle}>
      <div className="inputcheckboxon">
        <img className="subtract-icon" alt="" src="/subtract.svg" />
      </div>
    </div>
  );
};

export default Stateunchecked;
