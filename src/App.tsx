import React from "react";
import { Card } from "@/components";
import data from "@/data/index.json";
import "./App.scss";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Card {...data} />
    </div>
  );
};

export default App;
