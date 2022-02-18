import ClassComponent from "./Components/ClassComponent";
import Counter from "./Components/Counter";
import Auth from "./ConditionalRendering/ConditionalRendering";
import ClassClick from "./EventHandling/ClassClick";
import FunctionClick from "./EventHandling/FunctionClick";
import FirstComponent from "./FirstComponent";
import List from "./ListRendering/List";
import ParentComponent from "./MethodAsProps/ParentComponent";
import InlineStyle from "./Styling/InlineStyle";
import Style from "./Styling/Style";
import "./App.css";
import FormHandle from "./Form_Handling/FormHandle";
import MountingLifecycleA from "./Lefecycle_Methods/Mounting/LifeCycleA"; // Mounting
import UpdatingLifecycleA from "./Lefecycle_Methods/Updating/LifeCycleA"; // Updating
import Fragment from "./Fragments/Fragment";
import Table from "./Fragments/Table";
function App() {
  return (
    <div className="App">
      {/* <h1>Created From the Scratch</h1>
      <h2>HEading 2</h2> */}
      {/* <FirstComponent />
      <FirstComponent />
      <FirstComponent />
      <FirstComponent />
      <FirstComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Counter /> */}
      {/* ----------------------Event Handling --------------------- */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* ----------------------------------Method As a Props------------------------ */}
      {/* <ParentComponent /> */}
      {/* ------------------------- Conditional Rendering --------------------------- */}
      {/* <Auth /> */}
      {/* ----------------------- List Rendering ---------------------------------------- */}
      {/* <List /> */}
      {/* -------------------------------- Styling -------------------------------------------- */}
      {/* <Style primary={false} /> */}
      {/* <Style /> */}
      {/* <InlineStyle /> */}
      {/* -------------------------------- Form Handling ------------------------------------------- */}
      {/* <FormHandle /> */}
      {/* --------------------- Lifecycle Methods ---------------------------------- */}
      {/* -------------------- Mounting -------------------- */}
      {/* <MountingLifecycleA /> */}
      {/* -------------------- Updating -------------------- */}
      {/* <UpdatingLifecycleA /> */}
      {/* ---------------- Fragment --------------------------------------- */}

      {/* <Fragment /> */}
      <Table />
    </div>
  );
}

export default App;
