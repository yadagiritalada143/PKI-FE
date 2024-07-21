import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Logout Successful");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          PKI Generator
        </a>
        <div className=" justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="  nav-link mx-4">
                Hello, {localStorage.getItem("firstName")}{" "}
                {localStorage.getItem("lastName")}
              </p>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-danger" onClick={logout}>
                Logout <FaSignOutAlt />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
