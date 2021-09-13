import { Link } from "react-router-dom";

import classes from "./Pages.module.css";

const Minesweeper = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.back}>
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;назад
          </Link>
        </div>
        <h1>Minesweeper</h1>
        <p>
          Одна из моих любимых игр - Сапёр!
          <br />
          Данное приложение было создано мной для тренировки чистого JavaScript
          и развития мышления.
          <br />
          Код игры полностью оригинальный и не был заимствован откуда-либо!
        </p>
        <br />
        <div className={classes.appLinks}>
          <a href="https://danil51608.github.io/minesweeper/" target="_blank">
            <i class="fas fa-play"></i> Запустить приложение
          </a>
          <br />
          <a href="https://github.com/danil51608/minesweeper" target="_blank">
            <i class="fab fa-github-square"></i> Посмотреть код
          </a>
        </div>
      </header>

      <div className={classes.text}>Главная страница</div>
      <div className={classes.container} style={{ background: "#93ccea" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/minesweeper/homePage.png" />
        </div>
      </div>

      <div className={classes.text}>
          Игра представляет собой классический сапёр.<br/>
          Игрок открывает ячейки без бомб и помечает флажком ячейки с бомбами.
      </div>
      <div className={classes.container} style={{ background: "#93ccea" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/minesweeper/playing.png" />
        </div>
      </div>
      <div className={classes.text}>
          При открытии ячейки с бомбой, таймер останавливается и игроку предлагается попробовать свои силы ещё раз.
      </div>
      <div className={classes.container} style={{ background: "#93ccea" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/minesweeper/lost.png" />
        </div>
      </div>

      <div className={classes.text}>
          При открытии всех ячеек, игроку показывается его время и предлагается начать игру заново.
      </div>
      <div className={classes.container} style={{ background: "#93ccea" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/minesweeper/won.png" />
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

export default Minesweeper;
