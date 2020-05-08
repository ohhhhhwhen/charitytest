import { Col, Container, Row } from '../components/Grid';
import { FormBtn, Input } from '../components/Form';
import { List, ListItem } from '../components/List';
import React, { useState } from 'react';
import API from '../utils/API';
import axios from 'axios';

const URL = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=3c0fc420&app_key=0c12428e18e7fb50a1af2d2a834c2eaf&pageSize=25&search=';

function Charities() {
  const [charities, setCharities] = useState([]);
  const [formObject, setFormObject] = useState({
    title: ``,
    author: ``
  });

  function saveCharity(bookData) {
    API.saveCharity(bookData)
      .catch(err => console.error(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(`${URL}${formObject.title}`)
    axios.get(`${URL}${formObject.title}`)
      .then(res => {
        console.log(res.data.items);
        if (!res.data.items) {
          setCharities([])
        } else {
          setCharities(res.data.items)
        }
      });
  }

  return (
    <Container fluid>
      <Row>
        <Col size="lg-5">

            <h2 className="text-center">Search Book</h2>

          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Search For Topics Or Organiztions Here"
            />
            <FormBtn
              disabled={!(formObject.title)}
              onClick={handleFormSubmit}
            >
              Search
            </FormBtn>
          </form>
        </Col>
        <Col size="lg-7">
          <h2 className="text-center">Search Result</h2>
          {charities.length ?
            <List>
              {charities.map(charity =>
                <ListItem
                  key={charity.charityName}
                  id={charity.charityName}
                  title={charity.charityName}
                  cause={charities.cause.causeName}
                  description={charities.tagLine}
                  link={charities.websiteURL}
                  rating={charities.currentRating.ratingImage.large}
                  onClick={saveCharity}
                  buttonType={`save`}
                />
              )}
            </List>
            :
            <h4>No Results to Display</h4>
          }
        </Col>
      </Row>
    </Container >
  );
}

export default Charities;
