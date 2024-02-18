import { UsegetPage } from "../actions/use-get-page";
import { types } from "../constants/types";
import { Part, useCar } from "../hooks/use-car";

export const SaveButton = () => {
  const car = useCar();
  const isCar = car.isCar;
  const isModel = car.isModel;
  const isTypeName = car.isType;
  const isType = types.find(({ name }) => name === isTypeName)?.title;

  const onClick = async () => {
    if (!isCar || !isModel) {
      console.log("Марка или модель не выбраны!");
      return;
    }

    const mattPaint: HTMLInputElement | null = document.querySelector(
      'input[type="checkbox"][name="mattPaint"]'
    );

    const carIsNotRunning: HTMLInputElement | null = document.querySelector(
      'input[type="checkbox"][name="carIsNotRunning"]'
    );

    const bodyGeometryIsBroken: HTMLInputElement | null =
      document.querySelector(
        'input[type="checkbox"][name="bodyGeometryIsBroken"]'
      );

    const carTitle = (await UsegetPage(isCar)).data.title.rendered;
    const modelTitle = (await UsegetPage(isModel)).data.title.rendered;

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const checkedRadioButtons: HTMLInputElement[] = [];

    for (const part of Object.values(Part)) {
      radioButtons.forEach((button: Element) => {
        const inputButton = button as HTMLInputElement;
        if (inputButton.name === part && inputButton.checked) {
          checkedRadioButtons.push(inputButton);
        }
      });
    }

    const checkedRadioButtonsValues: string[] = [];

    checkedRadioButtons.forEach((button: HTMLInputElement) => {
      checkedRadioButtonsValues.push(`${button.value}\n`);
    });

    try {
      await fetch(
        "https://api.telegram.org/bot6643444311:AAF-uXUaftxfsJMwfbaUmmwQO8isQyzZfwQ/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: -662339732,
            text: `
${window.location.origin}
<b>URL: </b>${window.location.href}
<b>Марка: </b>${carTitle}
<b>Модель: </b>${modelTitle}
<b>Тип: </b>${isType}
<b>Mатовая краска: </b>${mattPaint?.checked ? "Нужна" : "Не нужна"}
<b>Автомобиль не на ходу: </b>:${carIsNotRunning?.checked ? "Да" : "Нет"}
<b>Нарушена геометрия кузова: </b>${
              bodyGeometryIsBroken?.checked ? "Да" : "Нет"
            }
<b>Детали: </b>
${checkedRadioButtonsValues.join("")}
`,
            parse_mode: "html",
          }),
        }
      );

      // Обработка ответа
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={onClick}
      className="tw-bg-[#d8133d] tw-text-white tw-font-medium tw-px-4 tw-py-2 tw-w-full"
    >
      Сохранить рассчет
    </button>
  );
};
