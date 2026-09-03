import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Container, Image } from "react-bootstrap";
import { clearWishlist, RemoveItemFromWishlist } from "../store/slice/WishlistSlice";
import { NavLink } from "react-router-dom";
import WishlistButton from "../components/WishlistButton";
import { Basket } from "react-bootstrap-icons";
import { addToCart } from "../store/slice/CartSlice";
import { toast } from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const handleMoveToCart = (product) => {

    const cartItem = {
      id: product.productID,
      productID: product.productID,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
    dispatch(RemoveItemFromWishlist(product.productID));
    toast.success(`${product.title} moved to Cart 🛒`);
  };

  return (
    <Container className="py-5">
      {wishlistItems.length === 0 ? (
        <h3 className="text-muted">Your wishlist is empty ❤️</h3>
      ) : (
        <>
          <h3 className="fw-bold mb-4">❤️ Your Wishlist</h3>

          <Table bordered hover responsive className="align-middle">
            <thead className="table-light">
              <tr>
                <th style={{ width: "15%" }}>Item</th>
                <th style={{ width: "45%" }}>Product Name</th>
                <th style={{ width: "15%" }}>Price</th>
                <th style={{ width: "15%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ width: "120px" }}>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fluid
                      rounded
                      style={{ maxHeight: "100px" }}
                    />
                  </td>
                  <td>
                    <span className="fw-semibold">{item.title}</span>
                  </td>
                  <td>
                    <span className="fw-bold text-success">${item.price}</span>
                  </td>
                  <td>
                    <div className="d-flex gap-5 justify-content-center">
                      {/* Remove from Wishlist */}
                      <WishlistButton product={item} removeMode />

                      {/* Move to Cart */}
                      <Button
                        size="sm"
                        variant="outline-info"
                        onClick={() => handleMoveToCart(item)}
                      >
                         <Basket size={24} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between mt-3">
            <Button
              as={NavLink}
              to="/products"
              variant="outline-dark"
              className="text-primary"
            >
              Continue Shopping
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => dispatch(clearWishlist())}
            >
              Clear Wishlist
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Wishlist;
