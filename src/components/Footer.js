import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // Custom CSS

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-3">
            <Container>
                <p className="text-center mb-0">&copy; 2024 PSIT Club. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
