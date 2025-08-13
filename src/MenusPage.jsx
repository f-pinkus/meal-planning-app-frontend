import axios from "axios";
import { useEffect, useState } from "react";
import { MenusIndex } from "./MenusIndex";

export function MenusPage() {
const [menus, setMenus] = useState([]);

const handleIndex = () => {
  axios.get("/menus.json").then((response) => {
    setMenus(response.data);
  });
};

useEffect(() => {
  handleIndex();
}, []);

  return (
    <main>
      <MenusIndex menus={menus}/>
    </main>
  )
}