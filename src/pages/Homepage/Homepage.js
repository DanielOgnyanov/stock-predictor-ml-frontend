import "./Homepage.css"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Homepage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home">
      <section className="welcome-banner">
        <h2>Welcome back, {user?.firstName} 👋</h2>
        <p>Check the latest prices, news, and predictions.</p>
      </section>


    </div>
  );
};

export default Homepage;
