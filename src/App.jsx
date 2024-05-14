import { BrowserRouter, NavLink, Routes } from "react-router-dom";

import routes from "./routes/routes";

import { Board } from "./components/newtest/Board";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
      {/* <Board /> */}
    </>
  );
}

export default App;
