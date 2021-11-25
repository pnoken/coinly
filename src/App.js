import React from "react";
import LayoutComponent from "./components/Layout";
import { SplitScreen } from "./components/SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
};

const App = () => {
  return (
    <LayoutComponent>
      <div className="App container mx-auto mt-3 font-thin">
        <SplitScreen leftWeight={2} rightWeight={2}>
          <LeftHandComponent name="Access wide range of coin experts" />
          <RightHandComponent message="Or Become a Coin Expert" />
        </SplitScreen>
      </div>
    </LayoutComponent>
  );
};

export default App;
