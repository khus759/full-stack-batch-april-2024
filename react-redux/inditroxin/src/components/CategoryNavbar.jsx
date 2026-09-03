import { useState, useEffect } from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CategoryNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("login");
    const storedUsername = localStorage.getItem("username");

    if (loginStatus) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-light border-bottom">
      <Container>
        <Nav className="me-auto gap-3">
          <Nav.Link href="/products" className="fw-semibold">
            All Products
          </Nav.Link>
        </Nav>

        {isLoggedIn ? (
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-user"
              className="d-flex align-items-center gap-2 fw-semibold"
            >
              <FaUser size={20} />
              {username}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
              <Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item>
              <Dropdown.Item href="/orders">My Orders</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout} className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Nav.Link href="/login" className="fw-semibold text-primary">
            <FaUser size={20} />
          </Nav.Link>
        )}
      </Container>
    </Navbar>
  );
};

export default CategoryNavbar;
 