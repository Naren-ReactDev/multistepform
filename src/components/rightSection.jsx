import PersonalInfo from "./personalInfo";
import SelectPlan from "./selectPlan";
import AddOns from "./add-Ons";
import Summary from "./summary";
import { updatePageNumber } from "../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import ThankYOu from "./thankYou";
import { useEffect, useState } from "react";

const RigthSection = () => {
  const dispatch = useDispatch();

  const { pageNum, personalDetails, planType } = useSelector(({pageNum, personalDetails, planType}) => {
    return ({pageNum, personalDetails, planType});
  });

  const [errorMsg, setErrorMsg] = useState("");

  const gotoNextpage = (pageNum) => {
    if (!errorMsg) {
      dispatch(updatePageNumber(pageNum + 1));
    }
  };
  useEffect(() => {
    if (!personalDetails.name) {
      setErrorMsg("Name required");
    } else if (!personalDetails.email) {
      setErrorMsg("Email required");
    } else if (!personalDetails.phone) {
      setErrorMsg("Phone required");
    } else if (!planType && pageNum === 2) {
      setErrorMsg("Please select a plan");
    } else {
      setErrorMsg("");
    }
  }, [personalDetails, planType, pageNum]);

  const loadPage = () => {
    switch (pageNum) {
      case 1:
        return <PersonalInfo errorMsg={errorMsg} />;
      case 2:
        return <SelectPlan errorMsg={errorMsg} />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      case 5:
        return <ThankYOu />;
      default:
        return <></>;
    }
  };

  const loadGoBackButton = () => {
    return pageNum === 1 ? (
      <div></div>
    ) : (
      <input
        className="backButton"
        type="Button"
        value="Go Back"
        hidden={pageNum>4}
        onClick={() => {
          dispatch(updatePageNumber(pageNum - 1));
        }}
      ></input>
    );
  };
  return (
    <div className="rightSection">
      <div></div>
      <div>
        <div style={{ height: "380px" }}>{loadPage()}</div>
        <div className="buttonGroup">
          {loadGoBackButton()}

          <input
            className="nextStepButton"
            type="Button"
            value={pageNum === 4 ? "Confirm" : "Next Step"}
            hidden={pageNum > 4}
            onClick={() => {
              gotoNextpage(pageNum);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default RigthSection;
