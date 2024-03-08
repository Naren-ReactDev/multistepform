import { useDispatch, useSelector } from "react-redux";
import { displayPrice, isMonthly } from "./utility";
import { useMemo } from "react";
import { updatePageNumber } from "../redux/actionTypes";

const Summary = () => {
  const dispatch = useDispatch();
  const { planType, planPrice, planDuration, addOns } = useSelector((state) => {
    return state;
  });

  const getAddons = (addOns) => {
    const addOnsList = Object.keys(addOns);
    return (
      <>
        {addOnsList.map((addOn,key) => {
          return (
            <div className="summaryPageGrid" key={key}>
              <div> {addOn}</div>
              <div className="summaryAddOnPrice">
                +{displayPrice(
                  planDuration,
                  addOns[addOn][0][0],
                  addOns[addOn][0][1]
                )}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const totPrice = useMemo(() => {
    const addOnsList = Object.keys(addOns);
    let totPrice = isMonthly(planDuration) ? planPrice[0] : planPrice[1];
    addOnsList.forEach((addOn) => {
      totPrice += isMonthly(planDuration)
        ? addOns[addOn][0][0]
        : addOns[addOn][0][1];
    });
    return totPrice;
  }, [addOns, planPrice, planDuration]);

  return (
    <div className="personalInfoPage">
      <div className="persolnalInfoText">
        <label>Finishing up</label>
      </div>
      <div className="persolnalInfoPageDesc">
        Double-check everything looks OK before confirming.
      </div>

      <div className="summaryPage">
        <div className="summaryPlanInfo">
          <div>
            {planType}({planDuration})
          </div>
          <div className="summaryPlanPrice">{displayPrice(planDuration, planPrice[0], planPrice[1])}</div>
        </div>
        <div
          className="changeLink"
          onClick={() => {
            dispatch(updatePageNumber(2));
          }}
        >
          <u>Change</u>
        </div>
        <div className="grayLine"></div>
        <div>{getAddons(addOns)}</div>
      </div>

      <div className="totalPriceSection">
        <div>{`Total(per ${isMonthly(planDuration) ? "Month" : "Year"})`}</div>
        <div className="summaryTotalPrice">
          {displayPrice(planDuration, totPrice, totPrice)}
        </div>
      </div>
    </div>
  );
};
export default Summary;
