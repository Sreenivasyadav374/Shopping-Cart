import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Store" element={<Store />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
