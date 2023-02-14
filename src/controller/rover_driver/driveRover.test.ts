import { roverDriver } from "./driveRover";

describe("Testing Rover Driver System", () => {
  const apolloSearcher: Rover = {
    direction: "N",
    position: {
      x: 0,
      y: 0,
    },
  };
  test("Test rover position get moved forward one step, From North to North", () => {
    roverDriver(apolloSearcher, "M");
    expect(apolloSearcher.position.y).toBe(1);
  });
  test("Test rover position get moved forward one step, From South to South", () => {
    apolloSearcher.direction = "S";
    roverDriver(apolloSearcher, "M");
    expect(apolloSearcher.position.y).toBe(0);
  });
  test("Test rover position get moved forward one step, From West to West", () => {
    apolloSearcher.direction = "E";
    roverDriver(apolloSearcher, "M");
    expect(apolloSearcher.position.x).toBe(1);
  });
  test("Test rover position get moved forward one step, From East to East", () => {
    apolloSearcher.direction = "W";
    roverDriver(apolloSearcher, "M");
    expect(apolloSearcher.position.x).toBe(0);
  });
  test("Test rover direction get steered 90deg Right, From North to East", () => {
    apolloSearcher.direction = "N";
    roverDriver(apolloSearcher, "R");
    expect(apolloSearcher.direction).toBe("E");
  });
  test("Test rover direction get steered 90deg Right, From South to North", () => {
    apolloSearcher.direction = "S";
    roverDriver(apolloSearcher, "R");
    expect(apolloSearcher.direction).toBe("W");
  });
  test("Test rover direction get steered 90deg Right, From West to North", () => {
    apolloSearcher.direction = "W";
    roverDriver(apolloSearcher, "R");
    expect(apolloSearcher.direction).toBe("N");
  });
  test("Test rover direction get steered 90deg Right, From East to South", () => {
    apolloSearcher.direction = "E";
    roverDriver(apolloSearcher, "R");
    expect(apolloSearcher.direction).toBe("S");
  });
  test("Test rover direction get steered 90deg Left, From North to West", () => {
    apolloSearcher.direction = "N";
    roverDriver(apolloSearcher, "L");
    expect(apolloSearcher.direction).toBe("W");
  });
  test("Test rover direction get steered 90deg Left, From South to East", () => {
    apolloSearcher.direction = "S";
    roverDriver(apolloSearcher, "L");
    expect(apolloSearcher.direction).toBe("E");
  });
  test("Test rover direction get steered 90deg Left, From West to South", () => {
    apolloSearcher.direction = "W";
    roverDriver(apolloSearcher, "L");
    expect(apolloSearcher.direction).toBe("S");
  });
  test("Test rover direction get steered 90deg Left, From East to North", () => {
    apolloSearcher.direction = "E";
    roverDriver(apolloSearcher, "L");
    expect(apolloSearcher.direction).toBe("N");
  });
});
