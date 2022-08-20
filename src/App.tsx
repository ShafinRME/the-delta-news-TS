import { Route, Routes } from "react-router-dom";
import Error from "./pages/404/Error";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

import Weather from "./components/Weather/Weather";
import LiveNews from "./pages/LiveNews/LiveNews";

import Dashboard from "./pages/Dashboard/Dashboard";
import AppsDetails from "./pages/Dashboard/Pages/AppsDetails/AppsDetails";
import Admin from "./pages/Dashboard/Pages/Admin/Admin";
import Moderator from "./pages/Dashboard/Pages/Moderator/Moderator";
import User from "./pages/Dashboard/Pages/User/User";
import Ecommerce from "./pages/Dashboard/Pages/Ecommerce/Ecommerce";
import MainLayout from "./Layout/MainLayout";
import AllModeratorNews from "./pages/Dashboard/Pages/News/AllModeratorNews";
import AllAdminNews from "./pages/Dashboard/Pages/News/AllAdminNews";
import AddNews from "./pages/Dashboard/Pages/News/AddNews";
import SingleLiveNews from "./pages/LiveNews/SingleLiveNews";
import Contact from "./pages/contact";
import Advertisement from "./pages/Advertisement";
import LiveTv from "./pages/LiveTv";

function App() {
  return (
    <>
      <main className="">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<Signin />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/livenews" element={<LiveNews />} />
            <Route
              path="livenews/:singlelivenews"
              element={<SingleLiveNews />}
            />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/livetv" element={<LiveTv />} />
          </Route>
          {/* dashboard start */}
          <Route path="/dashboard" element={<Dashboard />}>
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
    </>
  );
}

export default App;
