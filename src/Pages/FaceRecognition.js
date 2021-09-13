import { Link } from "react-router-dom";

import classes from "./Pages.module.css";

const background = "#088F8F";

const FaceRecognition = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.back}>
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;назад
          </Link>
        </div>
        <h1>Face Recognition</h1>
        <p>
          Тестовое задание компании Tevian.
          <br />
          Приложение, используемое для загрузки фото на сервер, распознавания и
          выделения на нем людей, с получением информации об их возрасте, поле и
          национальной принадлежности.
          <br />
          Присутствует возможность сохранения распознанных людей в базу данных,
          при условии авторизации.
        </p>
        <br />
        <div className={classes.appLinks}>
          <a href="https://tevian-challenge.herokuapp.com/" target="_blank">
            <i class="fas fa-play"></i> Запустить приложение
          </a>
          <br />
          <a href="https://github.com/danil51608/tevian-challenge" target="_blank">
            <i class="fab fa-github-square"></i> Посмотреть код
          </a>
        </div>
      </header>

      <div className={classes.text}>
        При первом запуске пользователь попадает на экран логина или
        регистрации.<br/>
        Все ошибки неправильного входа в аккаунт и регистрации обрабатываются.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/login.jpg" />
        </div>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/login_error.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        При последующих запусках, пользователь будет сразу же попадать на
        страницу загрузки фото.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/home.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        Выбор фото происходит по нажатию на кнопку 'Add Image'.
        <br />
        После загрузки фото, появляется кнопка 'Detect Faces', используемая для
        запуска процесса распознавания лиц на фото. <br /> 
        Кнопка 'Add Image' сменяется кнопкой 'EditImage'.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/home.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        Через короткий промежуток времени после запуска распознавания лиц, на фото выделяются лица людей.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/facesDetected.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        Нажатие на выделяющий участок активирует настройку параметров соответствующего человека с фото, с предустановленными параметрами: возраст, пол, национальность.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/settings.png" />
        </div>
      </div>

      <div className={classes.text}>
        Фото человека и его параметры могу быть сохранены по нажатию кнопки 'Save'.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/form.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        Сохраненная пользователем информация о людях и их фото хранится в виде карточек во вкладке Persons.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/cards.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        Данные карточки можно редактировать и удалять<br/>
        На картинке показан режим редактирования.
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/editCard.jpg" />
        </div>
      </div>

      <div className={classes.text}>
        При отсутствии сохраненной информации, приложение предлагает перейти на домашнюю страницу и загрузить фото для распознавания.  
      </div>
      <div className={classes.container} style={{ background }}>
        <div className={classes.imgContainer}>
          <img src="https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/cardsempty.jpg" />
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

export default FaceRecognition;
