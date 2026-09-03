import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import { PersonAdd, Eye, EyeSlash } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../../api/Services";
import { toast, ToastContainer } from "react-toastify";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .matches(/^[A-Za-z]+$/, "Username must only contain letters (no numbers)"),

  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Enter a valid email address"
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password cannot exceed 10 characters")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain a special character")
    .matches(/\d/, "Password must contain at least one digit")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .test("noSpaces", "Password cannot contain spaces", (value) =>
      value ? !value.includes(" ") : true
    ),

  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const registerNewUser = async (data) => {
  try {
    const response = await registerUser(data);
    toast.success("Registration Completed Successfully!");
        setTimeout(() => navigate("/login"), 2000);
  } catch (error) {
    toast.error("Registration failed. Please try again.");
  }
};


  const handleOnSubmit = (data) => {
    const newUser = {
      username: data.username,
      password: data.password,
      email: data.email,
    };

    console.log("Submitting new user:", newUser);

    registerNewUser(newUser);
  };

  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      <Card style={{ width: "25rem" }}>
        <CardBody>
          <h4 className="mb-3">
            <PersonAdd className="text-primary me-2" size={28} />
            Sign Up
          </h4>
          <div className="text-muted mb-3">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>

          <Form onSubmit={handleSubmit(handleOnSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" {...register("username")} />
              <div className="text-danger small">{errors.username?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" {...register("email")} />
              <div className="text-danger small">{errors.email?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password")}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "70%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </span>
              <div className="text-danger small">{errors.password?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirmPassword")}
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "70%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showConfirm ? <EyeSlash /> : <Eye />}
              </span>
              <div className="text-danger small">{errors.confirmPassword?.message}</div>
            </Form.Group>

            <Button type="submit" className="w-100">Register</Button>
          </Form>
          <ToastContainer position="top-right" autoClose={2000} />
        </CardBody>
      </Card>
    </Container>
  );
};

export default Register;
