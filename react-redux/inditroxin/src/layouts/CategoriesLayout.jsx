import React, { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { getCategories } from "../api/Services"; 

const CategoriesLayout = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container className="p-2">
      <Breadcrumbs />
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <h5>List Of Categories</h5>
              <hr />
              <ListGroup>
                {categories.map((category, index) => {
                  const slug =
                    typeof category === "string" ? category : category.slug;
                  const name =
                    typeof category === "string" ? category : category.name;

                  return (
                    <ListGroup.Item key={index}>
                      <NavLink
                        to={`/products/category/${slug}`}
                        className="text-decoration-none"
                      >
                        {name}
                      </NavLink>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          <Outlet key={location.pathname} />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesLayout;
