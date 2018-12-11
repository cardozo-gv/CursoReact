import React, { Component } from 'react';
import './App.css';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Ecommerce</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={8}>
                <ProductsList/>
            </Col>
            <Col sm={4}>
              <ShoppingCart/>
            </Col>
          </Row>
        </Grid>


      </div>
    );
  }
}

export default App;
