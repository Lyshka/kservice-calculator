import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { useCar } from "../hooks/use-car";
import { UsegetPages } from "../actions/use-get-pages";
import { UsegetPage } from "../actions/use-get-page";
import { Cars } from "../types/Cars";

export const SelectCar = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<Cars | null>(null);
  const ref = useRef(null);
  const car = useCar();
  const { data: notParentPages } = UsegetPages();

  const OnOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const selectCar = async (id: number) => {
    car.setCar(id);
    const { data } = await UsegetPage(id);
    setPage(data);
    onClose();
  };

  useOnClickOutside(ref, onClose);

  return (
    <div className="xl:tw-w-80 tw-w-full tw-relative tw-z-[3]">
      <div
        onClick={OnOpen}
        className="tw-h-11 tw-bg-white/10 tw-w-full tw-flex tw-items-center tw-justify-between tw-shadow-xl tw-pl-6 tw-cursor-pointer"
      >
        <span className="tw-text-white tw-text-xl tw-pr-[60px]">
          {page?.title.rendered || "Выберите марку"}
        </span>

        <div className="tw-border-l tw-border-white/20 tw-p-3">
          <svg
            fill="#fff"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.787 511.787"
            xmlSpace="preserve"
            stroke="#fff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213 c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333 C512.827,136.693,512.827,129.867,508.667,125.707z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>

      {open && (
        <div
          ref={ref}
          className="tw-bg-white tw-z-[1] tw-absolute tw-w-full tw-shadow-sm tw-shadow-white/10 tw--translate-y-11 tw-px-6 tw-py-3"
        >
          <ul className="tw-scrollbar-none tw-max-h-60 tw-overflow-y-scroll tw-flex tw-flex-col">
            {notParentPages.map(({ id, title: { rendered } }) => (
              <li
                onClick={() => selectCar(id)}
                className="tw-font-medium tw-cursor-pointer tw-text-[17px] hover:tw-text-[#d8143d] tw-transition tw-py-1 tw-text-black"
                key={id}
              >
                {rendered}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
