const platformBuilder: BuildPlatform = (maxCoordinate) => {
  const platform = [];
  for (let y = 0; y <= maxCoordinate.y; y++) {
    const row = [];
    for (let x = 0; x <= maxCoordinate.x; x++) {
      row.push({ x, y });
    }
    platform.push(row);
  }
  return platform;
};
