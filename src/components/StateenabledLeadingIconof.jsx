import { useMemo } from "react";
import "./StateenabledLeadingIconof.css";

const StateenabledLeadingIconof = ({ prop, divFontFamily, divFontWeight }) => {
  const divStyle = useMemo(() => {
    return {
      fontFamily: divFontFamily,
      fontWeight: divFontWeight,
    };
  }, [divFontFamily, divFontWeight]);

  return (
    <div className="stateenabled-leading-iconof">
      <div className="div" style={divStyle}>
        {prop}
      </div>
      <img className="remove-icon" alt="" src="/remove@2x.png" />
    </div>
  );
};

export default StateenabledLeadingIconof;
