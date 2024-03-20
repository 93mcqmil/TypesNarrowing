import { createContext } from "react";

type Car = {
  type: "Car";
  name: string;
  registration: number;
  model: string;
  doors: number;
  engine: number;
  tank_volume: number;
  towbar: boolean;
};

type Motorcycle = {
  type: "Bike";
  name: string;
  registration: number;
  model: string;
  tank_volume: number;
  engine: number;
};

type Boat = {
  type: "Boat";
  name: string;
  registration: number;
  model: string;
  engine: number;
  tank_volume: number;
};

type Vehicles = Car | Motorcycle | Boat;

export const initialVehicles: Vehicles[] = [
  {
    type: "Car",
    name: "Audi",
    registration: 12345,
    model: "Combi",
    doors: 4,
    engine: 2000,
    tank_volume: 50,
    towbar: true,
  },
  {
    type: "Bike",
    name: "Kawasaki",
    registration: 33521,
    model: "X200",
    engine: 1000,
    tank_volume: 20,
  },
  {
    type: "Boat",
    name: "Floatrunner",
    registration: 67890,
    model: "Gas-burner",
    engine: 300,
    tank_volume: 200,
  },
];

export const VehicleContext = createContext(initialVehicles);
