import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } from "../store/slice/CartSlice";

const AddToCartButton = ({ product }) => {
    const dispatch = useDispatch();

    const cartItem = useSelector((state) =>
        state.cart.cartItems.find((item) => item.productID === product.id)
    );

    const quantity = cartItem ? cartItem.quantity : 0;

    const handleDecrease = () => {
        if (quantity > 1) {
            dispatch(decreaseQuantity(cartItem.id));
            toast.info(`Decreased ${product.title} quantity`, { position: "bottom-right" });
        } else if (quantity === 1) {
            dispatch(removeFromCart(cartItem.id));
            toast.error(`${product.title} removed from cart`, { position: "bottom-right" });
        }
    };


    const handleIncrease = () => {
        if (quantity === 0) {
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart`, { position: "bottom-right" });
        } else {
            dispatch(increaseQuantity(cartItem.id));
            toast.success(`Increased ${product.title} quantity`, { position: "bottom-right" });
        }
    };


    return (
        <div className="d-inline-block mt-1">
            {quantity === 0 ? (
                <Button
                    variant="outline-primary"
                    size="md"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleIncrease();
                    }}
                >
                    Add to Cart
                </Button>
            ) : (
                <div className="d-flex align-items-center rounded-pill px-2 py-1 border">
                    <Button
                        variant=""
                        className="fw-normal border-0"
                        style={{ fontSize: "14px" }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDecrease();
                        }}
                    >
                        −
                    </Button>
                    <span className="mx-2 fw-bold">{quantity}</span>
                    <Button
                        variant="light"
                        className="fw-normal border-0"
                        style={{ fontSize: "14px" }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleIncrease();
                        }}
                    >
                        +
                    </Button>
                </div>
            )}
        </div>
    );
};

export default AddToCartButton;