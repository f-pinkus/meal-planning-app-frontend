import axios from "axios";
import { useEffect, useState } from "react";
import { MenusIndex } from "./MenusIndex";
import { MenusNew } from "./MenusNew";

export function MenusPage() {
  const [menus, setMenus] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleIndex = () => {
    axios.get("/menus.json").then((response) => {
      setMenus(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    axios.post("/menus.json", params).then((response) => {
      setMenus([...menus, response.data]);
      successCallback();
    });
  };

  const filteredMenus = menus.filter((menu) =>
    menu.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    handleIndex();
  }, []);

  return (
    <main>
      
      <div>
        <MenusIndex menus={filteredMenus} />

        <input
          type="text"
          placeholder="Search menus..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <MenusNew onCreate={handleCreate} />
    </main>
  );
}
