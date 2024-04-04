import Statechecked from "./Statechecked";
import Stateunchecked from "./Stateunchecked";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-parent5">
      <div className="inputcheckbox-parent6">
        <Statechecked icontickBackgroundColor="#ff5a56" />
        <div className="ttc">TTC</div>
      </div>
      <div className="inputcheckbox-parent6">
        <Stateunchecked stateuncheckedPosition="relative" />
        <div className="ttc">Beginner</div>
      </div>
      <div className="inputcheckbox-parent6">
        <Stateunchecked stateuncheckedPosition="relative" />
        <div className="ttc">Pranayama</div>
      </div>
      <div className="inputcheckbox-parent6">
        <Stateunchecked stateuncheckedPosition="relative" />
        <div className="ttc">Health Camp</div>
      </div>
      <div className="inputcheckbox-parent6">
        <Stateunchecked stateuncheckedPosition="relative" />
        <div className="ttc">Women Only</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
