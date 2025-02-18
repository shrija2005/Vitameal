import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipes = () => {
  // Inline CSS styles for the page
  const recipesWrapperStyle = {
    backgroundColor: "#fff0f6", // Soft pink background
    padding: "60px 0",
    minHeight: "100vh",
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
    marginBottom: "40px",
    textAlign: "center",
  };

  const problemCardStyle = {
    marginBottom: "30px",
  };

  const problemTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#e91e63",
  };

  const problemTextStyle = {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "20px",
  };

  const cardButtonStyle = {
    backgroundColor: "#e91e63",
    borderColor: "#e91e63",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: "25px",
    transition: "all 0.3s ease-in-out",
  };

  const cardButtonHoverStyle = {
    backgroundColor: "#d81b60", // Darker pink on hover
    borderColor: "#d81b60",
  };

  return (
    <div style={recipesWrapperStyle}>
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h1 style={headingStyle}>Healthy Recipes for Your Health Conditions</h1>
            <p style={paragraphStyle}>
              Find the right recipes tailored to your health needs. Whether you have thyroid issues, PCOS, diabetes, or other conditions,
              our recipes are designed to support your wellness journey.
            </p>
          </Col>
        </Row>

        {/* Health Problem Cards */}
        <Row>
          {/* Thyroid Problem Card */}
          <Col md={4}>
            <Card style={problemCardStyle}>
              <Card.Body>
                <Card.Title style={problemTitleStyle}>💡 Thyroid Health</Card.Title>
                <Card.Text style={problemTextStyle}>
                  Struggling with thyroid problems? Try recipes that support thyroid health and balance hormones.
                </Card.Text>
                <Link to="/recipes/thyroid">
                  <Button
                    style={cardButtonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
                  >
                    Explore Thyroid Recipes
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* PCOS Problem Card */}
          <Col md={4}>
            <Card style={problemCardStyle}>
              <Card.Body>
                <Card.Title style={problemTitleStyle}>🌸 PCOS Support</Card.Title>
                <Card.Text style={problemTextStyle}>
                  Looking for meals that can help with PCOS? Discover hormone-balancing recipes to regulate your health.
                </Card.Text>
                <Link to="/recipes/pcos">
                  <Button
                    style={cardButtonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
                  >
                    Explore PCOS Recipes
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Vitamin Deficiency Problem Card */}
          <Col md={4}>
            <Card style={problemCardStyle}>
              <Card.Body>
                <Card.Title style={problemTitleStyle}>🍊 Vitamin Deficiency</Card.Title>
                <Card.Text style={problemTextStyle}>
                  Combat vitamin deficiencies with nutrient-dense recipes designed to fill in the gaps.
                </Card.Text>
                <Link to="/recipes/vitamin-deficiency">
                  <Button
                    style={cardButtonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
                  >
                    Explore Vitamin Recipes
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Health Problem Cards */}
        <Row>
          {/* Diabetes Problem Card */}
          <Col md={4}>
            <Card style={problemCardStyle}>
              <Card.Body>
                <Card.Title style={problemTitleStyle}>🍬 Diabetes Management</Card.Title>
                <Card.Text style={problemTextStyle}>
                  Managing diabetes with the right meals is key. Find low-sugar, nutrient-rich recipes here.
                </Card.Text>
                <Link to="/recipes/diabetes">
                  <Button
                    style={cardButtonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
                  >
                    Explore Diabetes Recipes
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Heart Health Problem Card */}
          <Col md={4}>
            <Card style={problemCardStyle}>
              <Card.Body>
                <Card.Title style={problemTitleStyle}>❤️ Heart Health</Card.Title>
                <Card.Text style={problemTextStyle}>
                  Keep your heart healthy with heart-healthy recipes that support cardiovascular function.
                </Card.Text>
                <Link to="/recipes/heart-health">
                  <Button
                    style={cardButtonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
                  >
                    Explore Heart Health Recipes
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Weight Management Problem Card */}
          <Col md={4}>
            <Card style={problemCardStyle}>
              <Card.Body>
                <Card.Title style={problemTitleStyle}>⚖️ Weight Management</Card.Title>
                <Card.Text style={problemTextStyle}>
                  Struggling with weight management? Try these low-calorie, filling recipes that support your goals.
                </Card.Text>
                <Link to="/recipes/weight-management">
                  <Button
                    style={cardButtonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#d81b60")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#e91e63")}
                  >
                    Explore Weight Management Recipes
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Nutritional Benefits Section */}
        <Row className="mt-5">
          <Col>
            <h2 style={headingStyle}>Nutritional Benefits of Healthy Eating</h2>
            <p style={paragraphStyle}>
              Eating the right food is crucial for managing various health conditions. Whether you're dealing with thyroid imbalance, PCOS,
              or weight issues, proper nutrition can make a world of difference. Our recipes are designed to provide you with the essential nutrients
              needed to keep your body in balance.
            </p>
          </Col>
        </Row>

        {/* Healthy Meal Plans Section */}
        <Row className="mt-5">
          <Col>
            <h2 style={headingStyle}>Personalized Meal Plans for Your Health</h2>
            <p style={paragraphStyle}>
              Our meal plans are customized based on your specific health needs. Whether you're looking to manage a medical condition, improve your
              overall wellness, or simply eat more nutritious meals, we’ve got you covered.
            </p>
            <Link to="/meal-plans">
              <Button style={cardButtonStyle}>Explore Meal Plans</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipes;
