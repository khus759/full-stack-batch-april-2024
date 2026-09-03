import { useForm } from "react-hook-form";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };

      const response = await axios.post("http://127.0.0.1:8000/auth/login", payload);

      if (response.status === 200) {
        console.log("Login success:", response.data);
        alert(" Login Successful!");
        navigate("/home");
      }
    } catch (error) {
      console.error("Login Error:", error);
      if (error.response?.status === 401) {
        alert(" Invalid email or password!");
      } else {
        alert(" Something went wrong. Please try again.");
      }
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <Card
        className="shadow-lg border-0 rounded-4"
        style={{ width: "80%", maxWidth: "900px", padding: "30px" }}
      >
        <Row>
          {/* Left Side */}
          <Col
            md={5}
            className="bg-success text-white d-flex flex-column justify-content-center align-items-center rounded-start-4 p-4"
          >
            <h2 className="fw-bold mb-3">Hello, Friend!</h2>
            <p className="text-center">
              Enter your personal details and start your journey with us
            </p>
            <Button
              variant="light"
              className="mt-3 fw-semibold"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
          </Col>

          {/* Right Side */}
          <Col md={7} className="p-4">
            <h3 className="text-center mb-4 text-success fw-bold">Sign In</h3>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Link to="/forgot-password" className="text-success fw-semibold">
                  Forgot Password?
                </Link>
                <Link to="/register" className="text-success fw-semibold">
                  Don't have an account? Sign Up
                </Link>
              </div>

              <Button variant="success" type="submit" className="w-100 fw-semibold">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default SignIn;
