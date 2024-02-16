const bigOptions = (title: string, name: string) => ({
  title,
  name,
  options: [
    {
      idx: 1,
      title: "Полировка",
    },
    {
      idx: 2,
      title: "Покраска",
    },
    {
      idx: 3,
      title: "Легкий ремонт и покраска",
    },
    {
      idx: 4,
      title: "Несложный ремонт и покраска",
    },
    {
      idx: 5,
      title: "Сложный ремонт и покраска",
    },
    {
      idx: 6,
      title: "Замена и покраска",
    },
  ],
});

const normalOptions = (title: string, name: string) => ({
  title,
  name,
  options: [
    {
      idx: 1,
      title: "Замена",
    },
    {
      idx: 2,
      title: "Покраска",
    },
    {
      idx: 3,
      title: "Замена и покраска",
    },
  ],
});

const smallOptions = (title: string, name: string) => ({
  title,
  name,
  options: [
    {
      idx: 1,
      title: "Замена",
    },
  ],
});

export const parametrs = {
  // вверх
  roof: bigOptions("Крыша", "roof"),
  hood: bigOptions("Капот", "hood"),
  trunk: bigOptions("Багажник", "trunk"),
  //--стекло
  windshield: smallOptions("Стекло лобовое", "windshield"),
  backGlass: smallOptions("Стекло заднее", "backGlass"),
  // --конец стекло
  // конец вверх
  // --------------------------
  // низ
  frontBumper: bigOptions("Бампер передний", "frontBumper"),
  backBumper: bigOptions("Бампер задний", "backBumper"),
  radiatorGrille: bigOptions("Решетка радиатора", "radiatorGrille"),
  // --фары
  frontLeftHeadlight: smallOptions("Фара передняя левая", "frontLeftHeadlight"),
  frontRightHeadlight: smallOptions(
    "Фара передняя правая",
    "frontRightHeadlight"
  ),
  backLeftHeadlight: smallOptions("Фара задняя левая", "backLeftHeadlight"),
  backRightHeadlight: smallOptions("Фара задняя правая", "backRightHeadlight"),
  // --конец фары
  // --крылья
  leftFrontFender: bigOptions("Крыло переднее левое", "leftFrontFender"),
  rightFrontFender: bigOptions("Крыло переднее правое", "rightFrontFender"),
  leftBackFender: bigOptions("Крыло заднее левое", "leftBackFender"),
  rightBackFender: bigOptions("Крыло заднее правое", "rightBackFender"),
  // --конец крылья
  // --зеркала
  leftMirror: normalOptions("Зеркало левое", "leftMirror"),
  rightMirror: normalOptions("Зеркало правое", "rightMirror"),
  // --конец зеркала
  // --стекла
  frontLeftDoorGlass: smallOptions(
    "Стекло двери передней левой",
    "frontLeftDoorGlass"
  ),
  frontRightDoorGlass: smallOptions(
    "Стекло двери передней правой",
    "frontRightDoorGlass"
  ),
  backLeftDoorGlass: smallOptions(
    "Стекло двери задней левой",
    "backLeftDoorGlass"
  ),
  backRightDoorGlass: smallOptions(
    "Стекло двери задней правой",
    "backRightDoorGlass"
  ),
  // --конец стекла
  // --двери
  frontLeftDoor: bigOptions("Дверь передняя левая", "frontLeftDoor"),
  frontRightDoor: bigOptions("Дверь передняя правая", "frontRightDoor"),
  backLeftDoor: bigOptions("Дверь задняя левая", "backLeftDoor"),
  backRightDoor: bigOptions("Дверь задняя правая", "backRightDoor"),
  // --конец двери
  // --порого
  leftThreshold: bigOptions("Порог левый", "leftThreshold"),
  rightThreshold: bigOptions("Порог правый", "rightThreshold"),
  // конец пороги
};

export const generalParametrs = [
  {
    id: 1,
    name: "mattPaint",
    title: "Mатовая краска"
  },
  {
    id: 2,
    name: "carIsNotRunning",
    title: "Автомобиль не на ходу"
  },
  {
    id: 3,
    name: "bodyGeometryIsBroken",
    title: "Нарушена геометрия кузова"
  },
]