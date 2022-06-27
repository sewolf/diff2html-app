import React from 'react';
import logo from './logo.svg';
import './App.css';
import DiffTable from "./DiffTable";

function App() {
  let diff = "--- /dev/null\n+++ /dev/null\n@@ -0,20 +1,20 @@\n ---\n value: \"false\"\n-type: \"NUMBER\"\n+value: \"true\"\n+type: \"BOOLEAN\"\n";
  return (
    <div className="App">
      <DiffTable diff={diff} />
    </div>
  );
}

export default App;
