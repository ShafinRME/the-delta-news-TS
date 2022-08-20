import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Share/Footer/Footer";
import Header from "./components/Share/Header/Header";
import RequireAuth from "./components/Share/RequireAuth/RequireAuth.tsx";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Sports from "./pages/Sports";

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
          <Route
            path="/sports"
            element={
              <RequireAuth>
                <Sports />
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer className="mx-auto container">
        <Footer />
      </footer>
      <ToastContainer />
    </>
  );
}

export default App;
