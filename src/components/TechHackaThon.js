import React from 'react';
import { Container } from 'react-bootstrap';

const TechHackathon = () => {
    return (
        <Container className="mt-5">
            <h1>Tech Hackathon</h1>
            <img src="/path/to/tech-hackathon.jpg" alt="Tech Hackathon" className="img-fluid" />
            <p>
                Join us on October 15, 2024, for a full-day event to develop innovative solutions
                to real-world problems. This hackathon will challenge teams to come up with 
                creative solutions using the latest technology.
            </p>
        </Container>
    );
};

export default TechHackathon;
