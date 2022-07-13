
import Quote from "../03-examples/Quote";
import LoadingQuote from "../03-examples/LoadingQuote";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
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
