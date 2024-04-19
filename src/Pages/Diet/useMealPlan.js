import { useState } from "react";

const useMealPlan = () => {
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateTargetCalories = (preferences) => {
    let baseCalories = 2000; // Basic starting point for average adult

    // Adjust base calories based on health goal
    switch (preferences.healthGoals) {
      case "weight loss":
        baseCalories -= 500;
        break;
      case "muscle gain":
        baseCalories += 500;
        break;
      case "overall health":
        baseCalories += 0;
        break;
      default: // undefined case
        break;
    }

    // Further adjust based on activity level
    switch (preferences.activityLevel) {
      case "lightly active":
        baseCalories += 200;
        break;
      case "moderately active":
        baseCalories += 400;
        break;
      case "very active":
        baseCalories += 600;
        break;
      case "extra active":
        baseCalories += 800;
        break;
      default: // sedentary or undefined activity level
        baseCalories += 0;
        break;
    }

    return baseCalories;
  };

  const fetchMealPlan = async (preferences) => {
    setLoading(true);
    setError(null);

    // Calculate calories as per user input metrics
    const targetCalories = calculateTargetCalories(preferences);
    // Build query string from preferences
    const queryString = new URLSearchParams({
      timeFrame: preferences.timeFrame,
      diet: preferences.dietaryPreferences.join(","), // API can handle empty diet preference array if user does not select any\
      targetCalories: targetCalories.toString(),
    }).toString();

    try {
      const response = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?${queryString}&apiKey=517aa46934da448abfee7f81411d39ca`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch meal plan");
      }
      const data = await response.json();
      setMealPlan(data);
      console.log(mealPlan);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [mealPlan, fetchMealPlan, loading, error];
};

export default useMealPlan;
