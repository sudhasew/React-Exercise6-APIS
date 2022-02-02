import { useEffect, useState } from "react";
import { getAllQuotes } from "./Api";
import { QuotesComplete } from "./QuotesComplete";

export function Quotes() {
  const [quotes, setQuotes] = useState<QuotesComplete[]>([]);

  useEffect(() => {
    getAllQuotes().then((data: any) => setQuotes(data));
  }, []);

  return (
    <div>
      <ul>
        {quotes.map((person) => (
          <li>
            {person.text} {person.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
