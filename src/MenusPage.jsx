import axios from "axios";
import { useEffect, useState } from "react";
import { MenusIndex } from "./MenusIndex";
import { MenusNew } from "./MenusNew";

export function MenusPage() {
const [menus, setMenus] = useState([]);

const handleIndex = () => {
  axios.get("/menus.json").then((response) => {
    setMenus(response.data);
  });
};

const handleCreate = (params, successCallback) => {
  axios.post("/menus.json", params).then((response) => {
    setMenus([...menus, response.data]);
    successCallback();
  })
}

useEffect(() => {
  handleIndex();
}, []);

  return (
    <main>
      <MenusNew onCreate={handleCreate}/>
      <MenusIndex menus={menus}/>
    </main>
  )
}