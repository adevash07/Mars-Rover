//Build a console application that can take in a string of commands and move a rover around a grid.
//The rover is initially positioned at (0,0) facing North.
//The rover can move forward, backward, left and right
import { createRover } from "./controller/create_rover/createRover";
import { roverDriver } from "./controller/rover_driver/roverDriver";
import { askQuestion, clear, print } from "./view/console";

type roverInfo = {
  initialX: number;
  initialY: number;
  initialDirection: string;
  commands: string;
};

type missions = {
  platform: Coordinate;
  rovers: roverInfo[];
};

const MarsExploration = async () => {
  const roverInfo: roverInfo = {
    initialX: 0,
    initialY: 0,
    initialDirection: "",
    commands: "",
  };
  const Missions: missions = {
    platform: {
      x: 0,
      y: 0,
    },
    rovers: [],
  };
  let continueRoverInput = true;
  clear(true);
  print("+------------------------------------+");
  print("| Welcome to Mars Exploration Mission |");
  print("+------------------------------------+");
  print("Please enter the maximum coordinates of the platform");

  function GetPlatformInfo() {
    let validateInput = false;
    while (!validateInput) {
      askQuestion("Maximum X coordinate: ", (maxX) => {
        askQuestion("Maximum Y coordinate: ", (maxY) => {
          if (isNaN(parseInt(maxX)) || isNaN(parseInt(maxY))) {
            print("Invalid input, please try again");
          } else {
            validateInput = true;
            Missions.platform.x = parseInt(maxX);
            Missions.platform.y = parseInt(maxY);
            print(`⍰ Platform maximum coordinates: (${maxX}, ${maxY})`);
          }
        });
      });
    }
  }

  const GetRoverInfo = () => {
    print("Please enter the initial position of the rover");
    const getRoverInfo = () => {
      let validateInput = false;
      while (!validateInput) {
        askQuestion("Initial X coordinate: ", (initialX) => {
          askQuestion("Initial Y coordinate: ", (initialY) => {
            if (isNaN(parseInt(initialX)) || isNaN(parseInt(initialY))) {
              print("Invalid input, please try again");
            } else {
              validateInput = true;
              roverInfo.initialX = parseInt(initialX);
              roverInfo.initialY = parseInt(initialY);
              print(`⍰ Rover initial coordinates: (${initialX}, ${initialY})`);
            }
          });
        });
      }
    };

    print("Please enter the direction of the rover");
    const getRoverDirection = () => {
      let validateInput = false;
      while (!validateInput) {
        askQuestion("Initial direction: ", (initialDirection) => {
          if (
            initialDirection !== "N" &&
            initialDirection !== "S" &&
            initialDirection !== "E" &&
            initialDirection !== "W"
          ) {
            print("Invalid input, please try again");
          } else {
            validateInput = true;
            roverInfo.initialDirection = initialDirection;
            print(`⍰ Rover initial direction: ${initialDirection}`);
          }
        });
      }
    };

    print("Please enter the commands for the rover");
    const getRoverCommands = () => {
      let validateInput = false;
      while (!validateInput) {
        askQuestion("Commands: ", (commands) => {
          roverInfo.commands = commands;
          if (!/^[LRM]+$/m.test(commands)) {
            print("Invalid input, please try again");
          } else {
            validateInput = true;
            roverInfo.commands = commands;
            print(`⍰ Rover commands: ${commands}`);
          }
        });
      }

      Missions.rovers.push(roverInfo);
      print("Rover added to mission");
    };

    getRoverInfo();
    getRoverDirection();
    getRoverCommands();
  };

  const StartMission = () => {
    console.log("Starting mission");
    Missions.rovers.map((rover) => {
      const Rover = createRover(
        `${rover.initialX} ${rover.initialY} ${rover.initialDirection}`
      );
      roverDriver(Rover, rover.commands, Missions.platform);
    });
  };

  while (continueRoverInput) {
    GetRoverInfo();
    askQuestion("Do you want to add another rover? (y/n)", (answer) => {
      if (answer === "n") {
        continueRoverInput = false;
      }
    });

    StartMission();

    askQuestion("Do you want to start another mission? (y/n)", (answer) => {
      if (answer === "n") {
        continueRoverInput = false;
      } else {
        GetPlatformInfo();
      }
    });
  }
};

console.clear();
MarsExploration();
