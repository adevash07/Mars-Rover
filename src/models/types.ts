//DIRECTION MODEL
type North = "N";
type South = "S";
type West = "W";
type East = "E";
type Right = "R";
type Left = "L";

type Steer = Right | Left;

type Direction = North | South | West | East;

// ROVER MODEL START

interface Rover {
  direction: Direction;
  position: Coordinate;
}

// PLATFORM MODELS

type Coordinate = {
  x: number;
  y: number;
};

type PlatformMaximumCoordinate = Coordinate;

type row = Array<Coordinate>;

type Plaform = Array<row>;

//CONTROLLER MODELS

// - Change direction model
interface Navigation<TRover, TSteer> {
  steer: (rover: TRover, direction: TSteer) => void;
}

interface Movement<TRover> {
  forward: (rover: TRover) => void;
}

type BuildPlatform = (maxCoordinate: PlatformMaximumCoordinate) => Plaform;

type BuildRover = (roverInfo: string) => Rover;

export {
  Rover,
  Direction,
  Coordinate,
  PlatformMaximumCoordinate,
  Plaform,
  Navigation,
  Movement,
  BuildPlatform,
  BuildRover,
  Steer,
};
