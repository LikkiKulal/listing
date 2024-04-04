import { useMemo } from "react";
import Statepurpule from "./Statepurpule";
import TypeprimaryStateactiveSi from "./TypeprimaryStateactiveSi";
import "./FrameComponent.css";

const FrameComponent = ({
  full500HourTeacherTrainin,
  status1,
  propBackgroundColor,
  propBorder,
  leadingIcon,
  trailingIcon,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  return (
    <div className="image-bg-group" style={frameDivStyle}>
      <div className="image-bg1" />
      <div className="full-500-hour">{full500HourTeacherTrainin}</div>
      <div className="rs-10000-container">
        <div className="rs-100001">Rs. 10,000</div>
      </div>
      <Statepurpule
        text="teacher training p1 "
        statepurpuleBackgroundColor="#f0ecf8"
        statepurpulePosition="absolute"
        statepurpuleTop="40px"
        statepurpuleLeft="318px"
        statusLineHeight="16px"
        statusColor="#4b2e85"
      />
      <div className="lessons-11-week1">
        <div className="week2">
          <img className="icon2" alt="" src="/Icon (3).svg" />
          <div className="week3">12 Week</div>
        </div>
        <div className="lessons2">
          <img className="icon3" alt="" src="/icon.svg" />
          <div className="lessons3">35 Lessons</div>
        </div>
      </div>
      <div className="line-div" />
      <TypeprimaryStateactiveSi
        ctaText="Enroll"
        leadingIcon={false}
        trailingIcon={false}
        typeprimaryStateactiveSiWidth="130px"
        typeprimaryStateactiveSiBorderRadius="4px"
        typeprimaryStateactiveSiBackgroundColor="unset"
        typeprimaryStateactiveSiHeight="40px"
        typeprimaryStateactiveSiPosition="absolute"
        typeprimaryStateactiveSiTop="232px"
        typeprimaryStateactiveSiLeft="764px"
        typeprimaryStateactiveSiBackground="linear-gradient(92.65deg, #ff5a56, #ff2171 54.17%, #fc6549), #ff5a56"
      />
    </div>
  );
};

export default FrameComponent;
