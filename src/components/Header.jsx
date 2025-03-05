import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-xl font-bold">Book Review Platform</h1>
      <nav>
        <Link className="mr-4" to="/">Home</Link>
        
        {user ? (
          <>
            <Link className="mr-4" to="/profile">Profile</Link>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link className="bg-green-500 px-3 py-1 rounded" to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
