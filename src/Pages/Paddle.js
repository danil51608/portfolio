import { Link } from "react-router-dom";

import classes from "./Pages.module.css";

const background = '#3d3939'

const Paddle = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.back}>
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;назад
          </Link>
        </div>
        <h1>Paddle</h1>
        <p>
          Классическая игра с шариком, платформой и кубиками.
          <br />
          Игрок отбивает шарик платформой, стараясь попасть по кубикам. <br/>
          При попадании шариком по кубику, кубик исчезает.
        </p>
        <br />
        <div className={classes.appLinks}>
          <a href="https://danil51608.github.io/PaddleGame/" target="_blank">
            <i class="fas fa-play"></i> Запустить приложение
          </a>
          <br />
          <a href="https://github.com/danil51608/PaddleGame" target="_blank">
            <i class="fab fa-github-square"></i> Посмотреть код
          </a>
        </div>
      </header>

      <div className={classes.text}>Главная страница</div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/paddle/play.png" />
        </div>
      </div>
      <div className={classes.text}>
          При ударе шарика об пол, все удаленные кубики появляются заново, счет игрока обнуляется. <br/> 
      </div>
      
      <div className={classes.text}>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Paddle;
