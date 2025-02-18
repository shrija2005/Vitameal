import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  // Inline CSS styles
  const aboutWrapperStyle = {
    backgroundColor: "#fff0f6", // Soft pink background
    padding: "60px 0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#333",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
    color: "#e91e63", // Vibrant pink for heading
    fontWeight: "700",
    textAlign: "center",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "30px",
    textAlign: "center",
  };

  const listStyle = {
    fontSize: "1.1rem",
    listStyleType: "none",
    paddingLeft: "0",
    color: "#333",
  };

  const listItemStyle = {
    marginBottom: "20px",
    fontWeight: "500",
    paddingLeft: "25px",
    position: "relative",
  };

  const iconStyle = {
    position: "absolute",
    left: "0",
    top: "0",
    fontSize: "1.7rem",
    color: "#e91e63", // Icon color matching heading
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 40px",
    fontSize: "1.2rem",
    backgroundColor: "#e91e63", // Pink button color
    borderColor: "#e91e63",
    color: "#fff",
    borderRadius: "30px",
    transition: "all 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#d81b60", // Darker pink on hover
    borderColor: "#d81b60",
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    color: "#e91e63", // Pink title color
    marginBottom: "20px",
    textAlign: "center",
  };

  const aboutContainerStyle = {
    padding: "40px 15px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "40px",
  };

  return (
    <div style={aboutWrapperStyle}>
      <Container className="about-section" style={aboutContainerStyle}>
        <Row className="text-center mb-4">
          <Col>
            <h1 style={headingStyle}>About VitaMeal</h1>
            <p style={paragraphStyle}>
              VitaMeal is an AI-powered personalized diet planner designed to
              help individuals make better food choices based on their health
              conditions and goals. Our platform allows users to plan meals,
              track their progress, and get personalized recommendations for
              their health needs, such as PCOS, thyroid conditions, vitamin
              deficiencies, and more.
            </p>
          </Col>
        </Row>

        <Row>
        <Row className="text-center mt-4">
            <h3 style={sectionTitleStyle}>Our Mission</h3>
            <p style={paragraphStyle}>
              Our mission is to empower individuals to take control of their
              health and well-being by providing personalized diet plans that
              are tailored to each user's specific health condition and goals.
            </p>
            </Row>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h3 style={sectionTitleStyle}>Ready to Start?</h3>
            <p style={paragraphStyle}>Join us on your journey to better health!</p>
            <Link to="/signin">
              <Button
                variant="primary"
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup" className="ml-3">
              <Button
                variant="success"
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
              >
                Sign Up
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
