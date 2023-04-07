import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import DentistDetail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./Components/utils/global.context";

function App() {
  const { globalState } = useGlobalContext();

  return (
    <div className={globalState.theme.theme ? "light" : "dark"}>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dentist/:id" element={<DentistDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
