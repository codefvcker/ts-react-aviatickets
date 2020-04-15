export const isCorrectTime = (time: number) => {
  const correctTime = time;
  if (correctTime < 10) {
    return "0" + correctTime;
  }
  return correctTime;
};

export const timeConvert = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}ч ${minutes}м`;
};
