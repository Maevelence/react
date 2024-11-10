import { Route, Routes } from "react-router-dom";
import ProductPg from "./pages/ProductPg";
import AboutPg from "./pages/AboutPg";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <Nav />
    <Routes>
    <Route path="/" element={ <ProductPg />} />
    <Route path="/about" element={ <AboutPg />} />
    </Routes>
    </>
  )
}
export default App;
