import { Route, Routes } from "react-router-dom";
import Header from "./components/Share/Header/Header";
import Footer from './components/Share/Footer/Footer'
import Error from "./pages/Error";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <header className="container mx-auto">
        <Header />
      </header>
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer className="mx-auto container">
        <Footer />
      </footer>
    </>
  );
}

export default App;
