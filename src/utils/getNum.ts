export const getNum = (rand: number) => {
  console.warn(rand);
  switch (rand) {
    case 6:
      return 5400;
    case 5:
      return 5460;
    case 4:
      return 5520;
    case 3:
      return 5580;
    case 2:
      return 5640;
    case 1:
      return 5700;
    default:
      return 0;
  }
};
