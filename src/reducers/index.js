const getInitialState = () => {
  var covidDashboardData = sessionStorage.getItem("covidDashboardData");
  if (covidDashboardData)
    //set it
    return covidDashboardData;
  else
    return {
      startDate: "03/15/2020",
      endDate: "02/01/2021",
    };
};
const initialState = getInitialState();

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return { ...state, testVal: 123 };
    default:
      return state;
  }
};

export default reduce;
