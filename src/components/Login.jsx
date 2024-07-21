import React, { useState } from "react";
import Img from "../assets/login1.jpg";
import { Form } from "react-bootstrap";
import { loginUser } from "./utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import Dashboard from "./Dashboard";
import { IoMdLock } from "react-icons/io";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const login = async () => {
    try {
      const data = await loginUser(formData);
      localStorage.setItem("jwt-token", data.data.token);
      localStorage.setItem(
        "isAdmin",
        data.data.role == "ADMIN" ? "true" : "false"
      );
      localStorage.setItem("userId", data.data.id);
      localStorage.setItem("firstName", data.data.firstname);
      localStorage.setItem("lastName", data.data.lastname);
      localStorage.setItem("email", formData.email);

      navigate("/home");

      toast.success("Login Succesful");
    } catch (error) {
      toast.error("Authentication Failed");
    }
  };

  return (
    <div className="parent">
      <div className="formContainer">
        <h1 className="px-5 mt-2 text-dark">Sign In</h1>
        <Form>
          <Form.Group
            className="mt-3  d-flex justify-content-center align-items-center  gap-2 p-1"
            controlId="formBasicEmail"
          >
            <MdEmail className="mail" />
            <Form.Control
              className=""
              type="email"
              placeholder="name@example.com"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </Form.Group>
          <Form.Group
            className="mt-3 d-flex justify-content-center align-items-center gap-2 p-1"
            controlId="formBasicPassword"
          >
            {/* <IoMdLock className="lock"/> */}
            <FaLock className="lock" />
            <Form.Control
              className=""
              type="password"
              placeholder="*******"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </Form.Group>

          <button
            className="rounded btn btn-dark w-100 mt-5 my-3 d-block mx-auto"
            type="button"
            onClick={login}
          >
            Login
          </button>
          <p className="mx-2 my-4 text-center ">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
