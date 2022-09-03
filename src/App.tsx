import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/Share/RequireAuth/RequireAuth";
import Weather from "./components/Weather/Weather";
import MainLayout from "./Layout/MainLayout";
import Error from "./pages/404/Error";
import Advertisement from "./pages/Advertisement/Advertisement";
import BanglaDesh from "./pages/BanglaDesh/BanglaDesh";
import Accident from "./pages/BanglaDesh/Pages/Accident/Accident";
import AllBanglaDeshNews from "./pages/BanglaDesh/Pages/AllBanglaDeshNews/AllBanglaDeshNews";
import Crime from "./pages/BanglaDesh/Pages/Crime/Crime";
import Politics from "./pages/BanglaDesh/Pages/Politics/Politics";
import Business from "./pages/Business/Business";
import AllBusinessNews from "./pages/Business/Pages/AllBusinessNews/AllBusinessNews";
import Global from "./pages/Business/Pages/Global/Global";
import Local from "./pages/Business/Pages/Local/Local";
import Contact from "./pages/Contact/contact";
import Covid from "./pages/Covid";
import Currency from "./pages/Currency/Currency";
import Dashboard from "./pages/Dashboard/Dashboard";
import Admin from "./pages/Dashboard/Pages/Admin/Admin";
import Analytics from "./pages/Dashboard/Pages/Analytics/Analytics";
import AppsDetails from "./pages/Dashboard/Pages/AppsDetails/AppsDetails";
import BigCalendar from "./pages/Dashboard/Pages/Calendar/Calendar";
import Ecommerce from "./pages/Dashboard/Pages/Ecommerce/Ecommerce";
import Moderator from "./pages/Dashboard/Pages/Moderator/Moderator";
import AddNews from "./pages/Dashboard/Pages/News/AddNews";
import AllAdminNews from "./pages/Dashboard/Pages/News/AllAdminNews";
import AllModeratorNews from "./pages/Dashboard/Pages/News/AllModeratorNews";
import {
  default as AllUsers,
  default as User,
} from "./pages/Dashboard/Pages/User/AllUsers";
import Entertainment from "./pages/Entertainment/Entertainment";
import AllEntertainmentNews from "./pages/Entertainment/Pages/AllEntertainmentNews/AllEntertainmentNews";
import Movies from "./pages/Entertainment/Pages/Movies/Movies";
import Music from "./pages/Entertainment/Pages/Music/Music";
import Television from "./pages/Entertainment/Pages/Television/Television";
import Environment from "./pages/Environment/Environment";
import AllEnvironmentNews from "./pages/Environment/Pages/AllEnvironmentNews/AllEnvironmentNews";
import Climate from "./pages/Environment/Pages/Climate/Climate";
import Pollution from "./pages/Environment/Pages/Pollution/Pollution";
import Home from "./pages/Home/Home";
import News from "./pages/Home/News";
import SingleNews from "./pages/Home/SingleNews";
import International from "./pages/International/International";
import AllInternationalNews from "./pages/International/Pages/AllInternationalNews/AllInternationalNews";
import America from "./pages/International/Pages/America/America";
import Asia from "./pages/International/Pages/Asia/Asia";
import Europe from "./pages/International/Pages/Europe/Europe";
import LiveNews from "./pages/LiveNews/LiveNews";
import OneNews from "./pages/LiveNews/OneNews";
import Photo from "./pages/Photo/Photo";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUP/SignUp";
import AllSportsNews from "./pages/Sports/Pages/AllSportsNews/AllSportsNews";
import Cricket from "./pages/Sports/Pages/Cricket/Cricket";
import Football from "./pages/Sports/Pages/Football/Football";
import LocalSports from "./pages/Sports/Pages/LocalSports/LocalSports";
import Sports from "./pages/Sports/Sports";

import AllTechNews from "./pages/Tech/Pages/AllTechNews/AllTechNews";
import GadgetsAndApps from "./pages/Tech/Pages/GadgetsAndApps/GadgetsAndApps";
import IT from "./pages/Tech/Pages/IT/IT";
import SocialMedia from "./pages/Tech/Pages/SocialMedia/SocialMedia";

import Tech from "./pages/Tech/Tech";
import LiveTv from "./pages/Tv/LiveTvs";
import Video from "./pages/Videos/Video";
import Videos from "./pages/Videos/Videos";

function App() {
  return (
    <>
      <main className="">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* International */}
            <Route path="/international" element={<International />}>
              <Route index element={<AllInternationalNews />} />
              <Route path="/international/:slug" element={<SingleNews />} />
              <Route path="america" element={<America />} />
              <Route path="asia" element={<Asia />} />
              <Route path="europe" element={<Europe />} />
            </Route>
            {/* Bangladesh */}
            <Route path="/bangladesh" element={<BanglaDesh />}>
              <Route index element={<AllBanglaDeshNews />} />
              <Route path="/bangladesh/:slug" element={<SingleNews />} />
              <Route path="accident" element={<Accident />} />
              <Route path="crime" element={<Crime />} />
              <Route path="politics" element={<Politics />} />
            </Route>
            {/* Business */}
            <Route path="/business" element={<Business />}>
              <Route index element={<AllBusinessNews />} />
              <Route path="/business/:slug" element={<SingleNews />} />
              <Route path="global" element={<Global />} />
              <Route path="local" element={<Local />} />
            </Route>
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            {/* Entertainment */}
            <Route path="/entertainment" element={<Entertainment />}>
              <Route index element={<AllEntertainmentNews />} />
              <Route path="/entertainment/:slug" element={<SingleNews />} />
              <Route path="movies" element={<Movies />} />
              <Route path="music" element={<Music />} />
              <Route path="television" element={<Television />} />
            </Route>
            {/* Environment */}
            <Route path="/environment" element={<Environment />}>
              <Route index element={<AllEnvironmentNews />} />
              <Route path="/environment/:slug" element={<SingleNews />} />
              <Route path="climate" element={<Climate />} />
              <Route path="pollution" element={<Pollution />} />
            </Route>
            {/* Photo */}
            <Route path="/photo" element={<Photo />} />
            {/* Sports */}
            <Route path="/sports" element={<Sports />}>
              <Route index element={<AllSportsNews />} />
              <Route path="/sports/:slug" element={<SingleNews />} />
              <Route path="cricket" element={<Cricket />} />
              <Route path="football" element={<Football />} />
              <Route path="localsports" element={<LocalSports />} />
            </Route>
            {/* Tech */}
            <Route path="/tech" element={<Tech />}>
              <Route index element={<AllTechNews />} />
              <Route path="/tech/:slug" element={<SingleNews />} />
              <Route path="gadgetandapps" element={<GadgetsAndApps />} />
              <Route path="it" element={<IT />} />
              <Route path="socialmedia" element={<SocialMedia />} />
            </Route>

            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/covid" element={<Covid />} />
            <Route
              path="/livenews"
              element={
                <RequireAuth>
                  <LiveNews />
                </RequireAuth>
              }
            />

            <Route path="/livenews/:path" element={<OneNews />} />
            <Route
              path="/videos"
              element={
                <RequireAuth>
                  <Videos />
                </RequireAuth>
              }
            />
            <Route path="/videos/:path" element={<Video />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/singleNews/:slug" element={<SingleNews />} />
            <Route path="/News/:slug" element={<News />} />
            <Route path="/advertisement" element={<Advertisement />} />
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
