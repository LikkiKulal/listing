import { useMemo } from "react";
import "./Statechecked.css";

const Statechecked = ({ icontickBackgroundColor }) => {
  const icontickStyle = useMemo(() => {
    return {
      backgroundColor: icontickBackgroundColor,
    };
  }, [icontickBackgroundColor]);

  return (
    <div className="statechecked">
      <div className="icontick" style={icontickStyle}>
        <div className="icontick-child" />
        <img className="icontick-item" alt="" src="/vector-7.svg" />
      </div>
    </div>
  );
};

export default Statechecked;
