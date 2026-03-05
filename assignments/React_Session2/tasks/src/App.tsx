import UserProfile from "./components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import Task4 from "./components/task4";
import Task5 from "./components/task5";
import Task6 from "./components/task6";
import Task62 from "./components/task6_2";

export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <UseEffectExample dependencyType="WITH_DEPENDENCY" /> */}
      {/* <UseContexExample /> */}
      {/* <IndependentComponent /> */}
      <UserProfile />
      <hr></hr>
      <Task2 />
      <hr></hr>
      <Task3 />
      <hr></hr>
      <Task4 />
      <hr />
      <Task5 />
      <hr />
      <Task6 />
      <hr />
      <Task62 />
    </div>
  );
}
