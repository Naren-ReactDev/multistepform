const intialState = {
  pageNum: 1,
  planDuration: "monthly",
  planType: "",
  planPrice: [0,0],
  addOns: {},
  personalDetails:{
    name:"",
    email:"",
    phone:"",
  }
};
const Reducer = (state = intialState, action) => {

  switch (action.type) {
    case "updatePageNumber":
      return {
        ...state,
        pageNum: action.pageNum,
      };

    case "updatePlan":
      return {
        ...state,
        planType: action.planType,
        planDuration: action.planDuration,
        planPrice: action.planPrice,
      };

    case "updateAddOns":
      return {
        ...state,
        addOns: action.addOns,
      };
      case "updatePersonalDetails":
      return {
        ...state,
        personalDetails: action.personalDetails,
      };
    default:
      return state;
  }
};
export default Reducer;
