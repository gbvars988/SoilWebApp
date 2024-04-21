import React, { useState } from "react";
import "./dietplan.css";

function MealPlanDisplay({ mealPlan, timeFrame }) {
  const [showMealPlan, setShowMealPlan] = useState(true);

  const toggleMealPlanVisibility = () => {
    setShowMealPlan(!showMealPlan);
  };

  if (
    !mealPlan ||
    (timeFrame === "day" && (!mealPlan.meals || mealPlan.meals.length === 0)) ||
    (timeFrame === "week" &&
      (!mealPlan.week || Object.keys(mealPlan.week).length === 0))
  ) {
    return (
      <div>
        <h1>Generate a meal plan now!</h1>
        {mealPlan && (
          <button onClick={toggleMealPlanVisibility}>Hide Meal Plan</button>
        )}
      </div>
    );
  }

  return (
    <div className="meal-plan-wrapper">
      {" "}
      {showMealPlan && (
        <>
          {timeFrame === "day" && (
            <div className="daily-meal">
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
          )}

          {timeFrame === "week" && (
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
          )}

          <button onClick={toggleMealPlanVisibility}>Hide Meal Plan</button>
        </>
      )}
    </div>
  );
}

export default MealPlanDisplay;
