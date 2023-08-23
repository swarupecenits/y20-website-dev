import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/swarup/Hero";
import Unite from "./components/pragyan/Unite";
import Events from "./components/barnil/Events";
import Theme from "./components/sahin/Theme";
import Speakers from "./components/barnil/Speakers";
import Sponsors from "./components/barnil/Sponsors";
import OrganisingInstitutes from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="hero" element={<Hero />} />
        <Route path="unite" element={<Unite />} />
        <Route path="events" element={<Events />} />
        <Route path="theme" element={<Theme />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="organising" element={<OrganisingInstitutes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
