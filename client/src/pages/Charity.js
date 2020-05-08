import { Col, Container, Row } from '../components/Grid';
import { List, ListItem } from '../components/List';
import React, { useEffect, useState } from 'react';
import API from '../utils/API';

function Charity() {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    loadCharities();
  }, []);

  function loadCharities() {
    API.getCharity()
      .then(res => {
        setCharities(res.data)
      })
      .catch(err => console.error(err));
  }

  function deleteCharity(id) {
    API.deleteCharity(id)
      .then(() => loadCharities())
      .catch(err => console.error(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="sm-12">
          <h2 className="text-center">Favorite Charities/Organizations</h2>
          {charities.length ?
            <List>
              {charities.map(charity =>
                <ListItem
                  key={charity._id}
                  id={charity._id}
                  title={charity.title}
                  cause={charity.cause}
                  description={charity.description}
                  rating={charity.rating}
                  link={charity.link}
                  onClick={deleteCharity}
                  buttonType={`delete`}
                />
              )}
            </List>
            :
            <h3>No saved books</h3>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default Charity;
