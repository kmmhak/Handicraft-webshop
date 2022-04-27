import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Router from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
