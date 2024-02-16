import clsx from "clsx";

import { useCar } from "../hooks/use-car";
import { UseSelectPart } from "../hooks/use-select-part";
import { types } from "../constants/types";

export const BackgroundCar = () => {
  const car = useCar();
  const type = car.isType;
  const position = car.isPosition;
  const photos = types.find(({ name }) => name === type)?.photos;

  UseSelectPart();

  return (
    <>
      {Object.values(photos || {}).map((photo, idx) => (
        <div
          key={idx}
          id="carModel"
          className={clsx(
            "xl:tw-absolute tw-relative tw-h-full tw-w-full tw-bg-black xl:tw-scale-110 tw-scale-150",
            position === idx + 1 ? "tw-block" : "tw-hidden"
          )}
          dangerouslySetInnerHTML={{
            __html: photo!,
          }}
        />
      ))}
    </>
  );
};
