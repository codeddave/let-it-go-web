import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
