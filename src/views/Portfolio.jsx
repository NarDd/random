import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import PortfolioCard from "components/PortfolioCard/PortfolioCard.jsx";

class Portfolio extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
                <PortfolioCard />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
