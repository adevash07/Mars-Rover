// const navigation: Navigation<rover, steer> = {
//   steer: (rover, steer) => {
//     //change direction of rover steering the current direction 90deg to left if steer is L or 90deg from right if steer is R
//   },
// };

const navigation: Navigation<Rover, Steer> = {
  steer: (rover, steer) => {
    //change direction of rover steering the current direction 90deg to left if steer is L or 90deg from right if steer is R
    if (rover.direction === "N") {
      console.log("rover direction is N");
      if (steer === "R") {
        console.log(steer);
        rover.direction = "E";
        return void 0;
      } else {
        rover.direction = "W";
        return void 0;
      }
    }
    if (rover.direction === "E") {
      if (steer === "R") {
        rover.direction = "S";
        return void 0;
      } else {
        rover.direction = "N";
        return void 0;
      }
    }
    if (rover.direction === "S") {
      if (steer === "R") {
        rover.direction = "W";
        return void 0;
      } else {
        rover.direction = "E";
        return void 0;
      }
    }
    if (rover.direction === "W") {
      if (steer === "R") {
        rover.direction = "N";
        return void 0;
      } else {
        rover.direction = "S";
        return void 0;
      }
    }
  },
};

export { navigation };
