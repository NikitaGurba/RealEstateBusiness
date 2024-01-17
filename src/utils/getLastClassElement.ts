import { elem } from "../types/types";

export const getLastClassElement = (className: string): elem => {
  const arrayOfBlocks: HTMLCollection =
    document.getElementsByClassName(className);
  return arrayOfBlocks[arrayOfBlocks.length - 1];
};
