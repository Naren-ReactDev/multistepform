export const updatePageNumber = (num = 1) => {
  return {
    type: "updatePageNumber",
    pageNum: num,
  };
};

export const updatePlan = ({
  planDuration = "monthly",
  planType = "",
  planPrice = [0, 0],
}) => {
  return {
    type: "updatePlan",
    planType,
    planDuration,
    planPrice,
  };
};

export const updateAddOns = (addOns = {}) => {
  return {
    type: "updateAddOns",
    addOns,
  };
};

export const updatePersonalDetails = (personalDetails) => {
  return {
    type: "updatePersonalDetails",
    personalDetails,
  };
};
