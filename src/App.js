import React, { Suspense } from "react";
import "./App.css";
import Router from "./router/router";
import { Routes } from "./router/routes/index";

function App() {
  return (
    <Suspense fallback={null}>
      <Router Routes={Routes} />
    </Suspense>
  );
}

export default App;
