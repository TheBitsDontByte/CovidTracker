const getInitialState = () => {
  var covidDashboardData = sessionStorage.getItem("covidDashboardData");
  if (covidDashboardData)
    //set its
    return covidDashboardData;
  else
    return {
      startDate: "2020-03-15",
      endDate: "2021-02-10",
      countries: [],
      countriesCovidData: [],
      charts: [],
    };
};
const initialState = getInitialState();

const reduce = (state = initialState, action) => {
  var newState = {};

  switch (action.type) {
    case "startDateUpdate":
      newState = { ...state, startDate: action.payload };
      break;
    case "endDateUpdate":
      newState = { ...state, endDate: action.payload };
      break;
    case "setCountries":
      newState = { ...state, countries: action.payload };
      break;
    case "addChart":
      console.log("in add");
      newState = {
        ...state,
        charts: [...state.charts, action.payload],
      };
      break;
    case "addCountryCovidData":
      newState = {
        ...state,
        countriesCovidData: [...state.countriesCovidData, action.payload],
      };
    default:
      newState = state;
  }

  return newState;
};

export default reduce;
