import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
 // Custom styles

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to VitaMeal 🍲</h1>
          <p>Your AI-powered personalized diet planner.</p>
          <Link to="/diagnosis">
            <Button variant="light" className="hero-btn">Check Your Health Now</Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <Container className="features-section">
        <Row className="text-center mb-4">
          <Col>
            <h2>How VitaMeal Helps You</h2>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>🧠 AI-Based Diagnosis</Card.Title>
                <Card.Text>Enter symptoms and get diet & supplement recommendations.</Card.Text>
                <Link to="/diagnosis">
                  <Button variant="primary">Try Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>📅 Smart Meal Planning</Card.Title>
                <Card.Text>Get a weekly meal plan based on your health condition.</Card.Text>
                <Link to="/meal-planner">
                  <Button variant="success">Plan Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>🔔 Real-Time Reminders</Card.Title>
                <Card.Text>Get notified when to take supplements and eat meals.</Card.Text>
                <Button variant="warning">Set Reminders</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
