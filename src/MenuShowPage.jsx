import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function MenuShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: "", foods: "" });

  useEffect(() => {
    axios.get(`/menus/${id}`).then((response) => {
      setMenu(response.data);
      setFormData({
        title: response.data.title || "",
        foods: response.data.foods || "",
      });
    });
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleUpdate(event) {
    event.preventDefault();
    axios
      .put(`/menus/${id}`, formData)
      .then((response) => {
        setMenu(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating menu:", error);
      });
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this menu?")) {
      axios
        .delete(`/menus/${id}`)
        .then(() => {
          navigate("/menus");
        })
        .catch((error) => {
          console.error("Error deleting menu:", error);
        });
    }
  }

  if (!menu) {
    return <p>Loading menu...</p>;
  }

  return (
    <main>
      {!isEditing ? (
        <>
          <h1>{menu.title}</h1>
          <p>
            <strong>Foods:</strong> {menu.foods}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <Link to="/menus">Back to Menus</Link>
        </>
      ) : (
        <form onSubmit={handleUpdate}>
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Foods:
              <textarea
                name="foods"
                value={formData.foods}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      )}
    </main>
  );
}
