import { Route, Routes } from "react-router-dom";
import "./App.css";
import AreaChart from "./Charts/AreaChart";
import LineChart from "./Charts/LineChart";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <h1>React ChartJs 2 Refference</h1>
      </div>
      <Routes>
        <Route path="/" element={<LineChart />} />
        <Route path="/area-chart" element={<AreaChart />} />
      </Routes>
    </>
  );
}

export default App;
