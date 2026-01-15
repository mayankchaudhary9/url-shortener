import { Routes, Route } from "react-router";
import { RegisterPage } from "./pages/registerPage";
import { LoginPage } from "./pages/loginPage";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
