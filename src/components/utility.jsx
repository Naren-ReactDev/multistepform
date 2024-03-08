
export const isMonthly = (planDuration) => {
  return planDuration === "monthly" ? true : false;
};

export const displayPrice = (planDuration, perMonth, perYear) => {
  return isMonthly(planDuration)
    ? "$" + perMonth + "/mon"
    : "$" + perYear + "/yr";
};
