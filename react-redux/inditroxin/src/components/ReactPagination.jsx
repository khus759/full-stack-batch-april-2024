import ReactPaginate from "react-paginate";
import { Row, Col } from "react-bootstrap";

const ReactPagination = ({ pageCount, handlePageClick }) => {
  return (
    <Row>
      <Col md={12} className="d-flex justify-content-end mt-3">
        <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </Col>
    </Row>
  );
};

export default ReactPagination;
