import React, { useState } from "react";
import ReasourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("Posts");
  return (
    <div>
      <div>
        <button onClick={() => setResource("Posts")}>POSTS</button>
        <button onClick={() => setResource("todos")}>ToDo</button>
      </div>
      <ReasourceList resource={resource} />
    </div>
  );
};

export default App;
