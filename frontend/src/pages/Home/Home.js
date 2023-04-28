import { useContext, useState, useEffect } from "react";
import StaffHome from "./StaffHome/StaffHome";
import CustomerHome from "./CustomerHome/CustomerHome";
import FlightSearch from "../../components/FlightSearch/FlightSearch";
import FlightStatus from "../../components/FlightStatus/FlightStatus";
import styles from "./Home.module.css";
import AuthContext from "../../context/auth-context";

const Home = () => {
  const ctx = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(ctx.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(ctx.isLoggedIn);
  }, [ctx.isLoggedIn]);

  return (
    <div className={styles.home}>
      <div className={styles.search}>
        <FlightSearch />
      </div>
      <div className={styles.search}>
        <FlightStatus />
      </div>
      {isLoggedIn.isLoggedIn &&
        (isLoggedIn.isCustomer ? <CustomerHome /> : <StaffHome />)}
    </div>
  );
};

export default Home;
