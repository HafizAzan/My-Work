import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HeaderFooterLayout from "./container/layout/HeaderFooterLayout";
import Main from "./container/Main";
import "animate.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HeaderFooterLayout />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
