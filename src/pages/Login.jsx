import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // ✅ Define navigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    login({ name }); 
    navigate("/profile"); // ✅ Navigate to profile after login
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
