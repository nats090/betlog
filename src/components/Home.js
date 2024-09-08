import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'; // Custom CSS

const Home = () => {
    return (
        <Container fluid className="home-container">
            <Row className="justify-content-center align-items-center flex-fill">
                <Col className="text-center">
                    <h1 className="welcome-text">Welcome to Notre Dame Kidapawan College PSIT Club!</h1>
                    <p className="lead">Join us in promoting technology and innovation in the PSIT community.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
