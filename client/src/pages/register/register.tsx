import "./register.scss";
import apiRequest from "../../libs/apiRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      console.log(res.data);
      navigate("/login");
    } catch (error) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="form-container">
        <h1>Create an account</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="img-container"></div>
    </div>
  );
};

export default Register;
