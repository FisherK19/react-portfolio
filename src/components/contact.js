import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/contact-form';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../App.css';

const ContactLink = ({ href, icon: Icon, text }) => (
    <p>
        <a href={href} target='_blank' rel="noopener noreferrer">
            <span className="pr-3"><Icon /></span>
            {text}
        </a>
    </p>
);

function Contact() {
    return (
        <div className='container'>
            <Jumbotron fluid className="p-5 mb-0">
                <Container className="text-center">
                    <div className="p-md-5">
                        <h1>Contact Me</h1>
                    </div>
                </Container>
            </Jumbotron>

            <Container fluid className="shadow bg-light mb-5">
                <Container className="p-4">
                    <Row>
                        <Col>
                            <Container>
                                <h4 className="contact-info-header">Contact Info</h4>
                                <ContactLink
                                    href="mailto:fisherkristie19@icloud.com"
                                    icon={FaEnvelope}
                                    text="fisherkristie19@icloud.com"
                                />
                                <ContactLink
                                    href="https://github.com/FisherK19"
                                    icon={FaGithub}
                                    text="FisherK19"
                                />
                                <ContactLink
                                    href="https://www.linkedin.com/in/kristie-fisher-753737207"
                                    icon={FaLinkedin}
                                    text="kristie-fisher-753737207"
                                />
                            </Container>
                        </Col>
                        <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                            <Container>
                                <h4 className="contact-info-header">Send a Message</h4>
                                <ContactForm />
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Contact;
