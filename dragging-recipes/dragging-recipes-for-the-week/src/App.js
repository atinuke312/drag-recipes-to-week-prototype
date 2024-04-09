// import { Splitter, SplitterPanel } from "primereact/splitter";
// import { useState } from "react";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import Draggable from "./components/Draggable";

// import "./App.css";
// import { Droppable } from "./components/Droppable";
// import { DndContext } from "@dnd-kit/core";
// import { Card } from "primereact/card";

// function App() {
//   const [parent, setParent] = useState(null);
//   //const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;
// const [recipes, setRecipes] = useState([
//   { id: 1, name: "Chocolate Peanut Butter" },
//   { id: 2, name: "Creamy Carrot Cake" },
//   { id: 3, name: "Green Machine" },
// ]);
//   const [chosenRecipe, setChosenRecipe] = [];
//   const draggableItems = recipes.map((recipe, index) => (
//     <Draggable id={recipe.id} key={`draggable-${index}`}>
//       {recipe.name}

//       {/* {console.log(recipe.id)} */}
//     </Draggable>
//   ));

//   return (
//     <div className="App">
//       <DndContext onDragEnd={handleDragEnd}>
//         <Splitter style={{ height: "300px" }}>
//           <SplitterPanel className="flex align-items-center justify-content-center">
//             {!parent ? draggableItems : null}
//           </SplitterPanel>
//           <SplitterPanel className="flex align-items-center justify-content-center">
//             <Droppable id="droppable">
//               {parent === "droppable" ? (
//                 <Card title="Monday">
//                   {/* {draggableItems} */}
//                   {console.log(draggableItems.id)}
//                   {/* {draggableItems.map((value) => value.key)}
//                   {console.log(draggableItems.map((recipes) => recipes.id))} */}
//                 </Card>
//               ) : (
//                 <Card title="Monday"></Card>
//               )}
//             </Droppable>
//           </SplitterPanel>
//         </Splitter>

//         {/* {!parent ? draggableItems : null} */}
//         {/* <Droppable id="droppable">
//           {parent === "droppable" ? (
//             draggableItems
//           ) : (
//             <Card title="Monday"></Card>
//           )}
//         </Droppable> */}
//       </DndContext>
//     </div>
//   );
//   function handleDragEnd({ over }) {
//     setParent(over ? over.id : null);
//     // console.log(over) --> "droppable";
//   }
//   // if over, setParent to over.id(drag is over)
//   //else, setParent = null (still dragging)
// }

// export default App;

import React, { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
import { Card } from "primereact/card";
import { Droppable } from "./components/Droppable";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { get } from "jquery";

/* The implementation details of <Item> and <ScrollableList> are not
 * relevant for this example and are therefore omitted. */

export default function App() {
  const [recipes] = useState([
    "Chocolate Peanut Butter",
    "Green Machine",
    "Tropical Green Smoothie",
    "Berry Blast",
    "Banana Avocado",
  ]);

  // const [recipes, setRecipes] = useState([
  //   { id: 1, name: "Chocolate Peanut Butter" },
  //   { id: 2, name: "Creamy Carrot Cake" },
  //   { id: 3, name: "Green Machine" },
  // ]);
  const [activeId, setActiveId] = useState(null);
  const [parent, setParent] = useState(null);
  const [recipesInWeekList, setRecipesInWeekList] = useState("");
  const [draggedRecipes, setDraggedRecipes] = useState([
    "Chocolate Peanut Butter",
    "Green Machine",
    "Tropical Green Smoothie",
    "Berry Blast",
    "Banana Avocado",
  ]);

  const draggableRecipes = draggedRecipes.map((recipe, index) => (
    <Draggable id={recipe} key={`draggable-${index}`}>
      {recipe}
    </Draggable>
  ));

  const draggableItems = recipes.map((recipe, index) => (
    <Draggable id={recipe} key={`draggable-${index}`}>
      {recipe}
    </Draggable>
  ));

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Splitter style={{ height: "300px" }}>
        <SplitterPanel>
          {!parent ? draggableItems : null}

          {/* <DragOverlay>
            {activeId ? <p>value={`Item ${activeId}`}</p> : null}
          </DragOverlay> */}
        </SplitterPanel>
        <SplitterPanel>
          <Droppable id="droppable">
            {parent === "droppable" ? (
              <div>
                <Card title="Monday">{draggableRecipes}</Card>
                <Card title="Tuesday">{draggableRecipes}</Card>
                <Card title="Wednesday">{draggableRecipes}</Card>
                <Card title="Thursday">{draggableRecipes}</Card>
                <Card title="Friday">{draggableRecipes}</Card>
                <Card title="Saturday">{draggableRecipes}</Card>
                <Card title="Sunday">{draggableRecipes}</Card>
              </div>
            ) : (
              <div>
                <Card title="Monday"></Card>
                <Card title="Tuesday"></Card>
                <Card title="Wednesday"></Card>
                <Card title="Thursday"></Card>
                <Card title="Friday"></Card>
                <Card title="Saturday"></Card>
                <Card title="Sunday"></Card>
              </div>
            )}
          </Droppable>
        </SplitterPanel>
      </Splitter>
    </DndContext>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
    //setDraggedRecipes([...draggedRecipes, event.active.id]);
  }

  function handleDragEnd({ over, activeId, event }) {
    setActiveId(null);
    setParent(over ? over.id : null);
  }
}
