export const SortData = (data, sortType) => {
  let sortedData;

  if (sortType === "cheaper") {
    sortedData = data.sort((a, b) => a.price - b.price);
  } else if (sortType === "faster") {
    sortedData = data.sort(
      (a, b) => a.segments[0].duration - b.segments[0].duration
    );
  } else {
    throw new Error("Unknown sort type");
  }

  return sortedData;
};
