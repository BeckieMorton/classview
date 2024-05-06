import { BrowserRouter, NavLink, Routes } from "react-router-dom";

import routes from "./routes/routes";

import { Draganddrop2 } from "./components/DragandDrop/Draganddrop2";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter> */}
      <Draganddrop2 />
    </>
  );
}

export default App;
