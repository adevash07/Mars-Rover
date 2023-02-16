//Build a console application that can take in a string of commands and move a rover around a grid.
//The rover is initially positioned at (0,0) facing North.
//The rover can move forward, backward, left and right
import { createRover } from "./controller/create_rover/createRover";
import { roverDriver } from "./controller/rover_driver/roverDriver";
import { Coordinate, Rover } from "./models/types";
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

type MissionResult = Rover[];

const MarsExploration = async () => {
  const Missions: missions = {
    platform: {
      x: 0,
      y: 0,
    },
    rovers: [],
  };

  const MissionResults: MissionResult = [];
  let continueRoverInput = true;
  clear(true);
  print("+------------------------------------+");
  print("| Welcome to Mars Exploration Mission |");
  print("+------------------------------------+");
  print("Please enter the maximum coordinates of the platform");

  function GetRoverInfo() {
    const roverInfo: roverInfo = {
      initialX: 0,
      initialY: 0,
      initialDirection: "",
      commands: "",
    };

    const getRoverInfo = () => {
      print("Please enter the initial position of the rover");
      let validateInput = false;
      if (!validateInput) {
        askQuestion("Initial X coordinate: ", (initialX) => {
          askQuestion("Initial Y coordinate: ", (initialY) => {
            if (isNaN(parseInt(initialX)) || isNaN(parseInt(initialY))) {
              print("Invalid input, please try again");
              getRoverInfo();
            } else {
              validateInput = true;
              roverInfo.initialX = parseInt(initialX);
              roverInfo.initialY = parseInt(initialY);
              print(`⍰ Rover initial coordinates: (${initialX}, ${initialY})`);
              getRoverDirection();
            }
          });
        });
      }
    };

    const getRoverDirection = () => {
      print("Please enter the direction of the rover");
      let validateInput = false;
      if (!validateInput) {
        askQuestion("Initial direction: ", (initialDirection) => {
          if (
            initialDirection !== "N" &&
            initialDirection !== "S" &&
            initialDirection !== "E" &&
            initialDirection !== "W"
          ) {
            print("Invalid input, please try again");
            getRoverDirection();
          } else {
            validateInput = true;
            roverInfo.initialDirection = initialDirection;
            print(`⍰ Rover initial direction: ${initialDirection}`);
            getRoverCommands();
          }
        });
      }
    };

    function getRoverCommands() {
      print("Please enter the commands for the rover");
      let validateInput = false;
      if (!validateInput) {
        askQuestion("Commands: ", (commands) => {
          roverInfo.commands = commands;
          if (!/^[LRM]+$/m.test(commands)) {
            print("Invalid input, please try again");
            getRoverCommands();
          } else {
            validateInput = true;
            roverInfo.commands = commands;
            print(`⍰ Rover commands: ${commands}`);
            Missions.rovers.push(roverInfo);
            askQuestion("Do you want to add another rover? (Y/N)", (answer) => {
              if (answer === "N") {
                continueRoverInput = false;
                StartMission();
              } else {
                GetRoverInfo();
              }
            });
          }
        });
      }
    }

    getRoverInfo();
  }

  function GetPlatformInfo() {
    let validateInput = false;
    if (!validateInput) {
      askQuestion("Maximum X coordinate: ", (maxX) => {
        askQuestion("Maximum Y coordinate: ", (maxY) => {
          if (isNaN(parseInt(maxX)) || isNaN(parseInt(maxY))) {
            print("Invalid input, please try again");
            GetPlatformInfo();
          } else {
            Missions.platform.x = parseInt(maxX);
            Missions.platform.y = parseInt(maxY);
            print(`⍰ Platform maximum coordinates: (${maxX}, ${maxY})`);
            validateInput = true;
            GetRoverInfo();
          }
        });
      });
    }
  }

  const StartMission = () => {
    console.log("Starting mission !!!");
    console.log(Missions);
    Missions.rovers.forEach((rover) => {
      const Rover = createRover(
        `${rover.initialX} ${rover.initialY} ${rover.initialDirection}`
      );
      roverDriver(Rover, rover.commands, Missions.platform);
      MissionResults.push(Rover);
      print(
        `Rover final position: ${Rover.position.x} ${Rover.position.y} ${Rover.direction}
         ------------------------------------
        `
      );
    });
    askQuestion("Do you want to start a new mission? (Y/N)", (answer) => {
      if (answer === "Y") {
        GetPlatformInfo();
      } else {
        print("Mission aborted");
      }
    });
  };

  GetPlatformInfo();
};

console.clear();
MarsExploration();
