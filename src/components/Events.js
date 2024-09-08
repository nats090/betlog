import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Events = () => {
    return (
        <Container className="mt-5">
            <h1>Upcoming Events</h1>
            <ListGroup>
                <ListGroup.Item>
                    <Link to="/events/tech-hackathon">
                        <strong>Tech Hackathon:</strong> October 15, 2024 - A full-day event to develop innovative solutions to real-world problems.
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/events/workshop-ai">
                        <strong>Workshop on AI:</strong> November 10, 2024 - A hands-on workshop covering the basics of artificial intelligence.
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Events;
