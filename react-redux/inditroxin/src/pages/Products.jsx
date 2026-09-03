import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ProductsData } from "../data/ProductsData"; 
import ProductCard from "../components/ProductCard";
import ReactPagination from "../components/ReactPagination";
import { getCategories } from "../api/Services"; 

const Products = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const [categories, setCategories] = useState([]);
  const [itemsPerPage] = useState(6);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = ProductsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(ProductsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ProductsData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <Container className="m-1">
      <Row>
        <Col md={12}>
          <ReactPagination pageCount={pageCount} handlePageClick={handlePageClick} />

          <Row>
            {currentItems.map((product) => (
              <Col md={4} key={product.id} className="p-1">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>

          <ReactPagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Products;
