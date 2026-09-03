// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { signUpSchema } from "./validationSchema";
// import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../services/api"; // axios instance

// function SignUp() {
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(signUpSchema),
//   });

//   // const onSubmit = async (data) => {
//   //   try {
//   //     const payload = {
//   //       name: data.name,
//   //       username: data.username,
//   //       email: data.email,
//   //       phone: data.phone,
//   //       password: data.password,
//   //       dob: data.dob,
//   //       gender: data.gender,
//   //       address: data.address,
//   //       country: data.country,
//   //     };

//   //     const response = await API.post("/auth/signup", payload);

//   //     if (response.status === 200 || response.status === 201) {
//   //       alert("✅ Account Created Successfully!");
//   //       navigate("/login");
//   //     }
//   //   } catch (error) {
//   //     console.error("Signup Error:", error);
//   //     if (error.response?.status === 400) {
//   //       alert("❌ Email already registered!");
//   //     } else {
//   //       alert("⚠️ Something went wrong. Please try again.");
//   //     }
//   //   }
//   // };

//   //   const onSubmit = async (data) => {
//   //   try {
//   //     // Remove empty optional fields
//   //     const payload = Object.fromEntries(
//   //       Object.entries(data).filter(([_, v]) => v !== "")
//   //     );

//   //     console.log("Payload being sent:", payload);

//   //     const response = await API.post("/auth/signup", payload);

//   //     if (response.status === 200 || response.status === 201) {
//   //       alert("✅ Account Created Successfully!");
//   //       navigate("/login");
//   //     }
//   //   } catch (error) {
//   //     console.error("Signup Error Response:", error.response?.data);
//   //     if (error.response?.status === 400) {
//   //       alert("❌ Email or username already exists!");
//   //     } else if (error.response?.status === 422) {
//   //       alert("⚠️ Validation error. Check your input fields.");
//   //     } else {
//   //       alert("⚠️ Something went wrong. Please try again.");
//   //     }
//   //   }
//   // };


//   const onSubmit = async (e) => {
//     e.preventDefault();

//     // Debug: see the raw payload
//     console.log("Payload before format:", formData);

//     const payload = {
//       ...formData,
//       dob: formData.dob ? formData.dob.toISOString().split("T")[0] : null, // ✔️ Proper date format
//     };

//     // Debug: see the formatted payload being sent
//     console.log("Formatted payload:", payload);

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/auth/signup", payload);
//       console.log("Signup Success:", response.data);
//     } catch (error) {
//       console.log("Signup Error Response:", error.response?.data || error);
//     }
//   };


//   return (
//     <Container
//       fluid
//       className="d-flex justify-content-center align-items-center vh-100 bg-light"
//     >
//       <Card
//         className="shadow-lg border-0 rounded-4"
//         style={{ width: "80%", maxWidth: "900px", padding: "0" }}
//       >
//         <Row>
//           {/* Left Panel */}
//           <Col
//             md={5}
//             className="bg-primary text-white d-flex flex-column justify-content-center align-items-center rounded-start-4 p-4"
//           >
//             <h2 className="fw-bold mb-3">Welcome Back!</h2>
//             <p className="text-center">
//               To keep connected with us, please login with your personal info
//             </p>
//             <Button
//               variant="light"
//               className="mt-3 fw-semibold"
//               onClick={() => navigate("/login")}
//             >
//               Sign In
//             </Button>
//           </Col>

//           {/* Right Panel */}
//           <Col md={7} className="p-4">
//             <h3 className="text-center mb-4 text-primary fw-bold">
//               Create Your Account
//             </h3>

//             <Form onSubmit={handleSubmit(onSubmit)}>
//               <Row>
//                 {/* Name */}
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter full name"
//                       {...register("name")}
//                       isInvalid={!!errors.name}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.name?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>

//                 {/* Username */}
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter username"
//                       {...register("username")}
//                       isInvalid={!!errors.username}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.username?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* Email and Phone */}
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter email"
//                       {...register("email")}
//                       isInvalid={!!errors.email}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.email?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>

//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Phone Number</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter phone number"
//                       {...register("phone")}
//                       isInvalid={!!errors.phone}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.phone?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* Password */}
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Enter password"
//                       {...register("password")}
//                       isInvalid={!!errors.password}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.password?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>

//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Confirm Password</Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Re-enter password"
//                       {...register("confirmPassword")}
//                       isInvalid={!!errors.confirmPassword}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.confirmPassword?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* DOB and Gender */}
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Date of Birth</Form.Label>
//                     <Form.Control
//                       type="date"
//                       {...register("dob")}
//                       isInvalid={!!errors.dob}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.dob?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>

//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Gender</Form.Label>
//                     <Form.Select
//                       {...register("gender")}
//                       isInvalid={!!errors.gender}
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {errors.gender?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* Address and Country */}
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter address"
//                       {...register("address")}
//                       isInvalid={!!errors.address}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.address?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>

//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Country</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter country"
//                       {...register("country")}
//                       isInvalid={!!errors.country}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.country?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Button variant="primary" type="submit" className="w-100 fw-semibold">
//                 Create Account
//               </Button>
//             </Form>

//             <div className="text-center mt-3">
//               <Link to="/login" className="text-primary fw-semibold">
//                 Already have an account? Sign In
//               </Link>
//             </div>
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// }

// export default SignUp;




import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./validationSchema";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api"; // axios instance

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      dob: data.dob ? new Date(data.dob).toISOString().split("T")[0] : null, //  Format date (YYYY-MM-DD)
    };

    console.log("Formatted payload:", payload); // Debugging

    try {
      const response = await API.post("/auth/signup", payload);

      if (response.status === 200 || response.status === 201) {
        alert(" Account Created Successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup Error Response:", error.response?.data || error);
      if (error.response?.status === 400) {
        alert(" Email or username already exists!");
      } else if (error.response?.status === 422) {
        alert(" Validation error. Check your input fields.");
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
        style={{ width: "80%", maxWidth: "900px", padding: "0" }}
      >
        <Row>
          {/* Left Panel */}
          <Col
            md={5}
            className="bg-primary text-white d-flex flex-column justify-content-center align-items-center rounded-start-4 p-4"
          >
            <h2 className="fw-bold mb-3">Welcome Back!</h2>
            <p className="text-center">
              To keep connected with us, please login with your personal info
            </p>
            <Button
              variant="light"
              className="mt-3 fw-semibold"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </Col>

          {/* Right Panel */}
          <Col md={7} className="p-4">
            <h3 className="text-center mb-4 text-primary fw-bold">
              Create Your Account
            </h3>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                {/* Name */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      {...register("name")}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* Username */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      {...register("username")}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Email and Phone */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      {...register("email")}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      {...register("phone")}
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Password */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      {...register("password")}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter password"
                      {...register("confirmPassword")}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* DOB and Gender */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      {...register("dob")}
                      isInvalid={!!errors.dob}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.dob?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                      {...register("gender")}
                      isInvalid={!!errors.gender}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.gender?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              {/* Address and Country */}
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      {...register("address")}
                      isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter country"
                      {...register("country")}
                      isInvalid={!!errors.country}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.country?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="primary" type="submit" className="w-100 fw-semibold">
                Create Account
              </Button>
            </Form>

            <div className="text-center mt-3">
              <Link to="/login" className="text-primary fw-semibold">
                Already have an account? Sign In
              </Link>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default SignUp;
