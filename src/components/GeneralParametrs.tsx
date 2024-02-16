import { generalParametrs } from "../constants/options";
import { GeneralCheckOption } from "./GeneralCheckOption";

export const GeneralParametrs = () => {
  return (
    <div className="tw-space-y-2 xl:tw-mt-20 tw-relative tw-z-[1] xl:tw-bg-transparent xl:tw-p-0 tw-p-4 tw-bg-white/10">
      {generalParametrs.map(({ id, name, title }) => (
        <GeneralCheckOption key={id} title={title} name={name} />
      ))}
    </div>
  );
};
