export function MenusIndex({ menus }) {
  return (
    <div>
      <h1>Your Menus:</h1>

      {menus.map((menu) => (
        <div key={menu.id}>
          <h2>{menu.title}</h2>
          <p>{menu.foods}</p>
        </div>
      ))}
    </div>
  )
}