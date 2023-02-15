import { roverDriver } from "./roverDriver";

describe("Testing Rover Driver System", () => {
  const maximumPlatformlimit = { x: 5, y: 5 };
  const apolloSearcher: Rover = {
    direction: "N",
    position: {
      x: 0,
      y: 0,
    },
  };
  test("Test rover position get moved forward one step, From North to North", () => {
    roverDriver(apolloSearcher, "M", maximumPlatformlimit);
    expect(apolloSearcher.position.y).toBe(1);
  });
  test("Test rover position get moved forward one step, From South to South", () => {
    apolloSearcher.direction = "S";
    roverDriver(apolloSearcher, "M", maximumPlatformlimit);
    expect(apolloSearcher.position.y).toBe(0);
  });
  test("Test rover position get moved forward one step, From West to West", () => {
    apolloSearcher.direction = "E";
    roverDriver(apolloSearcher, "M", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(1);
  });
  test("Test rover position get moved forward one step, From East to East", () => {
    apolloSearcher.direction = "W";
    roverDriver(apolloSearcher, "M", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(0);
    maximumPlatformlimit;
  });
  test("Test rover direction get steered 90deg Right, From North to East", () => {
    apolloSearcher.direction = "N";
    roverDriver(apolloSearcher, "R", maximumPlatformlimit);
    expect(apolloSearcher.direction).toBe("E");
  });
  test("Test rover direction get steered 90deg Right, From South to North", () => {
    apolloSearcher.direction = "S";
    roverDriver(apolloSearcher, "R", maximumPlatformlimit);
    expect(apolloSearcher.direction).toBe("W");
  });
  test("Test rover direction get steered 90deg Right, From West to North", () => {
    apolloSearcher.direction = "W";
    roverDriver(apolloSearcher, "R", maximumPlatformlimit);
    expect(apolloSearcher.direction).toBe("N");
  });
  test("Test rover direction get steered 90deg Right, From East to South", () => {
    apolloSearcher.direction = "E";
    roverDriver(apolloSearcher, "R", maximumPlatformlimit);
    expect(apolloSearcher.direction).toBe("S");
  });
  test("Test rover direction get steered 90deg Left, From North to West", () => {
    apolloSearcher.direction = "N";
    roverDriver(apolloSearcher, "L", maximumPlatformlimit);
    expect(apolloSearcher.direction).toBe("W");
  });
  test("Test rover direction get steered 90deg Left, From South to East", () => {
    apolloSearcher.direction = "S";
    roverDriver(apolloSearcher, "L", maximumPlatformlimit);
    expect(apolloSearcher.direction).toBe("E");
  });
  test("Test rover direction get steered 90deg Left, From West to South", () => {
    apolloSearcher.direction = "W";
    roverDriver(apolloSearcher, "L", maximumPlatformlimit);
    expect(apolloSearcher.direction).toBe("S");
  });
  test("Test rover direction get steered 90deg Left, From East to North", () => {
    apolloSearcher.direction = "E";
    roverDriver(apolloSearcher, "L", maximumPlatformlimit);
    expect(apolloSearcher.direction).toBe("N");
  });

  //test rover trying to move out of platform
  test("Test rover trying to move out of platform, From North to North", () => {
    apolloSearcher.direction = "N";
    apolloSearcher.position.y = 5;
    roverDriver(apolloSearcher, "M", maximumPlatformlimit);
    expect(apolloSearcher.position.y).toBe(5);
  });

  test("Test rover trying to move out of platform, From South to South", () => {
    apolloSearcher.direction = "S";
    apolloSearcher.position.y = 0;
    roverDriver(apolloSearcher, "M", maximumPlatformlimit);
    expect(apolloSearcher.position.y).toBe(0);
  });

  test("Test rover trying to move out of platform, From West to West", () => {
    apolloSearcher.direction = "W";
    apolloSearcher.position.x = 0;
    roverDriver(apolloSearcher, "M", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(0);
  });

  test("Test rover trying to move out of platform, From East to East", () => {
    apolloSearcher.direction = "E";
    apolloSearcher.position.x = 5;
    roverDriver(apolloSearcher, "M", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(5);
  });

  // test long string driver command
  test("Test rover driver command string", () => {
    apolloSearcher.direction = "N";
    apolloSearcher.position.x = 0;
    apolloSearcher.position.y = 0;
    roverDriver(apolloSearcher, "MMRMMRMM", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(2);
    expect(apolloSearcher.position.y).toBe(0);
    expect(apolloSearcher.direction).toBe("S");
  });

  test("Test rover driver command string", () => {
    apolloSearcher.direction = "N";
    apolloSearcher.position.x = 1;
    apolloSearcher.position.y = 2;
    roverDriver(apolloSearcher, "LMLMLMLMM", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(1);
    expect(apolloSearcher.position.y).toBe(3);
    expect(apolloSearcher.direction).toBe("N");
  });

  test("Test rover driver command string", () => {
    apolloSearcher.direction = "E";
    apolloSearcher.position.x = 3;
    apolloSearcher.position.y = 3;
    roverDriver(apolloSearcher, "MMRMMRMRRM", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(5);
    expect(apolloSearcher.position.y).toBe(1);
    expect(apolloSearcher.direction).toBe("E");
  });

  test("Test rover driver command string", () => {
    apolloSearcher.direction = "E";
    apolloSearcher.position.x = 3;
    apolloSearcher.position.y = 3;
    roverDriver(apolloSearcher, "MMRMMRMRRM", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(5);
    expect(apolloSearcher.position.y).toBe(1);
    expect(apolloSearcher.direction).toBe("E");
  });

  test("Test rover driver command string, Move from 0,0 to 1,1", () => {
    apolloSearcher.direction = "N";
    apolloSearcher.position.x = 0;
    apolloSearcher.position.y = 0;
    roverDriver(apolloSearcher, "RMLMRR", maximumPlatformlimit);
    expect(apolloSearcher.position.x).toBe(1);
    expect(apolloSearcher.position.y).toBe(1);
    expect(apolloSearcher.direction).toBe("S");
  });
});
