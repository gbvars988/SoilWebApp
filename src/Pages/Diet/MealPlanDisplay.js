import React from "react";

function MealPlanDisplay({ mealPlan, timeFrame }) {
  if (!mealPlan) {
    return <div>No meal plan available.</div>;
  }

  if (timeFrame === "day") {
    if (!mealPlan.meals || mealPlan.meals.length === 0) {
      return <div>No meal plan available.</div>;
    }
    return (
      <div>
        <h2>Your Daily Meal Plan</h2>
        {mealPlan.meals.map((meal) => (
          <div key={meal.id}>
            <p>{meal.title}</p>
            <img
              src={`https://img.spoonacular.com/recipes/${meal.id}-312x231.${meal.imageType}`}
              alt={meal.title}
            />
            <p>Ready in: {meal.readyInMinutes} minutes</p>
            <p>Servings: {meal.servings}</p>
            <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">
              Recipe Details
            </a>
          </div>
        ))}
      </div>
    );
  } else if (timeFrame === "week") {
    // Check for weekly meals' structure
    if (!mealPlan.week || Object.keys(mealPlan.week).length === 0) {
      return <div>No meal plan available.</div>;
    }
    return (
      <div>
        <h2>Your Weekly Meal Plan</h2>
        {Object.keys(mealPlan.week).map((day) => (
          <div key={day}>
            <h3>{day}</h3>
            {mealPlan.week[day].meals.map((meal) => (
              <div key={meal.id}>
                <p>{meal.title}</p>
                <img
                  src={`https://img.spoonacular.com/recipes/${meal.id}-312x231.${meal.imageType}`}
                  alt={meal.title}
                />
                <p>Ready in: {meal.readyInMinutes} minutes</p>
                <p>Servings: {meal.servings}</p>
                <a
                  href={meal.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recipe Details
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return <div>No meal plan available.</div>;
}

export default MealPlanDisplay;
