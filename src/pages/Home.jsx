import { Link } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Copyright } from "../components/Copyright/Copyright";

export const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Link to="/SimpleDashboard">
        <p>Simple - simple/clean desktop display for the day</p>
      </Link>

      <p>
        <Link to="/EYFSDashboard">
          Simple - EYFS - simple/clean desktop display for the day includes
          pictures, numbers, words, shapes etc
        </Link>
      </p>
      <Link to="/DetailedDashboard">
        <p>Detailed - more info desktop display, map, quote, weather?</p>
      </Link>

      <p>Create - Create your own custom display - STILL TO COME</p>
      <Footer />
      <Copyright />
    </div>
  );
};
