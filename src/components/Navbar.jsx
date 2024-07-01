import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
    const navigate = useNavigate();

    const logout = async () => {
        localStorage.clear();
        navigate("/login");
        toast.success("Logout Successful");
    }

    return <>
        <div className="d-flex justify-content-between navbar">
            <h3>Vulnerability Scanner</h3>
            <button type="button" className="btn btn-danger" onClick={logout}> Logout <FaSignOutAlt /></button>
        </div>
    </>
}

export default Navbar;