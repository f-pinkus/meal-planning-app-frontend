import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/signup", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors || ["Something went wrong."]);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type={showPassword ? "text" : "password"} />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type={showPassword ? "text" : "password"} />
        </div>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{ marginLeft: "8px" }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}