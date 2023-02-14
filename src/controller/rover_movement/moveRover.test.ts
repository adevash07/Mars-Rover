import { movement } from "./moveRover";

describe("Testing Rover Movement System", () => {
  const apolloSearcher: Rover = {
    direction: "N",
    position: {
      x: 0,
      y: 0,
    },
  };
  test("Test rover position get moved forward one step, From North to North", () => {
    movement.forward(apolloSearcher);
    expect(apolloSearcher.position.y).toBe(1);
  });
  test("Test rover position get moved forward one step, From South to South", () => {
    apolloSearcher.direction = "S";
    movement.forward(apolloSearcher);
    expect(apolloSearcher.position.y).toBe(0);
  });
  test("Test rover position get moved forward one step, From West to West", () => {
    apolloSearcher.direction = "E";
    console.log(apolloSearcher.position.x);
    movement.forward(apolloSearcher);
    expect(apolloSearcher.position.x).toBe(1);
  });
  test("Test rover position get moved forward one step, From East to East", () => {
    apolloSearcher.direction = "W";
    movement.forward(apolloSearcher);
    expect(apolloSearcher.position.x).toBe(0);
  });
});
