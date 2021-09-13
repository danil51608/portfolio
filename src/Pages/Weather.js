import { Link } from "react-router-dom";

import classes from "./Pages.module.css";

const Weather = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.back}>
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;назад
          </Link>
        </div>
        <h1>Wheather</h1>
        <p>
          Обычное приложение погоды.
          <br />
          Пользователь может изменять город. При изменении погоды, изменяется
          фон приложения. Иконки соответствуют прогнозу. Написано на React.
          <br/>
          Данные получены из openWeatherMap.
        </p>
        <br />
        <div className={classes.appLinks}>
          <a href="https://danil51608.github.io/react-weather/" target="_blank">
            <i class="fas fa-play"></i> Запустить приложение
          </a>
          <br />
          <a href="https://github.com/danil51608/react-weather" target="_blank">
            <i class="fab fa-github-square"></i> Посмотреть код
          </a>
        </div>
      </header>

      <div className={classes.text}>Главная страница</div>

      <div className={classes.container} style={{ background: "#CBD7E4" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/wheather.png" />
        </div>
      </div>
      <div className={classes.text}>Вид приложения при плохой погоде</div>
      <div className={classes.container} style={{ background: "#CBD7E4" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/bad_weather.png" />
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

export default Weather;
