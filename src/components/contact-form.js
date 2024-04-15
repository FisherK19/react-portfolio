import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'email' && value && !validateEmail(value)) {
            setError('Your email is invalid.');
        } else if (!value) {
            setError(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
        } else {
            setError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (error) {
            setMessage("Please correct the errors before submitting.");
            return;
        }
        setMessage("Sending...");
        emailjs.sendForm('gmail', 'template_7pi3req', '#contactForm', 'user_2ClFT2CBVbPN3tPCiXsd0')
            .then((response) => {
                console.log(response.text);
                setMessage("Message sent!");
            }, (error) => {
                console.log(error.text);
                setMessage("Your message couldn't be sent. Please email directly.");
            });
    };

    return (
        <Form onSubmit={handleSubmit} id="contactForm">
            <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    required
                    name="name"
                    placeholder="Jane Doe"
                    onBlur={handleInput}
                    isInvalid={!!error && formData.name === ''}
                />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                    required
                    name="email"
                    type="email"
                    placeholder="jdoe@gmail.com"
                    onBlur={handleInput}
                    isInvalid={!!error && formData.email === ''}
                />
            </Form.Group>

            <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    required
                    name="subject"
                    placeholder="Subject"
                    onBlur={handleInput}
                />
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    required
                    name="message"
                    as="textarea"
                    rows="5"
                    placeholder="Message"
                    onBlur={handleInput}
                />
            </Form.Group>

            {message && <p className="form-message">{message}</p>}

            <Button type="submit" className='btn'>Submit</Button>
        </Form>
    );
}

export default ContactForm;
