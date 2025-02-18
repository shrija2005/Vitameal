import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const mealPlans = {
  "Iron Deficiency": {
    Monday: ["Spinach Smoothie", "Lentil Curry with Rice", "Tofu Stir-Fry"],
    Tuesday: ["Oats with Nuts", "Chickpea Salad", "Quinoa with Vegetables"],
    Wednesday: ["Smoothie with Chia Seeds", "Dal with Whole Wheat Roti", "Sautéed Green Beans"],
    Thursday: ["Banana Peanut Butter Toast", "Spinach Pulao", "Stuffed Bell Peppers"],
    Friday: ["Nutritional Yeast Scramble", "Chickpea Wrap", "Grilled Mushrooms"],
    Saturday: ["Fruit Bowl", "Lentil Soup with Whole Bread", "Sautéed Spinach"],
    Sunday: ["Coconut Yogurt with Granola", "Quinoa Salad", "Vegetable Stir-Fry"],
  },
  "Vitamin D Deficiency": {
    Monday: ["Fortified Soy Milk", "Mushroom Curry", "Tofu Stir-Fry"],
    Tuesday: ["Smoothie with Almond Milk", "Dal Rice", "Fortified Cereal"],
    Wednesday: ["Banana Smoothie", "Mushroom Soup", "Grilled Veggies"],
    Thursday: ["Chia Seed Pudding", "Spinach Pulao", "Soy Yogurt"],
    Friday: ["Oats with Walnuts", "Lentil Soup", "Roasted Cauliflower"],
    Saturday: ["Peanut Butter Toast", "Mushroom Stir-Fry", "Fortified Rice"],
    Sunday: ["Fruit Bowl", "Tofu Scramble", "Quinoa with Vegetables"],
  },
  "PCOS": {
    Monday: ["Chia Seed Pudding", "Quinoa Salad", "Grilled Tofu"],
    Tuesday: ["Flaxseed Smoothie", "Leafy Green Curry", "Mushroom Stir-Fry"],
    Wednesday: ["Nuts & Berries Bowl", "Dal with Brown Rice", "Steamed Veggies"],
    Thursday: ["Avocado Toast", "Chickpea Curry", "Stuffed Bell Peppers"],
    Friday: ["Soy Yogurt with Nuts", "Spinach Pulao", "Zucchini Noodles"],
    Saturday: ["Nutritional Yeast Scramble", "Quinoa Salad", "Grilled Veggies"],
    Sunday: ["Oats with Almonds", "Mushroom Stir-Fry", "Chickpea Wrap"],
  },
};

const MealPlan = () => {
  const location = useLocation();
  const { condition } = location.state || { condition: "General Healthy Diet" };
  const plan = mealPlans[condition] || mealPlans["Iron Deficiency"];

  return (
    <Container className="mt-4">
      <h2>Weekly Meal Plan for {condition} 🍽️</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(plan).map(([day, meals]) => (
            <tr key={day}>
              <td>{day}</td>
              <td>{meals[0]}</td>
              <td>{meals[1]}</td>
              <td>{meals[2]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" className="mt-3">Save Meal Plan</Button>
    </Container>
  );
};

export default MealPlan;
