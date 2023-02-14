import { navigation } from "./roverNavigation";

describe("Testing Rover Navigation System", () => {
  const apolloSearcher: Rover = {
    direction: "N",
    position: {
      x: 0,
      y: 0,
    },
  };
  test("Test rover direction get steered 90deg Right, From North to East", () => {
    navigation.steer(apolloSearcher, "R");
    expect(apolloSearcher.direction).toBe("E");
  });

  test("Test rover direction get steered 90deg Right, From South to North", () => {
    apolloSearcher.direction = "S";
    navigation.steer(apolloSearcher, "R");
    expect(apolloSearcher.direction).toBe("W");
  });

  test("Test rover direction get steered 90deg Right, From West to North", () => {
    apolloSearcher.direction = "W";
    navigation.steer(apolloSearcher, "R");
    expect(apolloSearcher.direction).toBe("N");
  });

  test("Test rover direction get steered 90deg Right, From East to South", () => {
    apolloSearcher.direction = "E";
    navigation.steer(apolloSearcher, "R");
    expect(apolloSearcher.direction).toBe("S");
  });

  test("Test rover direction get steered 90deg Left, From North to West", () => {
    apolloSearcher.direction = "N";
    navigation.steer(apolloSearcher, "L");
    expect(apolloSearcher.direction).toBe("W");
  });

  test("Test rover direction get steered 90deg Left, From South to East", () => {
    apolloSearcher.direction = "S";
    navigation.steer(apolloSearcher, "L");
    expect(apolloSearcher.direction).toBe("E");
  });

  test("Test rover direction get steered 90deg Left, From West to South", () => {
    apolloSearcher.direction = "W";
    navigation.steer(apolloSearcher, "L");
    expect(apolloSearcher.direction).toBe("S");
  });

  test("Test rover direction get steered 90deg Left, From East to North", () => {
    apolloSearcher.direction = "E";
    navigation.steer(apolloSearcher, "L");
    expect(apolloSearcher.direction).toBe("N");
  });
});
