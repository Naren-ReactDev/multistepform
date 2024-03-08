import { useDispatch, useSelector } from "react-redux";
import { updateAddOns } from "../redux/actionTypes";

const AddOnsCard = ({ addOn, addOnDesc, addOnPrice, addOnPriceDigit }) => {
  let addOns = useSelector((state) => {
    return state.addOns;
  });
  const dispatch = useDispatch();
  const addOnsObj = { ...addOns };
  const updateAddonsDetails = (addOn, addOnPriceDigit) => {
    if (addOnsObj && addOnsObj[addOn]) {
      delete addOnsObj[addOn];
    } else {
      addOnsObj[addOn] = [addOnPriceDigit];
    }
    dispatch(updateAddOns({ ...addOnsObj }));
    console.log(addOnsObj);
  };

  const isChecked = (addOn) => {
    return addOns[addOn] ? true : false;
  };
  return (
    <div className="addOnsCard">
      <div>
        <input
          className="addOnsCheckBox"
          type="checkBox"
          value={addOn}
          checked={isChecked(addOn)}
          onChange={() => {
            updateAddonsDetails(addOn, addOnPriceDigit);
          }}
        ></input>
      </div>
      <div className="addOnsDetails">
        <div className="addOnName">
          {addOn}
          <div className="addOnDesc">{addOnDesc}</div>
        </div>      
      </div>
      <div className="addOnPrice"> {addOnPrice}</div>
    </div>
  );
};
export default AddOnsCard;
