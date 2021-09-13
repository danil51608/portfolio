import classes from "./Card.module.css";

const Card = ({ color, appName, img, stack }) => {
  return (
    <div className={classes.body} style={{ background: color }}>
        <div className={classes.imgContainer}>
          <img src={img} />
        </div>
      <div className={classes.name}>
        <h2>{appName}</h2>
        <span>{stack}-2021</span>
      </div>
    </div>
  );
};

export default Card;
