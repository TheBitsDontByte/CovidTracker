import axios from "axios";
import testData from "../assests/testData.js";

export const updateDateValue = (field, date) => {
  const type = field == "startDate" ? "startDateUpdate" : "endDateUpdate";
  return { type, payload: date };
};

export function getInitialState() {
  // return (dispatch) =>
  //   axios
  //     .get("https://api.covid19api.com/countries")
  //     .then((res) => {
  //       console.log(res);
  //       return dispatch({ type: "test", payload: res.data });
  //     })
  //     .catch((err) => {
  //       //Some error returned here
  //       console.log(err);
  //     });
  //Api calls are limited, using a test data system
  var allCountries = testData.countries;
  var countries = [];
  while (countries.length < 10) {
    let nextCountry =
      allCountries[Math.floor(Math.random() * allCountries.length)];
    if (!countries.includes(nextCountry)) countries.push(nextCountry);
  }

  return { type: "setCountries", payload: countries };
}
export function createNewChart(countryOne, countryTwo, startDate, endDate) {
  return (dispatch) => {
    // axios
    //   .get(
    //     `https://api.covid19api.com/country/${countryOne.Country}/status/confirmed?from=${startDate}&to=${endDate}`
    //   )
    //   .then((res) =>
    //     dispatch({
    //       type: "chartDataUpdate",
    //       payload: { country: countryOne, data: res.data },
    //     })
    //   )
    //   .catch((err) => console.log(err));

    // axios
    //   .get(
    //     `https://api.covid19api.com/country/${countryTwo.Country}/status/confirmed?from=${startDate}&to=${endDate}`
    //   )
    //   .then((res) =>
    //     dispatch({
    //       type: "chartDataUpdate",
    //       payload: { country: countryOne, data: res.data },
    //     })
    //   )
    //   .catch((err) => console.log(err));

    dispatch({
      type: "chartDataUpdate",
      payload: { country: countryOne, data: testData.countryDataResponse },
    });

    dispatch({
      type: "chartDataUpdate",
      payload: { country: countryTwo, data: testData.countryDataResponse2 },
    });

    return dispatch({ type: "addChart", payload: { countryOne, countryTwo } });
  };
}
