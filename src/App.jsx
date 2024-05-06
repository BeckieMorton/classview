import { BrowserRouter, NavLink, Routes } from "react-router-dom";

import routes from "./routes/routes";
import { Draganddrop } from "./components/DragandDrop/Draganddrop";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter> */}
      <Draganddrop />
    </>
  );
}

export default App;
