import React, { useState } from "react";
import { useHistory } from "react-router-dom";  // Import useHistory to navigate
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";

const Diagnosis = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const history = useHistory();  // Hook to handle navigation

  // Data for each health problem
  const solutions = {
    thyroid: {
      dietPlan:
        "Thyroid-friendly foods include leafy greens, cruciferous vegetables, and foods rich in selenium and zinc.",
      homeRemedies:
        "Try consuming ginger, ashwagandha, and flaxseeds. Also, reduce soy-based products.",
      supplements: "Consider iodine, selenium, and vitamin D supplements.",
      details:
        "Thyroid conditions can affect metabolism and energy levels. A balanced diet rich in nutrients can help manage symptoms.",
    },
    pcos: {
      dietPlan:
        "A PCOS-friendly diet includes low-carb, high-protein foods like lean meats, eggs, and legumes.",
      homeRemedies:
        "Home remedies include cinnamon and spearmint tea to regulate insulin levels.",
      supplements: "Inositol, vitamin D, and omega-3 supplements may help manage PCOS.",
      details:
        "PCOS is a hormonal disorder that can affect menstrual cycles and fertility. A proper diet and lifestyle changes can aid in managing symptoms.",
    },
    diabetes: {
      dietPlan:
        "Focus on high-fiber, low-glycemic foods such as whole grains, legumes, and non-starchy vegetables.",
      homeRemedies:
        "Try bitter melon, cinnamon, and fenugreek to help lower blood sugar levels.",
      supplements: "Chromium, magnesium, and alpha-lipoic acid are good supplements for diabetes management.",
      details:
        "Diabetes is a chronic condition that affects the body's ability to process sugar. Diet and exercise play a key role in managing blood sugar levels.",
    },
    heartHealth: {
      dietPlan:
        "A heart-healthy diet includes omega-3-rich foods like salmon, flaxseeds, and walnuts.",
      homeRemedies:
        "Garlic, ginger, and turmeric can help reduce cholesterol and improve heart health.",
      supplements: "CoQ10, magnesium, and omega-3 fatty acids can support heart health.",
      details:
        "Heart disease is a leading cause of death. A heart-healthy diet, regular exercise, and lifestyle changes can significantly reduce risks.",
    },
    weightManagement: {
      dietPlan:
        "Include whole grains, lean proteins, and plenty of fruits and vegetables for effective weight management.",
      homeRemedies:
        "Apple cider vinegar and green tea can boost metabolism and promote fat loss.",
      supplements: "Green tea extract, CLA (Conjugated Linoleic Acid), and Garcinia Cambogia may aid weight loss.",
      details:
        "Managing weight effectively requires a balanced approach to diet and exercise. Tracking progress and making gradual changes can yield long-term results.",
    },
    stressManagement: {
      dietPlan:
        "Focus on foods rich in vitamin C, magnesium, and omega-3 fatty acids, such as citrus fruits, leafy greens, and fatty fish.",
      homeRemedies:
        "Try deep breathing exercises, yoga, and herbal teas like chamomile or lavender to relieve stress.",
      supplements: "Magnesium, ashwagandha, and vitamin B-complex supplements may help reduce stress.",
      details:
        "Stress management is vital for overall health. A healthy lifestyle, including diet, exercise, and mindfulness practices, can significantly reduce stress levels.",
    },
  };

  // Handle user input and give relevant response
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    const input = userInput.toLowerCase();
    if (solutions[input]) {
      setResponse(`
        **Diet Plan**: ${solutions[input].dietPlan}
        \n**Home Remedies**: ${solutions[input].homeRemedies}
        \n**Supplements**: ${solutions[input].supplements}
      `);
      // Redirect to the meal planner page
      setTimeout(() => history.push("/meal-planner"), 2000); // Redirect after 2 seconds
    } else {
      setResponse("Sorry, I couldn't find information for that. Please try a different health issue.");
    }
    setUserInput(""); // Clear input field after submission
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 style={{ textAlign: "center", color: "#e91e63" }}>AI Health Diagnosis Chatbot</h2>
            <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>
              Type your health issue or symptoms, and I’ll help you with diet plans, home remedies, and supplement suggestions.
            </p>

            {/* Input Field for User */}
            <Form>
              <Form.Group controlId="userInput">
                <Form.Control
                  type="text"
                  value={userInput}
                  onChange={handleUserInput}
                  placeholder="Enter your health issue (e.g., thyroid, pcos, diabetes)"
                  style={{ fontSize: "18px", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}
                />
              </Form.Group>
              <Button
                onClick={handleSubmit}
                variant="danger"
                style={{
                  width: "100%",
                  fontSize: "18px",
                  padding: "15px",
                  borderRadius: "8px",
                  backgroundColor: "#e91e63",
                  borderColor: "#e91e63",
                }}
              >
                Get Solutions
              </Button>
            </Form>

            {/* Display Response */}
            {response && (
              <div
                style={{
                  marginTop: "30px",
                  backgroundColor: "#fff",
                  padding: "25px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 style={{ color: "#e91e63", fontSize: "24px" }}>Recommended Solutions:</h4>
                <pre
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    color: "#333",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                  }}
                >
                  {response}
                </pre>
              </div>
            )}

            {/* Sign Up/Sign In Button */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Button
                variant="outline-danger"
                style={{ fontSize: "18px", padding: "10px 20px", borderRadius: "8px" }}
                onClick={() => alert("Sign Up/Sign In functionality goes here.")}
              >
                Sign Up / Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Diagnosis;

