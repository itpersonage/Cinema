import React from "react";
import { MainContainer } from "./Containers/MainContainer";
import { Route, Routes } from "react-router-dom";
import { PageWrapper } from "./Components/Commons/PageWrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
