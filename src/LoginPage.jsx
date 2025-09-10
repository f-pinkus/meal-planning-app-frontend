import axios from "axios";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export function LoginPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useOutletContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/login", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        setIsLoggedIn(true); 
        event.target.reset();
        navigate("/"); 
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type={showPassword ? "text" : "password"} />
        </div>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{ marginLeft: "8px" }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}