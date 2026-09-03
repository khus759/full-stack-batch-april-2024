import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactPagination from "../components/ReactPagination"; 
import { ToastContainer } from "react-toastify";
import { getProductsByCategory } from "../api/Services"; 

const Category = () => {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [itemsPerPage] = useState(3);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    getProductsByCategory(params.slug).then((data) => {
      setItems(data.products || []);
    });
  }, [params.slug]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <h1 className="mb-4">{params.slug}</h1>

      <ReactPagination pageCount={pageCount} handlePageClick={handlePageClick} />

      <Row>
        {currentItems.map((product) => (
          <Col md={4} key={product.id} className="p-2">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      <ReactPagination pageCount={pageCount} handlePageClick={handlePageClick} />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Container>
  );
};

export default Category;
