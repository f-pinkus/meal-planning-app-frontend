import { BrowserRouter as Router, Routes, Route, RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { MenusPage } from "./MenusPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { MenuShowPage } from "./MenuShowPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("email"));
  }, []);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet context={{ setIsLoggedIn }} />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MenusPage />
      },
      {
        path: "/menus",
        element: <MenusPage />
      },
      {
        path: "/menus/:id",
        element: <MenuShowPage />
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;