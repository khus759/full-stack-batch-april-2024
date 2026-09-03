import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Home Page 🏠</h1>
      <p>You are successfully logged in!</p>

      <Link to="/login">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default Home;
