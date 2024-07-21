import React from "react";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { getUserDetails, updateUserDetails } from "./utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { MdHeight } from "react-icons/md";

const Profile = () => {
  const [formData, setFormData] = React.useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const update = async (e) => {
    e.preventDefault();
    try {
      await updateUserDetails(formData);
      setFormData((prev) => {
        return { ...prev, password: "" };
      });
      toast.success("Updated Successfully");
    } catch (error) {
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
      toast.error(error.response.data.message);
    }
  };

  React.useEffect(() => {
    getUserDetails().then((response) => {
      const { firstName, lastName, email, userName, mobileNumber } =
        response.data.user;
      setFormData({ firstName, lastName, email, userName, mobileNumber });
    });
  }, []);

  const inputStyle = {
    width: "300px",
    height: "50px",
    fontSize: "18px",
  };

  return (
    <Form className="w-100 d-flex flex-row align-items-center justify-content-evenly">
      <div>
        <h2>Profile</h2>
        <Form.Control
          type="text"
          className="mt-2"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={inputStyle}
        />
        <Form.Control
          type="text"
          name="lastName"
          className="mt-2"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          style={inputStyle}
        />
        <Form.Control
          type="text"
          name="userName"
          className="mt-2"
          value={formData.userName}
          onChange={handleChange}
          placeholder="User Name"
          style={inputStyle}
        />
        <Form.Control
          type="text"
          className="mt-2"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          style={inputStyle}
        />
        <Form.Control
          type="text"
          name="email"
          className="mt-2"
          value={formData.email}
          disabled
          style={{ ...inputStyle, cursor: "no-drop" }}
        />
      </div>
      <div className="d-flex flex-column">
        <Form.Control
          type="password"
          name="password"
          className="mt-2"
          onChange={handleChange}
          placeholder="Password"
          value={formData.password}
          style={inputStyle}
        />
        <button onClick={update} className="mt-4 btn btn-outline-primary">
          Update
        </button>
      </div>
    </Form>
  );
};

export default Profile;
