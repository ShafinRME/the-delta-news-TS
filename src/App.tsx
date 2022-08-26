import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/Share/RequireAuth/RequireAuth";
import Weather from "./components/Weather/Weather";
import MainLayout from "./Layout/MainLayout";
import Error from "./pages/404/Error";
import Advertisement from "./pages/Advertisement/Advertisement";
import Books from "./pages/Books/Books";
import Business from "./pages/Business/Business";
import Contact from "./pages/Contact/contact";
import Covid from "./pages/Covid";
import Dashboard from "./pages/Dashboard/Dashboard";
import Admin from "./pages/Dashboard/Pages/Admin/Admin";
import AppsDetails from "./pages/Dashboard/Pages/AppsDetails/AppsDetails";
import Ecommerce from "./pages/Dashboard/Pages/Ecommerce/Ecommerce";
import Moderator from "./pages/Dashboard/Pages/Moderator/Moderator";
import AddNews from "./pages/Dashboard/Pages/News/AddNews";
import AllAdminNews from "./pages/Dashboard/Pages/News/AllAdminNews";
import AllModeratorNews from "./pages/Dashboard/Pages/News/AllModeratorNews";
import AllUsers from "./pages/Dashboard/Pages/User/AllUsers";
import User from "./pages/Dashboard/Pages/User/AllUsers";
import Health from "./pages/Health/Health";
import Home from "./pages/Home/Home";
import News from "./pages/Home/News";
import SingleNews from "./pages/Home/SingleNews";
import LiveNews from "./pages/LiveNews/LiveNews";
import OneNews from "./pages/LiveNews/OneNews";
import LiveTv from "./pages/LiveTV/LiveTv";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUP/SignUp";
import Sports from "./pages/Sports/Sports";
import International from './pages/International/International'
import Tech from "./pages/Tech/Tech";

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
            <Route path="/covid" element={<Covid />} />
            <Route path="/livenews" element={<LiveNews />}></Route>
            <Route path="/livenews/:path" element={<OneNews />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/health" element={<Health />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/business" element={<Business />} />
            <Route path="/books" element={<Books />} />
            <Route path="/singleNews/:slug" element={<SingleNews />} />
            <Route path="/News/:slug" element={<News />} />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/international" element={<International />} />
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
            <Route path="allUser" element={<AllUsers />} />
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
