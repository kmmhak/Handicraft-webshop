import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Router from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Router />
        <Sidebar />
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
