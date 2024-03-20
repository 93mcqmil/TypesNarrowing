import { useState } from "react";
import "./App.css";
import { useContext } from "react";
import VehicleList from "./Components/VehicleList";

function App() {
  return (
    <>
      <div>
        <VehicleList />
      </div>
    </>
  );
}

export default App;
