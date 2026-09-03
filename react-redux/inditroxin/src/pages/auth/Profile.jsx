import { useEffect, useState } from "react";
import { Card, Container, Form, Button, Spinner } from "react-bootstrap";
import { getUserByID, updateUser } from "../../api/Services";
import { toast,ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      toast.error("Please login first!");
      navigate("/login");
      return;
    }

    getUserByID(userId)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load profile!");
        setLoading(false);
      });
  }, [navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

 const handleUpdate = async () => {
  try {
    const res = await updateUser(user.id, user);
    setUser({ ...user });

    toast.success("Profile updated successfully!");
    setEditMode(false);
  } catch (error) {
    toast.error("Failed to update profile!");
  }
};


  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return <h4 className="text-center text-danger">No profile found!</h4>;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "28rem" }} className="p-3 shadow">
        <h3 className="mb-3 text-primary">👤 My Profile</h3>

        {editMode ? (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-flex gap-2">
              <Button variant="success" onClick={handleUpdate}>
                Save Changes
              </Button>
              <Button variant="secondary" onClick={() => setEditMode(false)}>
                Cancel
              </Button>
            </div>
          </Form>
        ) : (
          <>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>

            <div className="d-flex gap-2">
              <Button onClick={() => setEditMode(true)} variant="primary">
                Edit Profile
              </Button>
              {/* <Button
                variant="danger"
                onClick={() => {
                  localStorage.clear();
                  toast.info("Logged out!");
                  navigate("/login");
                }}
              >
                Logout
              </Button> */}
            </div>
          </>
        )}
      </Card>
      <ToastContainer/>
    </Container>
  );
};

export default Profile;
