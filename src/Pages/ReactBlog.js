import { Link } from "react-router-dom";

import classes from "./Pages.module.css";

const background = '#005F83'

const ReactBlog = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.back}>
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;назад
          </Link>
        </div>
        <h1>React Blog</h1>
        <p>
          Данное приложение было написано мной для демонстрации владения React,
          Node.js, MongoDB, MaterialUI. В данном приложении пользователь, при
          условии создания аккаунта, может создавать публичные посты с
          картинками.
        <br />
        Код является полностью оригинальным и не был заимствован откуда-либо!
        </p>
        <br/>
        <div className={classes.appLinks}>
          <a href="https://danya-first-blog.herokuapp.com/" target="_blank">
            <i class="fas fa-play"></i> Запустить приложение
          </a>
          <br />
          <a href="https://github.com/danil51608/react-blog" target="_blank">
            <i class="fab fa-github-square"></i> Посмотреть код
          </a>
        </div>
      </header>

      <div className={classes.text}>Главная страница</div>

      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/homepage.png" />
        </div>
      </div>
      <div className={classes.text}>
        Для написания поста, необходима регистрация. Незарегистрированные
        пользователи могут только просматривать посты, написанные другими
        пользователями.
        <br />
        <br />
        Отличие навигации незарегистрированного пользователя от
        зарегистрированного.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/nav.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        В зависимости от наличия аккаунта пользователь может либо войти в
        существующий аккаунт, либо зарегистрировать новый.
      </div>

      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/registration.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        Для каждого поста доступен детальный просмотр. Пользователь не может
        удалять и редактировать чужие посты.
        <br />
        <br />
        Отличие поста, доступного для редактирования и удаления, от
        недоступного.
      </div>

      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/posts.jpg" />
        </div>
      </div>

      <div className={classes.text}>Вид редактирования поста</div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/editPost.png" />
        </div>
      </div>

      <div className={classes.text}>Страница создания поста</div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/createPage.png" />
        </div>
      </div>

      <div className={classes.text}>
        При желании, пользователь может настроить свой аккаунт, либо удалить
        его.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/editProfile.png" />
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

export default ReactBlog;
