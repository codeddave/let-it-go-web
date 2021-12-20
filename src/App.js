import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/reset-password/:token"
              element={<ResetPassword />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
