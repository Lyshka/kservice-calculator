import { useState } from "react";

interface CheckOptionProps {
  title: string;
  name: string;
  generalTitle: string;
}

export const CheckOption = ({
  title,
  name,
  generalTitle,
}: CheckOptionProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setisChecked] = useState(false);

  const onChange = (title: string) => {
    setSelectedOption(title);
  };

  const onClick = () => {
    setisChecked((prv) => !prv);
  };

  return (
    <div onClick={onClick} className="tw-flex tw-items-center tw-gap-2">
      <div className="tw-w-[13px] tw-h-[13px] tw-flex tw-justify-center tw-items-center tw-relative tw-bg-white/20 tw-rounded-sm tw-p-1">
        <input
          className="tw-opacity-0"
          type="radio"
          name={name}
          value={`${title} | ${generalTitle}`}
          checked={title === selectedOption}
          onChange={() => onChange(title)}
        />

        {isChecked && (
          <svg
            fill="#fff"
            className="tw-absolute"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="12px"
            height="12px"
            viewBox="0 0 78.369 78.369"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
C78.477,17.894,78.477,18.586,78.049,19.015z"
              />
            </g>
          </svg>
        )}
      </div>

      <span className="tw-text-[15px] tw-text-[#bdbdbd] tw-font-bold tw-tracking-[0.2px]">
        {title}
      </span>
    </div>
  );
};
