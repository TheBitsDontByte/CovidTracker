const getInitialState = () => {
  var covidDashboardData = sessionStorage.getItem("covidDashboardData");
  if (covidDashboardData)
    //set its
    return JSON.parse(covidDashboardData);
  else
    return {
      startDate: "2020-03-15",
      endDate: "2021-02-10",
      countries: [],
      charts: [],
      chartData: [],
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
      newState = {
        ...state,
        charts: [...state.charts, action.payload],
      };
      break;
    case "chartDataUpdate":
      let chartData = action.payload.data.map((d) => {
        return { date: d.Date, cases: d.Cases };
      });

      newState = {
        ...state,
        chartData: [
          ...state.chartData,
          { country: action.payload.country, data: chartData },
        ],
      };
      break;
    default:
      newState = state;
  }

  sessionStorage.setItem("covidDashboardData", JSON.stringify(newState));

  return newState;
};

export default reduce;
