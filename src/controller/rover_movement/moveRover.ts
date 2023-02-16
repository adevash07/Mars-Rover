import { Movement, Rover } from "../../models/types";

const movement: Movement<Rover> = {
  forward: (rover) => {
    //change position of rover moving forward one step
    if (rover.direction === "N") {
      rover.position.y += 1;
      return void 0;
    }
    if (rover.direction === "E") {
      rover.position.x += 1;
      return void 0;
    }
    if (rover.direction === "S") {
      rover.position.y -= 1;
      return void 0;
    }
    if (rover.direction === "W") {
      rover.position.x -= 1;
      return void 0;
    }
  },
};

export { movement };
