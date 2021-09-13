import { Link } from "react-router-dom";

import classes from "./Pages.module.css";

const Notes = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.back}>
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;назад
          </Link>
        </div>
        <h1>Notes</h1>
        <p>
          Данное приложение я написал довольно давно. Это приложение являлось
          одним из моих первых, написанных самостоятельно.
          <br />
          Приложение написано на чистом JS.
          <br />
          Весь код полностью оригинален.
          <br />
        </p>
        <br />
        <div className={classes.appLinks}>
          <a href="https://danil51608.github.io/MyNotes/" target="_blank">
            <i class="fas fa-play"></i> Запустить приложение
          </a>
          <br />
          <a href="https://github.com/danil51608/MyNotes" target="_blank">
            <i class="fab fa-github-square"></i> Посмотреть код
          </a>
        </div>
      </header>

      <div className={classes.text}>Главная страница<br/>
      Все заметки хранятся в localStorage. 
      </div>

      <div className={classes.container} style={{ background: "#F4BFCA" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/Notes/home.png" />
        </div>
      </div>

      <div className={classes.text}>Нажимая на +, пользователь создает новую заметку.<br/>
      Каждая новая заметка приобретает случайный цвет. </div>
      <div className={classes.container} style={{ background: "#F4BFCA" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/Notes/create.png" />
        </div>
      </div>

      <div className={classes.text}>Нажимая на карандаш, пользователь может отредактировать содержание заметки, добавить к ней теги и поменять её цвет.<br/>
      Кнопка корзины удаляет заметку.      
      </div>
      <div className={classes.container} style={{ background: "#F4BFCA" }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/Notes/edit.png" />
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

export default Notes;
