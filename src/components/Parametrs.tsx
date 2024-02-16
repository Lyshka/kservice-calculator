import clsx from "clsx";

import { parametrs } from "../constants/options";
import { useCar } from "../hooks/use-car";
import { CheckOption } from "./CheckOption";

export const Parametrs = () => {
  const car = useCar();
  const part = car.isPart;

  if (!part) {
    return null;
  }

  return (
    <>
      {Object.values(parametrs).map(
        ({ name, options, title: generalTitle }) => (
          <>
            <div
              className={clsx(
                "tw-w-80 tw-space-y-6",
                name === part ? "tw-block" : "tw-hidden"
              )}
            >
              <div className="tw-space-y-2">
                <p className="tw-font-medium tw-text-[23px] tw-text-white">
                  {generalTitle}
                </p>
                <span className="tw-font-medium tw-text-sm tw-text-[#898989]">
                  Выберите операции
                </span>
              </div>

              <div className="tw-space-y-2">
                {options.map(({ idx, title }) => (
                  <CheckOption
                    key={idx}
                    title={title}
                    generalTitle={generalTitle}
                    name={name}
                  />
                ))}
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};
