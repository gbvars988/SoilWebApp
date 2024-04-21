import React, { useState } from "react";
import "./dietplan.css";

function UserPreferencesForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
    healthGoals: "",
    dietaryPreferences: [],
    timeFrame: "day",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "dietaryPreferences") {
      setFormData({
        ...formData,
        dietaryPreferences: checked
          ? [...formData.dietaryPreferences, value]
          : formData.dietaryPreferences.filter((pref) => pref !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="user-preferences-form" onSubmit={handleSubmit}>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Activity Level:</label>
        <select
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
        >
          <option value="">Select activity level</option>
          <option value="sedentary">Sedentary</option>
          <option value="lightly active">Lightly Active</option>
          <option value="moderately active">Moderately Active</option>
          <option value="very active">Very Active</option>
          <option value="extra active">Extra Active</option>
        </select>
      </div>
      <div>
        <div className="form-row">
          <label>Health Goals:</label>
          <div>
            <label>
              <input
                type="radio"
                name="healthGoals"
                value="weight loss"
                checked={formData.healthGoals === "weight loss"}
                onChange={handleChange}
              />{" "}
              Weight Loss
            </label>
            <label>
              <input
                type="radio"
                name="healthGoals"
                value="muscle gain"
                checked={formData.healthGoals === "muscle gain"}
                onChange={handleChange}
              />{" "}
              Muscle Gain
            </label>
            <label>
              <input
                type="radio"
                name="healthGoals"
                value="overall health"
                checked={formData.healthGoals === "overall health"}
                onChange={handleChange}
              />{" "}
              Overall Health
            </label>
          </div>
        </div>
        <div className="form-row">
          <label>Dietary Preferences:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="dietaryPreferences"
                value="vegetarian"
                checked={formData.dietaryPreferences.includes("vegetarian")}
                onChange={handleChange}
              />{" "}
              Vegetarian
            </label>
            <label>
              <input
                type="checkbox"
                name="dietaryPreferences"
                value="vegan"
                checked={formData.dietaryPreferences.includes("vegan")}
                onChange={handleChange}
              />{" "}
              Vegan
            </label>
            <label>
              <input
                type="checkbox"
                name="dietaryPreferences"
                value="gluten-free"
                checked={formData.dietaryPreferences.includes("gluten-free")}
                onChange={handleChange}
              />{" "}
              Gluten-Free
            </label>
          </div>
        </div>
        <div className="form-row">
          <label>Time Frame:</label>
          <div>
            <label>
              <input
                type="radio"
                name="timeFrame"
                value="day"
                checked={formData.timeFrame === "day"}
                onChange={handleChange}
              />
              Day
            </label>
            <label>
              <input
                type="radio"
                name="timeFrame"
                value="week"
                checked={formData.timeFrame === "week"}
                onChange={handleChange}
              />
              Week
            </label>
          </div>
        </div>
      </div>
      <button type="submit">Get Meal Plan</button>
    </form>
  );
}

export default UserPreferencesForm;
