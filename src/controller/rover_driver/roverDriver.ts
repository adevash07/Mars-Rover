import { navigation } from "../rover_navigation/roverNavigation";
import { movement } from "../rover_movement/moveRover";

const roverDriver = (rover: Rover, driveSequence: string) => {
  const driveSequenceArray = driveSequence.split("");
  driveSequenceArray.forEach((drive) => {
    if (drive === "R" || drive === "L") {
      navigation.steer(rover, drive);
    } else if (drive === "M") {
      movement.forward(rover);
    }
  });
};

export { roverDriver };
