import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "./validationSchema";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgotPasswordSchema) });

  const onSubmit = (data) => {
    console.log("Password Reset Data:", data);
    alert(" Password Updated Successfully!");
    navigate("/login");
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
          {/* Left Section */}
          <Col
            md={5}
            className="bg-warning d-flex flex-column justify-content-center align-items-center text-dark rounded-start-4 p-4"
          >
            <h2 className="fw-bold mb-3">Reset Your Password</h2>
            <p className="text-center">
              Enter your registered email and create a new password to regain access.
            </p>
            <Button
              variant="dark"
              className="mt-3 fw-semibold"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </Button>
          </Col>

          {/* Right Section */}
          <Col md={7} className="p-4">
            <h3 className="text-center mb-4 text-warning fw-bold">
              Set New Password
            </h3>

            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <Form.Group className="mb-4">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              {/* New Password */}
              <Form.Group className="mb-4">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  {...register("newPassword")}
                  isInvalid={!!errors.newPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.newPassword?.message}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter new password"
                  {...register("confirmPassword")}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                type="submit"
                variant="warning"
                className="w-100 fw-semibold mb-3"
              >
                Update Password
              </Button>

              <div className="text-center">
                <Link to="/login" className="text-warning fw-semibold">
                  Back to Login
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ForgotPassword;
