import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      //const coords = { x, y };
      setCoords({ x, y })
    };

    window.addEventListener("mousemove", onMouseMove)
    return () => {
        window.removeEvent59970Listener('mousemove', onMouseMove)
    };
  }, []);

  return (
    <>
      <h3 className="mt-2">Usuario ya existe</h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  );
};
