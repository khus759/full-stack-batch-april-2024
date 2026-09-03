import React, { useState, useEffect } from "react";
import { Badge, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import CategoryNavbar from "../components/CategoryNavbar";
import { Basket } from "react-bootstrap-icons";
import { Heart, Moon, Sun } from "lucide-react";

const RootLayout = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart); 

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Navbar expand="lg" className="py-3">
            <Container>
              <Navbar.Brand as={NavLink} to="/">
                <h1 className="fw-bold">
                  INDI<span className="text-primary">STORES</span>
                </h1>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <div className="d-flex gap-4 ms-auto align-items-center">

                  <Badge
                    onClick={() => setDarkMode(!darkMode)}
                    className="rounded-circle p-2"
                    bg={darkMode ? "light" : "dark"}
                    role="button"
                    style={{ cursor: "pointer" }}
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </Badge>

                  {/* <NavLink
                    to="/compare"
                    className="d-flex align-items-center gap-2 text-decoration-none text-dark position-relative"
                  >
                    <Repeat size={20} className={darkMode ? "text-primary" : "text-dark"} />
                    <div className="d-flex flex-column lh-1 ">
                      <small className="text-muted">Compare</small>
                      <span className="fw-semibold text-muted">Products</span>
                    </div>
                    <Badge
                      bg="primary"
                      pill
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      1
                    </Badge>
                  </NavLink> */}

                  <NavLink
                    to="/wishlist"
                    className="d-flex align-items-center gap-2 text-decoration-none text-dark position-relative"
                  >
                    <Heart size={20} className={darkMode ? "text-primary" : "text-dark"} />
                    <div className="d-flex flex-column lh-1 pe-2">
                      <small className="text-muted">Wish</small>
                      <span className="fw-semibold text-muted">List</span>
                    </div>
                    <Badge
                      bg="primary"
                      pill
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      {wishlistItems.length}
                    </Badge>
                  </NavLink>

                  {/*Cart */}
                  <NavLink
                    to="/cart"
                    className="d-flex align-items-center gap-2 text-decoration-none text-dark position-relative"
                  >
                    <Basket size={20} className={darkMode ? "text-primary" : "text-dark"} />
                    <div className="d-flex flex-column lh-1 pe-2">
                      <small className="text-muted">Shopping</small>
                      <span className="fw-semibold text-muted">Basket</span>
                    </div>
                    <Badge
                      bg="primary"
                      pill
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      {cartItems.length} 
                    </Badge>
                  </NavLink>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <CategoryNavbar />
      <Outlet />
    </Container>
  );
};

export default RootLayout;
