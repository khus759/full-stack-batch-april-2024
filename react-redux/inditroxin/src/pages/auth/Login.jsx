import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { BoxArrowInRight, Eye, EyeSlash } from "react-bootstrap-icons";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authUser } from "../../api/Services";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
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
    .max(10, "Password cannot exceed 10 characters"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    try {
      console.log("🔹 Trying login with:", data);

      const response = await authUser(data);
      console.log("🔹 API Response:", response.data);

      if (
        response.data.length > 0 &&
        response.data[0].email === data.email &&
        response.data[0].password === data.password
      ) {
        toast.success("Login Successful!");
        localStorage.setItem("login", true);
        localStorage.setItem("username", response.data[0].username);
        localStorage.setItem("id", response.data[0].id);

        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error("Invalid Email or Password");
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="d-flex vh-70 justify-content-center align-items-center mt-5">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title className="mb-3">
            <h4>
              <BoxArrowInRight className="text-primary" size={35} /> Sign In
            </h4>
          </Card.Title>

          <div className="text-muted fs-6">
            Don’t have an account? <Link to="/register">Sign up</Link>
          </div>
          <hr />

          <Form onSubmit={handleSubmit(handleLogin)}>
            <Row>
              {/* Email */}
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    {...register("email")}
                  />
                  <div className="text-danger small">{errors.email?.message}</div>
                </Form.Group>
              </Col>

              {/* Password */}
              <Col md={12}>
                <Form.Group className="mb-3 position-relative">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "53%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </span>
                  <div className="text-danger small">{errors.password?.message}</div>
                </Form.Group>
              </Col>

              <Col md={12}>
                <Button type="submit" className="w-100">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer position="top-right" autoClose={2000} />
    </Container>
  );
};

export default Login;
