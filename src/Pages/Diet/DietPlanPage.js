import React, { useState } from "react";
import UserPreferencesForm from "./UserPreferencesForm";
import MealPlanDisplay from "./MealPlanDisplay";
import useMealPlan from "./useMealPlan";

function DietPlanPage() {
  const [timeFrame, setTimeFrame] = useState("day");
  const [mealPlan, fetchMealPlan, loading, error] = useMealPlan();

  const handlePreferencesSubmit = (preferences) => {
    setTimeFrame(preferences.timeFrame);
    fetchMealPlan(preferences);
  };

  return (
    <div>
      <h1>Diet Plan</h1>
      <UserPreferencesForm onSubmit={handlePreferencesSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {mealPlan && (
        <MealPlanDisplay mealPlan={mealPlan} timeFrame={timeFrame} />
      )}
    </div>
  );
}

export default DietPlanPage;
