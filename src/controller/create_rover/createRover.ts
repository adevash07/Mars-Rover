const createRover: BuildRover = (roverInfo) => {
  const [x, y, direction] = roverInfo.split(" ");
  return {
    direction: direction as Direction,
    position: { x: Number(x), y: Number(y) },
  };
};

export { createRover };
