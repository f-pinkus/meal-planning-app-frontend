import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function MenuShowPage() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    axios.get(`/menus/${id}`).then((response) => {
      setMenu(response.data);
    });
  }, [id]);

  if (!menu) {
    return <p>Loading menu...</p>;
  }

  return (
    <main>
      <h1>{menu.title}</h1>
      <p><strong>Foods:</strong> {menu.foods}</p>
    </main>
  );

}