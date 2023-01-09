import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import "./App.css";
import NewGoal from "./components/NewGoal/NewGoal";
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn new things" },
    { id: "cg3", text: "Helping others" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };
  return (
    <div className="con">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
