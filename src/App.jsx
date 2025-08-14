import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { MenusPage } from "./MenusPage";
import { MenuShowPage } from "./MenuShowPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenusPage />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/menus/:id" element={<MenuShowPage />} />
      </Routes>
    </Router>
  )
}

export default App;