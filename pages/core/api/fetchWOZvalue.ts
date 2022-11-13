function getRandomIntInclusive(min: number, max: number) {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber / 1000) * 1000;
}

export interface WozValueResponse {
  wozValue: number;
  eWozValue: number;
}

export const fetchWOZvalue = (): Promise<WozValueResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        wozValue: getRandomIntInclusive(400000, 450000),
        eWozValue: getRandomIntInclusive(400000, 450000)
      });
    }, 1000);
  });
};