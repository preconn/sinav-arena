import "./App.css";

import {
  Home as HomeIcon,
  Swords,
  BookOpen,
  Library,
  ClipboardList,
  ChartNoAxesCombined,
  Trophy,
  Medal,
  ShoppingBag,
  Gem,
  Coins,
  Bell,
  CircleUserRound,
} from "lucide-react";

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Arena from "./pages/Arena";
import Lessons from "./pages/Lessons";
import QuestionBank from "./pages/QuestionBank";
import Exams from "./pages/Exams";
import Reports from "./pages/Reports";
import Ranking from "./pages/Ranking";
import Badges from "./pages/Badges";
import Store from "./pages/Store";

import nexusLogo from "./assets/nexus-logo-sidebar.png";


function App() {

  return (

    <BrowserRouter>

      <div className="app">


        {/* SIDEBAR */}

        <aside className="sidebar">

          <img
            src={nexusLogo}
            alt="Nexus Akademi"
          />


          <ul>

            <li>
              <NavLink to="/">
                <HomeIcon />
                <span>Ana Sayfa</span>
              </NavLink>
            </li>


            <li>
              <NavLink to="/arena">
                <Swords />
                <span>Arena</span>
              </NavLink>
            </li>


            <li>
              <NavLink to="/dersler">
                <BookOpen />
                <span>Dersler</span>
              </NavLink>
            </li>


            <li>
              <NavLink to="/soru-bankasi">
                <Library />
                <span>Soru Bankası</span>
              </NavLink>
            </li>


            <li>
              <NavLink to="/denemeler">
                <ClipboardList />
                <span>Deneme Sınavları</span>
              </NavLink>
            </li>


            <li>
              <NavLink to="/raporlar">
                <ChartNoAxesCombined />
                <span>Raporlar</span>
              </NavLink>
            </li>


            <li>
              <NavLink to="/siralama">
                <Trophy />
                <span>Sıralama</span>
              </NavLink>
            </li>


            <li>
              <NavLink to="/rozetler">
                <Medal />
                <span>Rozetler</span>
              </NavLink>
            </li>


            <li>
              <NavLink to="/magaza">
                <ShoppingBag />
                <span>Mağaza</span>
              </NavLink>
            </li>

          </ul>

        </aside>


        {/* MAIN */}

        <main className="main">


          {/* NAVBAR */}

          <header className="navbar">


            <div className="arena-heading">

              <div className="arena-heading-text">

                <h1>NEXUS AKADEMİ</h1>

                <span>
                  Bilgini geliştir, seviyeni yükselt.
                </span>

              </div>

            </div>


            {/* USER STATS */}

            <div className="user-stats">


              <div className="xp-info">

                <span>XP</span>

                <strong>
                  2.450
                </strong>

              </div>


              <div className="crystal-info">

                <Gem />

                <strong>
                  125
                </strong>

              </div>


              <div className="gold-info">

                <Coins />

                <strong>
                  850
                </strong>

              </div>


              <div className="notification">

                <Bell />

                <span>
                  3
                </span>

              </div>


              <div className="profile">

                <CircleUserRound />

                <div className="profile-info">

                  <strong>
                    Selin Ateş
                  </strong>

                  <span>
                    Seviye 18
                  </span>

                </div>

              </div>


            </div>

          </header>


          {/* SAYFALAR */}

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/arena"
              element={<Arena />}
            />

            <Route
              path="/dersler"
              element={<Lessons />}
            />

            <Route
              path="/soru-bankasi"
              element={<QuestionBank />}
            />

            <Route
              path="/denemeler"
              element={<Exams />}
            />

            <Route
              path="/raporlar"
              element={<Reports />}
            />

            <Route
              path="/siralama"
              element={<Ranking />}
            />

            <Route
              path="/rozetler"
              element={<Badges />}
            />

            <Route
              path="/magaza"
              element={<Store />}
            />

          </Routes>


        </main>

      </div>

    </BrowserRouter>

  );
}


export default App;