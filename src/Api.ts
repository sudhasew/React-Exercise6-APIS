import axios from "axios";
import { QuotesComplete } from "./QuotesComplete";

export function getAllQuotes() {
  return axios
    .get<QuotesComplete>(
      "https://grandcircusco.github.io/demo-apis/quotes.json"
    )
    .then((response) => response.data);
}
