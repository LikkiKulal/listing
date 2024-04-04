import StateenabledLeadingIconof from "../components/StateenabledLeadingIconof";
import FrameComponent1 from "../components/FrameComponent1";
import Stateunchecked from "../components/Stateunchecked";
import Statepurpule from "../components/Statepurpule";
import TypeprimaryStateactiveSi from "../components/TypeprimaryStateactiveSi";
import FrameComponent from "../components/FrameComponent";
import LMSHeader from "../components/LMSHeader";
import StateinactiveSizelarge from "../components/StateinactiveSizelarge";
import "./CourseListings.css";

const CourseListings = () => {
  return (
    <div className="course-listings">
      <div className="frame-parent">
        <div className="frame-wrapper">
          <div className="applied-filters-parent">
            <div className="applied-filters">Applied Filters</div>
            <StateenabledLeadingIconof
              prop="TTC"
              divFontFamily="Inter"
              divFontWeight="500"
            />
          </div>
        </div>
        <div className="category-parent">
          <div className="applied-filters">Category</div>
          <FrameComponent1 />
        </div>
        <div className="frame-container">
          <div className="applied-filters-parent">
            <div className="applied-filters">Skill Level</div>
            <div className="frame-group">
              <div className="inputcheckbox-parent">
                <Stateunchecked stateuncheckedPosition="relative" />
                <div className="beginner">Beginner</div>
              </div>
              <div className="inputcheckbox-parent">
                <Stateunchecked stateuncheckedPosition="relative" />
                <div className="beginner">Intermediate</div>
              </div>
              <div className="inputcheckbox-parent">
                <Stateunchecked stateuncheckedPosition="relative" />
                <div className="beginner">Advanced</div>
              </div>
            </div>
          </div>
        </div>
        <div className="time-required-parent">
          <div className="time-required">Time Required</div>
          <div className="frame-div">
            <div className="inputcheckbox-parent">
              <Stateunchecked stateuncheckedPosition="relative" />
              <div className="beginner">12 weeks</div>
            </div>
            <div className="inputcheckbox-parent">
              <Stateunchecked stateuncheckedPosition="relative" />
              <div className="beginner">24 weeks</div>
            </div>
            <div className="inputcheckbox-parent">
              <Stateunchecked stateuncheckedPosition="relative" />
              <div className="beginner">52 weeks</div>
            </div>
            <div className="inputcheckbox-parent">
              <Stateunchecked stateuncheckedPosition="relative" />
              <div className="beginner">100 weeks</div>
            </div>
            <div className="inputcheckbox-parent">
              <Stateunchecked stateuncheckedPosition="relative" />
              <div className="beginner">450 weeks</div>
            </div>
          </div>
          <img className="iconsearch" alt="" src="/iconsearch.svg" />
          <div className="scroll" />
        </div>
      </div>
      <div className="frame-parent1">
        <div className="image-bg-parent">
          <div className="image-bg" />
          <div className="full-900-hour">
            Full 900 Hour Teacher Training Course
          </div>
          <div className="rs-10000-wrapper">
            <div className="rs-10000">Rs. 10,000</div>
          </div>
          <Statepurpule
            text="teacher training p1"
            statepurpuleBackgroundColor="#f0ecf8"
            statepurpulePosition="absolute"
            statepurpuleTop="40px"
            statepurpuleLeft="318px"
            statusLineHeight="16px"
            statusColor="#4b2e85"
          />
          <Statepurpule
            text="editor’s choice"
            statepurpuleBackgroundColor="#fca311"
            statepurpulePosition="absolute"
            statepurpuleTop="40px"
            statepurpuleLeft="489px"
            statusLineHeight="16px"
            statusColor="#fff"
          />
          <div className="lessons-11-week">
            <div className="week">
              <img className="icon" alt="" src="/Icon (3).svg" />
              <div className="week1">12 Week</div>
            </div>
            <div className="lessons">
              <img className="icon1" alt="" src="/icon.svg" />
              <div className="lessons1">35 Lessons</div>
            </div>
          </div>
          <div className="frame-child" />
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
        <FrameComponent
          full500HourTeacherTrainin="Full 500 Hour Teacher Training Course"
          status1="teacher training p1 "
          leadingIcon={false}
          trailingIcon={false}
        />
        <FrameComponent
          full500HourTeacherTrainin="200 Hour Teacher Training Course "
          status1="teacher training p1 "
          propBackgroundColor="#fff"
          propBorder="1px solid #d9d9d9"
          leadingIcon={false}
          trailingIcon={false}
        />
        <FrameComponent
          full500HourTeacherTrainin="21 Days Better Living Course"
          status1="Beginner Course"
          propBackgroundColor="#fff"
          propBorder="1px solid #d9d9d9"
          leadingIcon={false}
          trailingIcon={false}
        />
      </div>
      <div className="rectangle-parent">
        <div className="instance-child" />
        <TypeprimaryStateactiveSi
          ctaText="Enroll Today"
          leadingIcon={false}
          trailingIcon={false}
          typeprimaryStateactiveSiWidth="130px"
          typeprimaryStateactiveSiBorderRadius="4px"
          typeprimaryStateactiveSiBackgroundColor="unset"
          typeprimaryStateactiveSiHeight="40px"
          typeprimaryStateactiveSiPosition="absolute"
          typeprimaryStateactiveSiTop="285px"
          typeprimaryStateactiveSiLeft="66px"
          typeprimaryStateactiveSiBackground="linear-gradient(92.65deg, #ff5a56, #ff2171 54.17%, #fc6549), #ff5a56"
        />
        <b className="full-web-designing">
          900 Hour Teacher Training Course - Advanced
        </b>
        <div className="offer-ends-in">Offer ends in 14:23:18</div>
      </div>
      <LMSHeader
        lMSHeaderPosition="absolute"
        lMSHeaderTop="0px"
        lMSHeaderLeft="calc(50% - 720px)"
      />
      <div className="frame-parent2">
        <div className="find-your-learning-path-with-t-parent">
          <b className="find-your-learning">Find your learning path with TYI</b>
          <div className="discover-your-passion">
            Discover your passion and achieve your goals with TYI's personalized
            learning paths. Choose from a wide range of topics and create a
            learning journey that fits your interests and needs.
          </div>
        </div>
        <StateinactiveSizelarge
          inputText="Choose Learning Path"
          showBottomRow={false}
          showValidationTexthelpText={false}
          stateinactiveSizelargeWidth="700px"
          bottomRowAlignSelf="unset"
          bottomRowWidth="328px"
          bottomRowHeight="16px"
          validationTexthelpTextFlex="unset"
          validationTexthelpTextWidth="328px"
        />
      </div>
    </div>
  );
};

export default CourseListings;
