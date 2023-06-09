import React from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Wall from "./pages/wall";
import Friends from "./pages/friends";
import Chats from "./pages/chats";
import Header from "./components/mediaheader/header/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Wall />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
