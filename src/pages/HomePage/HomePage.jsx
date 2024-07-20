import Navigation from "../../components/Navigation/Navigation";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.welcomeSection}>
        <h3 className={css.logo}>AquaTrack</h3>
        <div>
          <p className={css.descr}>Record daily water intake and track</p>
          <h1 className={css.water}>Water consumption tracker</h1>
          <Navigation />
        </div>
      </div>
      <div className={css.advantages}>
        <div>
          <p className={css.happyCustomers}>
            Our <span>happy</span> customers
          </p>
        </div>
        <div className={css.benefits}>
          <div className={css.habitWrapper}>
            <p className={css.habitDrive}>Habit drive</p>
            <p className={css.statistics}>View statistics</p>
          </div>
          <div>
            <p className={css.rate}>Personal rate setting</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default HomePage;
