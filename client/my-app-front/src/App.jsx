import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import SearchLotPage from "./pages/SearchLotPage";
import ResultsLotPage from "./pages/ResultsLotPage";
import NotFoundPage from "./pages/NotFoundPage";
import Test from "./components/dashboardcomponents/Test";
import Calendar from "./components/dashboardcomponents/Calendar";
import Profile from "./pages/Profile";
import BecomeHostForm from "./pages/DevenirBailleurForm";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/recherche-lot" element={<SearchLotPage />} />
        <Route path="resultats-lot" element={<ResultsLotPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/recherche-lot" element={<SearchLotPage />} />
        <Route path="resultats-lot" element={<ResultsLotPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="demande" element={<BecomeHostForm />} />
        <Route path="/test-page" element={<TestComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
