import { useLayoutEffect, useRef, useState } from "react";

function Quote({ quote, author }) {
  const pRef = useRef();

  const [boxSixe, setBoxSixe] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
    
    const { height, width} = pRef.current.getBoundingClientRect()

    setBoxSixe({ height, width})
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSixe)}</code>
    </>
  );
}

export default Quote;
