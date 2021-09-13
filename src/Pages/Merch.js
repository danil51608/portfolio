import { Link } from "react-router-dom";

import classes from "./Pages.module.css";

const Merch = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.back}>
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;назад
          </Link>
        </div>
        <h1>T-shirt customizer</h1>
        <p>
          Данное приложение было написано мной довольно давно. В приложении
          пользователь может добавлять свой текст и изображения, тем самым
          конфигурирую футболку на свой вкус и цвет.
          <br />
          Приложение написано с помощью React и Redux.
          <br />
          Код является полностью оригинальным и не был заимствован откуда-либо!
        </p>
        <br />
        <div className={classes.appLinks}>
          <a href="https://danil51608.github.io/Merch/" target="_blank">
            <i class="fas fa-play"></i> Запустить приложение
          </a>
          <br />
          <a href="https://github.com/danil51608/Merch" target="_blank">
            <i class="fab fa-github-square"></i> Посмотреть код
          </a>
        </div>
      </header>

      <div className={classes.text}>
        Стартовая страница.
        <br />
        Здесь пользователь может выбрать тип одежды, которую он хочет
        кастомизировать. Пока что кастомизировать можно только футболку.
      </div>
      <div className={classes.container} style={{ background: "#dcd0ff" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/merch/homePage.png" />
        </div>
      </div>

      <div className={classes.text}>
        Cтраница кастомизации.
        <br />
        На этой странице пользователь может выбрать цвет футболки, переднюю или
        заднюю сторону.
      </div>
      <div className={classes.container} style={{ background: "#dcd0ff" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/merch/construct.png" />
        </div>
      </div>

      <div className={classes.text}>
        С помощью бокового меню, пользователь добавляет текст и изображение на
        футболку, а также настраивает их.
        <br />
        Позиции текста и изображения задаются перетаскиванием блоков текста и
        изображения на макете.
      </div>
      <div className={classes.container} style={{ background: "#dcd0ff" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/merch/constructing.png" />
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

export default Merch;
