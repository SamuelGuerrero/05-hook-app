import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import "./layout.css";
import { useCounter } from "../../hooks/useCounter";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef()
  const [boxsize, setBoxsize] = useState({})

  useLayoutEffect( () =>{
    setBoxsize( pTag.current.getBoundingClientRect())
  },[quote])

  return (
    <div>
      <h1>LayoutEffects</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p 
            className="mb-0"
            ref={ pTag }
        > 
            {quote} 
        </p>
      </blockquote>

      <pre>
        {JSON.stringify( boxsize, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  );
};
