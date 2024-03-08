import { Link } from "react-router-dom";

export const SimpleDashboard = () => {
  return (
    <div>
      <h1>Simple Dashboard</h1>
      <Link to="/">
        <p>Home</p>
      </Link>
    </div>
  );
};
