import { useCallback, useEffect, useState } from "react";
//const nums = [4, 6, 3, 14];
let timeout;
let interval;

export default function GameNumberDisplay({randomNumberArray,hideNumbersAndDisplayPad}) {
  const [n, setN] = useState(0);
  const [hidden, setHidden] = useState(false);
  const rotateNumbers = useCallback(() => {
    setN((prevN) => {
      let nextN = prevN + 1;

      if (nextN >= randomNumberArray.length) {
        nextN = 0;
        //randomNumberArray = []
        clearInterval(interval);
        clearTimeout(timeout);
        hideNumbersAndDisplayPad()
      }
      return nextN;
    });
    setTimeout(() => {
      setHidden(true);
    }, 1800);
  }, []);

  useEffect(() => {
    console.log("randomNumberArray in Component", randomNumberArray)
    interval = setInterval(() => {
      setHidden(false);
      rotateNumbers();
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, 3000);
  }, [rotateNumbers]);
  return (
    <>
      <h1>Remember this sequence:</h1>
      <div className="random-number-display">{!hidden && randomNumberArray[n]}</div>
    </>
  );
}

