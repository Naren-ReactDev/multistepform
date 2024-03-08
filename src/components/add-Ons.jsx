import { connect } from "react-redux";
import AddOnsCard from "./add-OnsCard";
import { updatePlan } from "../redux/actionTypes";

const AddOns = (props) => {
  return (
    <div className="personalInfoPage">
      <div className="persolnalInfoText">
        <label>Pick add-ons</label>
      </div>
      <div className="persolnalInfoPageDesc">
        Add-ons help enhance your gaming experience.
      </div>
      <div>
        <AddOnsCard
          addOn="Online service"
          addOnDesc="Access to multiplayer games"
          addOnPrice={props.planDuration === "monthly" ? "+$1/mo" : "+$10/yr"}
          addOnPriceDigit={[1 , 10]}
        />
        <AddOnsCard
          addOn="Larger storage"
          addOnDesc="Extra 1TB of cloud save"
          addOnPrice={props.planDuration === "monthly" ? "+$2/mo" : "+$20/yr"}
          addOnPriceDigit={[2 , 20]}
        />
        <AddOnsCard
          addOn="Customizable profile"
          addOnDesc="Custom theme on your profile"
          addOnPrice={props.planDuration === "monthly" ? "+$2/mo" : "+$20/yr"}
          addOnPriceDigit={[2 , 20]}
        />
      </div>
    </div>
  );
};

//Old way of getting redux state and dispatch using connect HOC
const mapStatetoProps = (state) => {
  return {
    planDuration: state.planDuration,
  };
};
const mapDispatchtoProps = () => {
  return { updatePlanDetails: updatePlan};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AddOns);
