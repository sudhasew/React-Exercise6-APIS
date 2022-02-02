import axios from "axios";
import { QuotesComplete } from "./QuotesComplete";
export function getAllQuotes() {
  return axios
    .get<QuotesComplete>(
      "https://grandcircusco.github.io/demo-apis/quotes.json"
    )
    .then((response) => response.data);
}

// fetch("https://api.weather.gov/alerts/active?area=KY")
//   .then((response) => response.json())
//   .then((data) => {
//     for (let i = 0; i < data.features.length; i++) {
//       console.log(data.features[i].properties.description);
//     }
//   });
//     .get("https://api.weather.gov/gridpoints/DTX/65,33/forecast/")
//     .then((response) => response.data)
//     .then((res) => console.log(res.json));
