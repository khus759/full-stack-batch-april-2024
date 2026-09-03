import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Spinner, Badge } from "react-bootstrap";
import { getProductById } from "../api/Services";
import WishlistButton from "../components/WishlistButton";
import { ToastContainer } from "react-toastify";
import AddToCartButton from "../components/AddToCartButton";


const ProductDetails = () => {
  const params = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(params.id)
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.id]);

  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="success" />
        <p className="mt-2 text-muted">Loading product details...</p>
      </div>
    );

  if (!item)
    return <h3 className="text-center text-danger">Product not found!</h3>;

  return (
    <Container className="py-4">
      <Row className="align-items-center">
        {/* Image */}
        <Col md={5} className="mb-3">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={item.thumbnail}
              alt={item.title}
              className="p-3"
            />
          </Card>
        </Col>

        {/* Details */}
        <Col md={7}>
          <h2 className="fw-bold">{item.title}</h2>
          <p className="text-muted mb-1">{item.brand}</p>

          <h3 className="text-success fw-bold mb-2">
            ${item.price}{" "}
            <small className="text-muted text-decoration-line-through">
              ${Math.round(item.price * 1.2)}
            </small>{" "}
            <Badge bg="success">20% OFF</Badge>
          </h3>

          <p>
            ⭐ <strong>{item.rating}</strong> / 5
          </p>
          <p>
            <strong>Category:</strong>{" "}
            <Badge bg="info" text="dark">
              {item.category}
            </Badge>
          </p>
          <p className="text-secondary">{item.description}</p>

          <div className="mt-3 d-flex gap-3">
            <AddToCartButton product={item} />
            <WishlistButton product={item} />
          </div>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
};

export default ProductDetails;
