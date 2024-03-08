import Plancard from "./planCard";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import { useDispatch, useSelector } from "react-redux";
import { updatePlan } from "../redux/actionTypes";
import { isMonthly, displayPrice } from "./utility";

const SelectPlan = ({ errorMsg }) => {
  const dispatch = useDispatch();

  const { planType, planDuration, planPrice } = useSelector(
    ({ planType, planDuration, planPrice }) => {
      return {
        planType,
        planDuration,
        planPrice,
      };
    }
  );
  const circleStyle =
    planDuration === "monthly" ? "circle" : "circle leftPosition";
  const updatePlanDuration = () => {
    dispatch(
      updatePlan({
        planPrice,
        planType,
        planDuration: planDuration === "monthly" ? "yearly" : "monthly",
      })
    );
  };
  const updatePlanDetails = (planData) => {
    dispatch(updatePlan({ planDuration, ...planData }));
  };
  let monthly = "planDurationLabel ";
  let yearly = "planDurationLabel ";
  planDuration === "monthly"
    ? (monthly += "selectedPlanDurationLabel")
    : (yearly += "selectedPlanDurationLabel");

  return (
    <div className="personalInfoPage">
      <div className="persolnalInfoText">
        <label>Select your plan</label>
      </div>
      <div className="persolnalInfoPageDesc">
        You have the option of monthly or yearly billing.
      </div>
      <p style={{ color: "red" }}>{errorMsg}</p>
      <div className="selectPlan">
        <Plancard
          image={arcade}
          plan="Arcade"
          price={displayPrice(planDuration, 9, 90)}
          freeText={isMonthly(planDuration) ? "" : "2 months free"}
          priceDigit={[9, 90]}
          updatePlanDetails={updatePlanDetails}
          className={planType === "Arcade" ? "selectedPlan" : ""}
        />
        <Plancard
          image={advanced}
          plan="Advanced"
          price={displayPrice(planDuration, 12, 120)}
          freeText={isMonthly(planDuration) ? "" : "2 months free"}
          priceDigit={[12, 120]}
          updatePlanDetails={updatePlanDetails}
          className={planType === "Advanced" ? "selectedPlan" : ""}
        />
        <Plancard
          image={pro}
          plan="Pro"
          price={displayPrice(planDuration, 15, 150)}
          freeText={isMonthly(planDuration) ? "" : "2 months free"}
          priceDigit={[15, 150]}
          updatePlanDetails={updatePlanDetails}
          className={planType === "Pro" ? "selectedPlan" : ""}
        />
      </div>
      <div className="toggle">
        <label className={monthly}>Monthly</label>
        <div className="toggleButton" onClick={updatePlanDuration}>
          <div className={circleStyle}></div>
        </div>
        <label className={yearly}>Yearly</label>
      </div>
    </div>
  );
};
export default SelectPlan;
