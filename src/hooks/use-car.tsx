import { create } from "zustand";

export enum Position {
  "up" = 1,
  "left" = 2,
  "right" = 3,
  "back" = 4,
}

export enum Part {
  "roof" = "roof",
  "windshield" = "windshield",
  "hood" = "hood",
  "trunk" = "trunk",
  "backGlass" = "backGlass",
  "frontBumper" = "frontBumper",
  "backBumper" = "backBumper",
  "radiatorGrille" = "radiatorGrille",
  "frontLeftHeadlight" = "frontLeftHeadlight",
  "frontRightHeadlight" = "frontRightHeadlight",
  "backLeftHeadlight" = "backLeftHeadlight",
  "backRightHeadlight" = "backRightHeadlight",
  "leftFrontFender" = "leftFrontFender",
  "rightFrontFender" = "rightFrontFender",
  "leftBackFender" = "leftBackFender",
  "rightBackFender" = "rightBackFender",
  "leftMirror" = "leftMirror",
  "rightMirror" = "rightMirror",
  "frontLeftDoorGlass" = "frontLeftDoorGlass",
  "frontRightDoorGlass" = "frontRightDoorGlass",
  "backLeftDoorGlass" = "backLeftDoorGlass",
  "backRightDoorGlass" = "backRightDoorGlass",
  "frontLeftDoor" = "frontLeftDoor",
  "frontRightDoor" = "frontRightDoor",
  "backLeftDoor" = "backLeftDoor",
  "backRightDoor" = "backRightDoor",
  "leftThreshold" = "leftThreshold",
  "rightThreshold" = "rightThreshold",
}

export enum Type {
  "normal" = "normal",
  "big" = "big",
}

type CarStore = {
  isCar: number;
  isModel: number;
  isPosition: Position;
  isPart: Part | null;
  isType: Type;
  setCar: (car: number) => void;
  setModel: (model: number) => void;
  setPosition: (position: Position) => void;
  setPart: (part: Part) => void;
  setType: (type: Type) => void;
};

export const useCar = create<CarStore>((set) => ({
  isCar: 0,
  isModel: 0,
  isPosition: Position.up,
  isPart: null,
  isType: Type.normal,
  setCar: (car: number) => set({ isCar: car }),
  setModel: (model: number) => set({ isModel: model }),
  setPosition: (position: Position) => set({ isPosition: position }),
  setPart: (part: Part) => set({ isPart: part }),
  setType: (type: Type) => set({ isType: type }),
}));
