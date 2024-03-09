import Login from "./Login";
import Student from "./Student";
import Request from "./Request";
import Status from "./Status";
import Public from "./Public";
import "./App.css"
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Student/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/tadminrequest" element={<Request/>}/>
      <Route path="/status" element={<Status/>}/>
      <Route path="/public" element={<Public/>}/>
     </Routes>
  );
}

export default App;