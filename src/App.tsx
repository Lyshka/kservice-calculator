import { BackgroundCar } from "./components/BackgroundCar";
import { Circle } from "./components/Circle";
import { GeneralParametrs } from "./components/GeneralParametrs";
import { Info } from "./components/Info";
import { Parametrs } from "./components/Parametrs";
import { SelectCar } from "./components/SelectCar";
import { SelectModel } from "./components/SelectModel";
import { SelectType } from "./components/SelectType";

import { TextUp } from "./components/TextUp";

const App = () => {
  return (
    <div className="tw-bg-black tw-flex xl:tw-min-h-screen tw-flex-col xl:tw-justify-center tw-items-start tw-relative tw-h-full tw-overflow-x-hidden xl:tw-py-0 tw-py-4 tw-scrollbar">
      <BackgroundCar />

      <TextUp />

      <div className="xl:tw-w-auto tw-w-full xl:tw-static tw-relative">
        <div className="tw-flex tw-flex-col xl:tw-gap-6 tw-gap-4 xl:tw-pl-60 xl:tw-translate-y-1/3 xl:tw-relative tw-mt-8 xl:tw-px-0 tw-px-4 tw-top-1/2 xl:tw-w-auto tw-w-full">
          <SelectCar />

          <SelectModel />

          <SelectType />

          <GeneralParametrs />
        </div>
        
        <Circle />
      </div>

      <div className="xl:tw-absolute xl:tw-top-1/2 tw-top-full xl:tw-px-0 tw-px-4 xl:tw-right-60 tw-z-[1] xl:tw-w-auto tw-w-full xl:tw-pb-0 tw-pb-10 xl:-tw-mt-10 tw-mt-10">
        <Parametrs />

        <Info />
      </div>
    </div>
  );
};
export default App;
