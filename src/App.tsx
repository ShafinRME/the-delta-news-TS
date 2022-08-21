import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Weather from "./components/Weather/Weather";
import MainLayout from "./Layout/MainLayout";
import Error from "./pages/404/Error";
import Dashboard from "./pages/Dashboard/Dashboard";
import Admin from "./pages/Dashboard/Pages/Admin/Admin";
import AppsDetails from "./pages/Dashboard/Pages/AppsDetails/AppsDetails";
import Ecommerce from "./pages/Dashboard/Pages/Ecommerce/Ecommerce";
import Moderator from "./pages/Dashboard/Pages/Moderator/Moderator";
import AddNews from "./pages/Dashboard/Pages/News/AddNews";
import AllAdminNews from "./pages/Dashboard/Pages/News/AllAdminNews";
import AllModeratorNews from "./pages/Dashboard/Pages/News/AllModeratorNews";
import User from "./pages/Dashboard/Pages/User/User";
import Home from "./pages/Home/Home";
import LiveNews from "./pages/LiveNews/LiveNews";
import SignUp from "./pages/SignUP/SignUp";
import Sports from "./pages/Sports";
import { ToastContainer } from "react-toastify";
import Advertisement from "./pages/Advertisement";
import Books from "./pages/Books/Books";
import Business from "./pages/Business/Business";
import Contact from "./pages/contact";
import Health from "./pages/Health/Health";
import LiveTv from "./pages/LiveTv";
import SignIn from "./pages/SignIn/SignIn";
import Tech from "./pages/Tech/Tech";
import RequireAuth from "./components/Share/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <main className="">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/livenews" element={<LiveNews />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/health" element={<Health />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/business" element={<Business />} />
            <Route path="/books" element={<Books />} />
            {/* <Route path="livenews/:singlelivenews" element={<SingleLiveNews />} /> */}
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/livetv" element={<LiveTv />} />
          </Route>
          {/* dashboard start */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<AppsDetails />} />
            <Route path="admin" element={<Admin />} />
            <Route path="moderator" element={<Moderator />} />
            <Route path="ecommerce" element={<Ecommerce />} />
            <Route path="user" element={<User />} />
            <Route path="addNews" element={<AddNews />} />
            <Route path="moderatorNewsList" element={<AllModeratorNews />} />
            <Route path="adminNewsList" element={<AllAdminNews />} />
          </Route>
          {/* dashboard end*/}

          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <ToastContainer />
    </>
  );
}

export default App;
