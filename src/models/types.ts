//DIRECTION MODEL
type North = "N";
type South = "S";
type West = "W";
type East = "E";
type Right = "R";
type Left = "L";

type steer = "R" | "L";

type direction = North | South | West | East;

// ROVER MODEL START

interface rover {
  direction: direction;
  position: point;
}

// PLATFORM MODELS

type point = {
  x: number;
  y: number;
};

type row = Array<point>;

type Plaform = Array<row>;

//CONTROLLER MODELS

// - Change direction model
interface Navigation<TRover, TSteer> {
  steer: (rover: TRover, direction: TSteer) => void;
}
