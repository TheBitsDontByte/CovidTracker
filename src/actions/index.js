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
    countries.push(
      allCountries[Math.floor(Math.random() * allCountries.length)]
    );
  }
  console.log(countries);

  return { type: "setCountries", payload: countries };
}
export function createNewChart(countryOne, countryTwo) {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    return dispatch({ type: "addChart", payload: { countryOne, countryTwo } });
  };
}
