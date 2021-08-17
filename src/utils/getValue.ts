import { getNum } from "./getNum";

export const getValue = (start: boolean, rand: number) => {
  if (start) {
    const rotation = getNum(rand);
    console.warn({ rotation });
    return rotation + "deg";
  }
  return 5400;
};
