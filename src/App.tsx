import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { observer } from "mobx-react-lite";
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/RegPage";
import PageWithCards from "./pages/PageWithCards";
import NotActivatedPrivRoute from "./utils/NotActivatedPrivRoute";
import { ToastContainer } from "react-toastify";
import HistoryPage from "./pages/HistoryPage";
import CPUChartPage from "./pages/CPUChartPage";
import DiskChartPage from "./pages/DiskChartPage";
import TemperatureChartPage from "./pages/TemperatureChartPage";
import RamChartPage from "./pages/RamChartPage";
import NotificationPage from "./pages/NotificationPage";
import AccessToHistoryRoute from "./utils/AccesToHistoryRoute";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotActivatedPrivRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/cards" element={<PageWithCards />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route element={<AccessToHistoryRoute />}>
            <Route path="/chartCPU" element={<CPUChartPage />} />
            <Route path="/chartDisk" element={<DiskChartPage />} />
            <Route
              path="/chartTemperature"
              element={<TemperatureChartPage />}
            />
            <Route path="/chartRam" element={<RamChartPage />} />
            <Route path="/settings" element={<NotificationPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default observer(App);
