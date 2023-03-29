import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Ap() {
    return (
        <BrowserRouter>
          <Routes>
              <Route index element={<App />} />
              <Route path="/main" element={<App2 />} />
          </Routes>
        </BrowserRouter>
      );
    }

  const root =ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Ap />);







