import { Link } from "react-router-dom";

import classes from "./Pages.module.css";

const background = '#088F8F'

const Snake = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.back}>
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;назад
          </Link>
        </div>
        <h1>Snake</h1>
        <p>
          Классическая змейка
          <br />
          Весь код написан и придуман мной. Ни одна функция не была скопирована.
        </p>
        <br />
        <div className={classes.appLinks}>
          <a href="https://danil51608.github.io/SnakeGame/" target="_blank">
            <i class="fas fa-play"></i> Запустить приложение
          </a>
          <br />
          <a href="https://github.com/danil51608/SnakeGame" target="_blank">
            <i class="fab fa-github-square"></i> Посмотреть код
          </a>
        </div>
      </header>

      <div className={classes.text}>Главная страница</div>

      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/snake/play.png" />
        </div>
      </div>

      <div className={classes.text}>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Snake;
