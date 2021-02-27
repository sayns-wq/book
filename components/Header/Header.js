
import classes from './Header.module.css';

function Header() {
  return (
   
  <div className = {classes.Header}>
    <div className = {classes.logo}><img src = "https://www.chitai-gorod.ru/ii/img/logo/main_logo_white.svg"></img></div>
    <div className = {classes.search}><input type = 'text' placeholder = "найти..."></input></div>
    <div className = {classes.buscket}>
      <img src = "https://www.chitai-gorod.ru/ii/img/general/basket.svg"></img>
      <h3 className = {classes.Buscket_counter}>Корзина : 0</h3>
    </div>
 </div>
  );
}

export default Header;

