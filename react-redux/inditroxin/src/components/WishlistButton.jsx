import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, RemoveItemFromWishlist } from "../store/slice/WishlistSlice";
import { toast } from "react-toastify";
import { Check, Trash } from "lucide-react";

const WishlistButton = ({ product, removeMode = false }) => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const found = wishlistItems.some((item) => item.productID === product.id);

  const handleAdd = () => {
    if (found) {
      toast.error(product.title + " already in wishlist", { position: "bottom-right" });
    } else {
      dispatch(addItemToWishlist(product));
      toast.success(product.title + " added to wishlist", { position: "bottom-right" });
    }
  };

  const handleRemove = () => {
    dispatch(RemoveItemFromWishlist(product.productID || product.id));
    toast.info(product.title + " removed from wishlist", { position: "bottom-right" });
  };

  return (
    <>
      {removeMode ? (
        <Button
          size="sm"
          variant="outline-danger"
          onClick={handleRemove}
        >
          <Trash size={24}/>
        </Button>
      ) : (
        <Button
          size="sm"
          variant="outline-success"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAdd();
          }}
        >
          {found && <Check size={15} />}
          Add To Wishlist
        </Button>
      )}
    </>
  );
};

export default WishlistButton;
