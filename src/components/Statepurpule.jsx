import { useMemo } from "react";
import "./Statepurpule.css";

const Statepurpule = ({
  text = "Status",
  statepurpuleBackgroundColor,
  statepurpulePosition,
  statepurpuleTop,
  statepurpuleLeft,
  statusLineHeight,
  statusColor,
}) => {
  const statepurpuleStyle = useMemo(() => {
    return {
      backgroundColor: statepurpuleBackgroundColor,
      position: statepurpulePosition,
      top: statepurpuleTop,
      left: statepurpuleLeft,
    };
  }, [
    statepurpuleBackgroundColor,
    statepurpulePosition,
    statepurpuleTop,
    statepurpuleLeft,
  ]);

  const statusStyle = useMemo(() => {
    return {
      lineHeight: statusLineHeight,
      color: statusColor,
    };
  }, [statusLineHeight, statusColor]);

  return (
    <div className="statepurpule" style={statepurpuleStyle}>
      <div className="status" style={statusStyle}>
        {text}
      </div>
    </div>
  );
};

export default Statepurpule;
