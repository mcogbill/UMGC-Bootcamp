import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from "reactstrap";

function FoodMenu({ snacks }) {
  return (
    <section className="col-md-5">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Row>
            <Col>
              <ListGroup>
                {snacks.map(snack => (
                  <Link to={`/snacks/${snack.id}`} key={snack.id}>
                    <ListGroupItem>{snack.name}</ListGroupItem>
                  </Link>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
