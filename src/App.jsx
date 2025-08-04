import axios from "axios";
import { Header } from "./Header";
import { MenusPage } from "./MenusPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <MenusPage />
      <Footer />
    </div>
  )
}

export default App;