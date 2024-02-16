import { useClickAnyWhere } from "usehooks-ts";
import { useCar } from "./use-car";

export const UseSelectPart = () => {
  const car = useCar();

  const handleClick = (event: MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const classes = [...event.target.classList];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const detailId = event.target.dataset.detail;
    const isPart = classes.some((el) => el === "st0");
    if (isPart) {
      const details = document.querySelectorAll(`[data-detail="${detailId}"]`);
      details.forEach((el) => {
        el.classList.toggle("active");
      });

      car.setPart(detailId);
    }
  };

  useClickAnyWhere(handleClick);
};
