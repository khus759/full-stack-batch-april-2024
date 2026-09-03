import { useNavigate } from "react-router-dom";
import { Container, Button, Carousel } from "react-bootstrap";

// images import
import banner from "../assets/image/banner.jpg";
// import banner2 from "../assets/image/banner2.jpg";
// import banner3 from "../assets/image/banner3.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="p-0">
      {/* Hero Carousel */}
      <Carousel fade interval={2000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="text-start" style={{ left: "18%", right: "auto", bottom: "6%" }}>
            <h2 className="fw-bold">
              Welcome to <span className="text-primary">INDISTORES</span>
            </h2>
            <p>Discover latest trends at the best prices</p>
            <Button variant="primary" onClick={() => navigate("/products")}>
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Second slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="text-start" style={{ left: "18%", right: "auto", bottom: "6%" }}>
            <h2 className="fw-bold">Exclusive <span className="text-primary">Deals</span></h2>
            <p>Grab the hottest discounts and offers today</p>
            <Button variant="success" onClick={() => navigate("/products")}>
              Explore Deals
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Third slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="text-start" style={{ left: "18%", right: "auto", bottom: "6%" }}>
            <h2 className="fw-bold">New <span className="text-primary">Arrivals</span></h2>
            <p>Check out the latest collection of products</p>
            <Button variant="warning" onClick={() => navigate("/products")}>
              View Collection
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
