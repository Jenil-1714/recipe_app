//#Global Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedPageLayout from "./components/layout";

//#Local Imports
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedPageLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
