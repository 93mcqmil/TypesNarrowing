import { useContext } from "react";
import { VehicleContext } from "./VehicleContext";

const VehicleList = () => {
  const Vehicles = useContext(VehicleContext);
  return (
    <>
      <ul>
        {Vehicles.map((vehicle, index) => {
          if (vehicle.type === "Car")
            return (
              <li key={index}>
                {" "}
                Name: {vehicle.name}, Type: {vehicle.type}, Registration:{" "}
                {vehicle.registration}, Model: {vehicle.model}, Engine:{" "}
                {vehicle.engine}, Tank Volume: {vehicle.tank_volume}, Doors:{" "}
                {vehicle.doors} Towbar status: {""} {vehicle.towbar}
              </li>
            );

          if (vehicle.type === "Bike")
            return (
              <li key={index}>
                Name: {vehicle.name}, type: {vehicle.type}, Registration:{" "}
                {vehicle.registration}, Model: {vehicle.model}, Engine:{" "}
                {vehicle.engine}, Tank Volume: {vehicle.tank_volume}
              </li>
            );

          if (vehicle.type === "Boat")
            return (
              <li key={index}>
                Name: {vehicle.name}, Type: {vehicle.type}, Registration:{" "}
                {vehicle.registration}, Model: {vehicle.model} Engine:{" "}
                {vehicle.engine}, Tank Volume: {vehicle.tank_volume}
              </li>
            );
        })}
      </ul>
    </>
  );
};
export default VehicleList;
