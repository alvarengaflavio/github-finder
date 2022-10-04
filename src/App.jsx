import "./App.css";
import { GithubProvider } from "./contexts/github/GithubContext";
import { AlertProvider } from "./contexts/alert/AlertContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { User } from "./pages/User";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Alert } from "./components/layout/Alert";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <div className="navbar__content__wrapper">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            {/* Navbar n footer doesn't need ctx hooks */}
            <GithubProvider>
              <AlertProvider>
                <Alert />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </AlertProvider>
            </GithubProvider>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
