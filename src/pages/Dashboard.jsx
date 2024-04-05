import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const coursesData = [
    { id: 1, title: 'Bitcoin Basics', description: 'Learn the fundamentals of Bitcoin.', topic: 'crypto' },
    { id: 2, title: 'Ethereum Essentials', description: 'Discover the essential concepts of Ethereum.', topic: 'crypto' },
    { id: 3, title: 'Smart Contracts', description: 'Explore smart contracts and their applications.', topic: 'blockchain' },
    { id: 4, title: 'NFT Creation', description: 'Learn how to create and manage NFTs.', topic: 'nft' },
    { id: 5, title: 'Mindset Mastery', description: 'Improve your mindset for success.', topic: 'mindset' },
];

const Dashboard = () => {
    const [selectedTopic, setSelectedTopic] = useState('crypto');
    const [courses, setCourses] = useState(coursesData);

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
        filterCourses(event.target.value);
    };

    const filterCourses = (topic) => {
        const filteredCourses = coursesData.filter(course => course.topic === topic);
        setCourses(filteredCourses);
    };

    return (
        <div style={{ backgroundColor: '#343a40', minHeight: '100vh', padding: '20px' }}>
            <Container className="text-light">
                <Row className="align-items-center">
                    <Col xs={6}>
                        <h2 className="mt-4 mb-4">All Courses</h2>
                    </Col>
                    <Col xs={6}>
                        <Form.Select className="mt-4 mb-4 bg-dark text-light" value={selectedTopic} onChange={handleTopicChange}>
                            <option value="crypto">Crypto</option>
                            <option value="blockchain">Blockchain</option>
                            <option value="nft">NFT</option>
                            <option value="mindset">Mindset</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {courses.map(course => (
                        <Col key={course.id}>
                            <Card bg="dark" text="light">
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>{course.description}</Card.Text>
                                    <Link to={`/course/${course.id}`}>
                                        <Button backgroundColor="#335BFF">Start Learning</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
