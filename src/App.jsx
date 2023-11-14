import React from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Pizza from "./components/Pizza/Pizza";
import Snack from "./components/Snack/Snack";
import Dessert from "./components/Dessert/Dessert";
import Drink from "./components/Drink/Drink";
import ContainerUser from "./components/User/ContainerUser";
import ContainerAddressSelector from "./components/Map/ContainerMap";
import ContainerCard from "./components/Card/ContainerCard";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Pizza />} />
        <Route path="/:id" element={<Pizza />} />
        <Route path="snacks" element={<Snack />} />
        <Route path="desserts" element={<Dessert />} />
        <Route path="drinks" element={<Drink />} />
        <Route path="user" element={<ContainerUser />} />
        <Route path="map" element={<ContainerAddressSelector />} />
        <Route path="card" element={<ContainerCard />} />
      </Routes>
    </div>
  );
}

export default App;
