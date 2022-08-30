import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/Share/RequireAuth/RequireAuth";
import Weather from "./components/Weather/Weather";
import MainLayout from "./Layout/MainLayout";
import Error from "./pages/404/Error";
import Analytics from "./pages/Dashboard/Pages/Analytics/Analytics";
import Books from "./pages/Books/Books";
import Business from "./pages/Business/Business";
import Contact from "./pages/Contact/contact";
import Covid from "./pages/Covid";
import Currency from "./pages/Currency/Currency";
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
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUP/SignUp";
import Sports from "./pages/Sports/Sports";
import International from './pages/International/International'
import Tech from "./pages/Tech/Tech";
import LiveTv from "./pages/LiveTv/LiveTvs";
import BigCalendar from "./pages/Dashboard/Pages/Calendar/Calendar";
import Advertisement from "./pages/Advertisement/Advertisement";
import Video from "./pages/Videos/Video";
import Videos from "./pages/Videos/Videos";


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
            <Route path="/livenews" element={<LiveNews />} />
            <Route path="/livenews/:path" element={<OneNews />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/videos/:path" element={<Video />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/health" element={<Health />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/business" element={<Business />} />
            <Route path="/books" element={<Books />} />
            <Route path="/singleNews/:slug" element={<SingleNews />} />
            <Route path="/News/:slug" element={<News />} />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/international" element={<International />} />
            <Route path="/international/:slug" element={<SingleNews />} />
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
            <Route path="analytics" element={<Analytics />} />
            <Route path="calendar" element={<BigCalendar />} />
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
