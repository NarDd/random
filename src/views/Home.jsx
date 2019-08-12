import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { UserCard } from "components/UserCard/UserCard.jsx";
import BlogPost from "components/BlogPost/BlogPost.jsx";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/spacebanana.png";
import profileBg from "assets/img/sg-bg-cropped.jpg";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={9}>
                <Card title="Posts"
                content={
                    <BlogPost/>
                }>
                </Card>
            </Col>
            <Col md={3}>
            <UserCard
                bgImage={profileBg}
                avatar={avatar}
                name="Bernard"
                userName="NarDd"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                    <br />
                    <br />
                    <Button block>
                        Contact
                    </Button>
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-github" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
