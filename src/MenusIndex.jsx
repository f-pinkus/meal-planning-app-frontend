import { Link } from "react-router-dom";

export function MenusIndex({ menus }) {
  return (
    <div>
      {menus.map((menu) => (
        <div key={menu.id}>
          <Link to={`/menus/${menu.id}`}>{menu.title}</Link>
        </div>
      ))}
    </div>
  );
}
