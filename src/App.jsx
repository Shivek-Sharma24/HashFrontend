import "./App.css";
import Cardone from "./components/Cardone";
import CardTwo from "./components/CardTwo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <br />
      <br />
      <br />
      <Header />
      <div className="sm:flex justify-center gap-5 block sm:space-y-0 sm:p-0 space-y-4 p-4 mb-4">
        <Cardone />
        <CardTwo />
      </div>

      <Footer />
    </>
  );
}

export default App;
