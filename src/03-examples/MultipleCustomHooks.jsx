
import { useCounter, useFetch } from "../hooks";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <div>
        <button
          disabled={isLoading}
          onClick={() => decrement()}
          className="btn btn-primary"
        >
          Last quote
        </button>

        <button
          disabled={isLoading}
          onClick={() => increment()}
          className="btn btn-primary"
        >
          Next quote
        </button>
      </div>
    </>
  );
};
