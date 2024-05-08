import { BrowserRouter, NavLink, Routes } from "react-router-dom";

import routes from "./routes/routes";

import { Draganddrop } from "./components/DragandDrop/Draganddrop";
import Test from "./components/newtest/Test";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter> */}
      <Test />
    </>
  );
}

export default App;
