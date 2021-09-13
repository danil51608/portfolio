import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <span>👋</span>
      <h1>
        Привет! Меня зовут Данил! Я - Junior Fullstack Developer. Я люблю делать
        красивые и полезные приложения, пользуясь которыми, пользователь
        получает удовольствие. У меня нет опыта работы, но я быстро и охотно
        учусь!
      </h1>
    </header>
  );
};

export default Header
