import { useMemo } from "react";
import "./TypeprimaryStateactiveSi.css";

const TypeprimaryStateactiveSi = ({
  ctaText,
  leadingIcon = true,
  trailingIcon = true,
  typeprimaryStateactiveSiWidth,
  typeprimaryStateactiveSiBorderRadius,
  typeprimaryStateactiveSiBackgroundColor,
  typeprimaryStateactiveSiHeight,
  typeprimaryStateactiveSiPosition,
  typeprimaryStateactiveSiTop,
  typeprimaryStateactiveSiLeft,
  typeprimaryStateactiveSiBackground,
}) => {
  const typeprimaryStateactiveSiStyle = useMemo(() => {
    return {
      width: typeprimaryStateactiveSiWidth,
      borderRadius: typeprimaryStateactiveSiBorderRadius,
      backgroundColor: typeprimaryStateactiveSiBackgroundColor,
      height: typeprimaryStateactiveSiHeight,
      position: typeprimaryStateactiveSiPosition,
      top: typeprimaryStateactiveSiTop,
      left: typeprimaryStateactiveSiLeft,
      background: typeprimaryStateactiveSiBackground,
    };
  }, [
    typeprimaryStateactiveSiWidth,
    typeprimaryStateactiveSiBorderRadius,
    typeprimaryStateactiveSiBackgroundColor,
    typeprimaryStateactiveSiHeight,
    typeprimaryStateactiveSiPosition,
    typeprimaryStateactiveSiTop,
    typeprimaryStateactiveSiLeft,
    typeprimaryStateactiveSiBackground,
  ]);

  return (
    <div
      className="typeprimary-stateactive-si"
      style={typeprimaryStateactiveSiStyle}
    >
      <div className="iconadd-parent">
        {leadingIcon && <img className="iconadd" alt="" src="/iconadd.svg" />}
        <div className="cta-text">{ctaText}</div>
        {trailingIcon && <img className="iconadd" alt="" src="/iconinfo.svg" />}
      </div>
    </div>
  );
};

export default TypeprimaryStateactiveSi;
