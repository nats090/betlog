import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'; // Bootstrap components for layout
import './Contact.css'; // Your custom styles

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Log form data
        console.log('Form Data:', formData);

        // Use emailjs to send email
        emailjs.send('service_4piqhav', 'template_8w996kr', formData, 'bxREh_HlNUfkOl9po')
        .then((result) => {
            alert('Message successfully sent!');
        }, (error) => {
            console.error('Error:', error); // Log error details
            alert('Failed to send message, please try again.');
        });

        // Clear form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <Container className="contact-form-container mt-5">
            <Row>
                {/* Contact Info Section */}
                <Col md={6}>
                    <h2>Contact Information</h2>
                    <ul>
                        <li><strong>Email:</strong> frankwithay731@gmail.com</li>
                        <li><strong>Phone:</strong> +63 9451664763</li>
                        <li><strong>Location:</strong> 047 tamesis street, Kidapawan City</li>
                        <li><strong>Working Hours:</strong> Mon-Fri, 9AM-5PM</li>
                    </ul>
                </Col>

                {/* Contact Form Section */}
                <Col md={6}>
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
