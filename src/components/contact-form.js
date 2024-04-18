// Imports necessary React functionality, external libraries, utilities, and styles
import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Imports emailjs to handle email sending
import { validateEmail } from '../utils/helper';  // Utility to validate email format
import Form from 'react-bootstrap/Form';  // Bootstrap components for styling forms
import Button from 'react-bootstrap/Button';
import '../App.css';  // General application styles

// Defines the ContactForm functional component
function ContactForm() {
    // State management for form data and messaging
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    // Handles input field changes and validates the email
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });  // Updates the formData state with the new input values

        // Conditional logic to set error messages based on input validation
        if (name === 'email' && value && !validateEmail(value)) {
            setError('Your email is invalid.');
        } else if (!value) {
            setError(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
        } else {
            setError('');
        }
    };

    // Handles the form submission
    const handleSubmit = (event) => {
        event.preventDefault();  // Prevents the default form submit action
        if (error) {
            setMessage("Please correct the errors before submitting.");
            return;  // Stops the form submission if there is an error
        }
        setMessage("Sending...");  // Update message state to inform the user that the message is being sent
        emailjs.sendForm('gmail', 'template_7pi3req', '#contactForm', 'user_2ClFT2CBVbPN3tPCiXsd0')
            .then((response) => {
                console.log(response.text);  // Log success response
                setMessage("Message sent!");  // Update message on successful send
            }, (error) => {
                console.log(error.text);  // Log error if sending fails
                setMessage("Your message couldn't be sent. Please email directly.");  // Inform the user of failure to send message
            });
    };

    // Form rendering using React Bootstrap components
    return (
        <Form onSubmit={handleSubmit} id="contactForm">
            {/* Form group for "name" input */}
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

            {/* Form group for "email" input */}
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

            {/* Form group for "subject" input */}
            <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    required
                    name="subject"
                    placeholder="Subject"
                    onBlur={handleInput}
                />
            </Form.Group>

            {/* Form group for "message" textarea */}
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

            {/* Display message based on form submission outcome */}
            {message && <p className="form-message">{message}</p>}

            {/* Submit button */}
            <Button type="submit" className='btn'>Submit</Button>
        </Form>
    );
}

// Export the ContactForm component for use in other parts of the application
export default ContactForm;
