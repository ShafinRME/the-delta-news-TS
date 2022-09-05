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
import SingleAccidentNews from "./pages/BanglaDesh/Pages/Accident/SingleAccidentNews/SingleAccidentNews";
import AllBanglaDeshNews from "./pages/BanglaDesh/Pages/AllBanglaDeshNews/AllBanglaDeshNews";
import Crime from "./pages/BanglaDesh/Pages/Crime/Crime";
import SingleCrimeNews from "./pages/BanglaDesh/Pages/Crime/SingleCrimeNews/SingleCrimeNews";
import Politics from "./pages/BanglaDesh/Pages/Politics/Politics";
import SinglePoliticsNews from "./pages/BanglaDesh/Pages/Politics/SinglePoliticsNews/SinglePoliticsNews";
import Business from "./pages/Business/Business";
import AllBusinessNews from "./pages/Business/Pages/AllBusinessNews/AllBusinessNews";
import GlobalBusiness from "./pages/Business/Pages/GlobalBusiness/GlobalBusiness";
import SingleGlobalBusiness from "./pages/Business/Pages/GlobalBusiness/SingleGlobalBusiness/SingleGlobalBusiness";
import LocalBusiness from "./pages/Business/Pages/LocalBusiness/LocalBusiness";
import SingleLocalBusiness from "./pages/Business/Pages/LocalBusiness/SingleLocalBusiness/SingleLocalBusiness";
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
import SingleMoviesNews from "./pages/Entertainment/Pages/Movies/SingleMoviesNews/SingleMoviesNews";
import Music from "./pages/Entertainment/Pages/Music/Music";
import SingleMusicNews from "./pages/Entertainment/Pages/Music/SingleMusicNews/SingleMusicNews";
import SingleTelevisionNews from "./pages/Entertainment/Pages/Television/SingleTelevisionNews.tsx/SingleTelevisionNews";
import Television from "./pages/Entertainment/Pages/Television/Television";
import Environment from "./pages/Environment/Environment";
import AllEnvironmentNews from "./pages/Environment/Pages/AllEnvironmentNews/AllEnvironmentNews";
import Climate from "./pages/Environment/Pages/Climate/Climate";
import SingleClimateNews from "./pages/Environment/Pages/Climate/SingleClimateNews/SingleClimateNews";
import Pollution from "./pages/Environment/Pages/Pollution/Pollution";
import SinglePollutionNews from "./pages/Environment/Pages/Pollution/SinglePollutionNews/SinglePollutionNews";
import Home from "./pages/Home/Home";
import News from "./pages/Home/News";
import SingleNews from "./pages/Home/SingleNews";
import International from "./pages/International/International";
import AllInternationalNews from "./pages/International/Pages/AlInternationalNews/AlInternationalNews";
import America from "./pages/International/Pages/America/America";
import SingleAmericaNews from "./pages/International/Pages/America/SingleAmerica/SingleAmericaNews";
import Asia from "./pages/International/Pages/Asia/Asia";
import Europe from "./pages/International/Pages/Europe/Europe";
import SingleEuropeNews from "./pages/International/Pages/Europe/SingleEuropeNews/SingleEuropeNews";
import LiveNews from "./pages/LiveNews/LiveNews";
import OneNews from "./pages/LiveNews/OneNews";
import Photo from "./pages/Photo/Photo";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUP/SignUp";
import AllSportsNews from "./pages/Sports/Pages/AllSportsNews/AllSportsNews";
import Cricket from "./pages/Sports/Pages/Cricket/Cricket";
import SingleCricketNews from "./pages/Sports/Pages/Cricket/SingleCricketNews/SingleCricketNews";
import Football from "./pages/Sports/Pages/Football/Football";
import SingleFootballNews from "./pages/Sports/Pages/Football/SingleFootballNews/SingleFootballNews";
import LocalSports from "./pages/Sports/Pages/LocalSports/LocalSports";
import SingleLocalSportsNews from "./pages/Sports/Pages/LocalSports/SingleLocalSportsNews/SingleLocalSportsNews";
import Sports from "./pages/Sports/Sports";

import AllTechNews from "./pages/Tech/Pages/AllTechNews/AllTechNews";
import GadgetsAndApps from "./pages/Tech/Pages/GadgetsAndApps/GadgetsAndApps";
import SingleGadgetAndAppsNews from "./pages/Tech/Pages/GadgetsAndApps/SingleGadgetAndAppsNews/SingleGadgetAndAppsNews";
import IT from "./pages/Tech/Pages/IT/IT";
import SingleITNews from "./pages/Tech/Pages/IT/SingleITNews/SingleITNews";
import SingleSocialMediaNews from "./pages/Tech/Pages/SocialMedia/SingleSocialMediaNews/SingleSocialMediaNews";
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
              <Route path="america" element={<America />} />
              <Route path="america/:slug" element={<SingleAmericaNews />} />
              <Route path="asia" element={<Asia />} />
              {/* <Route path="asia/:slug" element={<SingleAsiaNews />} /> */}
              <Route path="europe" element={<Europe />} />
              <Route path="europe/:slug" element={<SingleEuropeNews />} />
            </Route>
            {/* Bangladesh */}
            <Route path="/bangladesh" element={<BanglaDesh />}>
              <Route index element={<AllBanglaDeshNews />} />
              <Route path="accident" element={<Accident />} />
              <Route path="accident/:slug" element={<SingleAccidentNews />} />
              <Route path="crime" element={<Crime />} />
              <Route path="crime/:slug" element={<SingleCrimeNews />} />
              <Route path="politics" element={<Politics />} />
              <Route path="politics/:slug" element={<SinglePoliticsNews />} />
            </Route>
            {/* Business */}
            <Route path="/business" element={<Business />}>
              <Route index element={<AllBusinessNews />} />
              <Route path="globalbusiness" element={<GlobalBusiness />} />
              <Route
                path="globalbusiness/:slug"
                element={<SingleGlobalBusiness />}
              />
              <Route path="localbusiness" element={<LocalBusiness />} />
              <Route
                path="localbusiness/:slug"
                element={<SingleLocalBusiness />}
              />
            </Route>
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            {/* Entertainment */}
            <Route path="/entertainment" element={<Entertainment />}>
              <Route index element={<AllEntertainmentNews />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:slug" element={<SingleMoviesNews />} />
              <Route path="music" element={<Music />} />
              <Route path="music/:slug" element={<SingleMusicNews />} />
              <Route path="television" element={<Television />} />
              <Route
                path="television/:slug"
                element={<SingleTelevisionNews />}
              />
            </Route>
            {/* Environment */}
            <Route path="/environment" element={<Environment />}>
              <Route index element={<AllEnvironmentNews />} />
              <Route path="climate" element={<Climate />} />
              <Route path="climate/:slug" element={<SingleClimateNews />} />
              <Route path="pollution" element={<Pollution />} />
              <Route path="pollution/:slug" element={<SinglePollutionNews />} />
            </Route>
            {/* Photo */}
            <Route path="/photo" element={<Photo />} />
            {/* Sports */}
            <Route path="/sports" element={<Sports />}>
              <Route index element={<AllSportsNews />} />
              <Route path="cricket" element={<Cricket />} />
              <Route path="cricket/:slug" element={<SingleCricketNews />} />
              <Route path="football" element={<Football />} />
              <Route path="football/:slug" element={<SingleFootballNews />} />
              <Route path="localsports" element={<LocalSports />} />
              <Route
                path="localsports/:slug"
                element={<SingleLocalSportsNews />}
              />
            </Route>
            {/* Tech */}
            <Route path="/tech" element={<Tech />}>
              <Route index element={<AllTechNews />} />
              <Route path="gadgetandapps" element={<GadgetsAndApps />} />
              <Route
                path="gadgetandapps/:slug"
                element={<SingleGadgetAndAppsNews />}
              />
              <Route path="it" element={<IT />} />
              <Route path="it/:slug" element={<SingleITNews />} />
              <Route path="socialmedia" element={<SocialMedia />} />
              <Route
                path="socialmedia/:slug"
                element={<SingleSocialMediaNews />}
              />
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
