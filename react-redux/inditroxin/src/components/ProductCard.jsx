import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import WishlistButton from "./WishlistButton";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {
  return (
    <Card
      as={NavLink}
      to={`/products/${product.id}`}
      className="h-100 text-decoration-none text-dark"
    >
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <h5 className="text-primary">{product.title}</h5>
        <p className="text-muted">$ {product.price}</p>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
         <AddToCartButton product={product} />
        <WishlistButton product={product} />
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
