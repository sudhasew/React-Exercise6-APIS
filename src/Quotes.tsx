import { useEffect, useState } from "react";
import { getAllQuotes } from "./Api";
import { QuotesComplete } from "./QuotesComplete";

export function Quotes() {
  const [quote, setQuotes] = useState<QuotesComplete[]>([]);

  useEffect(() => {
    getAllQuotes().then((data) => {
      setQuotes(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {quote.map((person) => (
          <li>
            {person.author} {person.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
