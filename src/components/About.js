import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap'; // Import required Bootstrap components

const About = () => {
    return (
        <Container className="mt-5">
            <h1>About PSIT Club</h1>
            <p>The PSIT Club is dedicated to fostering a community of students interested in technology, coding, and innovation. We organize workshops, hackathons, and social events to promote learning and collaboration.</p>

            {/* Image section */}
            <Row className="mt-4">
                <Col md={6}>
                    <Image src="https://images.stockcake.com/public/f/1/5/f1576b26-40a7-45d9-8948-2bc858b88279_large/coding-workshop-participants-stockcake.jpg" alt="Workshop" fluid />
                </Col>
                <Col md={6}>
                    <Image src="https://andreadams.com.br/wp-content/uploads/2023/12/Demystifying-JavaScript-A-Beginners-Guide.jpg" alt="Hackathon" fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
