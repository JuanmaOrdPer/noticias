import { NewsProvider } from "./context/NewsContext.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsNavbar from "./components/NewsNavbar.js";
import Home from "./pages/Home.js";
import Details from "./pages/Details.js";

function App() {
  return (
   <NewsProvider>
        <Router>
          <NewsNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/:id" element={<Details />} />
          </Routes>
        </Router>
    </NewsProvider>
  );
}

export default App;
