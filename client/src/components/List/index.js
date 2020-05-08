import "./style.css";
import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "../Grid";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";
import StoreLinkBtn from "../StoreLinkBtn";

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
List.propTypes = {
  children: PropTypes.node
};

export function ListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Col size="12">
          <Row>
            <Col size="sm-12 md-12 lg-9">
              <h4>{props.title}</h4>
              <img alt={props.rating} src={props.rating}></img>
              <h4>Cause: {props.cause}</h4>
              <StoreLinkBtn link={props.link} />
              {props.buttonType === `save` ? (
                <SaveBtn
                  id={props.id}
                  title={props.title}
                  cause={props.cause}
                  description={props.description}
                  rating={props.rating}
                  link={props.link}
                  onClick={props.onClick}
                />
              ) : (
                <DeleteBtn
                  id={props.id}
                  title={props.title}
                  cause={props.cause}
                  description={props.description}
                  rating={props.rating}
                  link={props.link}
                  onClick={props.onClick}
                />
              )}
            </Col>
          </Row>

          <Row>
            <Col size="12">
              <h4 className="my-2">Tagline: </h4>
              <p>{props.description}</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </li>
  );
}
