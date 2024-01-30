import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

import MainPage from "./components/MainPage";
import RcmPage from "./components/RcmPage";
import MainLayout from "./Layout/MainLayout";
import BreakList from "./components/BreakList";
import LunchList from "./components/LunchList";
import DinnerList from "./components/DinnerList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<MainLayout />}>
            <Route path="/search/1" element={<BreakList />} />
            <Route path="/search/2" element={<LunchList />} />
            <Route path="/search/3" element={<DinnerList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
