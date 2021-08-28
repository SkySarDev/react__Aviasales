export const sortData = (data, sortType) => {
  const sortByPrice = (unsortedData) =>
    unsortedData.sort((a, b) => a.price - b.price);

  const sortByDuration = (unsortedData) =>
    unsortedData.sort(
      (a, b) => a.segments[0].duration - b.segments[0].duration
    );

  if (sortType === "cheaper") {
    return sortByPrice(data);
  } else if (sortType === "faster") {
    return sortByDuration(data);
  } else if (sortType === "optimal") {
    const firstIteration = sortByPrice(data);
    const secondIteration = sortByDuration(
      firstIteration.splice(0, data.length / 2)
    );

    return [...secondIteration, ...firstIteration];
  } else {
    throw new Error("Unknown sort type");
  }
};
