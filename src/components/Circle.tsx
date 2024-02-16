import { useState } from "react";
import { useMedia } from "../actions/use-media";
import { useCar } from "../hooks/use-car";

export const Circle = () => {
  const { setPosition } = useCar();
  const [counter, setCounter] = useState(1);
  const { photo } = useMedia(1064);

  const onClick = () => {
    if (counter > 3) {
      setCounter(1);
      setPosition(1);
      return;
    }

    setCounter((prv) => prv + 1);
    setPosition(counter + 1);
  };

  return (
    <button
      onClick={onClick}
      className="tw-absolute xl:tw-left-1/2 xl:tw-top-1/2 -tw-top-1/2 tw-left-1/2 xl:tw-translate-x-1/2 -tw-translate-x-1/2 xl:tw-translate-y-1/2 -tw-translate-y-full"
    >
      <img className="xl:tw-w-16 tw-w-12 xl:tw-h-16 tw-h-12" src={photo} alt="360" />
    </button>
  );
};
