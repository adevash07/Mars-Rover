import { navigation } from "../rover_navigation/roverNavigation";
import { movement } from "../rover_movement/moveRover";

const roverDriver = (
  rover: Rover,
  driveSequence: string,
  platformMaximumLimit: PlatformMaximumCoordinate
) => {
  const driveSequenceArray = driveSequence.split("");
  //set guard rails to prevent rover from moving off the grid
  driveSequenceArray.forEach((drive) => {
    if (drive === "R" || drive === "L") {
      navigation.steer(rover, drive);
    } else if (drive === "M") {
      if (rover.direction === "N") {
        if (rover.position.y + 1 <= platformMaximumLimit.y) {
          movement.forward(rover);
        } else {
          console.log("Rover cannot move forward, it will fall off the grid");
        }
      }
      if (rover.direction === "E") {
        if (rover.position.x + 1 <= platformMaximumLimit.x) {
          movement.forward(rover);
        } else {
          console.log("Rover cannot move forward, it will fall off the grid");
        }
      }
      if (rover.direction === "S") {
        if (rover.position.y - 1 >= 0) {
          movement.forward(rover);
        } else {
          console.log("Rover cannot move forward, it will fall off the grid");
        }
      }
      if (rover.direction === "W") {
        if (rover.position.x - 1 >= 0) {
          movement.forward(rover);
        } else {
          console.log("Rover cannot move forward, it will fall off the grid");
        }
      }
    }
  });
};

export { roverDriver };
